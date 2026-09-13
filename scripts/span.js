/**
 * Mesure l'empattement horizontal d'une ligne de texte (maquette vs rendu).
 * Le rapport des largeurs donne directement le facteur à appliquer au corps.
 *
 *   node scripts/span.js home 459 464
 */
const path = require("node:path");
const sharp = require("sharp");
const OUT = process.env.SHOT_DIR || "/tmp/em-render";

async function span(buf, y0, y1, x0, x1) {
  const img = sharp(buf);
  const { width, height } = await img.metadata();
  const left = x0 ?? 0;
  const w = (x1 ?? width - 1) - left + 1;
  const top = Math.min(y0, height - 1);
  const h = Math.max(1, Math.min(y1, height - 1) - top + 1);
  const { data, info } = await img.extract({ left, top, width: w, height: h }).grayscale().raw().toBuffer({ resolveWithObject: true });
  const hist = new Array(256).fill(0);
  for (let i = 0; i < data.length; i += info.channels) hist[data[i]]++;
  let acc = 0, bg = 0;
  for (let v = 0; v < 256; v++) { acc += hist[v]; if (acc > (info.width * info.height) / 2) { bg = v; break; } }
  let min = null, max = null;
  for (let x = 0; x < info.width; x++) {
    let ink = false;
    for (let y = 0; y < info.height; y++) if (Math.abs(data[(y * info.width + x) * info.channels] - bg) > 34) { ink = true; break; }
    if (ink) { if (min === null) min = x; max = x; }
  }
  return min === null ? null : { x0: left + min, x1: left + max, w: max - min + 1, mid: left + (min + max) / 2 };
}

(async () => {
  const [name, y0, y1, ry0, ry1, x0, x1] = process.argv.slice(2);
  const ref = path.join(__dirname, "..", "public", "references", `${name}.png`);
  const refMeta = await sharp(ref).metadata();
  const scaled = await sharp(path.join(OUT, `${name}.png`)).resize({ width: refMeta.width }).png().toBuffer();
  const a = await span(ref, +y0, +y1, x0 && +x0, x1 && +x1);
  const b = await span(scaled, +(ry0 ?? y0), +(ry1 ?? y1), x0 && +x0, x1 && +x1);
  const f = (o) => (o ? `x ${o.x0}..${o.x1}  w ${o.w}  centre ${o.mid.toFixed(1)}` : "—");
  console.log("maquette", f(a));
  console.log("rendu   ", f(b));
  if (a && b) console.log("facteur ", (a.w / b.w).toFixed(3));
})();
