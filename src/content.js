const { settings, translateItems, validateTranslations } = globalThis.LiteTranslate;
const IS_TOP_FRAME = window === window.top;
let siteRule = globalThis.LiteTranslateSiteRules?.current?.() || null;
const i18n = globalThis.LiteTranslateI18n;
const localeReady = i18n.init();
const t = (key, values) => i18n.t(key, values);

const root = document.createElement('div');
root.id = 'lt-root';
root.hidden = true;
document.documentElement.append(root);

const trigger = document.createElement('button');
trigger.id = 'lt-trigger';
trigger.type = 'button';
const triggerIcon = document.createElement('img');
triggerIcon.src = chrome.runtime.getURL('icons/icon.svg');
triggerIcon.alt = '';
triggerIcon.draggable = false;
trigger.append(triggerIcon);
trigger.hidden = true;
document.documentElement.append(trigger);

let selectedText = '';
let panelMode = '';
let selectionRequest = null;
let selectionVersion = 0;
let immersiveState = null;
let hoverTimer = null;
let triggerTimer = null;
let triggerAnimationTimer = null;
let panelAnimationTimer = null;
let triggerVersion = 0;
let selectionPosition = null;
let selectionAnchor = null;
let panelDrag = null;
let immersiveStatusEnabled = false;
const HOVER_INTENT_MS = 500;
const SCROLL_IDLE_MS = 280;
let ruleStyle = null;

const esc = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);

function placeSelectionPanel() {
  const width = Math.min(380, window.innerWidth - 16);
  root.style.width = `${width}px`;
  if (selectionPosition) {
    const top = Math.min(window.innerHeight - 80, Math.max(8, selectionPosition.top));
    root.style.left = `${Math.min(window.innerWidth - width - 8, Math.max(8, selectionPosition.left))}px`;
    root.style.top = `${top}px`;
    root.style.setProperty('--lt-panel-top', `${top}px`);
    root.style.right = 'auto';
    return;
  }
  const rect = selectionAnchor || trigger.getBoundingClientRect();
  const left = rect.left > window.innerWidth / 2 ? rect.right - width : rect.left;
  root.style.left = `${Math.min(window.innerWidth - width - 8, Math.max(8, left))}px`;
  const top = Math.min(window.innerHeight - 260, Math.max(8, rect.bottom + 7));
  root.style.top = `${top}px`;
  root.style.setProperty('--lt-panel-top', `${top}px`);
  root.style.right = 'auto';
}

function showSelection(html) {
  const firstOpen = panelMode !== 'selection' || root.hidden;
  const entering = root.classList.contains('lt-panel-enter');
  if (panelMode !== 'selection' || !selectionAnchor) {
    const rect = trigger.getBoundingClientRect();
    selectionAnchor = { left: rect.left, right: rect.right, top: rect.top, bottom: rect.bottom };
  }
  panelMode = 'selection';
  root.className = `lt-selection-root${entering ? ' lt-panel-enter' : ''}`;
  root.innerHTML = `<div class="lt-card">${html}</div>`;
  placeSelectionPanel();
  hideTrigger();
  root.hidden = false;
  if (firstOpen) {
    clearTimeout(panelAnimationTimer);
    root.classList.remove('lt-panel-enter');
    void root.offsetWidth;
    root.classList.add('lt-panel-enter');
    panelAnimationTimer = setTimeout(() => {
      root.classList.remove('lt-panel-enter');
      panelAnimationTimer = null;
    }, 220);
  }
  requestAnimationFrame(() => {
    const original = root.querySelector('[data-original]');
    const toggle = root.querySelector('[data-toggle-original]');
    if (original && toggle) toggle.hidden = original.scrollHeight <= original.clientHeight + 1;
  });
}

function originalBlock(text) {
  return `<div class="lt-original-wrap"><div class="lt-original-label">${t('original')}</div><div class="lt-original" data-original>${esc(text)}</div><button class="lt-original-toggle" data-toggle-original hidden>${t('expandOriginal')}</button></div>`;
}

function selectionCard(title, text, body) {
  return `<div class="lt-head" data-drag-handle><b>${title}</b><button data-close aria-label="${t('close')}">×</button></div><div class="lt-card-body">${originalBlock(text)}${body}</div>`;
}

function showImmersive(html, force = false) {
  if (!IS_TOP_FRAME) return;
  if (!immersiveStatusEnabled && !force) return;
  panelMode = 'immersive';
  root.className = 'lt-immersive-control-root';
  root.style.width = 'auto';
  root.style.left = 'auto';
  root.style.right = '18px';
  root.style.top = '18px';
  root.innerHTML = `<div class="lt-card lt-control-card">${html}</div>`;
  root.hidden = false;
}

