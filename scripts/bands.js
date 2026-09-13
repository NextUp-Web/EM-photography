/**
 * Liste les bandes horizontales d'une page (fond ivoire / blanc / noir /
 * photo) pour la maquette et pour le rendu, afin de comparer les hauteurs
 * de section. Lecture faite sur la colonne de gauche, hors gouttière.
 *
 *   node scripts/bands.js home
 */
const path = require("node:path");
const sharp = require("sharp");
const OUT = process.env.SHOT_DIR || "/tmp/em-render";

async function strip(input) {
  const img = sharp(input);
  const { width, height } = await img.metadata();
  const { data, info } = await img.extract({ left: 1, top: 0, width: 3, height }).raw().toBuffer({ resolveWithObject: true });
  const ch = info.channels;
  const rows = [];
  for (let y = 0; y < height; y++) {
    const i = (y * 3 + 1) * ch;
    rows.push([data[i], data[i + 1], data[i + 2]]);
  }
  const out = [];
  let start = 0;
  const near = (a, b) => Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]) + Math.abs(a[2] - b[2]) < 14;
  for (let y = 1; y <= height; y++) {
    if (y === height || !near(rows[y], rows[start])) {
      if (y - start > 6) out.push({ y0: start, y1: y - 1, h: y - start, c: rows[start] });
      start = y;
    }
  }
  return { width, height, out };
}

(async () => {
  const name = process.argv[2];
  const ref = path.join(__dirname, "..", "public", "references", `${name}.png`);
  const refMeta = await sharp(ref).metadata();
  const scaled = await sharp(path.join(OUT, `${name}.png`)).resize({ width: refMeta.width }).png().toBuffer();
  const a = await strip(ref);
  const b = await strip(scaled);
  const label = (s) => `y${String(s.y0).padStart(4)}..${String(s.y1).padStart(4)} h${String(s.h).padStart(4)} rgb(${s.c.join(",")})`;
  console.log(`# ${name} — maquette ${a.height}px / rendu ${b.height}px`);
  const n = Math.max(a.out.length, b.out.length);
  for (let i = 0; i < n; i++)
    console.log(String(i).padStart(3), (a.out[i] ? label(a.out[i]) : "—").padEnd(34), b.out[i] ? label(b.out[i]) : "—");
})();
