import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const url = '/compare/';
const sourceRoot = new URL('../../docs/evaluation/paired-mina/', import.meta.url);
const outputs = Object.fromEntries(await Promise.all(['plain', 'skills'].map(async condition => [condition, JSON.parse(await readFile(new URL(`${condition}/output.json`, sourceRoot), 'utf8'))])));
const lenses = ['story', 'resonance', 'offer'];
const labels = { story: 'Story', resonance: 'Audience', offer: 'Offer' };
const records = [
  ['source.md', 'source.md', 'source brief'],
  ['task.md', 'task.md', 'shared task'],
  ['plain-output.json', 'plain/output.json', 'plain output'],
  ['skills-output.json', 'skills/output.json', 'skills output'],
  ['plain-run-notes.md', 'plain/run-notes.md', 'plain run notes'],
  ['skills-run-notes.md', 'skills/run-notes.md', 'skills run notes'],
  ['manifest.json', 'manifest.json', 'run manifest']
];
async function expectCopy(page, lens) {
  for (const condition of ['plain', 'skills']) {
    const preview = page.locator(`[data-condition="${condition}"]`);
    const expected = outputs[condition].options[lens];
    for (const field of ['headline', 'body', 'cta']) await expect(preview.locator(`[data-copy="${field}"]`)).toHaveText(expected[field]);
    await expect(preview.locator('[data-copy="cta"]')).toHaveAttribute('href', expected.href);
  }
  await expect(page.locator(`[data-lens="${lens}"]`)).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('#lens-status')).toHaveText(`${labels[lens]} selected. Both agent outputs are shown.`);
}

test('both conditions show every first-output option verbatim and retain query, history, and keyboard state', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto(url);
  await expectCopy(page, 'resonance');
  const images = await page.locator('.portrait img').evaluateAll(images => images.map(image => image.getAttribute('src')));
  expect(images).toEqual(['../cases/mina-studio/assets/mina-portrait.png', '../cases/mina-studio/assets/mina-portrait.png']);
  for (const lens of lenses) {
    await page.locator(`[data-lens="${lens}"]`).click();
    await expectCopy(page, lens);
    await expect(page).toHaveURL(new RegExp(`lens=${lens}`));
  }
  await page.goBack();
  await expectCopy(page, 'resonance');
  await page.goForward();
  await expectCopy(page, 'offer');
  await page.locator('[data-lens="offer"]').focus();
  await page.keyboard.press('Home');
  await expect(page.locator('[data-lens="story"]')).toBeFocused();
  await expectCopy(page, 'story');
  await page.keyboard.press('ArrowLeft');
  await expect(page.locator('[data-lens="offer"]')).toBeFocused();
  await expectCopy(page, 'offer');
  await page.keyboard.press('ArrowRight');
  await expectCopy(page, 'story');
  await page.keyboard.press('End');
  await expectCopy(page, 'offer');
  await page.reload();
  await expectCopy(page, 'offer');
  for (const lens of lenses) {
    await page.goto(`${url}?lens=${lens}`);
    await expectCopy(page, lens);
  }
  await page.goto(`${url}?lens=invalid`);
  await expectCopy(page, 'resonance');
  expect(errors).toEqual([]);
});

test('both sample CTAs reach a single source-faithful scope, and all seven downloads preserve source bytes', async ({ page }) => {
  await page.goto(url);
  for (const condition of ['plain', 'skills']) {
    await page.locator(`[data-condition="${condition}"] [data-copy="cta"]`).click();
    await expect(page).toHaveURL(/#sample-project$/);
    await expect(page.locator('#sample-project')).toBeInViewport();
    await expect(page.locator('#sample-project')).toContainText('one handoff call and one revision');
    await expect(page.locator('#sample-project')).toContainText('Your developer implements the design.');
    await expect(page.locator('#sample-project')).toContainText('No client project or delivered Figma file is represented.');
    await expect(page.locator('#sample-project')).toHaveCount(1);
  }
  await page.locator('.header-link').click();
  await expect(page.locator('#evidence')).toHaveAttribute('open', '');
  await expect(page.locator('#evidence')).toContainText('Both can write good copy.');
  await expect(page.locator('#evidence')).toContainText('Both agents recommended Story.');
  await expect(page.locator('#evidence')).toContainText('Model identity was not exposed');
  for (const [filename, original, label] of records) {
    const [download] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('link', { name: `Download ${label}`, exact: true }).click()
    ]);
    expect(download.suggestedFilename()).toBe(filename);
    expect(await readFile(await download.path())).toEqual(await readFile(new URL(original, sourceRoot)));
  }
});

