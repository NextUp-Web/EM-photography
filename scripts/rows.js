/**
 * Liste les lignes d'encre (texte / filets) d'une tranche de page, pour la
 * maquette et pour le rendu ramené à la même largeur. Sert à caler les
 * hauteurs de texte, les interlignes et les espacements verticaux.
 *
 *   node scripts/rows.js home 432 810 [x0 x1]
 */
const path = require("node:path");
const sharp = require("sharp");
const OUT = process.env.SHOT_DIR || "/tmp/em-render";

async function runs(buf, y0, y1, x0, x1) {
  const img = sharp(buf);
  const { width, height } = await img.metadata();
  const top = Math.min(y0, height - 1);
  const h = Math.max(1, Math.min(y1, height - 1) - top + 1);
  const left = x0 ?? 0;
  const w = (x1 ?? width - 1) - left + 1;
  const { data, info } = await img.extract({ left, top, width: w, height: h }).grayscale().raw().toBuffer({ resolveWithObject: true });
  // fond = valeur médiane de la tranche
  const hist = new Array(256).fill(0);
  for (let i = 0; i < data.length; i += info.channels) hist[data[i]]++;
  let acc = 0, bg = 0;
  const total = info.width * info.height;
  for (let v = 0; v < 256; v++) { acc += hist[v]; if (acc > total / 2) { bg = v; break; } }
  const out = [];
  let start = null;
  for (let y = 0; y < info.height; y++) {
    let n = 0;
    for (let x = 0; x < info.width; x++) if (Math.abs(data[(y * info.width + x) * info.channels] - bg) > 34) n++;
    const on = n > 2;
    if (on && start === null) start = y;
    if (!on && start !== null) { out.push([top + start, top + y - 1]); start = null; }
  }
  if (start !== null) out.push([top + start, top + info.height - 1]);
  return { bg, out };
}

(async () => {
  const [name, y0, y1, x0, x1] = process.argv.slice(2);
  const ref = path.join(__dirname, "..", "public", "references", `${name}.png`);
  const refMeta = await sharp(ref).metadata();
  const scaled = await sharp(path.join(OUT, `${name}.png`)).resize({ width: refMeta.width }).png().toBuffer();
  const a = await runs(ref, +y0, +y1, x0 && +x0, x1 && +x1);
  const b = await runs(scaled, +y0, +y1, x0 && +x0, x1 && +x1);
  const f = (r) => (r ? `${String(r[0]).padStart(4)}..${String(r[1]).padStart(4)} (${r[1] - r[0] + 1})` : "—");
  console.log(`# ${name} ${y0}..${y1}   fond maquette ${a.bg} / rendu ${b.bg}`);
  for (let i = 0; i < Math.max(a.out.length, b.out.length); i++)
    console.log(String(i).padStart(3), f(a.out[i]).padEnd(20), f(b.out[i]));
})();
