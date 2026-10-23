export function syncCombobox(select) {
  const root = select?.closest('[data-combobox-root]');
  if (!select || !root) return;
  const label = root.querySelector('[data-combobox-button] span');
  if (label) label.textContent = select.selectedOptions[0]?.textContent || '';
  root.querySelectorAll('[role="option"]').forEach(option => {
    const selected = option.dataset.value === select.value;
    option.setAttribute('aria-selected', String(selected));
    option.classList.toggle('is-selected', selected);
  });
}

function close(root, focus = false) {
  const button = root?.querySelector('[data-combobox-button]');
  const menu = root?.querySelector('[data-combobox-menu]');
  if (!button || !menu) return;
  menu.hidden = true;
  button.setAttribute('aria-expanded', 'false');
  if (focus) button.focus();
}

function open(root, focusOption = false) {
  document.querySelectorAll('[data-combobox-root]').forEach(other => { if (other !== root) close(other); });
  const button = root.querySelector('[data-combobox-button]');
  const menu = root.querySelector('[data-combobox-menu]');
  menu.hidden = false;
  button.setAttribute('aria-expanded', 'true');
  const selected = menu.querySelector('.is-selected');
  selected?.scrollIntoView({ block: 'nearest' });
  if (focusOption) selected?.focus();
}

export function buildCombobox(select) {
  if (!select) return;
  let root = select.closest('[data-combobox-root]');
  if (!root) {
    root = document.createElement('div');
    root.className = 'custom-combobox';
    root.dataset.comboboxRoot = '';
    select.before(root);
    root.append(select);
    select.classList.add('custom-combobox-native');
    select.tabIndex = -1;
    select.setAttribute('aria-hidden', 'true');
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'custom-combobox-button';
    button.dataset.comboboxButton = '';
    button.setAttribute('aria-haspopup', 'listbox');
    button.setAttribute('aria-expanded', 'false');
    button.innerHTML = '<span></span><i aria-hidden="true"></i>';
    const menu = document.createElement('div');
    menu.className = 'custom-combobox-menu';
    menu.dataset.comboboxMenu = '';
    menu.role = 'listbox';
    menu.hidden = true;
    root.append(button, menu);
    button.addEventListener('click', () => menu.hidden ? open(root) : close(root));
    button.addEventListener('keydown', event => {
      if (!['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(event.key)) return;
      event.preventDefault(); open(root, true);
    });
    menu.addEventListener('keydown', event => {
      const options = [...menu.querySelectorAll('[role="option"]')];
      const index = options.indexOf(document.activeElement);
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        options[(index + (event.key === 'ArrowDown' ? 1 : -1) + options.length) % options.length]?.focus();
      } else if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault(); document.activeElement?.click();
      }
    });
  }
  const button = root.querySelector('[data-combobox-button]');
  const menu = root.querySelector('[data-combobox-menu]');
  menu.replaceChildren(...[...select.options].map(source => {
    const option = document.createElement('button');
    option.type = 'button'; option.role = 'option'; option.dataset.value = source.value; option.textContent = source.textContent;
    option.addEventListener('click', () => {
      select.value = source.value;
      select.dispatchEvent(new Event('change', { bubbles: true }));
      close(root, true);
    });
    return option;
  }));
  syncCombobox(select);
}

export function buildComboboxes(scope = document) {
  scope.querySelectorAll('select[data-combobox]').forEach(buildCombobox);
}

export function syncComboboxes(scope = document) {
  scope.querySelectorAll('select[data-combobox]').forEach(syncCombobox);
}

document.addEventListener('pointerdown', event => {
  document.querySelectorAll('[data-combobox-root]').forEach(root => { if (!root.contains(event.target)) close(root); });
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') document.querySelectorAll('[data-combobox-root]').forEach(root => close(root));
});
