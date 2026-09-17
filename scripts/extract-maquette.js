#!/usr/bin/env node
/**
 * Cuts every photograph of the client's presentation boards out of the boards
 * themselves and writes them to public/images/v3/.
 *
 * The boards are the only place these photographs exist — no originals were
 * supplied — so each crop is taken at the coordinates measured on the board and
 * enlarged with lanczos so the browser never has to upscale again. Colour is
 * carried through untouched: the boards already mix warm colour frames with
 * monochrome ones, and that mix is part of the art direction.
 *
 *   node scripts/extract-maquette.js
 */

const path = require("node:path");
const fs = require("node:fs/promises");
const sharp = require("sharp");
const { removeSetType } = require("./lib/inpaint");

const ROOT = path.join(__dirname, "..");
const DESKTOP = path.join(ROOT, "public/references/maquette-desktop.jpg");
const OUT = path.join(ROOT, "public/images/v3");

/** Enlargement factor — every crop ends up at or above its CSS display width. */
const SCALE = 5;

/**
 * left / top / width / height, in board pixels, measured on
 * public/references/maquette-desktop.jpg (1122 × 1402).
 *
 * The four page panels sit at x 16–295 (home), 305–572 (about),
 * 583–834 (portfolio) and 845–1106 (contact).
 */
const CROPS = [
  // ---------- HOME — panel 16–295, content 32–282 ----------
  {
    file: "home/hero.jpg",
    left: 16,
    top: 124,
    width: 280,
    height: 227,
    // SWITZERLAND BASED / Documenting love… / WEDDINGS · … / SCROLL
    setType: [[36, 106, 246, 226]],
    setTypeThreshold: 7,
    // The two tracked lines sit over the black of his coat, so the floor that
    // separates type from texture has to come down with them.
    setTypeMinLuminance: 96,
  },
  { file: "home/story-lead.jpg", left: 32, top: 602, width: 142, height: 148 },
  { file: "home/story-embrace.jpg", left: 180, top: 602, width: 102, height: 58 },
  { file: "home/story-flowers.jpg", left: 180, top: 666, width: 102, height: 84 },
  { file: "home/story-shore.jpg", left: 32, top: 756, width: 250, height: 58 },
  { file: "home/approach.jpg", left: 32, top: 858, width: 106, height: 114 },
  { file: "home/emma.jpg", left: 32, top: 1000, width: 106, height: 114 },
  {
    file: "home/closing.jpg",
    left: 16,
    top: 1124,
    width: 280,
    height: 98,
    // Made to be felt again. / Tell me your story. / GET IN TOUCH
    setType: [[66, 28, 218, 90]],
    setTypeThreshold: 6,
  },

  // ---------- ABOUT — panel 305–572, content 317–561 ----------
  {
    file: "about/hero.jpg",
    left: 305,
    top: 124,
    width: 268,
    height: 227,
    // I find beauty / in what is / quietly felt.
    setType: [[20, 132, 124, 210]],
    setTypeThreshold: 7,
    // The drop shadow reaches further here than anywhere else on the boards;
    // anything left of it would feed its own darkness back into the repair.
    setTypeReach: 20,
    setTypeGrow: 7,
  },
  { file: "about/portrait.jpg", left: 451, top: 370, width: 106, height: 168 },
  { file: "about/villa.jpg", left: 317, top: 736, width: 244, height: 172 },
  { file: "about/trip-flowers.jpg", left: 317, top: 1008, width: 76, height: 118 },
  { file: "about/trip-couple.jpg", left: 401, top: 1008, width: 76, height: 118 },
  { file: "about/trip-lake.jpg", left: 485, top: 1008, width: 76, height: 118 },

  // ---------- PORTFOLIO — panel 583–834, content 594–824 ----------
  { file: "portfolio/lead.jpg", left: 594, top: 304, width: 230, height: 186 },
  { file: "portfolio/pair-couple.jpg", left: 594, top: 496, width: 112, height: 134 },
  { file: "portfolio/pair-veil.jpg", left: 712, top: 496, width: 112, height: 134 },
  { file: "portfolio/detail-note.jpg", left: 594, top: 636, width: 230, height: 158 },
  { file: "portfolio/village.jpg", left: 594, top: 802, width: 230, height: 156 },
  {
    file: "portfolio/closing.jpg",
    left: 583,
    top: 1010,
    width: 252,
    height: 206,
    // Some stories deserve / to be felt again. / TELL ME YOUR STORY
    setType: [[58, 100, 196, 170]],
    setTypeThreshold: 6,
  },

  // ---------- CONTACT — panel 845–1106 ----------
  { file: "contact/hero.jpg", left: 845, top: 124, width: 262, height: 226 },
  { file: "contact/closing.jpg", left: 845, top: 890, width: 262, height: 252 },
];

