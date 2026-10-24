import { settings, translateText } from './shared.js';
import { fillLanguageSelect, normalizeLanguage } from './languages.js';
import { buildCombobox, syncCombobox } from './combobox.js';

const query = document.querySelector('#query');
const result = document.querySelector('#result');
const target = document.querySelector('#quick-target');
const i18n = globalThis.LiteTranslateI18n;
const t = (key, values) => i18n.t(key, values);
const show = text => { result.hidden = false; result.textContent = text; };
let popupTabId = 0;

async function currentPopupContext() {
  return chrome.runtime.sendMessage({ type: 'get-popup-context' }).catch(() => ({ tabId: 0, text: '' }));
}

document.querySelector('#options').onclick = () => chrome.runtime.openOptionsPage();
document.querySelector('#pdf').onclick = async () => {
  await chrome.runtime.sendMessage({ type: 'open-pdf-viewer', useCurrentUrl: true });
  window.close();
};
document.querySelector('#page').onclick = async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (tab?.id) chrome.runtime.sendMessage({ type: 'broadcast-immersive', action: 'start', tabId: tab.id });
  window.close();
};

const initialized = (async () => {
  const cfg = await settings();
  const context = await currentPopupContext();
  popupTabId = context.tabId || 0;
  const sessionKey = popupTabId ? `quickTargetLanguage:${popupTabId}` : '';
  const session = sessionKey ? await chrome.storage.session.get(sessionKey) : {};
  await i18n.load(cfg.uiLanguage);
  i18n.localize();
  fillLanguageSelect(target);
  target.value = normalizeLanguage(session[sessionKey], normalizeLanguage(cfg.targetLanguage, 'zh-CN'));
  buildCombobox(target);
  syncCombobox(target);
  query.value = context.text || '';
  query.focus();
})();

target.addEventListener('change', async () => {
  if (!target.value) return;
  syncCombobox(target);
  if (popupTabId) await chrome.storage.session.set({ [`quickTargetLanguage:${popupTabId}`]: target.value });
});

async function translate() {
  await initialized;
  const text = query.value.trim();
  if (!text) return;
  show(t('querying'));
  try {
    const cfg = await settings();
    cfg.targetLanguage = normalizeLanguage(target.value, cfg.targetLanguage || 'zh-CN');
    show(await translateText(text, cfg));
  } catch (error) {
    show(t('failed', error.message));
  }
}

document.querySelector('#translate').onclick = translate;
query.addEventListener('keydown', event => {
  if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) translate();
});
