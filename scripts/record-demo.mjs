#!/usr/bin/env node
import { chromium } from '@playwright/test';
import { mkdir, rename } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
await mkdir(resolve(root, '.local/video'), { recursive: true });
const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1280, height: 980 }, deviceScaleFactor: 1, recordVideo: { dir: resolve(root, '.local/video'), size: { width: 1280, height: 980 } } });
const page = await context.newPage();
await page.goto('http://127.0.0.1:4173', { waitUntil: 'networkidle' });
for (const direction of ['before', 'story', 'resonance', 'offer']) {
  await page.locator(`[data-direction="${direction}"]`).click();
  await page.waitForTimeout(3500);
}
await page.locator('#examples').scrollIntoViewIfNeeded();
await page.locator('#tab-copy').click();
await page.waitForTimeout(2500);
await page.locator('#tab-build').click();
await page.waitForTimeout(2500);
await page.locator('#workbench').scrollIntoViewIfNeeded();
await page.locator('#load-example').click();
await page.getByRole('button', { name: 'Make my agent prompt' }).click();
await page.waitForTimeout(3000);
await page.locator('#install').scrollIntoViewIfNeeded();
await page.waitForTimeout(2500);
const video = page.video();
await context.close();
await rename(await video.path(), resolve(root, '.local/demo.webm'));
await browser.close();
process.stdout.write('Recorded real comparison and task-preparation interactions (silent; authored examples).\n');
