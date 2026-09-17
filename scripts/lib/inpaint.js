/**
 * The presentation boards have the page's headlines painted into the
 * photographs. The site sets that copy live, so the painted version has to come
 * off the pixels first.
 *
 * Glyphs are found as pixels markedly brighter than their surroundings, then
 * filled by diffusion: coarse-to-fine, each hole takes the colour bleeding in
 * from its edges. What is left where a headline used to be reads as a soft,
 * out-of-focus passage of the photograph — and the live headline sits back on
 * top of it.
 */

const sharp = require("sharp");

const clamp = (v, lo, hi) => (v < lo ? lo : v > hi ? hi : v);

function luminance(data, i) {
  return 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
}

/** Box blur of a single Float32 plane. */
function blurPlane(src, W, H, r) {
  const tmp = new Float32Array(W * H);
  const out = new Float32Array(W * H);
  for (let y = 0; y < H; y++) {
    let sum = 0;
    for (let x = -r; x <= r; x++) sum += src[y * W + clamp(x, 0, W - 1)];
    for (let x = 0; x < W; x++) {
      tmp[y * W + x] = sum / (2 * r + 1);
      sum += src[y * W + clamp(x + r + 1, 0, W - 1)] - src[y * W + clamp(x - r, 0, W - 1)];
    }
  }
  for (let x = 0; x < W; x++) {
    let sum = 0;
    for (let y = -r; y <= r; y++) sum += tmp[clamp(y, 0, H - 1) * W + x];
    for (let y = 0; y < H; y++) {
      out[y * W + x] = sum / (2 * r + 1);
      sum += tmp[clamp(y + r + 1, 0, H - 1) * W + x] - tmp[clamp(y - r, 0, H - 1) * W + x];
    }
  }
  return out;
}

/**
 * @param mask  Uint8Array, 1 where a pixel must be repainted
 * Fills the masked pixels of an RGB plane set, coarse to fine.
 */
function diffuse(planes, mask, W, H) {
  // --- coarse pass: halve until the holes are small, fill, then walk back up
  const levels = [{ planes, mask, W, H }];
  let cw = W;
  let ch = H;
  let cp = planes;
  let cm = mask;
  while (cw > 24 && ch > 24) {
    const nw = cw >> 1;
    const nh = ch >> 1;
    const np = cp.map(() => new Float32Array(nw * nh));
    const nm = new Uint8Array(nw * nh);
    for (let y = 0; y < nh; y++) {
      for (let x = 0; x < nw; x++) {
        let n = 0;
        const acc = [0, 0, 0];
        let masked = 0;
        for (let dy = 0; dy < 2; dy++) {
          for (let dx = 0; dx < 2; dx++) {
            const j = (y * 2 + dy) * cw + (x * 2 + dx);
            if (cm[j]) { masked++; continue; }
            for (let c = 0; c < 3; c++) acc[c] += cp[c][j];
            n++;
          }
        }
        const k = y * nw + x;
        if (n) for (let c = 0; c < 3; c++) np[c][k] = acc[c] / n;
        nm[k] = n === 0 ? 1 : 0;
        void masked;
      }
    }
    levels.push({ planes: np, mask: nm, W: nw, H: nh });
    cp = np; cm = nm; cw = nw; ch = nh;
  }

  // Deepest level: anything still masked takes the level average.
  {
    const top = levels[levels.length - 1];
    const avg = [0, 0, 0];
    let n = 0;
    for (let i = 0; i < top.W * top.H; i++) {
      if (top.mask[i]) continue;
      for (let c = 0; c < 3; c++) avg[c] += top.planes[c][i];
      n++;
    }
    for (let i = 0; i < top.W * top.H; i++) {
      if (!top.mask[i]) continue;
      for (let c = 0; c < 3; c++) top.planes[c][i] = n ? avg[c] / n : 128;
    }
  }

  // Walk back down, seeding each level's holes from the level above.
  for (let l = levels.length - 2; l >= 0; l--) {
    const fine = levels[l];
    const coarse = levels[l + 1];
    for (let y = 0; y < fine.H; y++) {
      for (let x = 0; x < fine.W; x++) {
        const i = y * fine.W + x;
        if (!fine.mask[i]) continue;
        const j = Math.min(coarse.H - 1, y >> 1) * coarse.W + Math.min(coarse.W - 1, x >> 1);
        for (let c = 0; c < 3; c++) fine.planes[c][i] = coarse.planes[c][j];
      }
    }
    // A few Jacobi sweeps so the seam between fill and photograph disappears.
    const sweeps = l === 0 ? 24 : 8;
    for (let s = 0; s < sweeps; s++) {
      for (let c = 0; c < 3; c++) {
        const p = fine.planes[c];
        const next = Float32Array.from(p);
        for (let y = 0; y < fine.H; y++) {
          for (let x = 0; x < fine.W; x++) {
            const i = y * fine.W + x;
            if (!fine.mask[i]) continue;
            const l4 =
              p[clamp(y - 1, 0, fine.H - 1) * fine.W + x] +
              p[clamp(y + 1, 0, fine.H - 1) * fine.W + x] +
              p[y * fine.W + clamp(x - 1, 0, fine.W - 1)] +
              p[y * fine.W + clamp(x + 1, 0, fine.W - 1)];
            next[i] = l4 / 4;
          }
        }
        fine.planes[c] = next;
      }
    }
  }

  return levels[0].planes;
}

