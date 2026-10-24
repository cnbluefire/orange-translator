import { chromium } from 'playwright';
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const extensionPath = path.join(root, 'src');
const resourceDir = path.join(root, 'resources');
const keyFile = fs.existsSync(resourceDir) ? fs.readdirSync(resourceDir).find(name => name.endsWith('.txt')) : null;
const keyText = keyFile ? fs.readFileSync(path.join(resourceDir, keyFile), 'utf8') : '';
const apiKey = keyText.match(/^key:\s*(\S+)/m)?.[1] || process.env.OPENROUTER_API_KEY || '';
const samplePdf = fs.readFileSync(path.join(root, 'temp', 'reference', 'assets', 'default.pdf'));
const html = `<!doctype html><html><body><main><h1>Immersive translation test</h1><p id="p1">This is a short paragraph for immersive translation testing.</p><p id="p2">The browser extension should translate several paragraphs in one request.</p><p id="p3">A stable identifier keeps every translation next to its source paragraph.</p><p id="p4">This deliberately long original paragraph verifies that the selection popup keeps the source text visible while limiting it to approximately three lines by default. The user can explicitly expand the original text and collapse it again without closing the translation result or starting another network request.</p><pre><code id="code-comment">// This code comment must support selection translation.</code></pre><iframe id="article-frame" src="/frame" style="display:block;width:800px;height:400px"></iframe></main><script>document.querySelector('#code-comment').addEventListener('mouseup',event=>event.stopPropagation())</script></body></html>`;
const frameHtml = `<!doctype html><html><body><article><h1>Embedded article</h1><p id="frame-p1">This article paragraph lives inside an iframe while the outer page contains application controls.</p><p id="frame-p2">A single tab command should translate this frame without creating a second control panel.</p></article></body></html>`;

