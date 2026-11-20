# brand-media – Marke, Bilder, Videos

| Was | Wo | Befehl |
|---|---|---|
| Farben, Schriften, Radien (Brand-Tokens) | `tokens/tokens.json` | `npm run tokens` → schreibt `website/src/styles/tokens.css` |
| Fotos webfertig machen (AVIF/WebP/JPG, 3 Größen, ohne EXIF/GPS) | `originals/images/` → `website/public/media/` | `npm run images` |
| Videos webfertig machen (MP4/WebM/Poster, ohne Metadaten) | `originals/videos/` → `output/video/` | `npm run video -- originals/videos/datei.mov` |

Alle Befehle im Hauptordner des Repos ausführen.

## Grundregeln

- **Originale nie ins Git.** Sie gehören in den Cloud-Speicher der Kundin (siehe `originals/README.md`).
  Ins Repo kommen nur optimierte Web-Versionen.
- **Nutzungsrechte dokumentieren.** Für jedes Foto/Video in [`rights.md`](rights.md) eintragen, wer es
  erstellt hat und ob die Rechte auf die Kundin übertragen sind. Ohne geklärte Rechte nicht veröffentlichen.
- **Tokens sind vorläufig** (`"status": "provisional"`), bis das Branding mit der Kundin abgestimmt ist.
  Farben ändern = nur `tokens.json` bearbeiten und `npm run tokens` ausführen.
- **Schriften selbst hosten** (z. B. über `@fontsource/*`), nicht von Google Fonts laden – das ist
  datenschutzrechtlich die sichere Variante.
