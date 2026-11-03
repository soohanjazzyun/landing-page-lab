#!/usr/bin/env node
import { cp, mkdir, mkdtemp, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';

const root = fileURLToPath(new URL('../', import.meta.url));
const dist = resolve(root, 'dist');
const names = ['landing-page-story', 'landing-page-resonance', 'landing-page-offer'];
const downloads = join(root, 'site/downloads');
const staging = await mkdtemp(join(tmpdir(), 'landing-page-lab-package-'));
const sums = [];
const credits = `# Credits and license\n\nLanding Page Lab is an independent project by Jazz.\nPublished ideas informing the three perspectives: Donald Miller, Building a StoryBrand; Seth Godin, This Is Marketing; Alex Hormozi, $100M Offers.\nNot affiliated with, certified by, or endorsed by these authors or their organizations.\nOriginal instructions and code are MIT licensed; third-party books, websites, graphics, and brands are not relicensed. No official worksheets or PDFs are included.\nThis is not a representation of legal clearance. See source history and limitations:\nhttps://github.com/soohanjazzyun/landing-page-lab/blob/main/docs/rights-review.md\n`;
await mkdir(dist, { recursive: true });
await mkdir(downloads, { recursive: true });
async function archive(name, folder) {
  const path = join(dist, `${name}.zip`);
  await rm(path, { force: true });
  execFileSync('zip', ['-qr', path, folder], { cwd: staging });
  await cp(path, join(downloads, `${name}.zip`));
  const sha = createHash('sha256').update(await readFile(path)).digest('hex');
  sums.push(`${sha}  ${name}.zip`);
}
try {
  for (const name of names) {
    await readFile(join(root, 'skills', name, 'SKILL.md'));
    await cp(join(root, 'skills', name), join(staging, name), { recursive: true, dereference: false });
    await cp(join(root, 'LICENSE'), join(staging, name, 'LICENSE'));
    await writeFile(join(staging, name, 'CREDITS.md'), credits);
    await archive(name, name);
  }
  const bundle = join(staging, 'landing-page-lab');
  await mkdir(join(bundle, 'skills'), { recursive: true });
  for (const name of names) await cp(join(staging, name), join(bundle, 'skills', name), { recursive: true });
  await cp(join(root, 'LICENSE'), join(bundle, 'LICENSE'));
  const portableNotice = (await readFile(join(root, 'NOTICE.md'), 'utf8'))
    .replace('](docs/references.md)', '](https://github.com/soohanjazzyun/landing-page-lab/blob/main/docs/references.md)');
  await writeFile(join(bundle, 'NOTICE.md'), portableNotice);
  await mkdir(join(bundle, 'docs'), { recursive: true });
  await cp(join(root, 'docs/rights-review.md'), join(bundle, 'docs/rights-review.md'));
  await writeFile(join(bundle, 'CREDITS.md'), credits);
  await archive('landing-page-lab', 'landing-page-lab');
  // Generated output must not retain assets removed from the current source.
  await rm(join(dist, 'site'), { recursive: true, force: true });
  await cp(join(root, 'site'), join(dist, 'site'), { recursive: true, force: true });
  await writeFile(join(dist, 'site/.nojekyll'), '');
  await writeFile(join(dist, 'SHA256SUMS'), sums.join('\n') + '\n');
  process.stdout.write(`Packaged ${names.length} skills, full bundle, and static site (${(await readdir(join(dist, 'site'))).length} top-level entries).\n${sums.join('\n')}\n`);
} finally { await rm(staging, { recursive: true, force: true }); }
