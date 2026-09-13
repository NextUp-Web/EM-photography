/**
 * Relevé du bandeau d'accueil : la maquette et le rendu sont mesurés par le
 * même code, sur la même largeur (971 px, celle des maquettes), pour que les
 * écarts lus soient des écarts de mise en page et non de méthode.
 *
 *   npm run dev
 *   node scripts/hero.js
 *
 * Chaque ligne compare une cote d'encre — bord du bandeau, hauteur de
 * capitale, largeur de ligne, filet, surtitre — et non une boîte du DOM : ce
 * qui compte est ce que l'œil voit à l'écran.
 *
 * Dépendances hors package.json : playwright (voir ASSETS.md).
 */
const path = require("node:path");
const { chromium } = require("playwright");
const sharp = require("sharp");

const BASE = process.env.BASE_URL || "http://127.0.0.1:3000";
const WIDTH = Number(process.env.SHOT_WIDTH || 1440);
const REF = path.join(__dirname, "..", "public", "references", "home.png");
/** Largeur des maquettes : toutes les cotes ci-dessous sont dans ce repère. */
const PLATE = 971;

/** Une image ramenée à la largeur des maquettes, interrogeable au pixel. */
async function read(input) {
  const { data, info } = await sharp(input)
    .resize({ width: PLATE })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width, channels } = info;
  return {
    width,
    height: info.height,
    lum(x, y) {
      const i = (y * width + x) * channels;
      return 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2];
    },
  };
}

/**
 * Le filet sous le titre est un trait d'un pixel, bien plus discret que le
 * texte : aucun seuil absolu ne le sépare du fond sur les deux images. On le
 * cherche donc par contraste local — la ligne, dans l'intervalle entre le
 * titre et le surtitre, dont le centre s'éclaircit le plus par rapport à ses
 * abords immédiats — puis on relève son étendue à mi-hauteur de ce contraste.
 */
function findRule(img, y0, y1, xMid0, xMid1) {
  const mean = (y, a, b) => {
    let t = 0;
    for (let x = a; x <= b; x += 1) t += img.lum(x, y);
    return t / (b - a + 1);
  };
  let best = null;
  for (let y = y0; y <= y1; y += 1) {
    const sides = (mean(y, xMid0 - 40, xMid0 - 10) + mean(y, xMid1 + 10, xMid1 + 40)) / 2;
    const lift = mean(y, xMid0, xMid1) - sides;
    if (!best || lift > best.lift) best = { y, lift, sides };
  }
  if (!best || best.lift < 8) return null;

  const cut = best.sides + best.lift / 2;
  let left = Infinity, right = -1;
  for (let x = xMid0 - 40; x <= xMid1 + 40; x += 1) {
    if (img.lum(x, best.y) > cut) {
      if (x < left) left = x;
      if (x > right) right = x;
    }
  }
  if (right < 0) return null;
  return { top: best.y, bottom: best.y, left, right, width: right - left + 1, center: (left + right) / 2 };
}

/** Boîte d'encre claire d'une tranche horizontale. */
function inkBand(img, y0, y1, x0, x1, threshold) {
  let left = Infinity, right = -1, top = Infinity, bottom = -1;
  for (let y = y0; y <= y1; y += 1) {
    for (let x = x0; x <= x1; x += 1) {
      if (img.lum(x, y) > threshold) {
        if (x < left) left = x;
        if (x > right) right = x;
        if (y < top) top = y;
        if (y > bottom) bottom = y;
      }
    }
  }
  if (right < 0) return null;
  return { top, bottom, left, right, width: right - left + 1, center: (left + right) / 2 };
}

/**
 * Le titre est blanc sur une photographie qui porte elle aussi des zones
 * claires — ciel, lac, voile. On ne retient donc que les pixels clairs qui
 * appartiennent à un *trait* : ceux dont le voisinage horizontal immédiat
 * retombe dans le sombre. Les grandes plages lumineuses du fond sont écartées,
 * les fûts et déliés des lettres sont gardés.
 */
function isStroke(img, x, y, threshold) {
  const here = img.lum(x, y);
  if (here <= threshold) return false;
  for (let dx = -14; dx <= 14; dx += 1) {
    const sx = x + dx;
    if (sx >= 0 && sx < img.width && img.lum(sx, y) < here - 55) return true;
  }
  return false;
}

