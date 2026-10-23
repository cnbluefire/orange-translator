/* Immersive Translate site-rule compatibility layer. */
globalThis.LiteTranslateSiteRules = (() => {
  const RAW_RULES = globalThis.LiteTranslateImmersiveRules || [];
  const list = value => Array.isArray(value) ? value : value == null ? [] : [value];
  const add = (base, values) => [...new Set([...base, ...list(values)])];
  const remove = (base, values) => { const removed = new Set(list(values)); return base.filter(value => !removed.has(value)); };

  function mergedList(rule, key, fallback = []) {
    let result = Object.hasOwn(rule, key) ? list(rule[key]) : [...fallback];
    for (const [field, value] of Object.entries(rule)) {
      if (field === `${key}.add` || field.startsWith(`${key}.add_v.`) || field.startsWith(`${key}.add.`)) result = add(result, value);
      if (field === `${key}.remove` || field.startsWith(`${key}.remove_v.`) || field.startsWith(`${key}.remove.`)) result = remove(result, value);
      if (field.startsWith(`${key}.replace.`)) result = list(value);
    }
    return result;
  }

  function wildcard(pattern) {
    const source = String(pattern).replace(/[.+?^${}()|[\]\\]/g, '\\$&').replaceAll('*', '.*');
    return new RegExp(`^${source}$`, 'i');
  }
  function matchesAddress(pattern, url, host) {
    const value = String(pattern || '');
    if (!value) return false;
    if (value.includes('://')) return wildcard(value).test(url);
    if (value.includes('/')) return wildcard(value).test(`${host}${location.pathname}${location.search}${location.hash}`);
    return wildcard(value).test(host);
  }
  function selectorMatches(rule) {
    const selectors = mergedList(rule, 'selectorMatches');
    return selectors.length > 0 && selectors.some(selector => { try { return document.querySelector(selector); } catch { return false; } });
  }
  function matchesRule(rule) {
    const addressMatch = list(rule.matches).some(pattern => matchesAddress(pattern, location.href, location.hostname));
    if (!addressMatch && !selectorMatches(rule)) return false;
    return !list(rule.excludeMatches).some(pattern => matchesAddress(pattern, location.href, location.hostname));
  }
  function normalize(rule) {
    return {
      ...rule,
      ruleEngine: 'immersive-translate',
      selectors: mergedList(rule, 'selectors'),
      excludeSelectors: mergedList(rule, 'excludeSelectors'),
      additionalSelectors: mergedList(rule, 'additionalSelectors'),
      additionalExcludeSelectors: mergedList(rule, 'additionalExcludeSelectors'),
      stayOriginalSelectors: mergedList(rule, 'stayOriginalSelectors'),
      additionalStayOriginalSelectors: mergedList(rule, 'additionalStayOriginalSelectors'),
      atomicBlockSelectors: mergedList(rule, 'atomicBlockSelectors'),
      atomicBlockTags: mergedList(rule, 'atomicBlockTags'),
      extraBlockSelectors: mergedList(rule, 'extraBlockSelectors'),
      extraInlineSelectors: mergedList(rule, 'extraInlineSelectors'),
      mutationExcludeSelectors: mergedList(rule, 'mutationExcludeSelectors'),
      excludeTags: mergedList(rule, 'excludeTags', ['SCRIPT', 'STYLE', 'TEXTAREA', 'SVG', 'MATH', 'NOSCRIPT']),
      excludeSelectorsRegexes: mergedList(rule, 'excludeSelectorsRegexes'),
      stayOriginalTags: mergedList(rule, 'stayOriginalTags', ['CODE', 'TT', 'KBD', 'SAMP', 'SCRIPT', 'STYLE', 'TEXTAREA', 'SVG', 'MATH']),
      injectedCss: mergedList(rule, 'injectedCss'),
      globalStyles: Object.assign({}, ...matchedObjects(rule, 'globalStyles'))
    };
  }
  function matchedObjects(rule, key) {
    const values = [];
    if (rule[key] && !Array.isArray(rule[key]) && typeof rule[key] === 'object') values.push(rule[key]);
    for (const [field, value] of Object.entries(rule)) {
      if ((field === `${key}.add` || field.startsWith(`${key}.add_v.`) || field.startsWith(`${key}.add.`)) && value && typeof value === 'object' && !Array.isArray(value)) values.push(value);
    }
    return values;
  }
  function current() {
    const matched = RAW_RULES.filter(matchesRule);
    if (!matched.length) return null;
    const merged = matched.reduce((result, rule) => ({ ...result, ...rule }), {});
    for (const key of ['selectors', 'excludeSelectors', 'additionalSelectors', 'additionalExcludeSelectors', 'stayOriginalSelectors', 'additionalStayOriginalSelectors', 'atomicBlockSelectors', 'atomicBlockTags', 'extraBlockSelectors', 'extraInlineSelectors', 'mutationExcludeSelectors', 'excludeTags', 'excludeSelectorsRegexes', 'stayOriginalTags']) {
      merged[key] = [...new Set(matched.flatMap(rule => normalize(rule)[key] || []))];
    }
    merged.injectedCss = [...new Set(matched.flatMap(rule => normalize(rule).injectedCss || []))];
    merged.globalStyles = Object.assign({}, ...matched.map(rule => normalize(rule).globalStyles));
    return normalize(merged);
  }
  return { RULES: RAW_RULES, current, mergedList };
})();
