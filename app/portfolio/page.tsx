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
    <>
      <section className={`shell ${styles.intro}`}>
        <h1 className={`display ${styles.title}`}>
          Documenting love <br className={styles.wide} />
          in the softest way.
        </h1>
        <p className={`copy ${styles.subtitle}`}>
          Where emotion, atmosphere <br className={styles.wide} />
          and a refined eye meet.
        </p>
      </section>

      {/* One very large photograph opening the page under the title. */}
      <div className={styles.lead}>
        <Figure
          photo={PORTFOLIO_INTRO}
          ratio={2.04}
          mobileRatio={1.12}
          sizes="100vw"
          priority
        />
      </div>

      {/* ---------- Selected stories ----------
          A full section's worth of white between the photograph above and
          this heading, so the reportages open on their own page of air. */}
      <section className={styles.stories} aria-labelledby="selected-stories">
        <div className={`shell ${styles.storiesHead}`}>
          <h2 className={`display ${styles.storiesTitle}`} id="selected-stories">
            Selected stories
          </h2>
          <p className={`copy ${styles.storiesCopy}`}>{SELECTED_STORIES_INTRO}</p>
        </div>

        <CollectionGrid />
      </section>

      <section className={styles.closing} aria-label="Some stories are meant to stay">
        <Figure
          photo={PORTFOLIO_CLOSING}
          ratio={1.9}
          mobileRatio={1.18}
          sizes="100vw"
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
    </>
  );
}