function closeSelection() {
  triggerVersion += 1;
  clearTimeout(triggerTimer);
  triggerTimer = null;
  selectionVersion += 1;
  selectionRequest?.abort();
  selectionRequest = null;
  selectionAnchor = null;
  clearTimeout(panelAnimationTimer);
  panelAnimationTimer = null;
  if (panelMode === 'selection') {
    root.replaceChildren();
    root.hidden = true;
    root.className = '';
    panelMode = '';
  }
  hideTrigger();
}

function showTrigger() {
  clearTimeout(triggerAnimationTimer);
  trigger.hidden = false;
  trigger.classList.remove('lt-trigger-exit');
  trigger.classList.add('lt-trigger-enter');
  triggerAnimationTimer = setTimeout(() => {
    trigger.classList.remove('lt-trigger-enter');
    triggerAnimationTimer = null;
  }, 180);
}

function hideTrigger({ immediate = false } = {}) {
  clearTimeout(hoverTimer);
  clearTimeout(triggerAnimationTimer);
  trigger.classList.remove('lt-trigger-enter');
  if (trigger.hidden || immediate) {
    trigger.classList.remove('lt-trigger-exit');
    trigger.hidden = true;
    triggerAnimationTimer = null;
    return;
  }
  trigger.classList.add('lt-trigger-exit');
  triggerAnimationTimer = setTimeout(() => {
    trigger.hidden = true;
    trigger.classList.remove('lt-trigger-exit');
    triggerAnimationTimer = null;
  }, 150);
}

function placeTrigger(pointer) {
  selectionPosition = null;
  selectionAnchor = null;
  const x = Number.isFinite(pointer?.clientX) ? pointer.clientX + 10 : window.innerWidth / 2;
  const y = Number.isFinite(pointer?.clientY) ? pointer.clientY + 10 : window.innerHeight / 2;
  trigger.style.left = `${Math.min(window.innerWidth - 34, Math.max(4, x))}px`;
  trigger.style.top = `${Math.min(window.innerHeight - 34, Math.max(4, y))}px`;
  showTrigger();
}

function liveSelectionText() {
  const selection = document.getSelection();
  if (!selection || selection.isCollapsed || selection.rangeCount === 0) return '';
  return selection.toString().trim();
}

function scheduleTrigger(pointer) {
  const version = ++triggerVersion;
  clearTimeout(triggerTimer);
  const position = pointer && { clientX: pointer.clientX, clientY: pointer.clientY };
  triggerTimer = setTimeout(() => {
    triggerTimer = null;
    if (version !== triggerVersion) return;
    const text = liveSelectionText();
    if (!text) {
      selectedText = '';
      hideTrigger();
      return;
    }
    selectedText = text;
    placeTrigger(position);
  }, 0);
}

async function selectionTranslate(text = selectedText) {
  await localeReady;
  text = text.trim();
  if (!text) return;
  selectedText = text;
  const version = ++selectionVersion;
  selectionRequest?.abort();
  selectionRequest = new AbortController();
  showSelection(selectionCard(t('translate'), text, '<div class="lt-loading"></div>'));
  try {
    const cfg = await settings();
    const translation = (await translateItems([{ id: 'q', text }], cfg, selectionRequest.signal))[0]?.translation || '';
    if (version !== selectionVersion) return;
    const body = `<div class="lt-selection-result">${esc(translation || t('noResult'))}</div>`;
    showSelection(selectionCard(t('translate'), text, body));
  } catch (error) {
    if (version !== selectionVersion || error.name === 'AbortError') return;
    showSelection(selectionCard(t('translationFailed'), text, `<div class="lt-muted">${esc(error.message)}</div><div class="lt-muted">${t('switchServiceHint')}</div>`));
  }
}

function visible(element) {
  const style = getComputedStyle(element);
  const rect = element.getBoundingClientRect();
  return style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 0 && rect.height > 0;
}

function applyRuleStyles(rule) {
  ruleStyle?.remove();
  ruleStyle = null;
  if (!rule) return;
  const declarations = Object.entries(rule.globalStyles || {}).map(([selector, style]) => `${selector}{${style}}`);
  const css = [...(rule.injectedCss || []), ...declarations].join('\n');
  if (!css) return;
  ruleStyle = document.createElement('style');
  ruleStyle.dataset.ltRuleStyle = rule.id || 'site';
  ruleStyle.textContent = css;
  document.documentElement.append(ruleStyle);
}

function refreshSiteRule() {
  const next = globalThis.LiteTranslateSiteRules?.current?.() || null;
  const changed = next?.id !== siteRule?.id || next?.selectors?.join('\n') !== siteRule?.selectors?.join('\n');
  siteRule = next;
  if (changed || !ruleStyle) applyRuleStyles(siteRule);
  return siteRule;
}

applyRuleStyles(siteRule);