const server = http.createServer((request, response) => {
  if (request.url?.startsWith('/document/download')) {
    response.writeHead(200, { 'Content-Type': 'application/pdf', 'Content-Length': samplePdf.length, 'Access-Control-Allow-Origin': '*' });
    response.end(samplePdf);
    return;
  }
  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  response.end(request.url === '/frame' ? frameHtml : html);
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const url = `http://127.0.0.1:${server.address().port}`;
const profilePath = path.join(root, 'temp', `playwright-profile-${process.pid}`);
let context;

try {
  context = await chromium.launchPersistentContext(profilePath, {
    headless: false,
    args: [`--disable-extensions-except=${extensionPath}`, `--load-extension=${extensionPath}`]
  });
  let worker = context.serviceWorkers()[0];
  if (!worker) worker = await context.waitForEvent('serviceworker', { timeout: 30000 });
  const extensionId = new URL(worker.url()).host;
  const gotoExtensionPage = async (page, name) => {
    const url = `chrome-extension://${extensionId}/${name}`;
    for (let attempt = 0; attempt < 3; attempt += 1) {
      try { await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 }); return; }
      catch (error) { if (attempt === 2) throw error; await page.waitForTimeout(300); }
    }
  };
  const broadcastToFrames = (urlPrefix, type) => worker.evaluate(async ({ urlPrefix, type }) => {
    const tabs = await chrome.tabs.query({});
    const tab = tabs.find(item => item.url?.startsWith(urlPrefix));
    if (!tab?.id) throw new Error(`tab not found: ${urlPrefix}`);
    const frames = await chrome.webNavigation.getAllFrames({ tabId: tab.id });
    await Promise.allSettled(frames.map(frame => chrome.tabs.sendMessage(tab.id, { type }, { frameId: frame.frameId })));
  }, { urlPrefix, type });
  const options = await context.newPage();
  options.on('pageerror', error => console.error('OPTIONS PAGE ERROR:', error.message));
  await gotoExtensionPage(options, 'options.html');
  await options.locator('#provider').waitFor({ state: 'visible' });
  const enhancedComboboxes = await options.locator('[data-combobox-root]').count();
  if (enhancedComboboxes !== 6) throw new Error(`设置页应有 6 个统一下拉组件，实际为 ${enhancedComboboxes}`);
  await options.locator('#targetLanguage').evaluate(select => select.closest('[data-combobox-root]').querySelector('[data-combobox-button]').click());
  const languageMenuStyle = await options.locator('#targetLanguage').evaluate(select => {
    const menu = select.closest('[data-combobox-root]').querySelector('[data-combobox-menu]');
    const style = getComputedStyle(menu);
    return { maxHeight: style.maxHeight, overflowY: style.overflowY };
  });
  if (languageMenuStyle.maxHeight !== '280px' || languageMenuStyle.overflowY !== 'auto') throw new Error(`语言下拉菜单未统一限高：${JSON.stringify(languageMenuStyle)}`);
  await options.keyboard.press('Escape');
  await options.setViewportSize({ width: 225, height: 844 });
  if (await options.evaluate(() => document.documentElement.classList.contains('lt-mobile-ui'))) throw new Error('桌面 UA 在窄窗口下错误启用了移动版设置样式');
  await options.setViewportSize({ width: 1280, height: 900 });

  await options.locator('#uiLanguage').selectOption('en');
  await options.waitForFunction(async () => (await chrome.storage.local.get('uiLanguage')).uiLanguage === 'en');
  await options.waitForFunction(() => document.querySelector('.settings-title .brand')?.textContent === 'Orange Translator');
  if ((await options.locator('[data-i18n="translationService"]').textContent()) !== 'Translation service') throw new Error('设置页英文切换失败');
  await options.locator('#uiLanguage').selectOption('auto');
  await options.waitForFunction(async () => (await chrome.storage.local.get('uiLanguage')).uiLanguage === 'auto');
  const automaticTitle = await options.locator('.settings-title .brand').textContent();
  if (!['橙竟是翻译', 'Orange Translator'].includes(automaticTitle || '')) throw new Error(`自动界面语言无效：${automaticTitle}`);
  await options.locator('#uiLanguage').selectOption('zh-CN');
  await options.waitForFunction(async () => (await chrome.storage.local.get('uiLanguage')).uiLanguage === 'zh-CN');
  await options.waitForFunction(() => document.querySelector('.settings-title .brand')?.textContent === '橙竟是翻译');
  await options.locator('#translationTheme').selectOption('dashed');
  await options.waitForFunction(async () => (await chrome.storage.local.get('translationTheme')).translationTheme === 'dashed');
  if ((await options.locator('#translation-theme-preview').getAttribute('data-theme')) !== 'dashed') throw new Error('译文样式预览没有即时更新');

  await options.locator('#targetLanguage').selectOption('ja');
  await options.waitForFunction(async () => (await chrome.storage.local.get('targetLanguage')).targetLanguage === 'ja');
  await options.locator('#provider').selectOption('openai');
  await options.waitForFunction(async () => (await chrome.storage.local.get('provider')).provider === 'openai');
  await options.locator('#apiKey').fill('unsaved-test-key');
  await options.waitForTimeout(500);
  const unsavedSecret = await options.evaluate(async () => (await chrome.storage.local.get('apiKey')).apiKey || '');
  if (unsavedSecret === 'unsaved-test-key') throw new Error('API Key 不应自动保存');
  await options.locator('[data-secret="apiKey"]').click();
  await options.waitForFunction(async () => (await chrome.storage.local.get('apiKey')).apiKey === 'unsaved-test-key');
  await options.evaluate(() => chrome.storage.local.remove(['apiKey', 'azureKey', 'googleKey']));
  await options.reload();
  await options.locator('#provider').waitFor({ state: 'visible' });
  await options.locator('#provider').selectOption('microsoft-free');
  const actionAlignment = await options.locator('[data-provider="microsoft-free"] .provider-action-row').evaluate(row => {
    const button = row.querySelector('[data-test-provider]').getBoundingClientRect();
    const bounds = row.getBoundingClientRect();
    return { rightGap: Math.round(bounds.right - button.right) };
  });
  if (actionAlignment.rightGap > 2) throw new Error(`无状态提示时测试按钮未靠右：${JSON.stringify(actionAlignment)}`);
  console.log('PASS options persistence and UI localization: auto, zh-CN, en');

  const popupVisual = await context.newPage();
  await gotoExtensionPage(popupVisual, 'popup.html');
  await popupVisual.locator('#quick-target').waitFor({ state: 'attached' });
  await popupVisual.waitForFunction(() => document.querySelector('#quick-target')?.closest('[data-combobox-root]'));
  const globalTargetBeforeQuickChange = await popupVisual.evaluate(async () => (await chrome.storage.local.get('targetLanguage')).targetLanguage);
  await popupVisual.locator('#quick-target').evaluate(select => select.closest('[data-combobox-root]').querySelector('[data-combobox-button]').click());
  await popupVisual.locator('#quick-target').evaluate(select => select.closest('[data-combobox-root]').querySelector('[role="option"][data-value="ja"]').click());
  await popupVisual.waitForFunction(async () => {
    const entries = await chrome.storage.session.get(null);
    return document.querySelector('#quick-target')?.value === 'ja' && Object.entries(entries).some(([key, value]) => key.startsWith('quickTargetLanguage:') && value === 'ja');
  });
  const globalTargetAfterQuickChange = await popupVisual.evaluate(async () => (await chrome.storage.local.get('targetLanguage')).targetLanguage);
  if (globalTargetAfterQuickChange !== globalTargetBeforeQuickChange) throw new Error(`快速翻译语言不应修改全局目标语言：${globalTargetBeforeQuickChange} -> ${globalTargetAfterQuickChange}`);
  const quickTargetLabel = await popupVisual.locator('#quick-target').evaluate(select => select.closest('[data-combobox-root]').querySelector('[data-combobox-button] span').textContent);
  if (quickTargetLabel !== '日本語') throw new Error(`快速翻译目标语言可见值未同步：${quickTargetLabel}`);
  await popupVisual.locator('#quick-target').evaluate(select => select.closest('[data-combobox-root]').querySelector('[data-combobox-button]').click());
  const popupLanguageMenu = await popupVisual.locator('#quick-target').evaluate(select => {
    const menu = select.closest('[data-combobox-root]').querySelector('[data-combobox-menu]');
    const style = getComputedStyle(menu);
    return { maxHeight: style.maxHeight, overflowY: style.overflowY };
  });
  if (popupLanguageMenu.maxHeight !== '280px' || popupLanguageMenu.overflowY !== 'auto') throw new Error(`弹窗语言菜单未统一限高：${JSON.stringify(popupLanguageMenu)}`);
  await popupVisual.keyboard.press('Escape');
  const resultScrollStyle = await popupVisual.locator('#result').evaluate(node => {
    node.hidden = false;
    node.textContent = 'Long translation output. '.repeat(200);
    const style = getComputedStyle(node);
    return { overflowY:style.overflowY, clientHeight:node.clientHeight, scrollHeight:node.scrollHeight };
  });
  if (resultScrollStyle.overflowY !== 'auto' || resultScrollStyle.scrollHeight <= resultScrollStyle.clientHeight) throw new Error(`快速翻译长译文没有在结果区域内滚动：${JSON.stringify(resultScrollStyle)}`);
  await popupVisual.locator('#result').evaluate(node => { node.hidden = true; node.textContent = ''; });
  await popupVisual.evaluate(() => chrome.storage.local.set({ provider:'openai', baseUrl:'https://api.openai.com/v1', model:'invalid', apiKey:'' }));
  await popupVisual.locator('#query').fill('This request should fail in the result area.');
  await popupVisual.locator('#translate').click();
  await popupVisual.waitForFunction(() => document.querySelector('#result')?.textContent?.startsWith('失败：'), null, { timeout:10000 });
  if (await popupVisual.locator('dialog,[role="alertdialog"]').count()) throw new Error('快速翻译失败不应显示额外弹窗');
  await popupVisual.evaluate(() => chrome.storage.local.set({ provider:'microsoft-free' }));
  await popupVisual.setViewportSize({ width: 225, height: 844 });
  if (await popupVisual.evaluate(() => document.documentElement.classList.contains('lt-mobile-ui'))) throw new Error('桌面 UA 在窄窗口下错误启用了移动版弹窗样式');
  await popupVisual.setViewportSize({ width: 390, height: 844 });
  const lightVisual = await popupVisual.evaluate(() => {
    const gear = getComputedStyle(document.querySelector('#options'));
    const shell = getComputedStyle(document.querySelector('.popup-shell'));
    const card = getComputedStyle(document.querySelector('.quick-card'));
    return { gear: gear.backgroundColor, shell: shell.backgroundColor, card: card.backgroundColor };
  });
  if (lightVisual.gear !== 'rgba(0, 0, 0, 0)' || lightVisual.shell !== 'rgb(255, 255, 255)' || lightVisual.card !== 'rgb(255, 255, 255)') throw new Error(`浅色弹窗存在异常背景块：${JSON.stringify(lightVisual)}`);
  await popupVisual.locator('#options').hover();
  await popupVisual.waitForTimeout(180);
  const hoverBackground = await popupVisual.locator('#options').evaluate(node => getComputedStyle(node).backgroundColor);
  if (hoverBackground === 'rgba(0, 0, 0, 0)') throw new Error('设置齿轮缺少 Hover 背景');
  await popupVisual.emulateMedia({ colorScheme: 'dark' });
  const darkVisual = await popupVisual.evaluate(() => ({ shell: getComputedStyle(document.querySelector('.popup-shell')).backgroundColor, card: getComputedStyle(document.querySelector('.quick-card')).backgroundColor }));
  if (darkVisual.shell === darkVisual.card || darkVisual.shell === 'rgb(255, 255, 255)' || darkVisual.card === 'rgb(255, 255, 255)') throw new Error(`深色弹窗层次异常：${JSON.stringify(darkVisual)}`);
  await popupVisual.close();
  console.log('PASS popup theme: transparent gear, neutral light and dark surfaces');

  const popupSelectionPage = await context.newPage();
  const popupSelectionUrl = `${url}/?popup-selection=1`;
  await popupSelectionPage.goto(popupSelectionUrl, { waitUntil:'domcontentloaded' });
  await popupSelectionPage.locator('#lt-trigger').waitFor({ state:'attached', timeout:10000 });
  await popupSelectionPage.bringToFront();
  await popupSelectionPage.waitForTimeout(400);
  const popupSelectionText = await popupSelectionPage.locator('#p2').textContent();
  await popupSelectionPage.locator('#p2').evaluate(node => {
    const range = document.createRange(); range.selectNodeContents(node);
    const selection = getSelection(); selection.removeAllRanges(); selection.addRange(range);
    document.dispatchEvent(new Event('selectionchange'));
    node.dispatchEvent(new MouseEvent('mouseup', { bubbles:true, clientX:320, clientY:180 }));
  });
  const popupSelectionTabId = await options.evaluate(async () => (await chrome.tabs.query({})).find(tab => tab.url?.includes('popup-selection=1'))?.id || 0);
  if (!popupSelectionTabId) throw new Error('未找到选区导入测试标签页');
  await popupSelectionPage.locator('#lt-trigger').waitFor({ state:'visible', timeout:5000 });
  const extensionUiSelection = await popupSelectionPage.evaluate(() => {
    const root = document.querySelector('#lt-root');
    root.hidden = false;
    root.innerHTML = '<div data-test-extension-selection>Extension translation panel text</div>';
    const range = document.createRange(); range.selectNodeContents(root.querySelector('[data-test-extension-selection]'));
    const selection = getSelection(); selection.removeAllRanges(); selection.addRange(range);
    return true;
  });
  if (!extensionUiSelection) throw new Error('无法创建扩展浮窗测试选区');
  const blockedExtensionText = await options.evaluate(tabId => chrome.tabs.sendMessage(tabId, { type:'get-selected-text' }), popupSelectionTabId);
  if (blockedExtensionText) throw new Error(`扩展浮窗文本不应带入快速翻译：${blockedExtensionText}`);
  await popupSelectionPage.evaluate(() => {
    const root = document.querySelector('#lt-root'); root.replaceChildren(); root.hidden = true;
    const range = document.createRange(); range.selectNodeContents(document.querySelector('#p2'));
    const selection = getSelection(); selection.removeAllRanges(); selection.addRange(range);
  });
  await options.evaluate(tabId => chrome.tabs.update(tabId, { active:true }), popupSelectionTabId);
  await popupSelectionPage.waitForTimeout(300);
  await popupSelectionPage.evaluate(() => getSelection().removeAllRanges());
  const popupWithSelection = await context.newPage();
  await gotoExtensionPage(popupWithSelection, 'popup.html');
  await popupWithSelection.waitForFunction(() => document.querySelector('#query')?.value.length > 0);
  if ((await popupWithSelection.locator('#query').inputValue()) !== popupSelectionText?.trim()) throw new Error('打开扩展弹窗时没有带入当前选中文本');
  if (await popupWithSelection.locator('#result:not([hidden])').count()) throw new Error('带入选中文本时不应自动请求翻译');
  await popupWithSelection.close();
  await popupSelectionPage.close();
  console.log('PASS popup selection import: current selection fills query without auto-translate');

  const mobileContext = await chromium.launchPersistentContext(path.join(root, 'temp', `playwright-mobile-profile-${process.pid}`), { headless: false, args: [`--disable-extensions-except=${extensionPath}`, `--load-extension=${extensionPath}`] });
  try {
    const emulateMobileDevice = async page => {
      const cdp = await mobileContext.newCDPSession(page);
      await cdp.send('Emulation.setDeviceMetricsOverride', { width: 412, height: 915, deviceScaleFactor: 2.625, mobile: true, screenWidth: 412, screenHeight: 915, positionX: 0, positionY: 0, dontSetVisibleSize: false });
      await cdp.send('Emulation.setTouchEmulationEnabled', { enabled: true, maxTouchPoints: 5 });
      await cdp.send('Emulation.setUserAgentOverride', {
        userAgent: 'Mozilla/5.0 (Linux; Android 14; Pixel 7 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Mobile Safari/537.36 EdgA/130.0',
        platform: 'Android',
        userAgentMetadata: { brands: [{ brand: 'Microsoft Edge', version: '130' }, { brand: 'Chromium', version: '130' }], fullVersionList: [{ brand: 'Microsoft Edge', version: '130.0.0.0' }, { brand: 'Chromium', version: '130.0.0.0' }], fullVersion: '130.0.0.0', platform: 'Android', platformVersion: '14', architecture: '', model: 'Pixel 7 Pro', mobile: true, bitness: '' }
      });
      return cdp;
    };
    let mobileWorker = mobileContext.serviceWorkers()[0];
    if (!mobileWorker) mobileWorker = await mobileContext.waitForEvent('serviceworker', { timeout: 30000 });
    const mobileExtensionId = new URL(mobileWorker.url()).host;
    await mobileWorker.evaluate(() => chrome.storage.local.set({ uiLanguage: 'zh-CN', touchGesture: 'three', showImmersiveBall: true }));
    const mobileOptions = await mobileContext.newPage();
    await emulateMobileDevice(mobileOptions);
    await mobileOptions.goto(`chrome-extension://${mobileExtensionId}/options.html`, { waitUntil: 'domcontentloaded' });
    await mobileOptions.locator('#provider').waitFor({ state: 'attached' });
    const mobileSettingsLayout = await mobileOptions.evaluate(() => {
      const rect = selector => { const r = document.querySelector(selector)?.getBoundingClientRect(); return r && { left:r.left, right:r.right, width:r.width }; };
      const overflow = [...document.querySelectorAll('main, main *')].map(node => { const r=node.getBoundingClientRect(); return { node:`${node.tagName}.${node.className}`, left:r.left, right:r.right, width:r.width }; }).filter(item => item.left < -1 || item.right > innerWidth + 1).slice(0, 10);
      const switches = [...document.querySelectorAll('.switch-row input[type="checkbox"]')].map(node => { const r=node.getBoundingClientRect(); return { width:r.width, height:r.height }; });
      const fontSize = selector => parseFloat(getComputedStyle(document.querySelector(selector)).fontSize);
      const fonts = { pageTitle:fontSize('.settings-header .brand'), sectionTitle:fontSize('.settings-card h2'), label:fontSize('.settings-card label'), help:fontSize('.settings-card .section-help'), control:fontSize('.settings-card .custom-combobox-button') };
      return { mobile: document.documentElement.classList.contains('lt-mobile-ui'), scrollWidth: document.documentElement.scrollWidth, viewport: innerWidth, settings:rect('.settings'), card:rect('.settings-card'), providerRow:rect('[data-provider="microsoft-free"] .provider-action-row'), providerButton:rect('[data-provider="microsoft-free"] button'), columns:getComputedStyle(document.querySelector('.two-columns')).gridTemplateColumns, switches, fonts, overflow };
    });
    const fonts = mobileSettingsLayout.fonts;
    if (!mobileSettingsLayout.mobile || mobileSettingsLayout.scrollWidth > mobileSettingsLayout.viewport || mobileSettingsLayout.columns.split(' ').length !== 1 || mobileSettingsLayout.card?.right > mobileSettingsLayout.viewport + 1 || mobileSettingsLayout.switches.some(item => Math.abs(item.width - 42) > 1 || Math.abs(item.height - 22) > 1) || fonts.pageTitle < 22 || fonts.sectionTitle < 18 || fonts.label < 15 || fonts.help < 14 || fonts.control < 16 || mobileSettingsLayout.overflow.length) throw new Error(`真实移动 UA 设置页适配失败：${JSON.stringify(mobileSettingsLayout)}`);
    console.log(`PASS mobile settings bounds: ${JSON.stringify(mobileSettingsLayout)}`);
    await mobileOptions.locator('#sourceLanguage').evaluate(select => select.closest('[data-combobox-root]').querySelector('[data-combobox-button]').click());
    const mobileMenuAlignment = await mobileOptions.locator('#sourceLanguage').evaluate(select => {
      const root = select.closest('[data-combobox-root]');
      const button = root.querySelector('[data-combobox-button]').getBoundingClientRect();
      const menu = root.querySelector('[data-combobox-menu]').getBoundingClientRect();
      const upward = root.classList.contains('is-upward');
      return { button:{ left:button.left, right:button.right, top:button.top, bottom:button.bottom }, menu:{ left:menu.left, right:menu.right, top:menu.top, bottom:menu.bottom }, upward };
    });
    const menuGap = mobileMenuAlignment.upward ? mobileMenuAlignment.button.top - mobileMenuAlignment.menu.bottom : mobileMenuAlignment.menu.top - mobileMenuAlignment.button.bottom;
    if (Math.abs(mobileMenuAlignment.button.left - mobileMenuAlignment.menu.left) > 1 || Math.abs(mobileMenuAlignment.button.right - mobileMenuAlignment.menu.right) > 1 || menuGap < 4 || menuGap > 7) throw new Error(`移动端下拉菜单未与按钮对齐：${JSON.stringify(mobileMenuAlignment)}`);
    await mobileOptions.screenshot({ path: path.join(root, 'temp', 'mobile-options.png'), fullPage: true });
    await mobileOptions.keyboard.press('Escape');

    const mobilePopup = await mobileContext.newPage();
    await emulateMobileDevice(mobilePopup);
    await mobilePopup.goto(`chrome-extension://${mobileExtensionId}/popup.html`, { waitUntil: 'domcontentloaded' });
    await mobilePopup.waitForFunction(() => document.querySelector('#quick-target')?.closest('[data-combobox-root]'));
    await mobilePopup.locator('#quick-target').evaluate(select => select.closest('[data-combobox-root]').querySelector('[data-combobox-button]').click());
    const popupMenuBounds = await mobilePopup.locator('#quick-target').evaluate(select => {
      const root = select.closest('[data-combobox-root]');
      const button = root.querySelector('[data-combobox-button]').getBoundingClientRect();
      const menu = root.querySelector('[data-combobox-menu]').getBoundingClientRect();
      return { viewport:innerHeight, upward:root.classList.contains('is-upward'), button:{ left:button.left, right:button.right, top:button.top, bottom:button.bottom }, menu:{ left:menu.left, right:menu.right, top:menu.top, bottom:menu.bottom, height:menu.height } };
    });
    if (popupMenuBounds.menu.top < 7 || popupMenuBounds.menu.bottom > popupMenuBounds.viewport - 7 || Math.abs(popupMenuBounds.button.left - popupMenuBounds.menu.left) > 1 || Math.abs(popupMenuBounds.button.right - popupMenuBounds.menu.right) > 1) throw new Error(`移动弹窗下拉菜单被视口裁切：${JSON.stringify(popupMenuBounds)}`);
    await mobilePopup.close();

    const mobilePage = await mobileContext.newPage();
    await emulateMobileDevice(mobilePage);
    await mobilePage.goto(url, { waitUntil: 'domcontentloaded' });
    await mobilePage.locator('#lt-immersive-ball').waitFor({ state: 'visible', timeout: 10000 });
    const ballBefore = await mobilePage.locator('#lt-immersive-ball').boundingBox();
    const mobilePageViewport = await mobilePage.evaluate(() => ({ width: innerWidth, height: innerHeight }));
    if (!ballBefore || ballBefore.x < 0 || ballBefore.y < 0 || ballBefore.x + ballBefore.width > mobilePageViewport.width || ballBefore.y + ballBefore.height > mobilePageViewport.height) throw new Error(`沉浸式快捷橙子不在视口内：${JSON.stringify({ ballBefore, mobilePageViewport })}`);
    await mobilePage.mouse.move(ballBefore.x + 22, ballBefore.y + 22);
    await mobilePage.mouse.down();
    await mobilePage.mouse.move(180, 420, { steps: 5 });
    await mobilePage.mouse.up();
    const ballAfter = await mobilePage.locator('#lt-immersive-ball').boundingBox();
    if (!ballAfter || Math.abs(ballAfter.x - ballBefore.x) < 20 || ballAfter.x < 0 || ballAfter.y < 0 || ballAfter.x + ballAfter.width > mobilePageViewport.width || ballAfter.y + ballAfter.height > mobilePageViewport.height) throw new Error(`沉浸式快捷橙子拖动或视口限制失败：${JSON.stringify({ ballBefore, ballAfter, mobilePageViewport })}`);
    const spinStart = Date.now();
    await mobilePage.locator('#lt-immersive-ball').click();
    await mobilePage.locator('#lt-immersive-ball.is-translating').waitFor({ state: 'visible', timeout: 5000 });
    await mobilePage.waitForFunction(() => document.querySelector('.lt-immersive-translation') || document.querySelector('#lt-root')?.textContent?.includes('翻译失败'), null, { timeout: 90000 });
    await mobilePage.waitForFunction(() => !document.querySelector('#lt-immersive-ball')?.classList.contains('is-translating'), null, { timeout: 10000 });
    if (Date.now() - spinStart < 560) throw new Error(`沉浸式快捷橙子旋转未完成一圈：${Date.now() - spinStart}ms`);
    const mobilePageTabId = await mobileWorker.evaluate(async urlPrefix => (await chrome.tabs.query({})).find(tab => tab.url?.startsWith(urlPrefix))?.id || 0, url);
    await mobileOptions.evaluate(tabId => chrome.runtime.sendMessage({ type: 'broadcast-immersive', action: 'restore', tabId }), mobilePageTabId);
    await mobilePage.waitForFunction(() => document.querySelectorAll('.lt-immersive-translation').length === 0, null, { timeout: 10000 });

    await mobilePage.evaluate(() => {
      const target = document.querySelector('main');
      const points = [[1,80,100],[2,120,100],[3,160,100]];
      for (const [pointerId, clientX, clientY] of points) target.dispatchEvent(new PointerEvent('pointerdown', { bubbles:true, pointerType:'touch', pointerId, clientX, clientY, isPrimary:pointerId===1 }));
      for (const [pointerId, clientX, clientY] of points) target.dispatchEvent(new PointerEvent('pointerup', { bubbles:true, pointerType:'touch', pointerId, clientX, clientY, isPrimary:pointerId===1 }));
    });
    await mobilePage.waitForFunction(() => document.querySelector('.lt-immersive-translation') || document.querySelector('#lt-root')?.textContent?.includes('翻译失败'), null, { timeout: 90000 });
    await mobilePage.screenshot({ path: path.join(root, 'temp', 'mobile-page.png'), fullPage: false });
    console.log('PASS mobile Edge simulation: settings layout, gesture, and persistent ball');
  } finally {
    await mobileContext.close();
  }

  const pdfViewer = await context.newPage();
  await gotoExtensionPage(pdfViewer, 'pdf-viewer/web/viewer.html');
  await pdfViewer.locator('#viewerContainer').waitFor({ state: 'visible', timeout: 30000 });
  if (!await pdfViewer.locator('#secondaryOpenFile').count()) throw new Error('PDF 入口没有打开 PDF.js Viewer');
  await pdfViewer.locator('#orangeTranslatorOpenPdf').waitFor({ state: 'visible', timeout: 10000 });
  if ((await pdfViewer.locator('#orangeTranslatorOpenPdf').textContent())?.trim() !== '打开 PDF') throw new Error('PDF Viewer 空状态按钮未本地化');
  await pdfViewer.locator('#fileInput').setInputFiles(path.join(root, 'temp', 'reference', 'assets', 'default.pdf'));
  await pdfViewer.locator('.textLayer span').first().waitFor({ state: 'visible', timeout: 60000 });
  await pdfViewer.locator('.textLayer span').filter({ hasText: /\S/ }).first().evaluate(node => {
    const range = document.createRange();
    range.selectNodeContents(node);
    const selection = getSelection();
    selection.removeAllRanges(); selection.addRange(range);
    node.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, clientX: 300, clientY: 220 }));
  });
  await pdfViewer.locator('#lt-trigger').waitFor({ state: 'visible', timeout: 10000 });
  await pdfViewer.close();
  console.log('PASS PDF.js viewer: original layout, text layer selection translation enabled');

  const pdfUrlPage = await context.newPage();
  const sourcePdfUrl = `${url}/document/download?id=sample`;
  await pdfUrlPage.goto(url, { waitUntil: 'domcontentloaded' });
  await pdfUrlPage.evaluate(url => history.replaceState(null, '', url), sourcePdfUrl);
  await pdfUrlPage.bringToFront();
  const openedPdfTab = await options.evaluate(url => chrome.runtime.sendMessage({ type: 'open-pdf-viewer', url }), sourcePdfUrl);
  const openedPdfUrl = await options.evaluate(async tabId => {
    for (let attempt = 0; attempt < 50; attempt += 1) {
      const tab = await chrome.tabs.get(tabId);
      if (tab.url) return tab.url;
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    return '';
  }, openedPdfTab.id);
  const passedPdfUrl = new URL(openedPdfUrl).searchParams.get('file');
  if (passedPdfUrl !== sourcePdfUrl) throw new Error(`PDF Viewer 没有带入当前 PDF URL：${openedPdfUrl}`);
  const remotePdfViewer = await context.newPage();
  await remotePdfViewer.goto(openedPdfUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await remotePdfViewer.locator('.textLayer span').first().waitFor({ state: 'visible', timeout: 60000 });
  if (!await remotePdfViewer.locator('.page').count()) throw new Error('PDF Viewer 收到无后缀 PDF URL 后没有实际渲染文档');
  await remotePdfViewer.close();
  await worker.evaluate(tabId => chrome.tabs.remove(tabId), openedPdfTab.id);
  await pdfUrlPage.close();
  console.log('PASS PDF popup entry forwards current PDF URL to viewer');

  const testProvider = async provider => {
    await options.locator('#provider').selectOption(provider);
    await options.locator('#targetLanguage').selectOption('zh-CN');
    await options.locator('#sourceLanguage').selectOption('auto');
    await options.locator('[data-test-provider]:visible').click();
    await options.waitForFunction(() => /^(连接成功|测试失败)/.test(document.querySelector('[data-provider]:not([hidden]) [data-provider-status]')?.textContent?.trim() || ''), null, { timeout: 65000 });
    return (await options.locator('[data-provider]:not([hidden]) [data-provider-status]').textContent())?.trim() || '';
  };

  let provider = 'microsoft-free';
  let providerStatus = await testProvider(provider);
  if (!providerStatus.startsWith('连接成功')) {
    console.log(`WARN microsoft-free：${providerStatus}`);
    provider = 'google-free';
    providerStatus = await testProvider(provider);
  }
  if (!providerStatus.startsWith('连接成功')) throw new Error(`免 Key 服务都不可用：${providerStatus}`);
  console.log(`PASS keyless provider (${provider}): ${providerStatus}`);

  if (apiKey) {
    await options.locator('#provider').selectOption('openai');
    await options.locator('#baseUrl').fill('https://openrouter.ai/api/v1');
    await options.locator('#model').fill(process.env.OPENAI_MODEL || 'openrouter/free');
    await options.locator('#apiKey').fill(apiKey);
    await options.locator('[data-secret="apiKey"]').click();
    await options.locator('[data-test-provider]:visible').click();
    await options.waitForFunction(() => /^(连接成功|测试失败)/.test(document.querySelector('[data-provider]:not([hidden]) [data-provider-status]')?.textContent?.trim() || ''), null, { timeout: 120000 });
    const openaiStatus = (await options.locator('[data-provider]:not([hidden]) [data-provider-status]').textContent())?.trim() || '';
    console.log(openaiStatus.startsWith('连接成功') ? `PASS OpenAI 兼容：${openaiStatus}` : `WARN OpenAI 兼容：${openaiStatus}`);
  }

  await testProvider(provider);
  const page = await context.newPage();
  await page.goto(url);
  await worker.evaluate(() => chrome.storage.local.set({ enableSelectionTrigger: false }));
  await page.waitForTimeout(250);
  await page.evaluate(() => {
    const range = document.createRange();
    range.selectNodeContents(document.querySelector('#p1'));
    const selection = getSelection();
    selection.removeAllRanges(); selection.addRange(range);
    document.querySelector('#p1').dispatchEvent(new MouseEvent('mouseup', { bubbles: true, clientX: 320, clientY: 180 }));
  });
  await page.waitForTimeout(300);
  if (await page.locator('#lt-trigger').isVisible()) throw new Error('关闭划词图标后 mouseup 仍显示了悬浮图标');
  await broadcastToFrames('http://127.0.0.1:', 'translate-selection');
  await page.locator('#lt-root:not([hidden])').waitFor({ timeout: 5000 });
  await page.waitForTimeout(260);
  if (!(await page.locator('#lt-root').textContent())?.includes('原文')) throw new Error('关闭划词图标后快捷键/右键入口没有直接打开翻译浮窗');
  const directPanelBox = await page.locator('#lt-root').boundingBox();
  const selectedBox = await page.locator('#p1').boundingBox();
  if (!directPanelBox || !selectedBox || Math.abs(directPanelBox.x - selectedBox.x) > 40 || directPanelBox.y < selectedBox.y - 20 || directPanelBox.y > selectedBox.y + selectedBox.height + 60) throw new Error(`无悬浮图标时翻译浮窗没有靠近选区：${JSON.stringify({ directPanelBox, selectedBox })}`);
  await page.locator('body').click({ position: { x: 8, y: 8 }, force: true });
  await page.locator('#lt-root').waitFor({ state: 'hidden', timeout: 5000 });
  await worker.evaluate(() => chrome.storage.local.set({ enableSelectionTrigger: true }));
  await page.waitForTimeout(250);
  console.log('PASS selection trigger switch: mouse listener disabled, direct command unaffected');
  await page.evaluate(() => {
    const code = document.querySelector('#code-comment');
    const rect = code.getBoundingClientRect();
    const input = document.createElement('textarea');
    input.value = '// This code comment must support selection translation.';
    input.style.cssText = `position:fixed;left:${rect.left}px;top:${rect.top}px;width:${rect.width}px;height:${rect.height}px;opacity:.01`;
    input.className = 'read-only-cursor-text-area';
    document.body.append(input);
    input.focus(); input.setSelectionRange(3, 28);
    input.dispatchEvent(new MouseEvent('mouseup', { bubbles:true, clientX:rect.left + Math.min(30, rect.width / 2), clientY:rect.top + rect.height / 2 }));
  });
  await page.locator('#lt-trigger').waitFor({ state:'visible', timeout:5000 });
  await page.locator('#lt-trigger').hover();
  await page.locator('#lt-root:not([hidden])').waitFor({ timeout:5000 });
  if (!(await page.locator('#lt-root [data-original]').textContent())?.includes('This code comment')) throw new Error('代码输入层悬停后没有打开翻译浮窗');
  await page.locator('body').click({ position:{ x:8, y:8 }, force:true });
  await page.locator('#lt-root').waitFor({ state:'hidden', timeout:5000 });
  await page.locator('#lt-trigger').waitFor({ state:'hidden', timeout:5000 });
  console.log('PASS code selection: hidden text control opens trigger and popup');
  const contextMenuText = '// Context menu translation must use supplied selection text.';
  await page.evaluate(() => getSelection().removeAllRanges());
  const mainTestTabId = await options.evaluate(async () => (await chrome.tabs.query({})).find(tab => tab.active && tab.url?.startsWith('http://127.0.0.1:'))?.id || 0);
  await options.evaluate(async ({ tabId, text }) => chrome.tabs.sendMessage(tabId, { type:'translate-selection', source:'context-menu', text }), { tabId:mainTestTabId, text: contextMenuText });
  await page.locator('#lt-root:not([hidden])').waitFor({ timeout:5000 });
  if (!(await page.locator('#lt-root [data-original]').textContent())?.includes(contextMenuText)) throw new Error('右键翻译没有使用浏览器提供的 selectionText');
  await page.locator('body').click({ position:{ x:8, y:8 }, force:true });
  await page.locator('#lt-root').waitFor({ state:'hidden', timeout:5000 });
  console.log('PASS context menu selection: supplied selectionText opens translation directly');
  await worker.evaluate(() => chrome.storage.local.set({ touchGesture: 'three' }));
  await page.waitForTimeout(250);
  await page.evaluate(() => {
    const target = document.querySelector('main');
    const points = [[1,80,80],[2,110,80],[3,140,80]];
    for (const [pointerId, clientX, clientY] of points) target.dispatchEvent(new PointerEvent('pointerdown', { bubbles:true, pointerType:'touch', pointerId, clientX, clientY, isPrimary:pointerId===1 }));
    for (const [pointerId, clientX, clientY] of points) target.dispatchEvent(new PointerEvent('pointerup', { bubbles:true, pointerType:'touch', pointerId, clientX, clientY, isPrimary:pointerId===1 }));
  });
  await page.waitForFunction(() => document.querySelector('.lt-immersive-translation') || document.querySelector('#lt-root')?.textContent?.includes('翻译失败'), null, { timeout: 90000 });
  if (!await page.locator('.lt-immersive-translation').count()) throw new Error('三指轻触没有触发沉浸式翻译');
  const coloredThemeStyle = await page.locator('.lt-immersive-translation').first().evaluate(node => {
    node.parentElement.style.color = 'rgb(35, 90, 210)';
    node.dataset.ltTheme = 'wavy';
    const wavy = getComputedStyle(node);
    const result = { textColor: wavy.color, wavyColor: wavy.textDecorationColor, wavyStyle: wavy.textDecorationStyle };
    node.dataset.ltTheme = 'nativeDashed';
    const dashed = getComputedStyle(node);
    result.dashedColor = dashed.textDecorationColor;
    result.dashedStyle = dashed.textDecorationStyle;
    return result;
  });
  if (coloredThemeStyle.textColor !== 'rgb(35, 90, 210)' || coloredThemeStyle.wavyColor !== 'rgb(114, 236, 233)' || coloredThemeStyle.wavyStyle !== 'wavy' || coloredThemeStyle.dashedColor !== 'rgb(114, 236, 233)' || coloredThemeStyle.dashedStyle !== 'dashed') throw new Error(`彩色原文覆盖了译文装饰线样式：${JSON.stringify(coloredThemeStyle)}`);
  console.log('PASS translation themes: colored source text does not override decoration colors');
  await broadcastToFrames('http://127.0.0.1:', 'immersive-restore');
  await page.waitForFunction(() => document.querySelectorAll('.lt-immersive-translation').length === 0, null, { timeout: 10000 });
  console.log('PASS touch gesture: three-finger tap toggles immersive translation');
  await page.evaluate(() => {
    const range = document.createRange();
    range.selectNodeContents(document.querySelector('#p1'));
    const selection = getSelection();
    selection.removeAllRanges(); selection.addRange(range);
    document.querySelector('#p1').dispatchEvent(new MouseEvent('mouseup', { bubbles: true, clientX: 320, clientY: 180 }));
  });
  await page.locator('#lt-trigger').waitFor({ state: 'visible', timeout: 15000 });
  await page.waitForTimeout(220);
  const triggerBox = await page.locator('#lt-trigger').boundingBox();
  if (!triggerBox || Math.abs(triggerBox.x - 330) > 3 || Math.abs(triggerBox.y - 190) > 3) throw new Error(`划词图标未出现在鼠标旁：${JSON.stringify(triggerBox)}`);
  await page.locator('#lt-trigger').hover();
  await page.locator('#lt-root:not([hidden])').waitFor({ timeout: 5000 });
  const panelWhileLoading = await page.locator('#lt-root').boundingBox();
  await page.locator('#lt-root .lt-selection-result, #lt-root .lt-entry').first().waitFor({ timeout: 90000 });
  const panelAfterResult = await page.locator('#lt-root').boundingBox();
  if (!panelWhileLoading || !panelAfterResult || Math.abs(panelWhileLoading.x - panelAfterResult.x) > 2 || Math.abs(panelWhileLoading.y - panelAfterResult.y) > 2) throw new Error(`划词结果返回后浮窗位置跳变：${JSON.stringify({ panelWhileLoading, panelAfterResult })}`);
  await page.locator('#lt-trigger').waitFor({ state: 'hidden', timeout: 5000 });
  if (await page.locator('#lt-trigger').isVisible()) throw new Error('划词浮窗弹出后悬浮图标没有消失');
  if (!await page.locator('#lt-root [data-original]').isVisible()) throw new Error('划词浮窗没有显示原文');
  const triggerBeforeDrag = await page.locator('#lt-trigger').evaluate(node => ({ left: node.style.left, top: node.style.top }));
  const panelBeforeDrag = await page.locator('#lt-root').boundingBox();
  const handle = page.locator('#lt-root [data-drag-handle]');
  const handleBox = await handle.boundingBox();
  if (!panelBeforeDrag || !handleBox) throw new Error('划词浮窗标题栏不存在');
  await page.mouse.move(handleBox.x + 60, handleBox.y + handleBox.height / 2);
  await page.mouse.down();
  await page.mouse.move(handleBox.x + 110, handleBox.y + handleBox.height / 2 + 35, { steps: 5 });
  await page.mouse.up();
  const panelAfterDrag = await page.locator('#lt-root').boundingBox();
  const triggerAfterDrag = await page.locator('#lt-trigger').evaluate(node => ({ left: node.style.left, top: node.style.top }));
  if (!panelAfterDrag || Math.abs(panelAfterDrag.x - panelBeforeDrag.x) < 30 || Math.abs(panelAfterDrag.y - panelBeforeDrag.y) < 20) throw new Error('拖动标题栏后浮窗没有移动');
  if (triggerBeforeDrag.left !== triggerAfterDrag.left || triggerBeforeDrag.top !== triggerAfterDrag.top) throw new Error('拖动浮窗时不应移动悬浮球');
  const scrollStyles = await page.locator('#lt-root .lt-card-body').evaluate(node => ({ overflowY: getComputedStyle(node).overflowY, maxHeight: getComputedStyle(node.closest('.lt-card')).maxHeight }));
  if (scrollStyles.overflowY !== 'auto' || scrollStyles.maxHeight === 'none') throw new Error(`浮窗滚动限制未生效：${JSON.stringify(scrollStyles)}`);
  const selectionText = await page.locator('#lt-root').textContent();
  if (!selectionText || selectionText.includes('翻译中')) throw new Error('划词翻译没有产生最终结果');
  console.log('PASS selection translation:', selectionText.slice(0, 80).replace(/\n/g, ' '));
  await page.locator('body').click({ position: { x: 8, y: 8 } });
  await page.locator('#lt-root').waitFor({ state: 'hidden', timeout: 5000 });
  if (await page.locator('#lt-trigger').isVisible()) throw new Error('点击空白处后划词图标未关闭');
  console.log('PASS selection dismissal: blank click closes panel');

  await page.evaluate(() => {
    const select = (id, x, y) => {
      const range = document.createRange();
      range.selectNodeContents(document.querySelector(id));
      const selection = getSelection();
      selection.removeAllRanges(); selection.addRange(range);
      document.querySelector(id).dispatchEvent(new MouseEvent('mouseup', { bubbles: true, clientX: x, clientY: y }));
    };
    select('#p1', 300, 170);
  });
  await page.locator('#lt-trigger').waitFor({ state: 'visible', timeout: 5000 });
  await page.locator('#lt-trigger').hover();
  await page.locator('#lt-root:not([hidden])').waitFor({ timeout: 5000 });
  await page.evaluate(() => {
    const range = document.createRange();
    range.selectNodeContents(document.querySelector('#p2'));
    const selection = getSelection();
    selection.removeAllRanges(); selection.addRange(range);
    document.querySelector('#p2').dispatchEvent(new MouseEvent('mouseup', { bubbles: true, clientX: 460, clientY: 230 }));
  });
  await page.locator('#lt-root').waitFor({ state: 'hidden', timeout: 5000 });
  await page.locator('#lt-trigger').waitFor({ state: 'visible', timeout: 5000 });
  await page.waitForTimeout(220);
  const reselectionBox = await page.locator('#lt-trigger').boundingBox();
  if (!reselectionBox || Math.abs(reselectionBox.x - 470) > 3 || Math.abs(reselectionBox.y - 240) > 3) throw new Error(`浮窗显示时重新划词没有生成新图标：${JSON.stringify(reselectionBox)}`);
  await page.evaluate(() => getSelection().removeAllRanges());
  await page.locator('#lt-trigger').waitFor({ state: 'hidden', timeout: 5000 });
  console.log('PASS mouseup state evaluation: dismisses or reselects from live state');

  await page.evaluate(() => {
    const range = document.createRange();
    range.selectNodeContents(document.querySelector('#p1'));
    const selection = getSelection();
    selection.removeAllRanges(); selection.addRange(range);
    document.querySelector('#p1').dispatchEvent(new MouseEvent('mouseup', { bubbles: true, clientX: 280, clientY: 160 }));
    selection.removeAllRanges();
  });
  await page.waitForTimeout(80);
  if (await page.locator('#lt-trigger').isVisible()) throw new Error('选区已清空，延迟显示的划词图标仍然出现');
  await page.evaluate(() => {
    const range = document.createRange();
    range.selectNodeContents(document.querySelector('#p1'));
    const selection = getSelection();
    selection.removeAllRanges(); selection.addRange(range);
    document.querySelector('#p1').dispatchEvent(new MouseEvent('mouseup', { bubbles: true, clientX: 280, clientY: 160 }));
  });
  await page.locator('#lt-trigger').waitFor({ state: 'visible', timeout: 5000 });
  await page.evaluate(() => getSelection().removeAllRanges());
  await page.locator('#lt-trigger').waitFor({ state: 'hidden', timeout: 5000 });
  console.log('PASS selection state guard: stale selections never show or retain trigger');

  await page.evaluate(() => {
    const range = document.createRange();
    range.selectNodeContents(document.querySelector('#p4'));
    const selection = getSelection();
    selection.removeAllRanges(); selection.addRange(range);
    document.querySelector('#p4').dispatchEvent(new MouseEvent('mouseup', { bubbles: true, clientX: 420, clientY: 260 }));
  });
  await page.locator('#lt-trigger').hover();
  await page.locator('#lt-root [data-toggle-original]').waitFor({ state: 'visible', timeout: 5000 });
  const collapsed = await page.locator('#lt-root [data-original]').evaluate(node => node.scrollHeight > node.clientHeight);
  if (!collapsed) throw new Error('长原文没有默认折叠到三行');
  await page.locator('#lt-root [data-toggle-original]').click();
  const expanded = await page.locator('#lt-root [data-original]').evaluate(node => node.classList.contains('is-expanded') && node.scrollHeight <= node.clientHeight + 1);
  if (!expanded) throw new Error('长原文展开失败');
  await page.locator('body').click({ position: { x: 8, y: 8 } });
  console.log('PASS selection original: collapsed and expandable');

  const selectionFrame = page.frame({ url: /\/frame$/ });
  if (!selectionFrame) throw new Error('划词 iframe 测试 frame 未加载');
  await selectionFrame.locator('#frame-p1').evaluate(node => {
    const range = document.createRange(); range.selectNodeContents(node);
    const selection = getSelection(); selection.removeAllRanges(); selection.addRange(range);
    document.dispatchEvent(new Event('selectionchange'));
    node.dispatchEvent(new MouseEvent('mouseup', { bubbles:true, clientX:180, clientY:90 }));
  });
  await selectionFrame.locator('#lt-trigger').waitFor({ state:'visible', timeout:5000 });
  await selectionFrame.locator('#lt-trigger').hover();
  await page.locator('#lt-root:not([hidden])').waitFor({ timeout:5000 });
  if (await selectionFrame.locator('#lt-root:not([hidden])').count()) throw new Error('iframe 划词翻译浮窗不应渲染在 iframe 内');
  if (!(await page.locator('#lt-root [data-original]').textContent())?.includes('This article paragraph lives inside an iframe')) throw new Error('顶层划词浮窗没有收到 iframe 选中文本');
  await page.locator('body').click({ position:{ x:8, y:8 }, force:true });
  await page.locator('#lt-root').waitFor({ state:'hidden', timeout:5000 });
  console.log('PASS iframe selection popup: rendered in top frame without clipping');

  await broadcastToFrames('http://127.0.0.1:', 'immersive-start');
  await page.locator('.lt-immersive-loading').first().waitFor({ timeout: 10000 });
  const loadingCount = await page.locator('.lt-immersive-loading').count();
  if (!loadingCount) throw new Error('沉浸式请求期间没有显示逐条加载占位符');
  await page.locator('.lt-translated').first().waitFor({ timeout: 120000 });
  await page.waitForFunction(() => document.querySelectorAll('.lt-immersive-loading').length === 0, null, { timeout: 10000 });
  const translatedCount = await page.locator('.lt-translated').count();
  if (translatedCount < 3) throw new Error(`沉浸式翻译结果不足：${translatedCount}`);
  if (await page.locator('#lt-root.lt-immersive-control-root:not([hidden])').count()) throw new Error('不应显示沉浸式进度浮窗');
  const misplaced = await page.locator('body > .lt-immersive-translation').count();
  if (misplaced) throw new Error(`存在 ${misplaced} 个脱离原段落的译文块`);
  console.log(`PASS immersive translation: ${translatedCount} translated blocks`);
  const articleFrame = page.frame({ url: /\/frame$/ });
  if (!articleFrame) throw new Error('测试正文 iframe 未加载');
  await articleFrame.locator('#frame-p1 .lt-immersive-translation').waitFor({ timeout: 120000 });
  const frameTranslated = await articleFrame.locator('.lt-immersive-translation').count();
  const frameControls = await articleFrame.locator('#lt-root.lt-immersive-control-root:not([hidden])').count();
  if (frameTranslated < 2 || frameControls) throw new Error(`iframe 翻译异常：译文 ${frameTranslated}，子控制条 ${frameControls}`);
  console.log(`PASS iframe immersive: ${frameTranslated} blocks, top-frame control only`);
  await articleFrame.evaluate(() => {
    const container = document.createElement('div');
    container.setAttribute('slot', 'text-body');
    container.id = 'reddit-like-body';
    container.innerHTML = '<p id="reddit-line-1">The first paragraph must be translated once.</p><p id="reddit-line-2">The second paragraph must also be translated once.</p>';
    document.querySelector('article').append(container);
  });
  await articleFrame.locator('#reddit-line-1 .lt-immersive-translation').waitFor({ timeout: 120000 });
  const nestedContainerTranslations = await articleFrame.locator('#reddit-like-body > .lt-immersive-translation').count();
  const nestedParagraphTranslations = await articleFrame.locator('#reddit-like-body p > .lt-immersive-translation').count();
  if (nestedContainerTranslations || nestedParagraphTranslations !== 2) throw new Error(`嵌套正文去重失败：容器 ${nestedContainerTranslations}，段落 ${nestedParagraphTranslations}`);
  console.log('PASS nested paragraph dedupe: container skipped, child paragraphs translated once');
  await articleFrame.evaluate(() => {
    const ad = document.createElement('article');
    ad.id = 'reddit-promoted-post';
    ad.dataset.promoted = 'true';
    ad.innerHTML = '<a href="https://alb.reddit.com/cr?test=1">Sponsored</a><h2>Advertisement headline</h2><div slot="text-body"><p>This promoted article must not consume translation quota.</p></div>';
    document.body.append(ad);
  });
  await articleFrame.waitForTimeout(500);
  const promotedTranslations = await articleFrame.locator('#reddit-promoted-post .lt-immersive-translation').count();
  if (promotedTranslations) throw new Error(`Reddit 推广内容不应翻译：${promotedTranslations}`);
  console.log('PASS Reddit promoted post exclusion');
  await page.evaluate(() => {
    const paragraph = document.createElement('p');
    paragraph.id = 'dynamic-paragraph';
    paragraph.textContent = 'This paragraph was inserted dynamically after immersive translation had already started.';
    document.querySelector('main').append(paragraph);
  });
  await page.locator('#dynamic-paragraph .lt-immersive-translation').waitFor({ timeout: 120000 });
  await page.waitForTimeout(300);
  const dynamicTranslations = await page.locator('#dynamic-paragraph .lt-immersive-translation').count();
  if (dynamicTranslations !== 1) throw new Error(`动态正文被重复翻译：${dynamicTranslations}`);
  console.log('PASS dynamic content translation: exactly one translated block');
  await page.evaluate(() => {
    const spacer = document.createElement('div');
    spacer.style.height = '2200px';
    const paragraph = document.createElement('p');
    paragraph.id = 'scroll-loading-paragraph';
    paragraph.textContent = 'This paragraph should show a loading placeholder immediately when it enters the viewport, before the request queue resumes after scrolling.';
    document.querySelector('main').append(spacer, paragraph);
  });
  await page.waitForTimeout(300);
  await page.locator('#scroll-loading-paragraph').scrollIntoViewIfNeeded();
  await page.waitForTimeout(150);
  if (await page.locator('#scroll-loading-paragraph .lt-immersive-loading').count()) throw new Error('滚动停稳 280ms 前不应显示 loading');
  await page.locator('#scroll-loading-paragraph .lt-immersive-loading').waitFor({ timeout: 2000 });
  if (await page.locator('#scroll-loading-paragraph .lt-immersive-translation').count()) throw new Error('滚动未停稳时不应先插入最终译文');
  await page.locator('#scroll-loading-paragraph .lt-immersive-translation').waitFor({ timeout: 120000 });
  if (await page.locator('#scroll-loading-paragraph .lt-immersive-loading').count()) throw new Error('最终译文出现后仍残留 loading');
  console.log('PASS viewport loading: shown after 280ms idle, before queued request completes');
  await broadcastToFrames('http://127.0.0.1:', 'immersive-restore');
  await page.waitForFunction(() => document.querySelectorAll('.lt-immersive-translation').length === 0, null, { timeout: 10000 });
  await articleFrame.waitForFunction(() => document.querySelectorAll('.lt-immersive-translation').length === 0, null, { timeout: 10000 });
  if (await page.locator('.lt-immersive-loading').count() || await articleFrame.locator('.lt-immersive-loading').count()) throw new Error('还原后仍残留加载占位符');
  console.log('PASS iframe restore: parent and child frames cleared together');

  const github = await context.newPage();
  await github.goto('https://github.com/cnbluefire/indra-ocr-sharp', { waitUntil: 'domcontentloaded', timeout: 120000 });
  await github.locator('.markdown-body').first().waitFor({ timeout: 60000 });
  await github.evaluate(() => scrollTo(0, 0));
  await broadcastToFrames('https://github.com/cnbluefire/indra-ocr-sharp', 'immersive-start');
  await github.waitForFunction(() => document.querySelector('#repo-content-turbo-frame .lt-immersive-translation, .Layout-sidebar .lt-immersive-translation') || document.querySelector('#lt-root')?.textContent?.includes('翻译失败'), null, { timeout: 120000 });
  const githubChromeTranslations = await github.locator('#repo-content-turbo-frame .lt-immersive-translation, .Layout-sidebar .lt-immersive-translation').count();
  if (!githubChromeTranslations) throw new Error(`GitHub 仓库区启动失败：${await github.locator('#lt-root').textContent()}`);
  const topPollution = await github.locator('header .lt-immersive-translation, nav .lt-immersive-translation, button .lt-immersive-translation, pre .lt-immersive-translation, code .lt-immersive-translation').count();
  if (topPollution) throw new Error(`GitHub 顶部有 ${topPollution} 个译文污染了导航、按钮或代码`);
  const githubUiPollution = await github.evaluate(() => [...document.querySelectorAll('.lt-immersive-translation')].filter(node => {
    const source = node.parentElement;
    if (source.closest('.markdown-body')) return false;
    const text = source.childNodes[0]?.textContent?.trim() || '';
    return /^(About|Releases|README|Activity|Stars?|Forks?|build|docs|src|tools|THIRD-PARTY-LICENSES|\.github\/workflows)$/i.test(text);
  }).length);
  if (githubUiPollution) throw new Error(`GitHub 有 ${githubUiPollution} 个文件名或界面标题被误翻译`);
  await broadcastToFrames('https://github.com/cnbluefire/indra-ocr-sharp', 'immersive-restore');
  await github.waitForFunction(() => document.querySelectorAll('.lt-immersive-translation').length === 0, null, { timeout: 10000 });
  console.log(`PASS GitHub repository chrome: ${githubChromeTranslations} translated blocks at scrollY=0`);
  await github.evaluate(() => {
    const readme = document.querySelector('.markdown-body');
    const target = [...readme.querySelectorAll('h2')].find(node => /command line/i.test(node.textContent)) || readme.querySelector('h2');
    target?.scrollIntoView({ block: 'center' });
    [...readme.querySelectorAll('h1,h2,h3,h4,h5,h6,p,li,blockquote,figcaption,td,th,dd,dt')].forEach(node => {
      const rect = node.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < innerHeight) node.dataset.testInitialViewport = '1';
      if (rect.bottom > 0 && rect.top < innerHeight * 2) node.dataset.testInitialPrefetch = '1';
    });
  });
  await broadcastToFrames('https://github.com/cnbluefire/indra-ocr-sharp', 'immersive-start');
  await github.waitForFunction(() => document.querySelector('.markdown-body .lt-immersive-translation') || document.querySelector('#lt-root')?.textContent?.includes('翻译失败'), null, { timeout: 120000 });
  const firstReadmeTranslation = github.locator('.markdown-body .lt-immersive-translation').first();
  if (!await firstReadmeTranslation.count()) throw new Error(`GitHub README 首批翻译失败：${await github.locator('#lt-root').textContent()}`);
  const firstTranslationInfo = await firstReadmeTranslation.evaluate(node => ({ marked: node.parentElement.dataset.testInitialPrefetch === '1', tag: node.parentElement.tagName, text: node.parentElement.textContent.slice(0, 100), rect: node.parentElement.getBoundingClientRect().toJSON() }));
  if (!firstTranslationInfo.marked) throw new Error(`GitHub 沉浸式翻译没有从当前两屏范围开始：${JSON.stringify(firstTranslationInfo)}`);
  await github.mouse.move(2, 2);
  const crxStyle = await firstReadmeTranslation.evaluate(node => {
    const style = getComputedStyle(node);
    return { tag: node.tagName, theme: node.dataset.ltTheme, backgroundImage: style.backgroundImage };
  });
  if (crxStyle.tag !== 'FONT' || crxStyle.theme !== 'dashed' || crxStyle.backgroundImage === 'none') throw new Error(`沉浸式样式未应用所选主题：${JSON.stringify(crxStyle)}`);
  await github.waitForFunction(() => document.querySelectorAll('.markdown-body .lt-immersive-translation').length >= 5, null, { timeout: 120000 });
  await github.waitForTimeout(500);
  const initialTranslated = await github.locator('.markdown-body .lt-immersive-translation').count();
  const outsideInitialPrefetch = await github.evaluate(() => [...document.querySelectorAll('.markdown-body .lt-immersive-translation')].filter(node => node.parentElement.dataset.testInitialPrefetch !== '1').length);
  if (outsideInitialPrefetch) throw new Error(`启动后翻译了 ${outsideInitialPrefetch} 个两屏范围外段落`);
  await github.evaluate(() => window.scrollBy({ top: innerHeight * 1.5, behavior: 'instant' }));
  const countWhileScrolling = await github.locator('.markdown-body .lt-immersive-translation').count();
  await github.waitForTimeout(150);
  const countBeforeIdle = await github.locator('.markdown-body .lt-immersive-translation').count();
  if (countBeforeIdle !== countWhileScrolling) throw new Error('滚动尚未停止时就开始了新翻译请求');
  await github.waitForFunction(previous => document.querySelectorAll('.markdown-body .lt-immersive-translation').length > previous, initialTranslated, { timeout: 120000 });
  const githubTranslated = await github.locator('.markdown-body .lt-immersive-translation').count();
  if (githubTranslated <= initialTranslated) throw new Error('滚动后没有继续翻译新进入视口的段落');
  const chromePollution = await github.locator('nav .lt-immersive-translation, header .lt-immersive-translation, pre .lt-immersive-translation, code .lt-immersive-translation').count();
  if (chromePollution) throw new Error(`GitHub 页面有 ${chromePollution} 个译文污染了导航或代码区`);
  await github.locator('.markdown-body').first().scrollIntoViewIfNeeded();
  await github.screenshot({ path: path.join(root, 'temp', 'github-immersive.png'), fullPage: false });
  console.log(`PASS GitHub lazy immersive: ${initialTranslated} initial, ${githubTranslated} after scroll`);

  const commands = await worker.evaluate(() => chrome.commands.getAll());
  const toggleCommand = commands.find(command => command.name === 'toggle-immersive');
  const selectionCommand = commands.find(command => command.name === 'translate-selection');
  if (!toggleCommand) throw new Error(`沉浸式翻译快捷键命令未注册：${JSON.stringify(commands)}`);
  if (!selectionCommand) throw new Error(`划词翻译快捷键命令未注册：${JSON.stringify(commands)}`);
  if (toggleCommand.shortcut) throw new Error(`沉浸式翻译不应预设快捷键：${JSON.stringify(commands)}`);
  if (selectionCommand.shortcut) throw new Error(`划词翻译不应预设快捷键：${JSON.stringify(commands)}`);
  await broadcastToFrames('https://github.com/cnbluefire/indra-ocr-sharp', 'immersive-restore');
  await github.waitForFunction(() => document.querySelectorAll('.lt-immersive-translation').length === 0, null, { timeout: 10000 });
  console.log('PASS immersive shortcut entry: configurable, no default binding');

  const cacheBeforeClear = await worker.evaluate(async () => (await chrome.storage.local.get('translationCacheV1')).translationCacheV1);
  const cacheEntries = Object.keys(cacheBeforeClear?.entries || {}).length;
  if (!cacheEntries) throw new Error('翻译完成后没有写入本地缓存');
  await options.bringToFront();
  await options.reload();
  await options.locator('#cache-count').waitFor({ state: 'visible', timeout: 10000 });
  await options.waitForFunction(() => !document.querySelector('#cache-count')?.textContent?.includes('读取中'));
  if (!((await options.locator('#cache-count').textContent()) || '').includes(String(cacheEntries))) throw new Error('设置页缓存数量显示不正确');
  await options.locator('#clear-cache').click();
  await options.waitForFunction(() => document.querySelector('#cache-count')?.textContent?.trim() === '0 条');
  await options.waitForTimeout(500);
  await options.evaluate(() => chrome.storage.local.remove('translationCacheV1'));
  const cacheAfterClear = await worker.evaluate(async () => (await chrome.storage.local.get('translationCacheV1')).translationCacheV1);
  if (cacheAfterClear) throw new Error('清除缓存后存储项仍然存在');
  const failedRequestCache = await options.evaluate(async () => {
    const { translateItems } = await import('./shared.js');
    try {
      await translateItems([{ id: 'must-fail', text: 'This request must not be cached.' }], {
        provider: 'openai', baseUrl: 'https://openrouter.ai/api/v1', model: 'invalid', apiKey: '',
        sourceLanguage: 'auto', targetLanguage: 'zh-CN'
      });
    } catch {}
    return (await chrome.storage.local.get('translationCacheV1')).translationCacheV1 || null;
  });
  if (failedRequestCache) throw new Error(`翻译失败后错误写入缓存：${JSON.stringify(failedRequestCache).slice(0, 300)}`);
  console.log('PASS failed translations are never cached');
  console.log(`PASS translation cache: ${cacheEntries} entries, clear button verified`);
} finally {
  if (context) await context.close().catch(() => {});
  await new Promise(resolve => server.close(resolve));
  try { fs.rmSync(profilePath, { recursive: true, force: true, maxRetries: 3, retryDelay: 300 }); } catch (error) { console.warn(`WARN 无法立即清理测试配置：${error.message}`); }
}
