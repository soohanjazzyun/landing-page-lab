#!/usr/bin/env node
import { readFile } from 'node:fs/promises';
import { resolve, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';

const root = fileURLToPath(new URL('../', import.meta.url));
const cases = ['current-page', 'mina-demo'];
let verified = 0;
const digest = bytes => createHash('sha256').update(bytes).digest('hex');
function original(commit, file) {
  if (!/^[a-f0-9]{40}$/.test(commit || '')) throw new Error('A recorded origin needs a full commit SHA.');
  return execFileSync('git', ['show', `${commit}:${file}`], { cwd: root, stdio: ['ignore', 'pipe', 'pipe'] });
}
for (const name of cases) {
  const folder = resolve(root, 'docs/evaluation', name);
  const manifest = JSON.parse(await readFile(resolve(folder, 'manifest.json'), 'utf8'));
  for (const [file, expected] of Object.entries(manifest.recorded_files)) {
    const target = resolve(folder, file);
    if (!target.startsWith(root.endsWith(sep) ? root : root + sep)) throw new Error(`Outside repository: ${file}`);
    const actual = digest(await readFile(target));
    if (actual !== expected) throw new Error(`${name}: recorded bytes changed: ${file}`);
    verified++;
  }
  for (const [file, expected] of Object.entries(manifest.instruction_files || {})) {
    const target = resolve(folder, file);
    if (!target.startsWith(root.endsWith(sep) ? root : root + sep)) throw new Error(`Outside repository: ${file}`);
    const actual = digest(original(manifest.instruction_commit || manifest.source_commit, relative(root, target)));
    if (actual !== expected) throw new Error(`${name}: instruction differs from recorded commit: ${file}`);
    verified++;
  }
  for (const [file, expected] of Object.entries(manifest.source_files || {})) {
    if (digest(original(manifest.source_commit, file)) !== expected) throw new Error(`${name}: source differs from recorded commit: ${file}`);
    verified++;
  }
}
for (const file of ['source.md', 'task.md', 'output.md', 'run-notes.md']) {
  const source = await readFile(resolve(root, 'docs/evaluation/mina-demo', file));
  const served = await readFile(resolve(root, 'site/cases/mina-studio/records', file));
  if (!source.equals(served)) throw new Error(`Public evidence differs from recorded execution: ${file}`);
  verified++;
}
process.stdout.write(`Passed ${verified} recorded input, versioned source/instruction, output, and public evidence checks. This checks byte fidelity, not marketing effectiveness.\n`);
