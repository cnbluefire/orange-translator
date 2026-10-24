import { DEFAULTS, clearTranslationCache, settings, translateText, translationCacheStats } from './shared.js';
import { fillLanguageSelect, normalizeLanguage } from './languages.js';
import { buildComboboxes, syncCombobox, syncComboboxes } from './combobox.js';

const ids = ['provider', 'baseUrl', 'model', 'apiKey', 'azureEndpoint', 'azureKey', 'azureRegion', 'googleKey', 'showImmersiveStatus', 'enableSelectionTrigger', 'touchGesture', 'translationTheme', 'uiLanguage', 'targetLanguage', 'sourceLanguage'];
const secretIds = ['apiKey', 'azureKey', 'googleKey'];
const instantIds = ids.filter(id => !secretIds.includes(id));
const $ = id => document.querySelector(id.startsWith('#') ? id : `#${id}`);
const i18n = globalThis.LiteTranslateI18n;
const t = (key, values) => i18n.t(key, values);
const status = (text, kind = 'info') => {
  document.querySelectorAll('[data-provider-status]').forEach(node => { node.textContent = ''; delete node.dataset.kind; });
  const active = document.querySelector('[data-provider]:not([hidden]) [data-provider-status]');
  if (active) { active.textContent = text; active.dataset.kind = kind; }
};

const KEYLESS = new Set(['google-free', 'microsoft-free']);
let initialized = false;
const saveTimers = new Map();

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

async function updateCacheStats() {
  const stats = await translationCacheStats();
  $('#cache-count').textContent = t('itemsCount', stats.count);
  $('#cache-size').textContent = t('localSize', formatBytes(stats.bytes));
}

function updateProviderFields() {
  const provider = $('#provider').value;
  document.querySelectorAll('[data-provider]').forEach(node => { node.hidden = node.dataset.provider !== provider; });
  const badge = $('#provider-badge');
  badge.textContent = t(KEYLESS.has(provider) ? 'keyFree' : 'keyRequired');
  badge.dataset.kind = KEYLESS.has(provider) ? 'free' : 'key';
}

function updateThemePreview() {
  const preview = $('#translation-theme-preview');
  if (preview) preview.dataset.theme = $('#translationTheme').value;
  syncCombobox($('#translationTheme'));
}

function apply(data) {
  ids.forEach(id => {
    const field = $(id);
    if (!field) return;
    let value = data[id];
    if (id === 'sourceLanguage') value = normalizeLanguage(value, 'auto');
    if (id === 'targetLanguage') value = normalizeLanguage(value, 'zh-CN');
    if (field.type === 'checkbox') field.checked = Boolean(value);
    else field.value = value === undefined || value === null ? '' : value;
  });
  updateProviderFields();
  updateThemePreview();
  syncComboboxes();
  initialized = true;
}

function fieldValue(id) {
  const field = $(id);
  return field.type === 'checkbox' ? field.checked : field.value.trim();
}

async function saveInstant(id) {
  if (!initialized) return;
  await chrome.storage.local.set({ [id]: fieldValue(id) });
  status('');
}

function scheduleInstantSave(id) {
  clearTimeout(saveTimers.get(id));
  saveTimers.set(id, setTimeout(() => { saveTimers.delete(id); saveInstant(id); }, 400));
}

function formConfig(base) {
  const cfg = { ...base };
  ids.forEach(id => { cfg[id] = fieldValue(id); });
  return cfg;
}

async function localizePage(preference) {
  const source = $('#sourceLanguage').value;
  const target = $('#targetLanguage').value;
  await i18n.load(preference);
  i18n.localize();
  fillLanguageSelect($('#sourceLanguage'), { includeAuto: true, autoLabel: t('autoDetect') });
  fillLanguageSelect($('#targetLanguage'));
  buildComboboxes();
  $('#sourceLanguage').value = normalizeLanguage(source, 'auto');
  $('#targetLanguage').value = normalizeLanguage(target, 'zh-CN');
  updateProviderFields();
  await updateCacheStats();
}

(async () => {
  try {
    const data = await settings();
    await i18n.load(data.uiLanguage);
    i18n.localize();
    fillLanguageSelect($('#sourceLanguage'), { includeAuto: true, autoLabel: t('autoDetect') });
    fillLanguageSelect($('#targetLanguage'));
    buildComboboxes();
    apply(data);
    await updateCacheStats();
  } catch (error) {
    await i18n.init();
    i18n.localize();
    fillLanguageSelect($('#sourceLanguage'), { includeAuto: true, autoLabel: t('autoDetect') });
    fillLanguageSelect($('#targetLanguage'));
    buildComboboxes();
    apply(DEFAULTS);
    status(t('readSettingsFailed', error.message), 'error');
  }
})();

$('#open-shortcuts').addEventListener('click', () => chrome.tabs.create({ url: 'chrome://extensions/shortcuts' }));

$('#clear-cache').addEventListener('click', async () => {
  const button = $('#clear-cache');
  button.disabled = true;
  try {
    await clearTranslationCache();
    await updateCacheStats();
    status(t('cacheCleared'), 'ok');
  } catch (error) {
    status(t('clearCacheFailed', error.message), 'error');
  } finally {
    button.disabled = false;
  }
});

instantIds.forEach(id => {
  const field = $(id);
  if (field.tagName === 'SELECT' || field.type === 'checkbox') {
    field.addEventListener('change', async () => {
      if (id === 'provider') updateProviderFields();
      if (id === 'translationTheme') updateThemePreview();
      await saveInstant(id);
      syncCombobox(field);
      if (id === 'uiLanguage') await localizePage(field.value);
    });
  } else {
    field.addEventListener('input', () => scheduleInstantSave(id));
    field.addEventListener('blur', async () => {
      clearTimeout(saveTimers.get(id)); saveTimers.delete(id);
      await saveInstant(id);
    });
  }
});

document.querySelectorAll('[data-secret]').forEach(button => {
  button.addEventListener('click', async () => {
    const id = button.dataset.secret;
    await chrome.storage.local.set({ [id]: fieldValue(id) });
    status(t('keySaved', button.dataset.keyLabel), 'ok');
  });
});

document.querySelectorAll('[data-test-provider]').forEach(button => {
  button.addEventListener('click', async () => {
    status(t('testing'));
    button.disabled = true;
    try {
      const text = await translateText('Hello, this is a connection test.', formConfig(await settings()));
      status(text ? t('testSuccess', text.slice(0, 40)) : t('testEmpty'), text ? 'ok' : 'error');
    } catch (error) {
      status(t('testFailed', error.message), 'error');
    } finally {
      button.disabled = false;
    }
  });
});