function contentRoots() {
  const selectors = [...(siteRule?.roots || []), 'article .markdown-body', '.markdown-body', 'article', '[role="main"]', 'main'];
  const score = element => Math.min(element.innerText?.length || 0, 50000) + element.querySelectorAll('p,li,h1,h2,h3,blockquote').length * 80;
  if (siteRule?.multipleRoots) {
    const roots = [...new Set((siteRule.roots || []).flatMap(selector => [...document.querySelectorAll(selector)]))]
      .filter(element => visible(element) && !element.closest('nav,header,footer'));
    if (roots.length) return roots;
  }
  for (const selector of selectors) {
    const candidates = [...document.querySelectorAll(selector)]
      .filter(element => visible(element) && !element.closest('nav,aside,header,footer'))
      .sort((a, b) => score(b) - score(a));
    if (candidates[0]) return [candidates[0]];
  }
  return [document.body];
}

function mostlyTargetLanguage(text, targetLanguage) {
  if (!/中文|zh/i.test(targetLanguage)) return false;
  const compact = text.replace(/\s/g, '');
  if (!compact) return true;
  return (compact.match(/[\u3400-\u9fff]/g)?.length || 0) / compact.length > 0.45;
}

function isPromotedContent(element) {
  const card = element.closest('shreddit-ad-post,[promoted],[data-promoted="true"],[data-testid="ad-post"],article,[id^="t3_"]');
  if (!card) return false;
  if (card.matches('shreddit-ad-post,[promoted],[data-promoted="true"],[data-testid="ad-post"]')) return true;
  if (card.querySelector('a[href*="alb.reddit.com"]')) return true;
  if (siteRule?.id !== 'reddit') return false;
  return [...card.querySelectorAll('a,span')].some(node => /^(广告|推广|promoted|sponsored)$/i.test(node.textContent?.trim() || ''));
}

const IMMERSIVE_BLOCK_SELECTORS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'li', 'blockquote', 'figcaption', 'td', 'th', 'dd', 'dt'];

function ruleValues(rule, key) {
  const value = rule?.[key];
  return Array.isArray(value) ? value : [];
}

function immersiveRuleCandidates(rule) {
  const selectors = [...ruleValues(rule, 'selectors'), ...ruleValues(rule, 'additionalSelectors')];
  const selected = selectors.length
    ? [...new Set(selectors.flatMap(selector => { try { return [...document.querySelectorAll(selector)]; } catch { return []; } }))]
    : [document.body];
  const atomicSelector = ruleValues(rule, 'atomicBlockSelectors').join(',');
  const atomicTags = new Set(ruleValues(rule, 'atomicBlockTags'));
  const blockSelector = [...IMMERSIVE_BLOCK_SELECTORS, ...ruleValues(rule, 'extraBlockSelectors')].join(',');
  const candidates = [];
  for (const region of selected) {
    if ((atomicSelector && region.matches(atomicSelector)) || atomicTags.has(region.tagName)) {
      candidates.push(region);
      continue;
    }
    const descendants = [...region.querySelectorAll(blockSelector)];
    if (region.matches(blockSelector) || !descendants.length) candidates.push(region);
    else candidates.push(...descendants);
  }
  return [...new Set(candidates)];
}

function immersiveRuleBlocks(cfg, rule) {
  const excludeSelector = [
    ...ruleValues(rule, 'excludeSelectors'),
    ...ruleValues(rule, 'additionalExcludeSelectors'),
    ...ruleValues(rule, 'stayOriginalSelectors'),
    ...ruleValues(rule, 'additionalStayOriginalSelectors')
  ].join(',');
  const stayOriginalTags = new Set(ruleValues(rule, 'stayOriginalTags'));
  const excludeTags = new Set(ruleValues(rule, 'excludeTags'));
  const excludeRegexes = ruleValues(rule, 'excludeSelectorsRegexes').map(value => { try { return new RegExp(value); } catch { return null; } }).filter(Boolean);
  const candidates = immersiveRuleCandidates(rule);
  const candidateSet = new Set(candidates);
  const nodes = candidates.filter(element => {
    if (!visible(element) || element.dataset.ltTranslated === '1' || element.dataset.ltLoading === '1') return false;
    if (element.closest('#lt-root,#lt-trigger,[aria-hidden="true"]')) return false;
    if (stayOriginalTags.has(element.tagName) || excludeTags.has(element.tagName)) return false;
    if (excludeSelector && element.closest(excludeSelector)) return false;
    if (excludeRegexes.some(regex => regex.test(element.className || '') || regex.test(element.id || ''))) return false;
    if ([...element.querySelectorAll('*')].some(child => candidateSet.has(child) && (child.innerText?.trim().length || 0) >= 2)) return false;
    const text = element.innerText?.replace(/\s+/g, ' ').trim() || '';
    const minimum = /^H[1-6]$/.test(element.tagName) ? 3 : (rule.paragraphMinTextCount ?? rule.blockMinTextCount ?? 8);
    if (text.length < minimum || text.length > 12000 || mostlyTargetLanguage(text, cfg.targetLanguage)) return false;
    const words = text.match(/[\p{L}\p{N}]+/gu)?.length || 0;
    return words >= (rule.paragraphMinWordCount ?? rule.blockMinWordCount ?? 1);
  }).slice(0, 240);
  return orderBlocksByViewport(nodes);
}

