globalThis.LiteTranslate = (() => {
  const DEFAULTS = {
    provider: 'microsoft-free',
    baseUrl: 'https://api.openai.com/v1',
    model: 'gpt-5.6-luna',
    apiKey: '',
    azureEndpoint: 'https://api.cognitive.microsofttranslator.com',
    azureKey: '',
    azureRegion: '',
    googleKey: '',
    enableSelectionTrigger: true,
    showImmersiveBall: true,
    autoImmersiveTranslate: false,
    immersiveBallPosition: null,
    touchGesture: 'disabled',
    translationTheme: 'opacity',
    uiLanguage: 'auto',
    targetLanguage: 'zh-CN',
    sourceLanguage: 'auto'
  };

  const TRANSLATION_CACHE_KEY = 'translationCacheV1';
  const CACHE_MAX_ENTRIES = 1000;
  const CACHE_TTL_MS = 30 * 24 * 60 * 60 * 1000;

  function cacheSignature(item, cfg) {
    const identity = cfg.provider === 'openai' ? `${cfg.baseUrl}|${cfg.model}` : cfg.provider === 'azure' ? cfg.azureEndpoint : cfg.provider;
    return JSON.stringify(['v1', identity, cfg.sourceLanguage, cfg.targetLanguage, item.text]);
  }

  function cacheHash(value) {
    let hash = 2166136261;
    for (let index = 0; index < value.length; index += 1) { hash ^= value.charCodeAt(index); hash = Math.imul(hash, 16777619); }
    return (hash >>> 0).toString(36);
  }

  async function loadTranslationCache() {
    const stored = await chrome.storage.local.get(TRANSLATION_CACHE_KEY);
    const cache = stored[TRANSLATION_CACHE_KEY];
    return cache && cache.version === 1 && cache.entries && typeof cache.entries === 'object' ? cache : { version: 1, entries: {} };
  }

  let cacheWriteQueue = Promise.resolve();
  async function saveTranslationCache(cache) {
    cacheWriteQueue = cacheWriteQueue.then(async () => {
      const latest = await loadTranslationCache();
      const merged = { ...latest.entries, ...cache.entries };
      const entries = Object.values(merged).sort((a, b) => (b.usedAt || b.createdAt) - (a.usedAt || a.createdAt)).slice(0, CACHE_MAX_ENTRIES);
      await chrome.storage.local.set({ [TRANSLATION_CACHE_KEY]: { version: 1, entries: Object.fromEntries(entries.map(entry => [entry.key, entry])) } });
    });
    await cacheWriteQueue;
  }

  function codes(lang) {
    const raw = String(lang || 'zh-CN');
    return { google: raw, microsoft: raw === 'zh-CN' ? 'zh-Hans' : raw === 'zh-TW' ? 'zh-Hant' : raw };
  }

  const clean = (value, fallback = '') => value === undefined || value === null || value === 'undefined' || value === 'null' ? fallback : value;

  async function settings() {
    const stored = await chrome.storage.local.get(DEFAULTS);
    const result = Object.fromEntries(Object.keys(DEFAULTS).map(key => [key, clean(stored[key], DEFAULTS[key])]));
    if (!result.provider) result.provider = DEFAULTS.provider;
    return result;
  }

  function delay(ms, signal) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(resolve, ms);
      signal?.addEventListener('abort', () => { clearTimeout(timer); reject(new DOMException('Aborted', 'AbortError')); }, { once: true });
    });
  }

  async function backgroundFetch(url, options = {}, signal) {
    if (signal?.aborted) throw new DOMException('Aborted', 'AbortError');
    const requestId = crypto.randomUUID();
    const cancel = () => chrome.runtime.sendMessage({ type: 'http-cancel', requestId }).catch(() => {});
    signal?.addEventListener('abort', cancel, { once: true });
    try {
      const result = await chrome.runtime.sendMessage({
        type: 'http-request',
        requestId,
        url,
        method: options.method || 'GET',
        headers: options.headers || {},
        body: options.body ?? null,
        requestClass: options.requestClass || 'machine'
      });
      if (signal?.aborted) throw new DOMException('Aborted', 'AbortError');
      if (!result || typeof result.status !== 'number') throw new Error('扩展后台没有返回有效响应');
      return new Response(result.body, { status: result.status, statusText: result.statusText, headers: result.headers });
    } catch (error) {
      if (signal?.aborted || error?.message?.includes('aborted')) throw new DOMException('Aborted', 'AbortError');
      throw error;
    } finally {
      signal?.removeEventListener('abort', cancel);
    }
  }

  async function request(url, options = {}, signal, retries = 2) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 45000);
    const forward = () => controller.abort();
    signal?.addEventListener('abort', forward, { once: true });
    try {
      for (let attempt = 0; ; attempt += 1) {
        const response = await backgroundFetch(url, options, controller.signal);
        if (response.status === 429 && attempt < retries) {
          const wait = Number(response.headers.get('Retry-After')) || (2 ** attempt) * 2;
          await delay(wait * 1000, controller.signal);
          continue;
        }
        if (!response.ok) throw new Error(`翻译接口 ${response.status}: ${(await response.text()).slice(0, 160)}`);
        return response;
      }
    } finally {
      clearTimeout(timer);
      signal?.removeEventListener('abort', forward);
    }
  }

  async function googleFree(text, cfg, signal) {
    const target = codes(cfg.targetLanguage).google;
    const source = cfg.sourceLanguage && cfg.sourceLanguage !== 'auto' ? codes(cfg.sourceLanguage).google : 'auto';
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&dj=1&dt=t&ie=UTF-8&sl=${encodeURIComponent(source)}&tl=${encodeURIComponent(target)}&q=${encodeURIComponent(text)}`;
    const body = await (await request(url, { method: 'GET' }, signal)).json();
    const translated = (body?.sentences || []).map(item => item.trans || '').join('').trim();
    if (!translated) throw new Error('Google 免 Key 接口没有返回译文');
    return translated;
  }

  const EDGE_UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0';
  let edgeToken = '';
  let edgeExpiry = 0;

  async function edgeAuth(signal) {
    if (edgeToken && edgeExpiry > Date.now() + 60000) return edgeToken;
    try {
      const token = (await (await request('https://edge.microsoft.com/translate/auth', { method: 'GET', headers: { 'User-Agent': EDGE_UA } }, signal)).text()).trim();
      let exp = 0;
      try {
        const payload = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
        exp = Number(JSON.parse(atob(payload)).exp) || 0;
      } catch { exp = 0; }
      edgeToken = token;
      edgeExpiry = exp ? exp * 1000 : Date.now() + 8 * 60 * 1000;
    } catch {
      edgeToken = '';
      edgeExpiry = Date.now() + 60000;
    }
    return edgeToken;
  }

  async function microsoftFreeItems(items, cfg, signal) {
    const token = await edgeAuth(signal);
    const target = codes(cfg.targetLanguage).microsoft;
    const url = `https://edge.microsoft.com/translate/translatetext?isEnterpriseClient=false&to=${encodeURIComponent(target)}`;
    const body = await (await request(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        'User-Agent': EDGE_UA
      },
      body: JSON.stringify(items.map(item => item.text))
    }, signal)).json();
    if (!Array.isArray(body) || body.length !== items.length) throw new Error('Microsoft 免 Key 接口批量结果数量不匹配');
    return items.map((item, index) => ({ id: item.id, translation: body[index]?.translations?.[0]?.text || '' }));
  }

  async function microsoftFree(text, cfg, signal) {
    return (await microsoftFreeItems([{ id: 'text', text }], cfg, signal))[0].translation;
  }

  async function ask(prompt, signal, overrideConfig = null) {
    const cfg = overrideConfig || await settings();
    if (!cfg.apiKey) throw new Error('请先在设置中填写 API Key');
    const response = await request(`${cfg.baseUrl.replace(/\/$/, '')}/chat/completions`, {
      method: 'POST',
      requestClass: 'ai',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${cfg.apiKey}` },
      body: JSON.stringify({ model: cfg.model, temperature: 0.1, messages: [{ role: 'system', content: prompt.system }, { role: 'user', content: prompt.user }], response_format: { type: 'json_object' } })
    }, signal);
    const body = await response.json();
    const text = body.choices?.[0]?.message?.content;
    if (!text) throw new Error('API 返回为空');
    const match = text.match(/[\[{][\s\S]*[\]}]/);
    try { return JSON.parse(match?.[0] || text); } catch { return { raw: text }; }
  }

  async function azureTranslate(items, cfg, signal) {
    if (!cfg.azureEndpoint || !cfg.azureKey) throw new Error('请先填写 Azure Translator Endpoint 和 Key');
    const target = codes(cfg.targetLanguage).microsoft;
    const url = `${cfg.azureEndpoint.replace(/\/$/, '')}/translate?api-version=3.0&to=${encodeURIComponent(target)}`;
    const body = await (await request(url, {
      method: 'POST',
      headers: {
        'Ocp-Apim-Subscription-Key': cfg.azureKey,
        ...(cfg.azureRegion ? { 'Ocp-Apim-Subscription-Region': cfg.azureRegion } : {}),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(items.map(item => ({ Text: item.text })))
    }, signal)).json();
    return items.map((item, index) => ({ id: item.id, translation: body?.[index]?.translations?.[0]?.text || '' }));
  }

  async function googleCloudTranslate(items, cfg, signal) {
    if (!cfg.googleKey) throw new Error('请先填写 Google Cloud Translation API Key');
    const target = codes(cfg.targetLanguage).google;
    const url = `https://translation.googleapis.com/language/translate/v2?key=${encodeURIComponent(cfg.googleKey)}`;
    const body = await (await request(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ q: items.map(item => item.text), target, format: 'text' })
    }, signal)).json();
    const list = body?.data?.translations || [];
    return items.map((item, index) => ({ id: item.id, translation: list[index]?.translatedText || '' }));
  }

  async function translateItemsUncached(items, cfg, signal) {
    const provider = cfg.provider || DEFAULTS.provider;
    if (provider === 'openai') {
      const result = await ask(translationPrompt(items, cfg), signal, cfg);
      return validateTranslations(items, result);
    }
    if (provider === 'azure') return azureTranslate(items, cfg, signal);
    if (provider === 'google') return googleCloudTranslate(items, cfg, signal);
    if (provider === 'microsoft-free') {
      try {
        return validateTranslations(items, { translations: await microsoftFreeItems(items, cfg, signal) });
      } catch (error) {
        if (signal?.aborted) throw error;
        const output = [];
        for (const item of items) output.push({ id: item.id, translation: await googleFree(item.text, cfg, signal) });
        return validateTranslations(items, { translations: output });
      }
    }
    const translate = provider === 'google-free' ? googleFree : microsoftFree;
    const alternative = provider === 'google-free' ? microsoftFree : googleFree;
    const output = [];
    for (const item of items) {
      let translation;
      try {
        translation = await translate(item.text, cfg, signal);
      } catch (error) {
        if (signal?.aborted) throw error;
        translation = await alternative(item.text, cfg, signal).catch(() => { throw error; });
      }
      output.push({ id: item.id, translation });
    }
    return validateTranslations(items, { translations: output });
  }

  async function translateItems(items, cfg = null, signal) {
    cfg ||= await settings();
    const now = Date.now();
    const cache = await loadTranslationCache();
    const results = new Map();
    const misses = [];
    let dirty = false;
    for (const item of items) {
      const signature = cacheSignature(item, cfg);
      const key = cacheHash(signature);
      const entry = cache.entries[key];
      if (entry && entry.signature === signature && now - entry.createdAt < CACHE_TTL_MS && entry.translation) {
        entry.usedAt = now;
        results.set(item.id, entry.translation);
        dirty = true;
      } else {
        if (entry) { delete cache.entries[key]; dirty = true; }
        misses.push({ ...item, cacheKey: key, cacheSignature: signature });
      }
    }
    if (misses.length) {
      const missItems = misses.map(({ id, text }) => ({ id, text }));
      const translated = validateTranslations(missItems, { translations: await translateItemsUncached(missItems, cfg, signal) });
      const stagedEntries = [];
      for (const item of translated) {
        const source = misses.find(miss => miss.id === item.id);
        if (!source) throw new Error('批量翻译结果 ID 不完整');
        results.set(item.id, item.translation);
        stagedEntries.push([source.cacheKey, { key: source.cacheKey, signature: source.cacheSignature, translation: item.translation, createdAt: now, usedAt: now }]);
      }
      stagedEntries.forEach(([key, entry]) => { cache.entries[key] = entry; });
      dirty = true;
    }
    const validated = validateTranslations(items, { translations: items.map(item => ({ id: item.id, translation: results.get(item.id) || '' })) });
    if (dirty) await saveTranslationCache(cache);
    return validated;
  }

  function translationPrompt(items, cfg) {
    const system = 'Translate each item independently. Return JSON object {"translations":[{"id":string,"translation":string}]}. Preserve every id exactly, return no extra items, no markdown.';
    return { system, user: JSON.stringify({ source_language: cfg.sourceLanguage, target_language: cfg.targetLanguage, items }) };
  }

  function validateTranslations(items, result) {
    const received = result?.translations;
    if (!Array.isArray(received) || received.length !== items.length) throw new Error('批量翻译结果数量不匹配');
    const expected = new Set(items.map(item => item.id));
    const actual = new Set(received.map(item => item?.id));
    if (actual.size !== items.length || [...expected].some(id => !actual.has(id)) || received.some(item => typeof item?.translation !== 'string' || !item.translation.trim())) throw new Error('批量翻译结果 ID 不完整');
    return received;
  }

  return { settings, ask, translateItems, translationPrompt, validateTranslations };
})();
