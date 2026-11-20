#!/usr/bin/env bash
# Video-Pipeline (benötigt ffmpeg): kurze Vorstellungs-/Referenzclips webfertig machen.
#   npm run video -- originals/videos/intro.mov [ziel-name]
# Ergebnis in brand-media/output/video/:
#   <name>.mp4  (H.264, max. 1080p, faststart, Lautheit −16 LUFS)
#   <name>.webm (VP9, kleiner, für moderne Browser)
#   <name>-poster.jpg (Standbild bei Sekunde 1)
# Metadaten (Ort, Gerät, Datum) werden entfernt. Große Videos NICHT ins Git,
# sondern über YouTube/Vimeo-Konto der Kundin oder Cloudflare Stream/R2 (Konto der Kundin) einbinden.
set -euo pipefail
command -v ffmpeg >/dev/null || { echo "ffmpeg fehlt (macOS: brew install ffmpeg)"; exit 1; }

in="${1:?Pfad zum Video angeben}"
name="${2:-$(basename "${in%.*}" | tr '[:upper:]' '[:lower:]' | tr -cs 'a-z0-9' '-' | sed 's/-$//')}"
cd "$(dirname "$0")/.."
out="output/video"; mkdir -p "$out"

scale="scale='min(1920,iw)':-2"
ffmpeg -y -i "$in" -map_metadata -1 -vf "$scale" -c:v libx264 -preset slow -crf 23 -pix_fmt yuv420p \
  -af loudnorm=I=-16:TP=-1.5:LRA=11 -c:a aac -b:a 128k -movflags +faststart "$out/$name.mp4"
ffmpeg -y -i "$in" -map_metadata -1 -vf "$scale" -c:v libvpx-vp9 -crf 34 -b:v 0 \
  -af loudnorm=I=-16:TP=-1.5:LRA=11 -c:a libopus -b:a 96k "$out/$name.webm"
ffmpeg -y -ss 1 -i "$in" -map_metadata -1 -frames:v 1 -vf "$scale" -q:v 3 "$out/$name-poster.jpg"
echo "✓ $out/$name.{mp4,webm} und $name-poster.jpg erstellt"