function orderBlocksByViewport(nodes) {
  const visibleNow = [];
  const below = [];
  const above = [];
  for (const node of nodes) {
    const rect = node.getBoundingClientRect();
    if (rect.bottom > 0 && rect.top < window.innerHeight) visibleNow.push(node);
    else if (rect.top >= window.innerHeight) below.push(node);
    else above.push(node);
  }
  return [...visibleNow, ...below, ...above.reverse()];
}

function blocks(cfg) {
  refreshSiteRule();
  if (siteRule?.ruleEngine === 'immersive-translate') return immersiveRuleBlocks(cfg, siteRule);
  const scopes = contentRoots();
  const genericSelectors = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'li', 'blockquote', 'figcaption', 'td', 'th', 'dd', 'dt'];
  const blockSelector = [...new Set([...(siteRule?.selectors || []), ...(siteRule?.strictSelectors ? [] : genericSelectors)])].join(',');
  const siteExcludes = siteRule?.excludes?.join(',') || '';
  const candidates = [...new Set(scopes.flatMap(scope => [...scope.querySelectorAll(blockSelector), ...(scope.matches?.(blockSelector) ? [scope] : [])]))];
  const candidateSet = new Set(candidates);
  const nodes = candidates.filter(element => {
    if (!visible(element) || element.dataset.ltTranslated === '1' || element.dataset.ltLoading === '1') return false;
    if (isPromotedContent(element)) return false;
    const genericExcludes = ['#lt-root', '#lt-trigger', 'footer', 'form', 'dialog', 'pre', 'code', 'textarea', 'input', 'select', 'button', '[aria-hidden="true"]', '.highlight', '.blob-code'];
    if (!siteRule?.allowNav) genericExcludes.push('nav');
    if (!siteRule?.allowHeader) genericExcludes.push('header');
    if (!siteRule?.allowAside) genericExcludes.push('aside');
    if (element.closest(genericExcludes.join(','))) return false;
    if (siteExcludes && element.closest(siteExcludes)) return false;
    if ([...element.querySelectorAll(blockSelector)].some(child => child !== element && candidateSet.has(child) && (child.innerText?.trim().length || 0) >= 2)) return false;
    const text = element.innerText?.replace(/\s+/g, ' ').trim() || '';
    const minimum = /^H[1-6]$/.test(element.tagName) ? 3 : (siteRule?.paragraphMinTextCount ?? 8);
    if (text.length < minimum || text.length > 12000 || mostlyTargetLanguage(text, cfg.targetLanguage)) return false;
    const words = text.match(/[\p{L}\p{N}]+/gu)?.length || 0;
    if (words < (siteRule?.paragraphMinWordCount ?? 1)) return false;
    const linkText = [...element.querySelectorAll('a')].reduce((sum, link) => sum + (link.innerText?.length || 0), 0);
    return !(linkText / text.length > 0.92 && element.querySelectorAll('a').length > 1);
  }).slice(0, 240);
  return orderBlocksByViewport(nodes);
}

function applyTranslationTheme(node, theme = 'opacity') {
  node.dataset.ltTheme = theme;
}

function addTranslation(source, translation, targetLanguage, theme) {
  const separator = source.innerText.trim().length >= 20 ? document.createElement('br') : document.createTextNode(' ');
  if (separator.nodeType === Node.ELEMENT_NODE) separator.className = 'lt-translation-break';
  const node = document.createElement('font');
  node.className = 'lt-translated lt-immersive-translation';
  node.lang = /中文|zh/i.test(targetLanguage) ? 'zh-CN' : '';
  node.textContent = translation;
  applyTranslationTheme(node, theme);
  source.dataset.ltTranslated = '1';
  source.append(separator, node);
  return { node, separator };
}

function addLoadingPlaceholder(source) {
  const separator = source.innerText.trim().length >= 20 ? document.createElement('br') : document.createTextNode(' ');
  if (separator.nodeType === Node.ELEMENT_NODE) separator.className = 'lt-translation-break lt-loading-separator';
  const node = document.createElement('span');
  node.className = 'lt-immersive-loading';
  node.setAttribute('aria-label', t('translating'));
  node.innerHTML = '<i></i><i></i><i></i>';
  source.dataset.ltLoading = '1';
  source.append(separator, node);
  return { source, node, separator };
}

function removeLoadingPlaceholder(loading) {
  if (!loading) return;
  loading.node.remove();
  loading.separator.remove();
  delete loading.source.dataset.ltLoading;
}

function replaceLoadingWithTranslation(loading, translation, targetLanguage, theme) {
  if (!loading?.source.isConnected || !loading.node.isConnected) return null;
  const node = document.createElement('font');
  node.className = 'lt-translated lt-immersive-translation';
  node.lang = /中文|zh/i.test(targetLanguage) ? 'zh-CN' : '';
  node.textContent = translation;
  applyTranslationTheme(node, theme);
  loading.source.dataset.ltTranslated = '1';
  delete loading.source.dataset.ltLoading;
  loading.node.replaceWith(node);
  return { source: loading.source, node, separator: loading.separator };
}

