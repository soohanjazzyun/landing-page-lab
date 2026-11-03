#!/usr/bin/env node
import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
const root = fileURLToPath(new URL('../', import.meta.url));
const problems = [];
const excluded = new Set(['node_modules', '.git', '.local', 'dist', 'test-results', 'playwright-report', 'video']);
async function files(dir) {
  const all = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (excluded.has(entry.name)) continue;
    const path = resolve(dir, entry.name);
    if (entry.isDirectory()) all.push(...await files(path));
    else if (entry.isFile()) all.push(path);
    else problems.push(`Unexpected symlink or special file: ${path}`);
  }
  return all;
}
const all = await files(root);
for (const path of all) {
  if (path.endsWith('.mjs') || path.endsWith('.js')) {
    try { execFileSync(process.execPath, ['--check', path], { stdio: 'pipe' }); }
    catch { problems.push(`JavaScript syntax: ${path}`); }
  }
  if (!path.endsWith('.md')) continue;
  const content = await readFile(path, 'utf8');
  for (const match of content.matchAll(/(?<!!)\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g)) {
    let link = match[1];
    if (/^(?:[a-z][a-z0-9+.-]*:|#)/i.test(link)) continue;
    try { link = decodeURIComponent(link.split('#')[0]); } catch { problems.push(`Bad link encoding in ${path}`); continue; }
    if (!link) continue;
    try { await stat(resolve(dirname(path), link)); } catch { problems.push(`Missing local link in ${path.slice(root.length)}: ${match[1]}`); }
  }
}
for (const name of ['landing-page-story', 'landing-page-resonance', 'landing-page-offer']) {
  try {
    const skill = await readFile(resolve(root, `skills/${name}/SKILL.md`), 'utf8');
    const frontmatter = skill.match(/^---\r?\n([\s\S]*?)\r?\n---/m)?.[1] || '';
    if (!new RegExp(`^name: ${name}\\r?$`, 'm').test(frontmatter) || !/^description: \S/m.test(frontmatter)) problems.push(`${name}: frontmatter needs matching name and description.`);
  } catch { problems.push(`Missing skill: ${name}`); }
}
if (all.some(path => /(?:^|\/)\.env(?:\.|$)/.test(path) && !path.endsWith('.example'))) problems.push('Unexpected environment file.');
if (problems.length) { process.stderr.write(problems.join('\n') + '\n'); process.exitCode = 1; }
else process.stdout.write(`Checked ${all.length} source files: JavaScript syntax, local Markdown links, and skill entry point.\n`);