/** The handwritten mark printed under the closing photograph of Contact. */
const HANDWRITING = { left: 1031, top: 1153, width: 56, height: 63 };

async function photographs() {
  for (const crop of CROPS) {
    const target = path.join(OUT, crop.file);
    await fs.mkdir(path.dirname(target), { recursive: true });

    let pipeline = sharp(DESKTOP)
      .extract({
        left: crop.left,
        top: crop.top,
        width: crop.width,
        height: crop.height,
      })
      .resize({
        width: Math.round(crop.width * SCALE),
        height: Math.round(crop.height * SCALE),
        kernel: "lanczos3",
      });

    if (crop.setType) {
      // The board paints the page's own headline into the photograph; the site
      // sets that copy live, so it is lifted off the pixels here.
      pipeline = await removeSetType(
        await pipeline.png().toBuffer(),
        crop.setType.map((b) => b.map((v) => Math.round(v * SCALE))),
        // A bright frame needs its own bar before a pixel counts as a glyph.
        {
          threshold: crop.setTypeThreshold ?? 7,
          minLuminance: crop.setTypeMinLuminance ?? 150,
          // Wide enough to swallow the soft shadow the boards set under the type.
          reach: crop.setTypeReach ?? 12,
          grow: crop.setTypeGrow ?? 5,
        },
      );
    }

    const info = await pipeline
      // Just enough to undo the softness the enlargement adds — never a look.
      .sharpen({ sigma: 0.7, m1: 0.4, m2: 0.5 })
      .jpeg({ quality: 88, chromaSubsampling: "4:4:4", mozjpeg: true })
      .toFile(target);

    console.log(
      `${crop.file.padEnd(28)} ${info.width}×${info.height}  ` +
        `ratio ${(crop.width / crop.height).toFixed(3)}`,
    );
  }
}

/**
 * The handwriting is ink on the board's ivory, so it is lifted to an alpha
 * channel: the mark keeps its own shape and sits on any background.
 */
async function handwriting() {
  const target = path.join(OUT, "brand/some-people-brighter-days.png");
  await fs.mkdir(path.dirname(target), { recursive: true });

  const S = 9;
  const { data, info } = await sharp(DESKTOP)
    .extract(HANDWRITING)
    .resize({
      width: HANDWRITING.width * S,
      height: HANDWRITING.height * S,
      kernel: "lanczos3",
    })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const px = info.width * info.height;
  const out = Buffer.alloc(px * 4);
  // Ivory reads as fully transparent, ink as fully opaque, with a soft ramp so
  // the pen keeps its tapered ends.
  const LIGHT = 236;
  const DARK = 120;

  for (let i = 0; i < px; i++) {
    const s = i * info.channels;
    const lum =
      0.299 * data[s] + 0.587 * data[s + 1] + 0.114 * data[s + 2];
    const t = Math.min(1, Math.max(0, (LIGHT - lum) / (LIGHT - DARK)));
    const d = i * 4;
    out[d] = 0x17;
    out[d + 1] = 0x16;
    out[d + 2] = 0x14;
    out[d + 3] = Math.round(t * 255);
  }

  const written = await sharp(out, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png({ compressionLevel: 9 })
    .toFile(target);

  console.log(
    `brand/some-people-brighter-days.png  ${written.width}×${written.height}`,
  );
}

/**
 * The footer and the mobile menu set the EM monogram beside the word
 * PHOTOGRAPHY on one line, so the monogram is cut out of the supplied lockup
 * rather than re-typed. Ink box measured on public/brand/em-logo-black.png.
 */
async function monogram() {
  const MARK = { left: 128, top: 0, width: 455, height: 538 };

  for (const variant of ["black", "white"]) {
    const target = path.join(ROOT, `public/brand/em-mark-${variant}.png`);
    const info = await sharp(path.join(ROOT, `public/brand/em-logo-${variant}.png`))
      .extract(MARK)
      .png({ compressionLevel: 9 })
      .toFile(target);
    console.log(`brand/em-mark-${variant}.png`.padEnd(28) + ` ${info.width}×${info.height}`);
  }
}

(async () => {
  await fs.rm(OUT, { recursive: true, force: true });
  await photographs();
  await handwriting();
  await monogram();
})();
