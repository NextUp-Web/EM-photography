/**
 * Capture chaque page à la largeur de référence puis la juxtapose à la
 * maquette correspondante, mise à la même largeur, pour comparaison visuelle.
 *
 *   node scripts/shoot.js [page...]
 */
const path = require("node:path");
const fs = require("node:fs/promises");
const { chromium } = require("playwright");
const sharp = require("sharp");

const BASE = process.env.BASE_URL || "http://127.0.0.1:3000";
const OUT = process.env.SHOT_DIR || "/tmp/em-render";
const WIDTH = Number(process.env.SHOT_WIDTH || 1440);

const PAGES = {
  home: "/",
  portfolio: "/portfolio",
  about: "/about",
  contact: "/contact",
};

(async () => {
  const only = process.argv.slice(2);
  const names = only.length ? only : Object.keys(PAGES);
  await fs.mkdir(OUT, { recursive: true });

  const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
  const page = await browser.newPage({
    viewport: { width: WIDTH, height: 1000 },
    deviceScaleFactor: 1,
    reducedMotion: "reduce",
  });

  for (const name of names) {
    const url = BASE + PAGES[name];
    await page.goto(url, { waitUntil: "networkidle" });
    // déclenche les révélations au scroll puis revient en haut
    await page.evaluate(async () => {
      const step = window.innerHeight;
      for (let y = 0; y < document.body.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 60));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(400);
    const shot = path.join(OUT, `${name}.png`);
    await page.screenshot({ path: shot, fullPage: true });

    const ref = path.join(__dirname, "..", "public", "references", `${name}.png`);
    const refMeta = await sharp(ref).metadata();
    const mine = await sharp(shot).resize({ width: refMeta.width }).toBuffer();
    const mineMeta = await sharp(mine).metadata();
    const H = Math.max(refMeta.height, mineMeta.height);
    await sharp({
      create: { width: refMeta.width * 2 + 8, height: H, channels: 3, background: "#ff2d2d" },
    })
      .composite([
        { input: await sharp(ref).toBuffer(), left: 0, top: 0 },
        { input: mine, left: refMeta.width + 8, top: 0 },
      ])
      .png()
      .toFile(path.join(OUT, `${name}-compare.png`));

    console.log(`${name}: ${mineMeta.width}x${mineMeta.height} vs ref ${refMeta.width}x${refMeta.height}`);
  }

  await browser.close();
})();
