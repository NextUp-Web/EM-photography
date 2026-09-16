/**
 * Full-page captures of every route, at the desktop and mobile widths the
 * art direction is judged at.
 *
 *   node scripts/shoot.js                 # 1440 and 390
 *   SHOT_WIDTH=1280 node scripts/shoot.js
 */
const path = require("node:path");
const fs = require("node:fs/promises");
const { chromium } = require("playwright");

const BASE = process.env.BASE_URL || "http://127.0.0.1:3000";
const OUT = process.env.SHOT_DIR || "/tmp/em-render";
const WIDTHS = process.env.SHOT_WIDTH
  ? [Number(process.env.SHOT_WIDTH)]
  : [1440, 390];

const PAGES = {
  home: "/",
  about: "/about",
  portfolio: "/portfolio",
  contact: "/contact",
};

(async () => {
  const only = process.argv.slice(2);
  const names = only.length ? only : Object.keys(PAGES);
  await fs.mkdir(OUT, { recursive: true });

  const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });

  for (const width of WIDTHS) {
    const page = await browser.newPage({
      viewport: { width, height: width < 700 ? 844 : 1000 },
      deviceScaleFactor: 1,
      reducedMotion: "reduce",
    });

    for (const name of names) {
      await page.goto(BASE + PAGES[name], { waitUntil: "networkidle" });
      await page.evaluate(async () => {
        // Force every lazy image in, so full-page captures are truthful.
        for (const img of document.images) img.loading = "eager";
        await new Promise((resolve) => {
          let y = 0;
          const step = () => {
            y += window.innerHeight;
            window.scrollTo(0, y);
            if (y < document.body.scrollHeight) setTimeout(step, 60);
            else {
              window.scrollTo(0, 0);
              setTimeout(resolve, 600);
            }
          };
          step();
        });
      });
      const file = path.join(OUT, `${name}-${width}.png`);
      await page.screenshot({ path: file, fullPage: true });
      console.log(file);
    }

    await page.close();
  }

  await browser.close();
})();
