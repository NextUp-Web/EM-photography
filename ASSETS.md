# Design source & photography assets

The site reproduces four client mockups (Home / About / Portfolio / Contact,
each showing a desktop and a phone screen). Those mockups are the source of
truth for layout, copy, colour and type. Where the accompanying Word document
("Contenu site web.docx") disagrees with a mockup, the mockup wins — for
example the About headline reads *A quiet eye for what unfolds naturally* and
the photographer is **Emma**.

## How the design was measured

Nothing in `app/globals.css` is a guess. Each mockup panel was scanned for the
pixel boundaries of its photographs, columns and text lines; the width of a
printed line of type was then divided by the width of the same string set at
16px in the live fonts, which gives its real size. Those sizes are expressed in
`vw` so that a 1440px viewport lands exactly on the measured value, with
`clamp()` floors and a separate set of values under 860px taken the same way
from the phone screens.

Palette, straight from the client: warm white `#FAF9F6`, ivory `#F4F1EB`,
soft black `#191816`, warm grey `#AAA59D`.

Type, per the client's brief (`Polices.docx`): **Bodoni Moda** — a
Didot-class editorial serif — for every headline, paragraph and button, in
Regular and Italic; **Montserrat** (600, widely tracked) for the small
uppercase titles, the navigation, the labels and the form; and **Sacramento**
for the handwritten signature on About. All three are loaded through
`next/font/google`.

Spacing is no longer taken from the mockups. The client asked for a far
slower rhythm, so every section is separated by the `--section` token
(96–190px desktop, 76–112px phone) and nothing on the page touches anything
else.

## The logo

`public/brand/em-logo-black.png` is the client's own artwork — the interlocked
EM monogram over PHOTOGRAPHY. It is used in the header, the footer, the home
page's closing sign-off and as the favicon, never re-typed with a font.
`em-logo-white.png` is the same lockup in white: it sets the home hero and the
header while the header rides over that hero.

Navigation is one burger on every platform, opening a full-screen panel —
Home, Portfolio, About, Contact, in that order.

## Photography

Every photograph on the site is an existing repository asset under
`public/images/v3/`. No stock image and no placeholder is used. `lib/data.ts`
holds one entry per frame the mockups print, with the file, the alt text, the
`object-position` that reproduces the mockup's crop, and a `bw` flag where the
mockup prints a frame monochrome — that applies a CSS `grayscale()` filter and
leaves the file on disk untouched.

The mockups were rendered with a photo set that is not in the repository, so
each slot uses the closest existing frame of the same subject, orientation and
light. Two are worth naming:

- the Portfolio closing band is monochrome, where the mockup shows the same
  embrace in warm colour — only the monochrome original exists;
- the Home *Selected stories* gallery counts to twelve, as the mockup's
  `01 / 12` promises, by cycling the whole library three frames at a time.

Dropping the original photographs in at the same paths replaces them without
touching any code; the ratio each slot expects is written beside every
`Figure`.

The older art direction — `public/references/*.png`, `public/images/v3/`'s
predecessors under `public/images/<weddings|civil|maternity|birthdays|…>/` and
the extraction scripts in `scripts/extract-*.js` — is no longer referenced by
any page. It is kept on disk so nothing is lost.

## Visual QA

```bash
npm run build && npx next start          # or npm run dev
node scripts/shoot.js                    # full-page captures at 1440 and 390
SHOT_WIDTH=768 node scripts/shoot.js     # any other width
node scripts/responsive.js               # horizontal overflow, 1920 → 375
```

The capture scripts need `npm install -D playwright` (deliberately outside
`package.json` so no browser is downloaded at deploy time) and drive the
Chromium already present via `executablePath`.
