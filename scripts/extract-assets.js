/**
 * Extrait le logo et les photographies depuis les maquettes de référence
 * (/public/references) vers /public/brand et /public/images.
 *
 * Les maquettes sont la seule source disponible : chaque zone recadrée est
 * choisie pour ne contenir aucun texte ni élément d'interface.
 * Les fichiers d'origine ne sont jamais modifiés.
 *
 *   node scripts/extract-assets.js
 */
const fs = require("node:fs/promises");
const path = require("node:path");
const sharp = require("sharp");

const ROOT = path.join(__dirname, "..");
const REF = path.join(ROOT, "public", "references");
const IMG = path.join(ROOT, "public", "images");
const BRAND = path.join(ROOT, "public", "brand");

/** [source, x, y, w, h] — coordonnées dans la maquette 971x1619 */
const PHOTOS = {
  "home/mariages": ["home", 31, 553, 219, 201],
  "home/ceremonies-civiles": ["home", 261, 552, 220, 202],
  "home/anniversaires": ["home", 491, 552, 220, 202],
  "home/maternite-naissance": ["home", 722, 552, 218, 202],
  "home/behind-the-lens": ["home", 98, 969, 378, 214],

  "shared/dark-silk": ["birthdays", 715, 1126, 256, 157],
  "home/dark-band": ["home", 0, 805, 240, 151],
  "shared/dark-veil": ["about", 0, 1294, 340, 126],

  "portfolio/mariages": ["portfolio", 31, 453, 302, 227],
  "portfolio/ceremonies-civiles": ["portfolio", 345, 453, 281, 227],
  "portfolio/anniversaires": ["portfolio", 637, 452, 303, 229],
  "portfolio/maternite-naissance": ["portfolio", 31, 768, 448, 202],
  "portfolio/couples": ["portfolio", 490, 768, 450, 202],
  "portfolio/experience": ["portfolio", 0, 1178, 175, 112],

  "weddings/gallery-01": ["weddings", 0, 582, 187, 247],
  "weddings/gallery-02": ["weddings", 190, 581, 183, 248],
  "weddings/gallery-03": ["weddings", 376, 581, 222, 248],
  "weddings/gallery-04": ["weddings", 600, 581, 183, 248],
  "weddings/gallery-05": ["weddings", 787, 581, 184, 248],
  "weddings/inclus-preparatifs": ["weddings", 87, 897, 123, 113],
  "weddings/inclus-ceremonie": ["weddings", 307, 897, 127, 113],
  "weddings/inclus-couple": ["weddings", 538, 897, 127, 114],
  "weddings/inclus-details": ["weddings", 761, 897, 126, 113],

  "civil/bloc-ceremonie": ["civil", 30, 528, 272, 150],
  "civil/bloc-couple": ["civil", 354, 528, 263, 150],
  "civil/bloc-reportage": ["civil", 670, 528, 271, 150],
  "civil/gallery-01": ["civil", 29, 855, 170, 261],
  "civil/gallery-02": ["civil", 207, 855, 181, 261],
  "civil/gallery-03": ["civil", 395, 855, 182, 261],
  "civil/gallery-04": ["civil", 584, 855, 181, 261],
  "civil/gallery-05": ["civil", 772, 855, 171, 261],

  "birthdays/mosaic-01": ["birthdays", 26, 518, 220, 365],
  "birthdays/mosaic-02": ["birthdays", 251, 517, 242, 182],
  "birthdays/mosaic-03": ["birthdays", 495, 517, 225, 182],
  "birthdays/mosaic-04": ["birthdays", 251, 703, 242, 180],
  "birthdays/mosaic-05": ["birthdays", 495, 703, 225, 180],
  "birthdays/mosaic-06": ["birthdays", 725, 518, 220, 365],
  "birthdays/strip-decoration": ["birthdays", 39, 921, 200, 104],
  "birthdays/strip-invites": ["birthdays", 276, 921, 191, 104],
  "birthdays/strip-emotions": ["birthdays", 505, 921, 190, 104],
  "birthdays/strip-spontane": ["birthdays", 732, 921, 200, 104],
  "birthdays/quote": ["birthdays", 0, 1126, 250, 157],

  "maternity/gallery-01": ["maternity", 19, 570, 221, 221],
  "maternity/gallery-02": ["maternity", 250, 570, 232, 221],
  "maternity/gallery-03": ["maternity", 489, 568, 236, 223],
  "maternity/gallery-04": ["maternity", 731, 569, 223, 222],
  "maternity/experience": ["maternity", 830, 843, 141, 233],

  "about/portrait": ["about", 107, 398, 331, 299],
  "about/working": ["about", 45, 922, 418, 200],

  "contact/mariages": ["contact", 32, 881, 172, 141],
  "contact/ceremonies-civiles": ["contact", 215, 881, 174, 141],
  "contact/anniversaires": ["contact", 399, 881, 174, 141],
  "contact/maternite-naissance": ["contact", 584, 881, 174, 141],
  "contact/couples": ["contact", 770, 881, 171, 141],
  "contact/location": ["contact", 0, 1069, 270, 115],
  "contact/closing-01": ["contact", 0, 1307, 160, 141],
  "contact/closing-02": ["contact", 161, 1307, 198, 141],
  "contact/closing-03": ["contact", 360, 1307, 149, 141],
  "contact/closing-04": ["contact", 510, 1307, 137, 141],
  "contact/closing-05": ["contact", 648, 1307, 125, 141],
};

