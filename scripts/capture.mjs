#!/usr/bin/env node
import { chromium } from '@playwright/test';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
await mkdir(resolve(root, 'assets'), { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
await page.goto('http://127.0.0.1:4173', { waitUntil: 'networkidle' });
await page.screenshot({ path: resolve(root, 'assets/demo-desktop.png') });
await page.screenshot({ path: resolve(root, 'assets/site-full.png'), fullPage: true });
for (const direction of ['before', 'story', 'resonance', 'offer']) {
  await page.locator(`[data-direction="${direction}"]`).click();
  await page.locator('.hero').screenshot({ path: resolve(root, `assets/${direction}.png`) });
}
await page.locator('[data-direction="story"]').click();
await page.locator('.hero').screenshot({ path: resolve(root, 'assets/after.png') });
await page.setViewportSize({ width: 390, height: 844 });
await page.screenshot({ path: resolve(root, 'assets/demo-mobile.png'), fullPage: true });
await page.setViewportSize({ width: 1200, height: 630 });
await page.goto('http://127.0.0.1:4173/social-card.html', { waitUntil: 'networkidle' });
await page.screenshot({ path: resolve(root, 'site/social-preview.png') });
await page.screenshot({ path: resolve(root, 'assets/social-preview.png') });
await browser.close();
process.stdout.write('Captured current desktop, mobile, four comparison states, and social card.\n');
