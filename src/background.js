const MENU_TEXT = {
  'zh-CN': { selection: '翻译选中文本', immersive: '翻译当前页面' },
  en: { selection: 'Translate selected text', immersive: 'Translate current page' }
};
function resolvedUiLocale(preference = 'auto') {
  if (preference === 'zh-CN' || preference === 'en') return preference;
  return /^zh(?:-|_)/i.test(chrome.i18n.getUILanguage()) ? 'zh-CN' : 'en';
}
async function createContextMenus() {
  const { uiLanguage = 'auto' } = await chrome.storage.local.get({ uiLanguage: 'auto' });
  const text = MENU_TEXT[resolvedUiLocale(uiLanguage)];
  await chrome.contextMenus.removeAll();
  chrome.contextMenus.create({ id: 'quick-translate', title: text.selection, contexts: ['selection'] });
  chrome.contextMenus.create({ id: 'immersive-translate', title: text.immersive, contexts: ['page'] });
}
chrome.runtime.onInstalled.addListener(async details => {
  await createContextMenus();
  if (details.reason === 'install') await chrome.runtime.openOptionsPage();
});
chrome.runtime.onStartup.addListener(createContextMenus);
chrome.storage.onChanged.addListener((changes, area) => { if (area === 'local' && changes.uiLanguage) createContextMenus(); });
const immersiveTabs = new Set();
const networkRequests = new Map();
const HTTP_LIMITS = { machine: 10, ai: 1 };
const httpPools = { machine: { active: 0, pending: [] }, ai: { active: 0, pending: [] } };

function acquireHttpSlot(record, requestClass) {
  const pool = httpPools[requestClass] || httpPools.machine;
  record.pool = pool;
  if (pool.active < HTTP_LIMITS[requestClass]) {
    pool.active += 1;
    return Promise.resolve();
  }
  return new Promise((resolve, reject) => {
    record.rejectWait = reject;
    pool.pending.push({ record, resolve });
  });
}

function releaseHttpSlot(record) {
  const pool = record.pool;
  if (!pool) return;
  pool.active = Math.max(0, pool.active - 1);
  while (pool.pending.length) {
    const next = pool.pending.shift();
    if (next.record.cancelled) continue;
    next.record.rejectWait = null;
    pool.active += 1;
    next.resolve();
    break;
  }
}
async function sendToAllFrames(tabId, message) {
  const frames = await chrome.webNavigation.getAllFrames({ tabId }).catch(() => null);
  if (!frames?.length) return chrome.tabs.sendMessage(tabId, message).catch(() => {});
  await Promise.allSettled(frames.map(frame => chrome.tabs.sendMessage(tabId, message, { frameId: frame.frameId })));
}
async function controlImmersive(tabId, action) {
  if (action === 'start' || action === 'resume') immersiveTabs.add(tabId);
  if (action === 'restore') immersiveTabs.delete(tabId);
  await sendToAllFrames(tabId, { type: `immersive-${action}` });
}
async function openPdfViewer(explicitUrl = '', useCurrentUrl = false) {
  const viewerBase = chrome.runtime.getURL('pdf-viewer/web/viewer.html');
  let viewerUrl = viewerBase;
  if (explicitUrl) {
    viewerUrl += `?file=${encodeURIComponent(explicitUrl)}`;
  } else {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const currentUrl = tab?.url || '';
    if (currentUrl.startsWith(viewerBase)) {
      viewerUrl = currentUrl;
    } else if (useCurrentUrl && /^(https?|file|ftp):/i.test(currentUrl)) {
      viewerUrl += `?file=${encodeURIComponent(currentUrl)}`;
    }
  }
  return chrome.tabs.create({ url: viewerUrl });
}
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (!tab?.id) return;
  const type = info.menuItemId === 'quick-translate' ? 'translate-selection' : 'immersive-translate';
  if (type === 'immersive-translate') controlImmersive(tab.id, 'start');
  else sendToAllFrames(tab.id, { type, source: 'context-menu' });
});
chrome.commands.onCommand.addListener(async command => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab?.id) return;
  if (command === 'translate-selection') {
    sendToAllFrames(tab.id, { type: 'translate-selection', source: 'shortcut' });
    return;
  }
  if (command === 'toggle-immersive') controlImmersive(tab.id, immersiveTabs.has(tab.id) ? 'restore' : 'start');
});
chrome.runtime.onMessage.addListener((message, sender) => {
  if (message?.type === 'open-pdf-viewer') return openPdfViewer(message.url || '', message.useCurrentUrl === true);
  if (message?.type === 'http-cancel') {
    const record = networkRequests.get(message.requestId);
    if (record) {
      record.cancelled = true;
      record.controller?.abort();
      record.rejectWait?.(new DOMException('Aborted', 'AbortError'));
    }
    return;
  }
  if (message?.type === 'http-request') {
    return (async () => {
      const { requestId, url, method = 'GET', headers = {}, body = null, requestClass = 'machine' } = message;
      const parsed = new URL(url);
      if (!['https:', 'http:'].includes(parsed.protocol)) throw new Error('不支持的请求协议');
      const record = { controller: null, cancelled: false, rejectWait: null };
      networkRequests.set(requestId, record);
      let acquired = false;
      let timer;
      try {
        await acquireHttpSlot(record, requestClass === 'ai' ? 'ai' : 'machine');
        acquired = true;
        if (record.cancelled) throw new DOMException('Aborted', 'AbortError');
        const controller = new AbortController();
        record.controller = controller;
        timer = setTimeout(() => controller.abort(), 45000);
        const response = await fetch(parsed.href, { method, headers, body, signal: controller.signal });
        return {
          ok: response.ok,
          status: response.status,
          statusText: response.statusText,
          headers: Object.fromEntries(response.headers.entries()),
          body: await response.text()
        };
      } finally {
        if (timer) clearTimeout(timer);
        if (acquired) releaseHttpSlot(record);
        networkRequests.delete(requestId);
      }
    })();
  }
  if (message?.type !== 'broadcast-immersive') return;
  const tabId = sender.tab?.id || message.tabId;
  if (!tabId) return;
  const action = message.action === 'toggle' ? (immersiveTabs.has(tabId) ? 'restore' : 'start') : message.action;
  return controlImmersive(tabId, action);
});
chrome.tabs.onRemoved.addListener(tabId => immersiveTabs.delete(tabId));
chrome.tabs.onUpdated.addListener((tabId, changeInfo) => { if (changeInfo.status === 'loading') immersiveTabs.delete(tabId); });
