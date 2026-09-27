import Link from "next/link";
import Figure from "@/components/ui/Figure";
import { PORTFOLIO_CLOSING, PORTFOLIO_GRID } from "@/lib/data";
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
 * its title, centred, then a grid of photographs in two staggered columns
 * on a narrower measure, and the photograph-with-invitation that closes it.
 */
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

      {/* ---------- The grid — two staggered columns ---------- */}
      <section className={styles.grid} aria-label="Photographs">
        {[PORTFOLIO_GRID.left, PORTFOLIO_GRID.right].map((column, side) => (
          <div key={side} className={styles.column}>
            {column.map((photo) => (
              <Figure
                key={photo.src}
                photo={photo}
                ratio={photo.ratio ?? 1}
                sizes="(max-width: 860px) 50vw, 460px"
              />
            ))}
          </div>
        ))}
      </section>

      {/* ---------- The invitation — one monochrome photograph ---------- */}
      <section className={styles.closing} aria-labelledby="portfolio-invite">
        <Figure
          photo={PORTFOLIO_CLOSING}
          ratio={2.8}
          mobileRatio={0.62}
          sizes="100vw"
          className={styles.closingFigure}
        />
        <div className={styles.closingText}>
          <p className={`label ${styles.closingLabel}`}>
            Let&rsquo;s create something timeless
          </p>
          <h2 className={styles.closingTitle} id="portfolio-invite">
            Some moments
            <br />
            are meant to remain.
          </h2>
          <Link href="/contact" className={`btn btn-light ${styles.closingCta}`}>
            Enquire
          </Link>
        </div>
      </section>
    </div>
  );
}
