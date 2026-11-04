import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { readFile } from 'node:fs/promises';

const url = '/cases/mina-studio/';
const evidenceRoot = new URL('../../docs/evaluation/mina-demo/', import.meta.url);
const output = await readFile(new URL('output.md', evidenceRoot), 'utf8');
const source = await readFile(new URL('source.md', evidenceRoot), 'utf8');
const recommendations = Object.fromEntries(['Story', 'Resonance', 'Offer'].map(label => {
  const section = output.split(`## ${label}\n`)[1].split('\n## ')[0];
  return [label.toLowerCase(), {
    headline: section.split('**Headline**\n\n')[1].split('\n')[0],
    description: section.split('**Supporting paragraph**\n\n')[1].split('\n')[0]
  }];
}));
recommendations.before = {
  headline: source.match(/^Headline: (.+)$/m)[1],
  description: source.match(/^Description: (.+)$/m)[1]
};

test('Mina lenses preserve the actual output, share their state, and support browser history', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto(url);
  await expect(page.locator('[data-lens="offer"]')).toHaveAttribute('aria-pressed', 'true');
  const image = await page.locator('.portrait img').getAttribute('src');
  for (const lens of ['before', 'story', 'resonance', 'offer']) {
    await page.locator(`[data-lens="${lens}"]`).click();
    await expect(page).toHaveURL(new RegExp(`lens=${lens}`));
    await expect(page.locator('#hero-heading')).toHaveText(recommendations[lens].headline);
    await expect(page.locator('#hero-description')).toHaveText(recommendations[lens].description);
    await expect(page.locator(`[data-lens="${lens}"]`)).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('.portrait img')).toHaveAttribute('src', image);
  }
  await page.goBack();
  await expect(page.locator('#hero-heading')).toHaveText(recommendations.resonance.headline);
  await page.goForward();
  await expect(page.locator('#hero-heading')).toHaveText(recommendations.offer.headline);
  await page.locator('[data-lens="offer"]').focus();
  await page.keyboard.press('Home');
  await expect(page.locator('[data-lens="before"]')).toBeFocused();
  await expect(page.locator('#lens-status')).toContainText('Before selected');
  await page.keyboard.press('ArrowRight');
  await expect(page.locator('[data-lens="story"]')).toBeFocused();
  await expect(page.locator('#hero-heading')).toHaveText(recommendations.story.headline);
  await page.reload();
  await expect(page.locator('#hero-heading')).toHaveText(recommendations.story.headline);
  await page.goto(`${url}?lens=not-a-lens`);
  await expect(page.locator('#hero-heading')).toHaveText(recommendations.offer.headline);
  expect(errors).toEqual([]);
});

test('the sample action reaches a real scope and all raw evidence is downloadable without alteration', async ({ page }) => {
  const requests = [];
  page.on('request', request => requests.push(request.url()));
  await page.goto(url);
  await page.getByRole('link', { name: 'See a sample project', exact: true }).click();
  await expect(page).toHaveURL(/#sample-project$/);
  await expect(page.locator('#sample-project')).toBeInViewport();
  await expect(page.locator('#sample-project')).toContainText('one handoff call and one revision');
  await expect(page.locator('#sample-project')).toContainText('Your developer implements the design.');
  for (const [filename, name] of [['source.md', 'the source brief'], ['task.md', 'the exact agent task'], ['output.md', 'the unedited agent output'], ['run-notes.md', 'the agent run notes']]) {
    const [download] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('link', { name: `Download ${name}`, exact: true }).click()
    ]);
    expect(download.suggestedFilename()).toBe(filename);
    expect(await readFile(await download.path())).toEqual(await readFile(new URL(filename, evidenceRoot)));
  }
  await page.locator('.evidence-details summary').click();
  await expect(page.locator('.evidence-details')).toHaveAttribute('open', '');
  expect(requests.every(request => new URL(request).origin === 'http://127.0.0.1:4173')).toBe(true);
});

test('Mina readers can take their README to the workbench and prepare one local skill prompt', async ({ page }, testInfo) => {
  const requests = [];
  page.on('request', request => requests.push(request));
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(url);
  await expect(page.locator('.portrait')).toBeInViewport({ ratio: 1 });
  await expect(page.locator('.project-link')).toHaveAttribute('href', '#sample-project');
  const nextStep = page.getByRole('region', { name: 'Use the same skills on your product.' });
  await expect(nextStep).toContainText('copy it into your own coding agent');
  await page.screenshot({ path: testInfo.outputPath('mina-first-screen-mobile.png') });
  await nextStep.scrollIntoViewIfNeeded();
  await page.screenshot({ path: testInfo.outputPath('mina-try-readme-mobile.png') });
  await nextStep.getByRole('link', { name: 'Try this on your README', exact: true }).click();
  await expect(page).toHaveURL('http://127.0.0.1:4173/#workbench');
  await expect(page.locator('#workbench')).toBeInViewport();

  const readme = '# Lantern Desk\n\nFictional product for this browser test.\nHelps solo designers group project notes by client.\nPrimary CTA: Open the sample workspace.\nNo pricing or customer results are supplied.';
  await page.getByLabel('Your README or product notes').fill(readme);
  await page.getByRole('radio', { name: 'Offer', exact: true }).check();
  await page.getByRole('button', { name: 'Make my agent prompt' }).click();
  const prompt = await page.getByLabel('Ready for your coding agent').inputValue();
  expect(prompt).toContain('Use landing-page-offer if installed.');
  const sourceBlock = prompt.match(/BEGIN_(SOURCE_[a-zA-Z0-9]+)\n([\s\S]*)\nEND_\1/);
  expect(sourceBlock?.[2]).toBe(readme);
  await expect(page.getByRole('button', { name: 'Copy prompt', exact: true })).toBeEnabled();
  expect(requests.every(request => new URL(request.url()).origin === 'http://127.0.0.1:4173' && request.method() === 'GET' && !request.url().includes('Lantern') && request.postData() === null)).toBe(true);
});

for (const width of [390, 1280]) {
  test(`Mina comparisons fit ${width}px, load the portrait, and pass automated contrast/accessibility checks`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(url);
    await expect(page.getByText('Fictional demo · AI-generated portrait', { exact: true })).toBeVisible();
    expect(await page.locator('.portrait img').evaluate(image => image.complete && image.naturalWidth > 0)).toBe(true);
    for (const lens of ['before', 'story', 'resonance', 'offer']) {
      await page.locator(`[data-lens="${lens}"]`).click();
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true);
      const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
      expect(results.violations).toEqual([]);
    }
  });
}
