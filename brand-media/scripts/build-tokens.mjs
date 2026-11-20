// Erzeugt website/src/styles/tokens.css aus brand-media/tokens/tokens.json
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = new URL('../../', import.meta.url);
const tokens = JSON.parse(await readFile(new URL('brand-media/tokens/tokens.json', root), 'utf8'));

const lines = [];
for (const [name, value] of Object.entries(tokens.color)) lines.push(`  --color-${name}: ${value};`);
for (const [name, value] of Object.entries(tokens.font)) lines.push(`  --font-${name}: ${value};`);
for (const [name, value] of Object.entries(tokens.radius)) lines.push(`  --radius-${name}: ${value};`);

const css = `/* AUTOMATISCH ERZEUGT aus brand-media/tokens/tokens.json – nicht von Hand ändern.
   Neu erzeugen mit: npm run tokens  (Status: ${tokens.status}) */
@theme {
${lines.join('\n')}
}
`;

const out = new URL('website/src/styles/tokens.css', root);
await writeFile(out, css);
console.log(`✓ ${fileURLToPath(out)} geschrieben`);
