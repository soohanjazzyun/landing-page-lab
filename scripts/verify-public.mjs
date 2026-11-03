#!/usr/bin/env node
import { readdir, readFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';

const root = fileURLToPath(new URL('../', import.meta.url));
const base = new URL(process.argv[2] || 'https://soohanjazzyun.github.io/landing-page-lab/');
if (base.protocol !== 'https:') throw new Error('Use the HTTPS public deployment URL.');
if (!base.pathname.endsWith('/')) base.pathname += '/';
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
async function files(dir, prefix = '') {
  const all = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) all.push(...await files(join(dir, entry.name), `${prefix}${entry.name}/`));
    else if (entry.isFile()) all.push(prefix + entry.name);
    else throw new Error('Unexpected non-file in generated site.');
  }
  return all.sort();
}
const generated = resolve(root, 'dist/site');
const paths = await files(generated);
for (let i = 0; i < paths.length; i += 4) {
  await Promise.all(paths.slice(i, i + 4).map(async path => {
    const expected = await readFile(join(generated, path));
    const url = new URL(path, base);
    url.searchParams.set('release', hash(expected).slice(0, 12));
    const response = await fetch(url, { signal: AbortSignal.timeout(20_000) });
    if (!response.ok) throw new Error(`${path}: HTTP ${response.status}`);
    if (hash(Buffer.from(await response.arrayBuffer())) !== hash(expected)) throw new Error(`${path}: public bytes differ from the built artifact; deployment may still be propagating.`);
  }));
}
process.stdout.write(`Verified ${paths.length} public files against the built artifact, including all four ZIPs.\n${base.href}\n`);
