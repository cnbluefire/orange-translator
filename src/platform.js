(function capturePlatformApis(root) {
  if (root.OrangeTranslatorPlatform) return;

  const bind = (owner, name) => typeof owner?.[name] === 'function' ? owner[name].bind(owner) : null;
  const cryptoObject = root.crypto;
  const nativeRandomUUID = bind(cryptoObject, 'randomUUID');
  const getRandomValues = bind(cryptoObject, 'getRandomValues');

  function randomUUID() {
    if (nativeRandomUUID) return nativeRandomUUID();
    if (!getRandomValues) throw new Error('当前浏览器不支持安全随机数生成');
    const bytes = getRandomValues(new Uint8Array(16));
    bytes[6] = (bytes[6] & 0x0f) | 0x40;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;
    const hex = Array.from(bytes, value => value.toString(16).padStart(2, '0'));
    return `${hex.slice(0, 4).join('')}-${hex.slice(4, 6).join('')}-${hex.slice(6, 8).join('')}-${hex.slice(8, 10).join('')}-${hex.slice(10).join('')}`;
  }

  const platform = Object.freeze({
    randomUUID,
    fetch: bind(root, 'fetch'),
    setTimeout: bind(root, 'setTimeout'),
    clearTimeout: bind(root, 'clearTimeout'),
    requestAnimationFrame: bind(root, 'requestAnimationFrame'),
    cancelAnimationFrame: bind(root, 'cancelAnimationFrame'),
    atob: bind(root, 'atob'),
    encodeURIComponent: bind(root, 'encodeURIComponent'),
    performanceNow: bind(root.performance, 'now'),
    dateNow: bind(Date, 'now'),
    imul: bind(Math, 'imul'),
    AbortController: root.AbortController,
    DOMException: root.DOMException,
    MutationObserver: root.MutationObserver,
    IntersectionObserver: root.IntersectionObserver,
    Response: root.Response,
    URL: root.URL
  });
  Object.defineProperty(root, 'OrangeTranslatorPlatform', { value: platform, configurable: false, writable: false });
})(globalThis);