function restoreImmersive() {
  if (immersiveState) immersiveState.active = false;
  immersiveState?.observer?.disconnect();
  immersiveState?.dynamicObserver?.disconnect();
  clearTimeout(immersiveState?.flushTimer);
  clearTimeout(immersiveState?.scrollTimer);
  clearTimeout(immersiveState?.dynamicTimer);
  if (immersiveState?.scrollHandler) window.removeEventListener('scroll', immersiveState.scrollHandler);
  immersiveState?.controller?.abort();
  immersiveState?.loading?.forEach(removeLoadingPlaceholder);
  immersiveState?.loading?.clear();
  immersiveState?.inserted?.forEach(({ node, separator, source }) => {
    node.remove();
    separator.remove();
    delete source.dataset.ltTranslated;
  });
  immersiveState = null;
  if (panelMode === 'immersive') {
    root.replaceChildren();
    root.hidden = true;
    root.className = '';
    panelMode = '';
  }
}

function updateImmersiveStatus(state, label = t('continueOnScroll')) {
  if (immersiveState !== state || panelMode !== 'immersive') return;
  const progress = root.querySelector('[data-progress]');
  const title = root.querySelector('[data-immersive-title]');
  if (progress) progress.textContent = `${state.done.size} / ${state.items.length}`;
  if (title) title.textContent = state.done.size >= state.items.length ? t('translationComplete') : label;
}

function observeRemaining(state) {
  state.observer?.disconnect();
  state.observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting || entry.intersectionRatio < 0.1) continue;
      state.observer.unobserve(entry.target);
      const item = state.itemByNode.get(entry.target);
      if (item && !state.done.has(item.id) && !state.queuedIds.has(item.id)) {
        state.pending.push(item);
        state.queuedIds.add(item.id);
      }
    }
    scheduleVisibleBatch(state);
  }, { threshold: 0.1, rootMargin: '0px 0px 100% 0px' });
  for (const item of state.items) {
    if (state.done.has(item.id) || state.queuedIds.has(item.id)) continue;
    if (inPrefetchRange(item.source)) {
      state.pending.push(item);
      state.queuedIds.add(item.id);
    } else {
      state.observer.observe(item.source);
    }
  }
  if (!state.pending.length && !state.done.size && window.scrollY <= 1) {
    const candidates = state.items
      .filter(item => !state.queuedIds.has(item.id) && item.source.isConnected && item.source.getBoundingClientRect().bottom > 0)
      .sort((a, b) => a.source.getBoundingClientRect().top - b.source.getBoundingClientRect().top);
    const first = candidates[0];
    if (first) {
      const start = Math.max(0, first.source.getBoundingClientRect().top);
      const end = start + window.innerHeight;
      for (const item of candidates) {
        const top = item.source.getBoundingClientRect().top;
        if (top < start || top >= end) continue;
        state.observer.unobserve(item.source);
        state.pending.push(item);
        state.queuedIds.add(item.id);
      }
    }
  }
  scheduleVisibleBatch(state);
}

function scheduleVisibleBatch(state) {
  if (!state.active || !state.scrollIdle) return;
  showPendingLoading(state);
  if (state.inFlight >= state.concurrencyLimit || state.flushTimer) return;
  if (!state.pending.length) return;
  state.flushTimer = setTimeout(() => {
    state.flushTimer = null;
    while (state.pending.length && state.inFlight < state.concurrencyLimit) flushVisibleBatch(state);
  }, 80);
}

function showPendingLoading(state) {
  for (const item of state.pending) {
    if (state.done.has(item.id) || state.loading.has(item.id) || !item.source.isConnected) continue;
    const rect = item.source.getBoundingClientRect();
    if (rect.bottom > 0 && rect.top < window.innerHeight) state.loading.set(item.id, addLoadingPlaceholder(item.source));
  }
}

function inPrefetchRange(source) {
  const rect = source.getBoundingClientRect();
  return rect.bottom > 0 && rect.top < window.innerHeight * 2;
}

function prunePendingToPrefetchRange(state) {
  const retained = [];
  for (const item of state.pending) {
    if (inPrefetchRange(item.source)) retained.push(item);
    else {
      removeLoadingPlaceholder(state.loading.get(item.id));
      state.loading.delete(item.id);
      state.queuedIds.delete(item.id);
      if (!state.done.has(item.id) && item.source.isConnected) state.observer?.observe(item.source);
    }
  }
  state.pending = retained;
}

