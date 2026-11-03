import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdir, readFile, writeFile, access, readdir } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';

const root = fileURLToPath(new URL('../', import.meta.url));
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const names = ['landing-page-story', 'landing-page-resonance', 'landing-page-offer'];
async function relativeFiles(path, prefix = '') {
  const result = [];
  for (const entry of await readdir(path, { withFileTypes: true })) {
    const relative = prefix + entry.name;
    if (entry.isDirectory()) result.push(...await relativeFiles(join(path, entry.name), relative + '/'));
    else result.push(relative);
  }
  return result.sort();
}

test('a release removes stale files and all four archives contain the exact current skills', async () => {
  const stale = resolve(root, 'dist/site/stale-preview.txt');
  await mkdir(resolve(root, 'dist/site'), { recursive: true });
  await writeFile(stale, 'This old build must not ship.');
  execFileSync(process.execPath, ['scripts/package.mjs'], { cwd: root, stdio: 'pipe' });
  await assert.rejects(access(stale), { code: 'ENOENT' });
  const sourceFiles = await relativeFiles(resolve(root, 'site'));
  assert.deepEqual(await relativeFiles(resolve(root, 'dist/site')), [...sourceFiles, ...(sourceFiles.includes('.nojekyll') ? [] : ['.nojekyll'])].sort());
  for (const relative of sourceFiles) assert.equal(hash(await readFile(resolve(root, 'site', relative))), hash(await readFile(resolve(root, 'dist/site', relative))), `Different deployment bytes: ${relative}`);
  const checksums = new Map((await readFile(resolve(root, 'dist/SHA256SUMS'), 'utf8')).trim().split('\n').map(line => { const [sum, file] = line.split(/\s+/); return [file, sum]; }));
  for (const name of [...names, 'landing-page-lab']) {
    const archive = await readFile(resolve(root, `dist/${name}.zip`));
    assert.equal(hash(archive), hash(await readFile(resolve(root, `site/downloads/${name}.zip`))));
    assert.equal(hash(archive), hash(await readFile(resolve(root, `dist/site/downloads/${name}.zip`))));
    assert.equal(checksums.get(`${name}.zip`), hash(archive));
    const listing = execFileSync('unzip', ['-Z1', `dist/${name}.zip`], { cwd: root, encoding: 'utf8' });
    assert.match(listing, /LICENSE/);
    assert.match(listing, /CREDITS.md/);
  }
  for (const name of names) {
    for (const relative of await relativeFiles(resolve(root, 'skills', name))) {
      const actual = await readFile(resolve(root, 'skills', name, relative));
      for (const [zip, entry] of [[`dist/${name}.zip`, `${name}/${relative}`], ['dist/landing-page-lab.zip', `landing-page-lab/skills/${name}/${relative}`]]) {
        const packed = execFileSync('unzip', ['-p', zip, entry], { cwd: root });
        assert.equal(hash(packed), hash(actual), `${zip} has stale ${entry}`);
      }
    }
  }
  const firstSums = await readFile(resolve(root, 'dist/SHA256SUMS'), 'utf8');
  execFileSync(process.execPath, ['scripts/package.mjs'], { cwd: root, stdio: 'pipe' });
  assert.equal(await readFile(resolve(root, 'dist/SHA256SUMS'), 'utf8'), firstSums, 'Unchanged source must rebuild to identical archive bytes.');
});
