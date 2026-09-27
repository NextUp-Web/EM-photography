import Link from "next/link";
import Figure from "@/components/ui/Figure";
import { PORTFOLIO_CLOSING, PORTFOLIO_GRID, PORTFOLIO_GRID_PHONE } from "@/lib/data";
import styles from "./page.module.css";

export const metadata = {
  title: "Portfolio | EM Photography",
  description:
    "Documenting love in the softest way — selected wedding and couple stories in Switzerland, Italy and across Europe.",
  alternates: { canonical: "/portfolio" },
};

/**
 * On the home page's system: one column on the site's measure, sections
 * separated by --gap-section, type from the one scale. The page opens on
 * its title, centred, then a cascade of photographs from margin to margin,
 * and one photograph with the invitation that closes it.
 */
/* on the desktop, item i goes to column i mod 3 */
const desktopColumns = [0, 1, 2].map((column) =>
  PORTFOLIO_GRID.flatMap((_, index) => (index % 3 === column ? [index] : [])),
);

export default function PortfolioPage() {
  return (
    <div className="page">
      {/* ---------- Opening — the title, centred ---------- */}
      <section className={styles.intro} aria-labelledby="portfolio-title">
        <p className="label">Portfolio</p>
        <h1 className={styles.title} id="portfolio-title">
          Love, documented.
        </h1>
        <span className={styles.rule} aria-hidden="true" />
        <p className={`label ${styles.tagline}`}>
          Where emotion, atmosphere
          <br className={styles.wide} /> and a refined eye meet.
        </p>
      </section>

      {/* ---------- The cascade — three columns on the desktop, two on the
          phone, from margin to margin ---------- */}
      {[desktopColumns, PORTFOLIO_GRID_PHONE].map((columns, layout) => (
        <section
          key={layout}
          className={`${styles.grid} ${layout === 0 ? styles.gridWide : styles.gridNarrow}`}
          aria-label="Photographs"
        >
          {columns.map((indices, column) => (
            <div key={column} className={styles.column}>
              {indices.map((index) => {
                const photo = PORTFOLIO_GRID[index];
                return (
                  <Figure
                    key={photo.src}
                    photo={photo}
                    ratio={photo.ratio ?? 1}
                    sizes={layout === 0 ? "33vw" : "50vw"}
                  />
                );
              })}
            </div>
          ))}
        </section>
      ))}

      {/* ---------- The invitation — one rectangle, margin to margin ---------- */}
      <section className={styles.closing} aria-labelledby="portfolio-invite">
        <Figure
          photo={PORTFOLIO_CLOSING}
          ratio={2.2}
          mobileRatio={0.8}
          sizes="100vw"
          className={styles.closingFigure}
        />
        <div className={styles.closingText}>
          <p className={`label ${styles.closingLabel}`}>
            Let&rsquo;s create something timeless
          </p>
          <h2 className={styles.closingTitle} id="portfolio-invite">
            For the moments
            <br />
            that remain.
          </h2>
          <Link href="/contact" className={`btn btn-light ${styles.closingCta}`}>
            Enquire
          </Link>
        </div>
      </section>
    </div>
  );
}
