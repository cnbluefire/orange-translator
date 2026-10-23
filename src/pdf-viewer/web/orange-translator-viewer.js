(async () => {
  const i18n = globalThis.LiteTranslateI18n;
  const { uiLanguage = 'auto' } = await chrome.storage.local.get({ uiLanguage: 'auto' });
  await i18n.load(uiLanguage);
  i18n.localize();
  document.title = i18n.t('pdfViewerTitle');

  const empty = document.querySelector('#orangeTranslatorPdfEmpty');
  const open = document.querySelector('#orangeTranslatorOpenPdf');
  const viewer = document.querySelector('#viewer');
  const hasUrl = new URL(location.href).searchParams.has('file');
  empty.hidden = hasUrl;

  open.addEventListener('click', () => {
    document.querySelector('#secondaryOpenFile, #openFile')?.click();
  });

  document.addEventListener('change', event => {
    if (event.target?.id === 'fileInput' && event.target.files?.length) empty.hidden = true;
  }, true);

  new MutationObserver(() => {
    if (viewer.querySelector('.page')) empty.hidden = true;
  }).observe(viewer, { childList: true, subtree: true });

  chrome.storage.onChanged.addListener((changes, area) => {
    if (area !== 'local' || !changes.uiLanguage) return;
    i18n.load(changes.uiLanguage.newValue || 'auto').then(() => {
      i18n.localize();
      document.title = i18n.t('pdfViewerTitle');
    });
  });
})();
