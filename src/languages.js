export const LANGUAGES = [
  ['auto', '自动检测'], ['zh-CN', '简体中文'], ['zh-TW', '繁體中文'], ['en', 'English'],
  ['ar', 'العربية'], ['bg', 'Български'], ['ca', 'Català'], ['hr', 'Hrvatski'], ['cs', 'Čeština'],
  ['da', 'Dansk'], ['nl', 'Nederlands'], ['fi', 'Suomi'], ['fr', 'Français'], ['de', 'Deutsch'],
  ['el', 'Ελληνικά'], ['he', 'עברית'], ['hi', 'हिन्दी'], ['hu', 'Magyar'], ['id', 'Bahasa Indonesia'],
  ['it', 'Italiano'], ['ja', '日本語'], ['ko', '한국어'], ['ms', 'Bahasa Melayu'], ['no', 'Norsk Bokmål'],
  ['pl', 'Polski'], ['pt', 'Português'], ['ro', 'Română'], ['ru', 'Русский'], ['sk', 'Slovenčina'],
  ['sl', 'Slovenščina'], ['es', 'Español'], ['sv', 'Svenska'], ['ta', 'தமிழ்'], ['te', 'తెలుగు'],
  ['th', 'ไทย'], ['tr', 'Türkçe'], ['uk', 'Українська'], ['vi', 'Tiếng Việt']
];

export function normalizeLanguage(value, fallback = 'auto') {
  return LANGUAGES.some(([code]) => code === value) ? value : fallback;
}

export function fillLanguageSelect(select, { includeAuto = false, autoLabel = '自动检测' } = {}) {
  select.replaceChildren(...LANGUAGES.filter(([code]) => includeAuto || code !== 'auto').map(([code, label]) => {
    const option = document.createElement('option'); option.value = code; option.textContent = code === 'auto' ? autoLabel : label; return option;
  }));
}
