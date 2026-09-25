import Link from "next/link";
import CollectionGrid from "@/components/sections/CollectionGrid";
import Figure from "@/components/ui/Figure";
import {
  PORTFOLIO_CLOSING,
  PORTFOLIO_INTRO,
  SELECTED_STORIES_INTRO,
} from "@/lib/data";
import styles from "./page.module.css";

export const metadata = {
  title: "Portfolio | EM Photography",
  description:
    "Documenting love in the softest way — selected wedding and couple stories in Switzerland, Italy and across Europe.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <div className="page page-opening">
      {/* ---------- Opening — the title, then one large photograph ---------- */}
      <div className={styles.opening}>
        <section className={styles.intro}>
          <h1 className={`display ${styles.title}`}>
            Documenting love <br className={styles.wide} />
            in the softest way.
          </h1>
          <p className={`copy ${styles.subtitle}`}>
            Where emotion, atmosphere <br className={styles.wide} />
            and a refined eye meet.
          </p>
        </section>

        <Figure
          photo={PORTFOLIO_INTRO}
          ratio={2.04}
          mobileRatio={1.12}
          sizes="(max-width: 860px) 100vw, 1080px"
          priority
        />
      </div>

      {/* ---------- Selected stories ---------- */}
      <section aria-labelledby="selected-stories">
        <div className={styles.storiesHead}>
          <h2 className={`display ${styles.storiesTitle}`} id="selected-stories">
            Selected stories
          </h2>
          <p className={`copy ${styles.storiesCopy}`}>{SELECTED_STORIES_INTRO}</p>
        </div>

        <CollectionGrid />
      </section>

      {/* ---------- The invitation — one large monochrome photograph ---------- */}
      <section className={styles.closing} aria-label="Some stories are meant to stay">
        <Figure
          photo={PORTFOLIO_CLOSING}
          ratio={1.9}
          mobileRatio={0.8}
          sizes="(max-width: 860px) 100vw, 1080px"
          className={styles.closingFigure}
        />
        <div className={styles.closingInner}>
          <p className={`display ${styles.closingTitle}`}>
            Some stories are <br />
            Meant to stay
          </p>
          <Link href="/contact" className={`btn btn-light ${styles.closingCta}`}>
            Enquire
          </Link>
        </div>
      </section>
    </div>
  );
}
