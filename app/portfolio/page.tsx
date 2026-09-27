import Link from "next/link";
import SelectedStories from "@/components/sections/SelectedStories";
import Figure from "@/components/ui/Figure";
import {
  PORTFOLIO_CLOSING,
  PORTFOLIO_INTRO,
  PORTFOLIO_STRIP,
} from "@/lib/data";
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
 * its title beside one large photograph (5 / 7, as the home page splits),
 * then a row of five frames, the selected stories as a gliding strip, and the
 * photograph-with-invitation that closes it.
 */
export default function PortfolioPage() {
  return (
    <div className="page">
      {/* ---------- Opening — the title, then one large photograph ---------- */}
      <section className={styles.opening} aria-labelledby="portfolio-title">
        <div className={styles.intro}>
          <p className="label">Portfolio</p>
          <h1 className={styles.title} id="portfolio-title">
            Love, documented.
          </h1>
          <span className={styles.rule} aria-hidden="true" />
          <p className={`label ${styles.tagline}`}>
            Where emotion, atmosphere
            <br className={styles.wide} /> and a refined eye meet.
          </p>
        </div>

        <Figure
          photo={PORTFOLIO_INTRO}
          ratio={1.3}
          mobileRatio={1.1}
          sizes="(max-width: 860px) 100vw, 56vw"
          priority
        />
      </section>

      {/* ---------- Five frames in a row ---------- */}
      <section className={styles.strip} aria-label="A few frames">
        {PORTFOLIO_STRIP.map((photo) => (
          <Figure
            key={photo.src}
            photo={photo}
            ratio={1.05}
            mobileRatio={0.8}
            sizes="(max-width: 860px) 45vw, 20vw"
            className={styles.stripFrame}
          />
        ))}
      </section>

      {/* ---------- Selected stories ---------- */}
      <section aria-labelledby="selected-stories">
        <div className={styles.storiesHead}>
          <p className={`label ${styles.eyebrow}`} id="selected-stories">
            Selected stories
          </p>
        </div>

        <SelectedStories />
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