/**
 * @param {Buffer} input       any image sharp can read
 * @param {Array}  boxes       [x0, y0, x1, y1] regions that hold set type
 * @param {object} opts        { threshold, grow, minLuminance, reach }
 * @returns {Promise<sharp.Sharp>}
 */
async function removeSetType(input, boxes, opts = {}) {
  // The set type is near-white, so an absolute floor keeps the photograph's own
  // mid-tone texture — foliage, stone, water — out of the mask.
  const { threshold = 7, grow = 4, minLuminance = 150, reach = 10 } = opts;
  const { data, info } = await sharp(input).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width: W, height: H, channels: C } = info;

  const lum = new Float32Array(W * H);
  for (let i = 0; i < W * H; i++) lum[i] = luminance(data, i * C);

  // Local background: a blur wide enough to ignore the glyphs themselves.
  const bg = blurPlane(lum, W, H, Math.max(6, Math.round(Math.min(W, H) * 0.02)));

  /*
   * Two passes. Seeds are pixels that can only be the letterform itself:
   * markedly brighter than the local background *and* near-white. Candidates
   * are everything the type touches — the letterform and the soft shadow the
   * boards set under it. Only candidates within reach of a seed are repainted,
   * which keeps the photograph's own texture (foliage, stone, water) out of it.
   */
  const seeds = new Uint8Array(W * H);
  const candidates = new Uint8Array(W * H);

  for (const [x0, y0, x1, y1] of boxes) {
    for (let y = Math.max(0, y0); y <= Math.min(H - 1, y1); y++) {
      for (let x = Math.max(0, x0); x <= Math.min(W - 1, x1); x++) {
        const i = y * W + x;
        const lift = lum[i] - bg[i];
        if (lift > threshold * 1.6 && lum[i] >= minLuminance) seeds[i] = 1;
        if (lift > threshold || lift < -threshold * 1.9) candidates[i] = 1;
      }
    }
  }

  const dilate = (plane, times) => {
    for (let g = 0; g < times; g++) {
      const prev = Uint8Array.from(plane);
      for (let y = 1; y < H - 1; y++) {
        for (let x = 1; x < W - 1; x++) {
          const i = y * W + x;
          if (prev[i]) continue;
          if (prev[i - 1] || prev[i + 1] || prev[i - W] || prev[i + W]) plane[i] = 1;
        }
      }
    }
  };

  // How far the shadow of a letterform can reach, at this enlargement.
  dilate(seeds, reach);

  const mask = new Uint8Array(W * H);
  for (let i = 0; i < W * H; i++) mask[i] = seeds[i] && candidates[i] ? 1 : 0;

  // Grow so no fringe of the glyph survives.
  dilate(mask, grow);

  const planes = [0, 1, 2].map((c) => {
    const p = new Float32Array(W * H);
    for (let i = 0; i < W * H; i++) p[i] = data[i * C + c];
    return p;
  });

  const filled = diffuse(planes, mask, W, H);

  const out = Buffer.alloc(W * H * 3);
  for (let i = 0; i < W * H; i++) {
    for (let c = 0; c < 3; c++) out[i * 3 + c] = clamp(Math.round(filled[c][i]), 0, 255);
  }

  return sharp(out, { raw: { width: W, height: H, channels: 3 } });
}

module.exports = { removeSetType };
