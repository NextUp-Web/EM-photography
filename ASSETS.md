# Photography assets

No original photographs have been supplied for this project. The logo and every
photograph on the site were **extracted from the PNG presentation boards** that
came with the earlier brief, using `scripts/extract-assets.js`.

The originals stay untouched in `public/images/` (names with spaces and
accents); clean-named working copies live in `public/references/`.

## Extraction

```bash
npm install -D sharp
node scripts/extract-assets.js
```

It produces:

- **`public/brand/em-logo-black.png` / `em-logo-white.png`** — the EM monogram,
  cut out of the identity board by luminance threshold and cropped to its ink
  box. The header, the mobile menu and the favicon all use this file; the
  lockup is never re-typed with a font.
- **`public/images/<page>/*.jpg`** — each photographic area of the boards,
  cropped to measured coordinates, enlarged ×3 (lanczos) and lightly sharpened.

## Known limitations

- The boards are only 971 px wide, so the extracted photographs are softer than
  originals — most visible on the images that run the full content width
  (`contact/closing-01.jpg`, `contact/closing-03.jpg`). Dropping the original
  photographs in at the same paths replaces them without touching any code.
- Every extracted photograph is **black and white**. The current art direction
  mixes warm muted colour with selected monochrome; the colour half of that mix
  needs the original colour files.

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
