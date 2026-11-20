// Launch-Schutz: listet offene "TODO"-Platzhalter in Projektdaten und Inhalten.
// - `npm run todos`  → nur auflisten
// - im Build: wenn launch.ready = true und noch TODOs existieren → Build bricht ab.
import { readFile, readdir } from 'node:fs/promises';
import { join, relative } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const listOnly = process.argv.includes('--list');
const files = ['src/config/site.ts', 'src/i18n/ui.ts'];

async function walk(dir) {
  for (const e of await readdir(join(root, dir), { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) await walk(p);
    else if (p.endsWith('.md')) files.push(p);
  }
}
await walk('src/content');

const hits = [];
for (const f of files) {
  const lines = (await readFile(join(root, f), 'utf8')).split('\n');
  lines.forEach((line, i) => {
    // Kommentarzeilen, die das TODO-System nur erklären, ignorieren
    if (/^\s*(\*|\/\/|\/\*)/.test(line)) return;
    if (/TODO/.test(line)) hits.push(`${relative(root, join(root, f))}:${i + 1}  ${line.trim().slice(0, 110)}`);
  });
}

const site = await readFile(join(root, 'src/config/site.ts'), 'utf8');
const ready = /^\s*ready:\s*true\b/m.test(site);

if (hits.length) {
  console.log(`\n${hits.length} offene TODO-Platzhalter:\n` + hits.map((h) => `  • ${h}`).join('\n') + '\n');
} else {
  console.log('✓ Keine offenen TODO-Platzhalter.');
}

if (!listOnly && ready && hits.length) {
  console.error('✗ launch.ready ist true, aber es gibt noch offene TODOs. Build abgebrochen.');
  process.exit(1);
}
if (!listOnly && !ready) {
  console.log('ℹ launch.ready = false → Seite wird mit noindex ausgeliefert.\n');
}
