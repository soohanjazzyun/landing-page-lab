const $ = selector => document.querySelector(selector);
const buttons = [...document.querySelectorAll('[data-lens]')];
const lenses = {
  story: { label: 'Story', description: 'What does the service help you do? Both runs answer the same question.' },
  resonance: { label: 'Audience', description: 'Who is this for? Both runs answer the same question.' },
  offer: { label: 'Offer', description: 'What do you get? Both runs answer the same question.' }
};
let records;
const currentLens = () => {
  const requested = new URL(location.href).searchParams.get('lens');
  return Object.hasOwn(lenses, requested) ? requested : 'resonance';
};
function render(lens, updateHistory = false) {
  if (!records) return;
  for (const condition of ['plain', 'skills']) {
    const output = records[condition].options[lens];
    const preview = $(`[data-condition="${condition}"]`);
    for (const field of ['headline', 'body', 'cta']) {
      preview.querySelector(`[data-copy="${field}"]`).textContent = output[field];
    }
    preview.querySelector('[data-copy="cta"]').setAttribute('href', output.href);
  }
  for (const button of buttons) button.setAttribute('aria-pressed', String(button.dataset.lens === lens));
  $('#lens-description').textContent = lenses[lens].description;
  $('#lens-status').textContent = `${lenses[lens].label} selected. Both agent outputs are shown.`;
  if (updateHistory && currentLens() !== lens) {
    const url = new URL(location.href);
    url.searchParams.set('lens', lens);
    history.pushState({ lens }, '', url);
  }
}
for (const button of buttons) {
  button.addEventListener('click', () => render(button.dataset.lens, true));
  button.addEventListener('keydown', event => {
    const index = buttons.indexOf(button);
    let next;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % buttons.length;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index + buttons.length - 1) % buttons.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = buttons.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      buttons[next].focus();
      render(buttons[next].dataset.lens, true);
    }
  });
}
window.addEventListener('popstate', () => render(currentLens()));
function openEvidence() {
  if (location.hash === '#evidence') $('#evidence').open = true;
}
window.addEventListener('hashchange', openEvidence);
for (const link of document.querySelectorAll('a[href="#evidence"]')) {
  link.addEventListener('click', () => { $('#evidence').open = true; });
}
openEvidence();
for (const button of document.querySelectorAll('[data-copy-target]')) {
  button.addEventListener('click', async () => {
    const field = document.getElementById(button.dataset.copyTarget);
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(field.value);
      $('#copy-status').textContent = button.dataset.copyTarget === 'install-command'
        ? 'Command copied. Run it in your product’s project folder.'
        : 'Task copied. Replace the source placeholder with your README in your agent.';
    } catch {
      field.focus();
      field.select();
      $('#copy-status').textContent = 'Text selected. Use your copy shortcut to copy it.';
    }
  });
}
try {
  const [plain, skills] = await Promise.all(['plain', 'skills'].map(async condition => {
    const response = await fetch(`records/${condition}-output.json`);
    if (!response.ok) throw new Error('Could not load run output');
    return response.json();
  }));
  records = { plain, skills };
  render(currentLens());
} catch {
  $('#load-error').hidden = false;
  for (const button of buttons) button.disabled = true;
}