function registerDynamicBlocks(state) {
  if (immersiveState !== state || !state.active) return;
  let added = 0;
  for (const source of blocks(state.cfg)) {
    if (state.itemByNode.has(source)) continue;
    const item = { id: `p-${state.nextId++}`, source, text: source.innerText.replace(/\s+/g, ' ').trim() };
    state.items.push(item);
    state.itemByNode.set(source, item);
    if (inPrefetchRange(source) && state.scrollIdle) {
      state.pending.push(item);
      state.queuedIds.add(item.id);
    } else {
      state.observer?.observe(source);
    }
    added += 1;
  }
  if (added) {
    updateImmersiveStatus(state, t('newContentFound'));
    scheduleVisibleBatch(state);
  }
}

function isExtensionMutation(record) {
  const nodes = [...record.addedNodes, ...record.removedNodes];
  return nodes.length > 0 && nodes.every(node => {
    if (node.nodeType === Node.TEXT_NODE) return !node.textContent.trim();
    if (node.nodeType !== Node.ELEMENT_NODE) return true;
    return node.matches('#lt-root,#lt-trigger,.lt-immersive-translation,.lt-immersive-loading,.lt-translation-break') || Boolean(node.closest?.('#lt-root'));
  });
}

function isIgnoredSiteMutation(record) {
  const selectors = siteRule?.mutationExcludeSelectors || siteRule?.mutationExcludes || [];
  if (!selectors.length) return false;
  const target = record.target?.nodeType === Node.ELEMENT_NODE ? record.target : record.target?.parentElement;
  return Boolean(target && selectors.some(selector => target.matches?.(selector) || target.closest?.(selector)));
}

function observeDynamicContent(state) {
  state.dynamicObserver = new MutationObserver(records => {
    if (!state.active || records.every(record => isExtensionMutation(record) || isIgnoredSiteMutation(record))) return;
    clearTimeout(state.dynamicTimer);
    state.dynamicTimer = setTimeout(() => registerDynamicBlocks(state), 120);
  });
  state.dynamicObserver.observe(document.documentElement, { childList: true, subtree: true });
}

async function flushVisibleBatch(state) {
  if (immersiveState !== state || !state.active || state.inFlight >= state.concurrencyLimit || !state.pending.length) return;
  const batch = [];
  let chars = 0;
  while (state.pending.length && batch.length < 8) {
    const next = state.pending[0];
    if (batch.length && chars + next.text.length > 5000) break;
    batch.push(state.pending.shift());
    chars += next.text.length;
  }
  const batchEpoch = state.scrollEpoch;
  for (const item of batch) {
    const rect = item.source.getBoundingClientRect();
    const inViewport = rect.bottom > 0 && rect.top < window.innerHeight;
    if (inViewport && !state.loading.has(item.id) && item.source.isConnected) state.loading.set(item.id, addLoadingPlaceholder(item.source));
  }
  state.inFlight += 1;
  updateImmersiveStatus(state, t('translating'));
  try {
    const translated = await translateItems(batch.map(({ id, text }) => ({ id, text })), state.cfg, state.controller.signal);
    const map = new Map(validateTranslations(batch, { translations: translated }).map(item => [item.id, item.translation]));
    for (const item of batch) {
      if (!state.active) break;
      const value = map.get(item.id);
      const movedAbove = item.source.getBoundingClientRect().bottom <= 0;
      const staleWhileScrolling = batchEpoch !== state.scrollEpoch || !state.scrollIdle;
      const loading = state.loading.get(item.id);
      state.loading.delete(item.id);
      if (value && item.source.isConnected && !movedAbove && !staleWhileScrolling) {
        const inserted = replaceLoadingWithTranslation(loading, value, state.cfg.targetLanguage, state.cfg.translationTheme) || addTranslation(item.source, value, state.cfg.targetLanguage, state.cfg.translationTheme);
        inserted.node.dataset.ltOrder = String(state.inserted.length + 1);
        state.inserted.push({ source: item.source, ...inserted });
        state.done.add(item.id);
        state.loadingObserver?.unobserve(item.source);
      } else if (!state.done.has(item.id) && item.source.isConnected) {
        removeLoadingPlaceholder(loading);
        state.queuedIds.delete(item.id);
        state.observer?.observe(item.source);
      } else {
        removeLoadingPlaceholder(loading);
      }
    }
  } catch (error) {
    for (const item of batch) {
      removeLoadingPlaceholder(state.loading.get(item.id));
      state.loading.delete(item.id);
      state.queuedIds.delete(item.id);
    }
    if (error.name !== 'AbortError' && state.active) {
      state.active = false;
      state.observer.disconnect();
      showImmersive(`<div class="lt-head"><b>${t('translationFailed')}</b><button data-dismiss>×</button></div><div class="lt-muted">${esc(error.message)}</div><div class="lt-control-actions"><button data-restore class="lt-secondary">${t('exitAndClear')}</button><button data-settings class="lt-quiet">${t('settings')}</button></div>`, true);
    }
  } finally {
    state.inFlight -= 1;
    if (state.active) {
      updateImmersiveStatus(state);
      scheduleVisibleBatch(state);
    }
  }
}

