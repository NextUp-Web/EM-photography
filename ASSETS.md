# Photography assets

No original photographs have been supplied for this project. Every photograph
on the site is **cut out of the client's presentation boards**, which are the
only place those images exist:

- `public/references/maquette-desktop.jpg` — the four page panels
  (Home / About / Portfolio / Contact), 1122 × 1402
- `public/references/maquette-mobile.jpg` — the five phone screens

Those two files are the visual source of truth for the whole site. The older
eight-page boards (`public/references/*.png`) and the photographs extracted
from them (`public/images/<weddings|civil|maternity|birthdays|…>/`) belong to a
superseded art direction and are no longer referenced by any page. They are
kept on disk only so nothing is lost.

## Extraction

```bash
npm install            # sharp is a dev dependency
npm run assets:v3      # node scripts/extract-maquette.js
```

It writes `public/images/v3/` and two brand files:

- **`public/images/v3/<page>/*.jpg`** — one file per photograph, cropped to
  coordinates measured on the desktop board, enlarged ×5 (lanczos) and lightly
  sharpened. Colour is carried through untouched: the boards mix warm colour
  frames with monochrome ones and that mix *is* the art direction, so nothing
  is desaturated or tinted in code.
- **`public/images/v3/brand/some-people-brighter-days.png`** — the handwritten
  mark printed under the closing photograph of Contact, lifted to an alpha
  channel so it sits on the page background.
- **`public/brand/em-mark-black.png` / `em-mark-white.png`** — the EM monogram
  cut out of the supplied lockup, for use beside a separate word.

### Headlines painted into the photographs

The boards have each page's own headline set *into* the photograph — the hero
of Home and About, and both closing bands. The site sets that copy live, so
`scripts/lib/inpaint.js` lifts the painted version off the pixels first: the
glyphs are found as strokes markedly brighter than their surroundings and
filled by coarse-to-fine diffusion. What is left where a headline used to be
reads as a soft, out-of-focus passage — and the live headline sits back on top
of it. The boxes and thresholds are per-crop, in `CROPS`.

## Known limitations

- The boards are only 1122 px wide, so each photograph is a small crop of a
  small file. Enlarged ×5 they are soft — most visible on the three verticals
  of the About triptych and on the flowers of the Home collage, which are
  380–510 px wide at source. **Dropping the original photographs in at the same
  paths replaces them without touching any code**; the ratios each page expects
  are written next to every `Figure` and `ImageBand`.
- The repaired areas behind the four headlines cannot be recovered, only
  disguised. Original files would remove the need for the repair entirely.

## The logo

Two marks are in play and they are not the same drawing:

- `public/brand/em-logo-black.png` — the interlocked EM monogram over
  PHOTOGRAPHY, the identity artwork supplied by the client. It stays on the
  favicon.
- The **page** header and footer use the lockup the boards actually print: a
  wide high-contrast serif EM with PHOTOGRAPHY set small and widely tracked.
  That is `components/ui/Wordmark.tsx`, typeset in Instrument Serif and
  Helvetica Neue rather than re-drawn.

## Visual QA

```bash
npm run build && npx next start          # or npm run dev
node scripts/shoot.js                    # full-page captures at 1440 and 390
SHOT_WIDTH=1024 node scripts/shoot.js    # any other width
node scripts/responsive.js               # horizontal overflow, 1920 → 375
```

The capture scripts need `npm install -D playwright` (deliberately outside
`package.json` so no browser is downloaded at deploy time) and drive the
Chromium already present via `executablePath`.