const SCALE = 3;

/**
 * Bandeaux d'ouverture. Les maquettes portent leur titre incrusté dans la
 * photographie : le texte est retiré par morphologie (les fines structures
 * claires de la zone indiquée sont détectées) puis comblé par diffusion, afin
 * de récupérer la composition entière sans dupliquer le texte à l'écran.
 * [source, x, y, w, h, [zones de texte y0..y1 dans le recadrage]]
 */
const HEROES = {
  "home/hero": ["home", 0, 82, 971, 350, [[165, 290]]],
  "portfolio/hero": ["portfolio", 0, 82, 971, 353, [[135, 275]]],
  "weddings/hero": ["weddings", 0, 82, 971, 355, [[170, 290]]],
  "civil/hero": ["civil", 0, 82, 971, 349, [[148, 250]]],
  "birthdays/hero": ["birthdays", 0, 82, 971, 307, [[128, 205]]],
  "maternity/hero": ["maternity", 0, 82, 971, 347, [[212, 312]]],
  "about/hero": ["about", 0, 82, 971, 289, [[112, 212]]],
  "contact/hero": ["contact", 0, 82, 971, 294, [[145, 258]]],
};

/** Ouverture morphologique en niveaux de gris (érosion puis dilatation). */
function morphOpen(src, w, h, r) {
  const pass = (input, horizontal, pick) => {
    const out = new Uint8Array(w * h);
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        let best = pick === Math.min ? 255 : 0;
        for (let d = -r; d <= r; d++) {
          const xx = horizontal ? Math.min(w - 1, Math.max(0, x + d)) : x;
          const yy = horizontal ? y : Math.min(h - 1, Math.max(0, y + d));
          best = pick(best, input[yy * w + xx]);
        }
        out[y * w + x] = best;
      }
    }
    return out;
  };
  const eroded = pass(pass(src, true, Math.min), false, Math.min);
  return pass(pass(eroded, true, Math.max), false, Math.max);
}

async function extractHeroes() {
  for (const [dest, [name, left, top, width, height, zones]] of Object.entries(HEROES)) {
    const { data, info } = await sharp(path.join(REF, `${name}.png`))
      .extract({ left, top, width, height })
      .grayscale()
      .raw()
      .toBuffer({ resolveWithObject: true });
    const w = info.width;
    const h = info.height;
    const src = new Uint8Array(w * h);
    for (let i = 0; i < w * h; i++) src[i] = data[i * info.channels];

    const opened = morphOpen(src, w, h, 3);
    const mask = new Uint8Array(w * h);
    for (const [a, b] of zones) {
      for (let y = Math.max(0, a); y <= Math.min(h - 1, b); y++) {
        for (let x = 0; x < w; x++) {
          const i = y * w + x;
          if (src[i] - opened[i] > 14) mask[i] = 1;
        }
      }
    }
    const grown = new Uint8Array(w * h);
    const R = 2;
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        if (!mask[y * w + x]) continue;
        for (let dy = -R; dy <= R; dy++) {
          for (let dx = -R; dx <= R; dx++) {
            const yy = y + dy;
            const xx = x + dx;
            if (yy >= 0 && yy < h && xx >= 0 && xx < w) grown[yy * w + xx] = 1;
          }
        }
      }
    }

    const f = Float32Array.from(src);
    for (let it = 0; it < 400; it++) {
      for (let y = 1; y < h - 1; y++) {
        for (let x = 1; x < w - 1; x++) {
          const i = y * w + x;
          if (grown[i]) f[i] = (f[i - 1] + f[i + 1] + f[i - w] + f[i + w]) / 4;
        }
      }
    }
    const plate = Buffer.alloc(w * h);
    for (let i = 0; i < w * h; i++) plate[i] = Math.round(Math.max(0, Math.min(255, f[i])));

    const out = path.join(IMG, `${dest}.jpg`);
    await fs.mkdir(path.dirname(out), { recursive: true });
    await sharp(plate, { raw: { width: w, height: h, channels: 1 } })
      .resize({ width: w * SCALE, height: h * SCALE, kernel: sharp.kernel.lanczos3 })
      .sharpen({ sigma: 1.1, m1: 0.4, m2: 0.9 })
      .jpeg({ quality: 86, chromaSubsampling: "4:4:4", mozjpeg: true })
      .toFile(out);
  }
  console.log(`${Object.keys(HEROES).length} bandeaux d'ouverture reconstruits`);
}