function pauseImmersive() {
  const state = immersiveState;
  if (!state) return;
  state.active = false;
  state.observer?.disconnect();
  clearTimeout(state.flushTimer);
  clearTimeout(state.scrollTimer);
  window.removeEventListener('scroll', state.scrollHandler);
  state.flushTimer = null;
  state.controller.abort();
  state.loading.forEach(removeLoadingPlaceholder);
  state.loading.clear();
  showImmersive(`<div class="lt-control-title"><b data-immersive-title>${t('paused')}</b><span data-progress>${state.done.size} / ${state.items.length}</span></div><div class="lt-control-actions"><button data-resume>${t('resume')}</button><button data-restore class="lt-secondary">${t('exitTranslation')}</button><button data-settings class="lt-quiet">${t('settings')}</button></div>`);
}

function resumeImmersive() {
  const state = immersiveState;
  if (!state || state.active) return;
  state.active = true;
  state.controller = new AbortController();
  state.pending.length = 0;
  state.queuedIds = new Set(state.done);
  state.scrollIdle = true;
  window.addEventListener('scroll', state.scrollHandler, { passive: true });
  showImmersive(`<div class="lt-control-title"><b data-immersive-title>${t('continueOnScroll')}</b><span data-progress>${state.done.size} / ${state.items.length}</span></div><div class="lt-control-actions"><button data-stop>${t('pause')}</button><button data-restore class="lt-secondary">${t('exitTranslation')}</button><button data-settings class="lt-quiet">${t('settings')}</button></div>`);
  observeRemaining(state);
}

async function immersive() {
  await localeReady;
  if (immersiveState) return;
  const cfg = await settings();
  immersiveStatusEnabled = cfg.showImmersiveStatus === true;
  const nodes = blocks(cfg);
  if (!nodes.length) {
    showImmersive(`<div class="lt-head"><b>${t('noContent')}</b><button data-dismiss>×</button></div>`, true);
    return;
  }
  const items = nodes.map((source, index) => ({ id: `p-${index}`, source, text: source.innerText.replace(/\s+/g, ' ').trim() }));
  const state = {
    active: true,
    inFlight: 0,
    concurrencyLimit: cfg.provider === 'openai' ? 1 : 10,
    controller: new AbortController(),
    cfg,
    items,
    itemByNode: new Map(items.map(item => [item.source, item])),
    inserted: [],
    loading: new Map(),
    done: new Set(),
    pending: [],
    queuedIds: new Set(),
    observer: null,
    dynamicObserver: null,
    flushTimer: null,
    scrollTimer: null,
    dynamicTimer: null,
    scrollIdle: true,
    scrollHandler: null,
    scrollEpoch: 0,
    nextId: items.length
  };
  state.scrollHandler = () => {
    if (!state.active) return;
    state.scrollEpoch += 1;
    state.scrollIdle = false;
    clearTimeout(state.flushTimer);
    state.flushTimer = null;
    clearTimeout(state.scrollTimer);
    state.scrollTimer = setTimeout(() => {
      state.scrollIdle = true;
      prunePendingToPrefetchRange(state);
      scheduleVisibleBatch(state);
    }, SCROLL_IDLE_MS);
  };
  immersiveState = state;
  showImmersive(`<div class="lt-control-title"><b data-immersive-title>${t('continueOnScroll')}</b><span data-progress>0 / ${items.length}</span></div><div class="lt-control-actions"><button data-stop>${t('pause')}</button><button data-restore class="lt-secondary">${t('exitTranslation')}</button><button data-settings class="lt-quiet">${t('settings')}</button></div>`);
  window.addEventListener('scroll', state.scrollHandler, { passive: true });
  observeRemaining(state);
  observeDynamicContent(state);
}

function toggleImmersive() {
  if (IS_TOP_FRAME) chrome.runtime.sendMessage({ type: 'broadcast-immersive', action: 'toggle' });
}

document.addEventListener('mouseup', event => {
  if (event.target.closest?.('#lt-root,#lt-trigger')) return;
  const text = liveSelectionText();
  const selectionPanelVisible = panelMode === 'selection' && !root.hidden;
  if (!text) {
    triggerVersion += 1;
    clearTimeout(triggerTimer);
    triggerTimer = null;
    selectedText = '';
    hideTrigger();
    if (selectionPanelVisible) closeSelection();
    return;
  }
  if (selectionPanelVisible) closeSelection();
  scheduleTrigger(event);
});

document.addEventListener('selectionchange', () => {
  if (liveSelectionText()) return;
  triggerVersion += 1;
  clearTimeout(triggerTimer);
  triggerTimer = null;
  selectedText = '';
  if (panelMode !== 'selection') hideTrigger();
});

