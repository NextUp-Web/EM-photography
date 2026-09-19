import PortfolioGallery from "@/components/sections/PortfolioGallery";
import Figure from "@/components/ui/Figure";
import { PORTFOLIO_CLOSING } from "@/lib/data";
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

      <PortfolioGallery />

      <section className={styles.closing} aria-label="Some stories are meant to stay">
        <Figure
          photo={PORTFOLIO_CLOSING}
          ratio={4.64}
          mobileRatio={1.45}
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
