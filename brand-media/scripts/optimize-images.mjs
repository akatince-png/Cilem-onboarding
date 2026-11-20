// Bild-Pipeline: brand-media/originals/images/*  →  website/public/media/<name>-<breite>.{avif,webp,jpg}
// - entfernt EXIF/GPS-Metadaten (Datenschutz: keine Aufnahmeorte o. Ä. veröffentlichen)
// - korrigiert Ausrichtung, konvertiert nach sRGB
// - erzeugt responsive Größen; Originale bleiben unverändert und werden NICHT committet
//
// Aufruf:  npm run images                 (alle Bilder)
//          npm run images -- portrait.jpg  (einzelne Datei)
import { readdir, mkdir, stat } from 'node:fs/promises';
import { join, parse } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = fileURLToPath(new URL('../../', import.meta.url));
const inputDir = join(root, 'brand-media/originals/images');
const outputDir = join(root, 'website/public/media');
const WIDTHS = [480, 960, 1600];
const QUALITY = { avif: 55, webp: 78, jpg: 82 };

const only = process.argv.slice(2);
await mkdir(outputDir, { recursive: true });

let files;
try {
  files = (await readdir(inputDir)).filter((f) => /\.(jpe?g|png|tiff?|webp|heic)$/i.test(f));
} catch {
  console.error(`Ordner fehlt: ${inputDir}\nOriginale aus dem Cloud-Speicher der Kundin dorthin kopieren (siehe brand-media/README.md).`);
  process.exit(1);
}
if (only.length) files = files.filter((f) => only.includes(f));
if (!files.length) { console.log('Keine Bilder gefunden.'); process.exit(0); }

for (const file of files) {
  const src = join(inputDir, file);
  const slug = parse(file).name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const meta = await sharp(src).metadata();
  const widths = WIDTHS.filter((w) => !meta.width || w <= meta.width);
  if (!widths.length && meta.width) widths.push(meta.width);

  for (const w of widths) {
    const base = sharp(src).rotate().resize({ width: w, withoutEnlargement: true }).toColorspace('srgb');
    // sharp entfernt Metadaten standardmäßig (kein .withMetadata())
    await base.clone().avif({ quality: QUALITY.avif }).toFile(join(outputDir, `${slug}-${w}.avif`));
    await base.clone().webp({ quality: QUALITY.webp }).toFile(join(outputDir, `${slug}-${w}.webp`));
    await base.clone().jpeg({ quality: QUALITY.jpg, mozjpeg: true }).toFile(join(outputDir, `${slug}-${w}.jpg`));
  }
  const size = (await stat(join(outputDir, `${slug}-${widths.at(-1)}.avif`))).size;
  console.log(`✓ ${file} → ${slug}-{${widths.join(',')}}.{avif,webp,jpg}  (größtes AVIF: ${(size / 1024).toFixed(0)} KB)`);
}