async function extractPhotos() {
  const cache = new Map();
  const src = (name) => {
    if (!cache.has(name)) cache.set(name, path.join(REF, `${name}.png`));
    return cache.get(name);
  };

  for (const [dest, [name, left, top, width, height]] of Object.entries(PHOTOS)) {
    const out = path.join(IMG, `${dest}.jpg`);
    await fs.mkdir(path.dirname(out), { recursive: true });
    await sharp(src(name))
      .extract({ left, top, width, height })
      .resize({
        width: Math.round(width * SCALE),
        height: Math.round(height * SCALE),
        kernel: sharp.kernel.lanczos3,
      })
      .sharpen({ sigma: 1.1, m1: 0.4, m2: 0.9 })
      .grayscale()
      .toColourspace("srgb")
      .jpeg({ quality: 86, chromaSubsampling: "4:4:4", mozjpeg: true })
      .toFile(out);
  }
  console.log(`${Object.keys(PHOTOS).length} photographies extraites`);
}

/**
 * Le monogramme EM est isolé de la planche d'identité par détourage sur la
 * luminance : le tracé original est conservé intact, seul le fond ivoire est
 * rendu transparent. Aucune police ne remplace le logo.
 */
async function extractLogo() {
  await fs.mkdir(BRAND, { recursive: true });
  const plate = sharp(path.join(REF, "moodboard.png")).extract({
    left: 4,
    top: 8,
    width: 298,
    height: 315,
  });
  const { data, info } = await plate
    .clone()
    .grayscale()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const PAPER = 224;
  const INK = 70;
  const alpha = Buffer.alloc(info.width * info.height);
  for (let i = 0; i < alpha.length; i++) {
    const l = data[i * info.channels];
    const a = Math.round((255 * (PAPER - l)) / (PAPER - INK));
    alpha[i] = Math.min(255, Math.max(0, a));
  }

  // Recadrage sur la boîte d'encre : le lockup doit pouvoir être dimensionné
  // par sa hauteur sans marge parasite. Le tracé lui-même n'est pas touché.
  let minX = info.width, maxX = 0, minY = info.height, maxY = 0;
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      if (alpha[y * info.width + x] > 12) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  const box = {
    left: minX,
    top: minY,
    width: maxX - minX + 1,
    height: maxY - minY + 1,
  };
  console.log(`  lockup ${box.width}x${box.height} (ratio ${(box.width / box.height).toFixed(3)})`);

  for (const [file, ink] of [
    ["em-logo-black.png", 17],
    ["em-logo-white.png", 255],
  ]) {
    const rgba = Buffer.alloc(info.width * info.height * 4);
    for (let i = 0; i < alpha.length; i++) {
      rgba[i * 4] = ink;
      rgba[i * 4 + 1] = ink;
      rgba[i * 4 + 2] = ink;
      rgba[i * 4 + 3] = alpha[i];
    }
    await sharp(rgba, {
      raw: { width: info.width, height: info.height, channels: 4 },
    })
      .extract(box)
      .resize({ width: box.width * 3, kernel: sharp.kernel.lanczos3 })
      .png({ compressionLevel: 9 })
      .toFile(path.join(BRAND, file));
  }
  console.log("logo EM détouré (noir + blanc)");
}

(async () => {
  await extractLogo();
  await extractPhotos();
  await extractHeroes();
})();
