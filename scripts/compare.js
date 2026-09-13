/**
 * Compare la géométrie d'un rendu et de sa maquette : blocs photographiques,
 * bandes sombres et hauteurs de section, ramenés à la largeur de la maquette.
 *
 *   node scripts/compare.js home
 */
const path = require("node:path");
const sharp = require("sharp");

const OUT = process.env.SHOT_DIR || "/tmp/em-render";

async function boxes(input) {
  const img = sharp(input);
  const { width, height } = await img.metadata();
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const ch = info.channels;
  const at = (x, y) => { const i = (y * width + x) * ch; return [data[i], data[i + 1], data[i + 2]]; };
  const bg = at(4, 4);
  const mask = new Uint8Array(width * height);
  for (let y = 0; y < height; y++) for (let x = 0; x < width; x++) {
    const c = at(x, y);
    mask[y * width + x] =
      Math.abs(c[0] - bg[0]) + Math.abs(c[1] - bg[1]) + Math.abs(c[2] - bg[2]) > 24 ? 1 : 0;
  }
  const R = 5;
  const ii = new Int32Array((width + 1) * (height + 1));
  for (let y = 0; y < height; y++) for (let x = 0; x < width; x++)
    ii[(y + 1) * (width + 1) + x + 1] =
      mask[y * width + x] + ii[y * (width + 1) + x + 1] + ii[(y + 1) * (width + 1) + x] - ii[y * (width + 1) + x];
  const sum = (x0, y0, x1, y1) =>
    ii[(y1 + 1) * (width + 1) + x1 + 1] - ii[y0 * (width + 1) + x1 + 1] - ii[(y1 + 1) * (width + 1) + x0] + ii[y0 * (width + 1) + x0];
  const solid = new Uint8Array(width * height);
  for (let y = R; y < height - R; y++) for (let x = R; x < width - R; x++)
    solid[y * width + x] = sum(x - R, y - R, x + R, y + R) > (2 * R + 1) ** 2 * 0.92 ? 1 : 0;
  const lab = new Int32Array(width * height);
  const found = [];
  const stack = [];
  let id = 0;
  for (let y = 0; y < height; y++) for (let x = 0; x < width; x++) {
    if (!solid[y * width + x] || lab[y * width + x]) continue;
    id++;
    let minx = x, maxx = x, miny = y, maxy = y, n = 0;
    stack.push(y * width + x); lab[y * width + x] = id;
    while (stack.length) {
      const p = stack.pop(); const py = (p / width) | 0, px = p - py * width; n++;
      if (px < minx) minx = px; if (px > maxx) maxx = px;
      if (py < miny) miny = py; if (py > maxy) maxy = py;
      if (px > 0 && solid[p - 1] && !lab[p - 1]) { lab[p - 1] = id; stack.push(p - 1); }
      if (px < width - 1 && solid[p + 1] && !lab[p + 1]) { lab[p + 1] = id; stack.push(p + 1); }
      if (py > 0 && solid[p - width] && !lab[p - width]) { lab[p - width] = id; stack.push(p - width); }
      if (py < height - 1 && solid[p + width] && !lab[p + width]) { lab[p + width] = id; stack.push(p + width); }
    }
    if (n > 2500) found.push({ x: minx - R, y: miny - R, w: maxx - minx + 1 + 2 * R, h: maxy - miny + 1 + 2 * R });
  }
  found.sort((a, b) => a.y - b.y || a.x - b.x);
  return { width, height, found };
}

(async () => {
  const name = process.argv[2];
  const ref = path.join(__dirname, "..", "public", "references", `${name}.png`);
  const shot = path.join(OUT, `${name}.png`);
  const refMeta = await sharp(ref).metadata();
  const scaled = await sharp(shot).resize({ width: refMeta.width }).png().toBuffer();

  const a = await boxes(ref);
  const b = await boxes(scaled);
  console.log(`# ${name}  ref ${a.width}x${a.height}   rendu ${b.width}x${b.height}  (Δh ${b.height - a.height})`);
  const rows = Math.max(a.found.length, b.found.length);
  const fmt = (o) => (o ? `x${String(o.x).padStart(4)} y${String(o.y).padStart(5)} w${String(o.w).padStart(4)} h${String(o.h).padStart(4)}` : "—".padEnd(28));
  console.log("  ".padEnd(4) + "MAQUETTE".padEnd(30) + "RENDU");
  for (let i = 0; i < rows; i++) console.log(String(i).padStart(3) + " " + fmt(a.found[i]).padEnd(30) + fmt(b.found[i]));
})();
