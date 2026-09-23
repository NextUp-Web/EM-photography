import CollectionGrid from "@/components/sections/CollectionGrid";
import Figure from "@/components/ui/Figure";
import { PORTFOLIO_CLOSING, SELECTED_STORIES_INTRO } from "@/lib/data";
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

      {/* ---------- Selected stories ----------
          A full section's worth of white between the line above and this
          heading, so the reportages open on their own page of air. */}
      <section className={styles.stories} aria-labelledby="selected-stories">
        <div className={`shell ${styles.storiesHead}`}>
          <p className="label">Portfolio</p>
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
          ratio={4.64}
          mobileRatio={1.48}
          sizes="100vw"
          className={styles.closingFigure}
        />
        <p className={`display ${styles.closingTitle}`}>
          Some stories are <br />
          meant to stay.
        </p>
      </section>
    </>
  );
}