/** Groupes de lignes contenant du texte clair, du haut vers le bas. */
function textRows(img, y0, y1, x0, x1, threshold, minCount) {
  const groups = [];
  let current = null;
  for (let y = y0; y <= y1; y += 1) {
    let count = 0, left = Infinity, right = -1;
    for (let x = x0; x <= x1; x += 1) {
      if (isStroke(img, x, y, threshold)) {
        count += 1;
        if (x < left) left = x;
        if (x > right) right = x;
      }
    }
    if (count >= minCount) {
      if (!current) current = { top: y, bottom: y, left, right };
      current.bottom = y;
      current.left = Math.min(current.left, left);
      current.right = Math.max(current.right, right);
    } else if (current) {
      groups.push(current);
      current = null;
    }
  }
  if (current) groups.push(current);
  return groups.map((g) => ({
    ...g,
    width: g.right - g.left + 1,
    center: (g.left + g.right) / 2,
  }));
}

/** Toutes les cotes du bandeau, lues sur une image de 971 px de large. */
function measure(img) {
  // Bord bas de l'en-tête : première ligne sombre de la colonne de gauche.
  let bandTop = 0;
  for (let y = 1; y < 200; y += 1) {
    if (img.lum(3, y - 1) - img.lum(3, y) > 40) { bandTop = y; break; }
  }
  // Bas du bandeau : retour au fond ivoire de la section suivante.
  let bandBottom = bandTop;
  for (let y = bandTop + 100; y < img.height - 4; y += 1) {
    if (img.lum(3, y) > 240 && img.lum(3, y + 3) > 240) { bandBottom = y - 1; break; }
  }

  // Les deux lignes du titre puis le surtitre : seuls les groupes assez larges
  // pour être une ligne de texte sont retenus, le reste est du fond.
  const [l1, l2] = textRows(img, bandTop + 120, bandBottom - 5, 250, 760, 210, 5)
    .filter((g) => g.width >= 150);
  // Le surtitre est plus fin et plus discret que le titre : il demande un
  // seuil plus bas, appliqué sous la deuxième ligne pour éviter toute confusion.
  const [meta] = l2
    ? textRows(img, l2.bottom + 8, bandBottom - 5, 280, 700, 185, 5).filter((g) => g.width >= 150)
    : [];

  const rule = l2 && meta ? findRule(img, l2.bottom + 5, meta.top - 5, 465, 505) : null;

  return { bandTop, bandBottom, l1, l2, rule, meta };
}

const fmt = (v) => (v === null || v === undefined ? "     —" : v.toFixed(1).padStart(6));

function report(ref, got) {
  const rows = [
    ["hauteur en-tête", ref.bandTop, got.bandTop],
    ["bas du bandeau", ref.bandBottom, got.bandBottom],
    ["titre L1 haut", ref.l1?.top, got.l1?.top],
    ["titre L1 bas", ref.l1?.bottom, got.l1?.bottom],
    ["titre L1 largeur", ref.l1?.width, got.l1?.width],
    ["titre L1 centre", ref.l1?.center, got.l1?.center],
    ["titre L2 haut", ref.l2?.top, got.l2?.top],
    ["titre L2 largeur", ref.l2?.width, got.l2?.width],
    ["titre L2 centre", ref.l2?.center, got.l2?.center],
    ["filet y", ref.rule?.top, got.rule?.top],
    ["filet largeur", ref.rule?.width, got.rule?.width],
    ["filet centre", ref.rule?.center, got.rule?.center],
    ["surtitre haut", ref.meta?.top, got.meta?.top],
    ["surtitre largeur", ref.meta?.width, got.meta?.width],
    ["surtitre centre", ref.meta?.center, got.meta?.center],
  ];
  console.log(`${"cote".padEnd(18)}${"maquette".padStart(9)}${"rendu".padStart(9)}${"écart".padStart(9)}`);
  let worst = 0;
  for (const [name, a, b] of rows) {
    const gap = a == null || b == null ? null : b - a;
    if (gap !== null) worst = Math.max(worst, Math.abs(gap));
    const flag = gap !== null && Math.abs(gap) >= 2 ? "  ←" : "";
    console.log(
      `${name.padEnd(18)}${fmt(a)}${fmt(b)}${gap === null ? "     —" : (gap >= 0 ? "+" : "") + gap.toFixed(1).padStart(5)}${flag}`
    );
  }
  console.log(`\nécart maximal : ${worst.toFixed(1)} px (repère maquette, 971 px)`);
}

(async () => {
  const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
  const page = await browser.newPage({
    viewport: { width: WIDTH, height: 900 },
    deviceScaleFactor: 1,
    reducedMotion: "reduce",
  });
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(300);
  const shot = await page.screenshot();
  await browser.close();

  report(measure(await read(REF)), measure(await read(shot)));
})();
