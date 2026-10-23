(function () {
  let messages = {};
  let locale = 'en';

  function resolveLocale(preference = 'auto') {
    if (preference === 'zh-CN' || preference === 'en') return preference;
    const browser = chrome.i18n?.getUILanguage?.() || navigator.language || 'en';
    return /^zh(?:-|_)/i.test(browser) ? 'zh-CN' : 'en';
  }

  async function load(preference = 'auto') {
    locale = resolveLocale(preference);
    const folder = locale === 'zh-CN' ? 'zh_CN' : 'en';
    const response = await fetch(chrome.runtime.getURL(`_locales/${folder}/messages.json`));
    messages = await response.json();
    document.documentElement.lang = locale;
    return locale;
  }

  async function init() {
    const { uiLanguage = 'auto' } = await chrome.storage.local.get({ uiLanguage: 'auto' });
    return load(uiLanguage);
  }

  function t(key, substitutions = []) {
    let value = messages[key]?.message || chrome.i18n?.getMessage?.(key) || key;
    const values = Array.isArray(substitutions) ? substitutions : [substitutions];
    values.forEach((item, index) => { value = value.replaceAll(`$${index + 1}`, String(item)); });
    return value;
  }

  function localize(root = document) {
    root.querySelectorAll('[data-i18n]').forEach(node => { node.textContent = t(node.dataset.i18n); });
    root.querySelectorAll('[data-i18n-placeholder]').forEach(node => { node.placeholder = t(node.dataset.i18nPlaceholder); });
    root.querySelectorAll('[data-i18n-title]').forEach(node => { node.title = t(node.dataset.i18nTitle); });
  }

  globalThis.LiteTranslateI18n = { init, load, t, localize, get locale() { return locale; } };
})();
