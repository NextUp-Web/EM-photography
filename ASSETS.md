# Design source & photography assets

The site was first built from four client mockups (Home / About / Portfolio /
Contact, each showing a desktop and a phone screen) and has since been revised
against the client's own revision document, *Contenu site web.docx*. **That
document is now the source of truth**: where it gives a text, a composition or
a reference screenshot, it wins over the original mockups and over the older
copy on the page.

Two of its wordings are deliberate and must not be "corrected": the Home
About block reads *A quiet eve for what unfolds naturally.* and the About page
line reads *I'm Emma, the photograph behind EM Photography.* The About page's
own headline keeps *A quiet eye for what unfolds naturally*, as its reference
screenshot prints it. The photographer is **Emma**.

## Reading the revision document

Several pages of the document put two images one above the other: the
first is what the client wants, the second a capture of the site as it
was. They must not be confused. On page 1 the first image (a couple on a
terrace, *EM* over *PHOTOGRAPHY*, the italic place-line, BEGIN HERE) is
the target for the home hero; the second (*EM PHOTOGRAPHY* on one line
over two tracked sans lines) is the old version it replaces. Likewise the
image under "écris exactement tout ceci" is the whole closing band —
statement, WEDDINGS • COUPLES • LOVE STORIES and Enquire — and the About
reference lays two frames **over** the large one.

The hero, the navigation and the footer are set in **Cormorant
Garamond**, because that is the face those references print ("même
taille, police, couleur"); the rest of the site keeps Bodoni Moda and
Montserrat. Over the home hero the desktop bar prints the four links
alone, as the reference does; the lockup appears once the page scrolls,
and stays on the phone beside the burger.

## How the type is sized

Nothing below is a guess either. Each of the revision document's captures
was measured — the pixel width of a printed line, divided by the width of
that same string set in the live fonts — which gives the size the client's
reference actually uses, expressed as a percentage of the frame's width.
Those percentages are what the `vw` values in `globals.css` and the page
stylesheets carry. The main ones, at the width each reference was read at:

| element | reference | set at |
| --- | --- | --- |
| hero EM | 4.2% cap height | 6.6vw |
| hero PHOTOGRAPHY | 15% long | 1.6vw, 0.24em tracking |
| hero italic line | 30% long | 1.56vw |
| hero button | 13.2% x 3.5% | 13.2vw x 3.5vw, label 1.04vw |
| navigation | 0.76% cap height | 1.1vw |
| section titles | 3.75% | 3.75vw |
| section sub-heads | 1.90% | 1.9vw |
| body copy | 1.45–1.71% | 1.55vw |
| home ivory statement | 4.47% | 4.47vw |
| closing band caps | 5.72% | 5.72vw |
| About heading | 5.45% | 5.45vw |
| About ivory statement | 3.87% | 3.87vw |
| Observe / Guide / Preserve | 3.56% | 3.56vw |
| footer lockup height | 14% | 14vw |

Every `vw` above carries a `clamp()` floor as well, so a phone never
inherits a desktop percentage — an early cut of this work did, and set
some lines at 5px.

Where the document dictates line breaks — the Selected stories paragraph,
the two-line statements, "Some stories are / Meant to stay" — the measure
is set in `em` rather than `ch` or pixels, so the break holds at every
width instead of only at the one it was checked at.

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

Navigation splits by platform, as the revision document asks. Above 860px the
four links are printed in the bar itself — Home, Portfolio, About, Contact —
set in Bodoni Moda caps with wide tracking, white while the bar rides over the
home hero and ink once it settles. At 860px and below they collapse back into
the burger, a shade larger than before so it reads at the scale of the lockup
beside it, and it opens the same four full-screen. The bar draws no rule of
its own at any scroll position, on any page.

## Photography

Every photograph on the site is an existing repository asset under
`public/images/v3/`. No stock image and no placeholder is used. `lib/data.ts`
holds one entry per frame the mockups print, with the file, the alt text, the
`object-position` that reproduces the mockup's crop, and a `bw` flag where the
mockup prints a frame monochrome — that applies a CSS `grayscale()` filter and
leaves the file on disk untouched.

The mockups were rendered with a photo set that is not in the repository, so
each slot uses the closest existing frame of the same subject, orientation and
light. Worth naming:

- the Portfolio closing band is monochrome, where the mockup shows the same
  embrace in warm colour — only the monochrome original exists;
- the Home *Selected stories* gallery counts to twelve, as the mockup's
  `01 / 12` promises, by cycling the whole library three frames at a time;
- the home hero uses the embrace on the terrace at sunset, the library's
  closest frame to the client's generated reference (that exact photograph
  is not in the repository — dropping it in at `v3/home/hero.webp`
  replaces it);
- the Home closing band (*Let's create something meaningful.*) and the Contact
  closing frame are colour originals carrying the `bw` flag, because the
  revision document asks for monochrome there and no monochrome original of
  that subject exists; the band's frame is drawn a quarter larger from its
  left edge so the couple sits right of centre, as in the reference;
- the About page's Emma collage uses the three frames of her that exist —
  `about/portrait`, `home/emra` and `about/hero` — one wide and tall, two
  smaller ones laid over its right-hand side with a border of page.

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
