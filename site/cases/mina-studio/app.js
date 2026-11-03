const lenses = Object.freeze({
  before: {
    label: 'Before', number: '00',
    headline: 'Thoughtful digital experiences. Beautifully crafted.',
    description: 'I help ambitious brands bring their ideas to life through strategic design and creative thinking.',
    summary: 'The original hero from the fictional source brief. It names a broad design ambition; the three skill outputs make different parts of the supplied service more concrete.'
  },
  story: {
    label: 'Story', number: '01',
    headline: 'Turn your SaaS onboarding flow into a concrete design.',
    description: 'Mina Studio reviews one existing SaaS onboarding flow around the first-use task you choose, then delivers annotated Figma screens and a clickable prototype for up to five screens. Your developer implements the design. Explore an illustrative sample below.',
    summary: 'Connects the founder’s chosen task, the review, the design artifacts, and the developer’s next step. It uses the documented mechanism without promising business results.'
  },
  resonance: {
    label: 'Resonance', number: '02',
    headline: 'For the SaaS you’ve built, start with first use.',
    description: 'You have an existing product and a first-use task to focus on. Mina Studio works with solo founders and small founder-led teams on that one flow, up to five screens. Bring your product link or walkthrough; receive annotated Figma screens and a clickable prototype for your developer. The sample below shows an illustrative project.',
    summary: 'Opens with the reader’s product stage and a bounded task. The idea that the intended founder prefers this focus is a working hypothesis, not a validated customer belief.'
  },
  offer: {
    label: 'Offer', number: '03',
    headline: 'One onboarding flow. A defined design handoff.',
    description: 'Get annotated Figma screens and a clickable prototype for one existing onboarding or first-use flow, up to five screens, plus one handoff call and one revision. Supply a product link or walkthrough recording, your chosen first-use task, and existing design files where available. Your developer handles implementation. Preview an illustrative project below.',
    summary: 'Makes the deliverables, limits, inputs, and implementation responsibility inspectable. The recommendation is an editorial judgment, not a measured conversion result.'
  }
});

const controls = [...document.querySelectorAll('[data-lens]')];
const heading = document.querySelector('#hero-heading');
const description = document.querySelector('#hero-description');
const noteTitle = document.querySelector('#lens-note-title');
const noteSummary = document.querySelector('#lens-summary');
const recommendation = document.querySelector('#recommendation');
const status = document.querySelector('#lens-status');

function currentLens() {
  const value = new URL(window.location.href).searchParams.get('lens');
  return Object.hasOwn(lenses, value) ? value : 'offer';
}

function render(value, announce = false) {
  const lens = lenses[value];
  heading.textContent = lens.headline;
  description.textContent = lens.description;
  noteTitle.textContent = `${lens.number} / ${lens.label}`;
  noteSummary.textContent = lens.summary;
  recommendation.hidden = value !== 'offer';
  for (const control of controls) control.setAttribute('aria-pressed', String(control.dataset.lens === value));
  if (announce) status.textContent = `${lens.label} selected. The headline and supporting paragraph have changed; the portrait and design stay the same.`;
}

function select(value) {
  if (currentLens() !== value) {
    const url = new URL(window.location.href);
    url.searchParams.set('lens', value);
    history.pushState({ lens: value }, '', url);
  }
  render(value, true);
}

for (const [index, control] of controls.entries()) {
  control.addEventListener('click', () => select(control.dataset.lens));
  control.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % controls.length;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + controls.length) % controls.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = controls.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    controls[next].focus();
    select(controls[next].dataset.lens);
  });
}

window.addEventListener('popstate', () => render(currentLens(), true));
render(currentLens());
