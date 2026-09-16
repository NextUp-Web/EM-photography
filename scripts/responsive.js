/**
 * Responsive check: reports horizontal overflow and any element wider than
 * the viewport, for every page at every target width.
 *
 *   node scripts/responsive.js
 */
const { chromium } = require("playwright");

const BASE = process.env.BASE_URL || "http://127.0.0.1:3000";
const WIDTHS = [1920, 1600, 1440, 1280, 1024, 768, 430, 390, 375];
const PAGES = ["/", "/about", "/portfolio", "/contact"];

(async () => {
  const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
  let problems = 0;
  for (const width of WIDTHS) {
    const page = await browser.newPage({ viewport: { width, height: 900 }, reducedMotion: "reduce" });
    for (const route of PAGES) {
      await page.goto(BASE + route, { waitUntil: "networkidle" });
      const report = await page.evaluate(() => {
        const w = document.documentElement.clientWidth;
        const wide = [];
        for (const el of document.querySelectorAll("body *")) {
          const r = el.getBoundingClientRect();
          if (r.width > w + 1 || r.right > w + 1 || r.left < -1) {
            if (getComputedStyle(el).position === "fixed") continue;
            wide.push(`${el.tagName.toLowerCase()}.${(el.className || "").toString().split(" ")[0]} ${Math.round(r.left)}..${Math.round(r.right)}`);
          }
        }
        return { scrollW: document.documentElement.scrollWidth, clientW: w, wide: wide.slice(0, 4) };
      });
      if (report.scrollW > report.clientW + 1) {
        problems++;
        console.log(`${String(width).padEnd(5)} ${route.padEnd(24)} scroll ${report.scrollW} > ${report.clientW}  ${report.wide.join(" | ")}`);
      }
    }
    await page.close();
  }
  console.log(problems ? `${problems} horizontal overflow(s)` : "no horizontal overflow");
  await browser.close();
})();