test('first-use commands copy real text and the primary CTA makes a usable local README prompt', async ({ page, context }) => {
  const requests = [];
  page.on('request', request => requests.push(request));
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await page.goto(url);
  await page.getByRole('button', { name: 'Copy command', exact: true }).click();
  const command = await page.evaluate(() => navigator.clipboard.readText());
  const home = await readFile(new URL('../../site/index.html', import.meta.url), 'utf8');
  expect(command).toBe(home.match(/<code id="install-command">([^<]+)<\/code>/)[1]);
  await expect(page.locator('#copy-status')).toContainText('Command copied.');
  await page.getByRole('button', { name: 'Copy task', exact: true }).click();
  const task = await page.evaluate(() => navigator.clipboard.readText());
  expect(task).toBe(await page.locator('#hero-prompt').inputValue());
  for (const name of ['landing-page-story', 'landing-page-resonance', 'landing-page-offer']) expect(task).toContain(name);
  expect(task).toContain('one headline, one sentence, and my existing CTA');
  expect(task).toContain('Source: [paste my README]');
  await page.getByRole('link', { name: 'Try your README', exact: true }).click();
  await expect(page).toHaveURL('http://127.0.0.1:4173/#workbench');
  await expect(page.locator('#workbench')).toBeInViewport();
  const readme = '# Orchard Desk\n\nA fictional app for solo designers to group project notes by client.\nPrimary CTA: Open the sample workspace.\nNo pricing or customer results are supplied.';
  await page.getByLabel('Your README or product notes').fill(readme);
  await page.getByRole('radio', { name: 'Compare all three', exact: true }).check();
  await page.getByRole('button', { name: 'Make my agent prompt' }).click();
  const prompt = await page.getByLabel('Ready for your coding agent').inputValue();
  expect(prompt).toContain('Use landing-page-story, landing-page-resonance, landing-page-offer if installed.');
  const sourceBlock = prompt.match(/BEGIN_(SOURCE_[a-zA-Z0-9]+)\n([\s\S]*)\nEND_\1/);
  expect(sourceBlock?.[2]).toBe(readme);
  await expect(page.getByRole('button', { name: 'Copy prompt', exact: true })).toBeEnabled();
  expect(requests.every(request => new URL(request.url()).origin === 'http://127.0.0.1:4173' && request.method() === 'GET' && request.postData() === null && !request.url().includes('Orchard'))).toBe(true);
});

test('clipboard denial leaves the exact task selected for manual copying', async ({ page }) => {
  await page.addInitScript(() => Object.defineProperty(navigator, 'clipboard', { value: { writeText: async () => { throw new Error('Clipboard denied'); } } }));
  await page.goto(url);
  await page.getByRole('button', { name: 'Copy task', exact: true }).click();
  await expect(page.locator('#hero-prompt')).toBeFocused();
  await expect(page.locator('#copy-status')).toHaveText('Text selected. Use your copy shortcut to copy it.');
  const selected = await page.locator('#hero-prompt').evaluate(field => field.value.slice(field.selectionStart, field.selectionEnd));
  expect(selected).toBe(await page.locator('#hero-prompt').inputValue());
});

for (const width of [390, 1280]) {
  test(`comparison fits ${width}px and passes accessibility with both outputs across all lenses`, async ({ page }, testInfo) => {
    const external = [];
    page.on('request', request => { if (new URL(request.url()).origin !== 'http://127.0.0.1:4173') external.push(request.url()); });
    await page.setViewportSize({ width, height: 1100 });
    await page.goto(url);
    await expectCopy(page, 'resonance');
    await expect(page.getByText('Fictional demo · AI-generated portrait', { exact: true })).toHaveCount(1);
    for (const lens of lenses) {
      await page.locator(`[data-lens="${lens}"]`).click();
      await expectCopy(page, lens);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true);
      expect(await page.locator('.portrait img').evaluateAll(images => images.every(image => image.complete && image.naturalWidth > 0))).toBe(true);
      const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
      expect(results.violations).toEqual([]);
    }
    await page.locator('[data-lens="resonance"]').click();
    if (width === 1280) {
      const plain = await page.locator('[data-condition="plain"]').boundingBox();
      const skills = await page.locator('[data-condition="skills"]').boundingBox();
      expect(Math.abs(plain.y - skills.y)).toBeLessThan(1);
      expect(Math.abs(plain.width - skills.width)).toBeLessThan(1);
      const comparison = await page.locator('#comparison').boundingBox();
      await page.screenshot({ path: fileURLToPath(new URL('../../assets/plain-vs-skills.png', import.meta.url)), clip: { x: 0, y: 0, width, height: Math.ceil(comparison.y + comparison.height + 25) } });
    } else {
      const plain = await page.locator('[data-condition="plain"]').boundingBox();
      const skills = await page.locator('[data-condition="skills"]').boundingBox();
      expect(skills.y).toBeLessThan(plain.y);
      expect(plain.x).toBe(skills.x);
      await page.setViewportSize({ width, height: 844 });
      await page.evaluate(() => window.scrollTo(0, 0));
      await expect(page.locator('[data-condition="skills"] .portrait')).toBeInViewport({ ratio: 1 });
      await expect(page.locator('[data-condition="skills"] [data-copy="headline"]')).toBeInViewport({ ratio: 1 });
    }
    await page.screenshot({ path: testInfo.outputPath(`comparison-${width}.png`), fullPage: true });
    expect(external).toEqual([]);
  });
}