const openFromHover = () => {
  const text = liveSelectionText();
  if (!text) {
    selectedText = '';
    hideTrigger();
    clearTimeout(hoverTimer);
    return;
  }
  selectedText = text;
  if (panelMode === 'selection' && !root.hidden) return;
  clearTimeout(hoverTimer);
  hoverTimer = setTimeout(() => {
    const current = liveSelectionText();
    if (!current) {
      selectedText = '';
      hideTrigger();
      return;
    }
    selectedText = current;
    selectionTranslate(current);
  }, HOVER_INTENT_MS);
};
trigger.addEventListener('pointerenter', openFromHover);
trigger.addEventListener('pointerleave', () => { if (panelMode !== 'selection') clearTimeout(hoverTimer); });
trigger.addEventListener('focus', openFromHover);

root.addEventListener('pointerdown', event => {
  const handle = event.target.closest?.('[data-drag-handle]');
  if (panelMode !== 'selection' || !handle || event.target.closest('button,a,input,select,textarea')) return;
  const rect = root.getBoundingClientRect();
  panelDrag = { pointerId: event.pointerId, offsetX: event.clientX - rect.left, offsetY: event.clientY - rect.top };
  handle.setPointerCapture?.(event.pointerId);
  root.classList.add('is-dragging');
  event.preventDefault();
});

root.addEventListener('pointermove', event => {
  if (!panelDrag || event.pointerId !== panelDrag.pointerId || panelMode !== 'selection') return;
  const rect = root.getBoundingClientRect();
  const left = Math.min(window.innerWidth - rect.width - 8, Math.max(8, event.clientX - panelDrag.offsetX));
  const top = Math.min(window.innerHeight - 54, Math.max(8, event.clientY - panelDrag.offsetY));
  selectionPosition = { left, top };
  root.style.left = `${left}px`;
  root.style.top = `${top}px`;
  root.style.setProperty('--lt-panel-top', `${top}px`);
  root.style.right = 'auto';
});

const stopPanelDrag = event => {
  if (!panelDrag || event.pointerId !== panelDrag.pointerId) return;
  panelDrag = null;
  root.classList.remove('is-dragging');
};
root.addEventListener('pointerup', stopPanelDrag);
root.addEventListener('pointercancel', stopPanelDrag);

window.addEventListener('resize', () => {
  if (panelMode !== 'selection' || !selectionPosition) return;
  const rect = root.getBoundingClientRect();
  selectionPosition.left = Math.min(window.innerWidth - rect.width - 8, Math.max(8, selectionPosition.left));
  selectionPosition.top = Math.min(window.innerHeight - 54, Math.max(8, selectionPosition.top));
  root.style.left = `${selectionPosition.left}px`;
  root.style.top = `${selectionPosition.top}px`;
  root.style.setProperty('--lt-panel-top', `${selectionPosition.top}px`);
});

document.addEventListener('click', event => {
  if (event.target.matches('[data-toggle-original]')) {
    const original = root.querySelector('[data-original]');
    if (original) {
      const expanded = original.classList.toggle('is-expanded');
      event.target.textContent = expanded ? t('collapseOriginal') : t('expandOriginal');
    }
  }
  if (event.target.matches('[data-close]')) closeSelection();
  if (event.target.matches('[data-stop]') && immersiveState) chrome.runtime.sendMessage({ type: 'broadcast-immersive', action: 'pause' });
  if (event.target.matches('[data-restore]')) chrome.runtime.sendMessage({ type: 'broadcast-immersive', action: 'restore' });
  if (event.target.matches('[data-resume]')) chrome.runtime.sendMessage({ type: 'broadcast-immersive', action: 'resume' });
  if (event.target.matches('[data-settings]')) chrome.runtime.openOptionsPage();
  if (event.target.matches('[data-dismiss]') && panelMode === 'immersive') {
    root.hidden = true;
    panelMode = '';
  }
});

chrome.runtime.onMessage.addListener(message => {
  if (message.type === 'translate-selection') selectionTranslate(getSelection()?.toString() || selectedText);
  else if (message.type === 'toggle-immersive') toggleImmersive();
  else if (message.type === 'immersive-translate' || message.type === 'immersive-start') immersive();
  else if (message.type === 'immersive-restore') restoreImmersive();
  else if (message.type === 'immersive-pause') pauseImmersive();
  else if (message.type === 'immersive-resume') resumeImmersive();
});

chrome.storage.onChanged.addListener((changes, area) => {
  if (area !== 'local' || !changes.uiLanguage) return;
  i18n.load(changes.uiLanguage.newValue || 'auto').then(() => {
    const replacements = [
      ['[data-toggle-original]', root.querySelector('[data-original]')?.classList.contains('is-expanded') ? 'collapseOriginal' : 'expandOriginal'],
      ['[data-stop]', 'pause'], ['[data-resume]', 'resume'], ['[data-restore]', immersiveState?.active === false ? 'exitTranslation' : 'exitTranslation'],
      ['[data-settings]', 'settings']
    ];
    replacements.forEach(([selector, key]) => { const node = root.querySelector(selector); if (node) node.textContent = t(key); });
    const original = root.querySelector('.lt-original-label');
    if (original) original.textContent = t('original');
  });
});
