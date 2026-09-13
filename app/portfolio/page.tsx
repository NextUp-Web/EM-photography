import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import CategoryGrid from "@/components/sections/CategoryGrid";
import StepColumns from "@/components/sections/StepColumns";
import DarkBand from "@/components/sections/DarkBand";
import EditorialLink from "@/components/ui/EditorialLink";
import Reveal from "@/components/ui/Reveal";
import { CATEGORIES } from "@/lib/data";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Mariages, cérémonies civiles, anniversaires, maternité et couples : les collections photographiques d’EM Photography.",
  alternates: { canonical: "/portfolio" },
};

const EXPERIENCE_BG = "/images/portfolio/experience.jpg";

const toItem = (slug: string) => {
  const category = CATEGORIES.find((entry) => entry.slug === slug)!;
  return {
    href: category.href,
    heading: category.title,
    caption: category.caption,
    image: category.image,
    alt: category.alt,
  };
};

const ROW_ONE = ["mariages", "ceremonies-civiles", "anniversaires"].map(toItem);
const ROW_TWO = ["maternite-naissance", "couples"].map(toItem);

const STEPS = [
  { number: "01", title: "Écoute", caption: ["Comprendre votre histoire."] },
  { number: "02", title: "Direction douce", caption: ["Vous guider naturellement."] },
  { number: "03", title: "Souvenirs durables", caption: ["Des images pour la vie."] },
];

export default function PortfolioPage() {
  const experienceStyle = { "--experience-bg": `url(${EXPERIENCE_BG})` } as React.CSSProperties;

  return (
    <>
      <Hero
        image="/images/portfolio/hero.jpg"
        alt="Mariée de dos, voile porté par le vent face aux montagnes"
        ratio={2.682}
        title="Portfolio"
        subtitle={[
          "Wedding stories, civil ceremonies, anniversaries,",
          "motherhood & the in-between moments.",
        ]}
      />

      <section id="collections" className="section section--ivory">
        <div className="shell">
          <h2 className={styles.srOnly}>Les collections</h2>

          <CategoryGrid
            items={ROW_ONE}
            columns={3}
            ratio={1.3}
            headingStyle="title"
            sizes="(max-width: 430px) 100vw, (max-width: 768px) 50vw, 33vw"
          />

          <CategoryGrid
            items={ROW_TWO}
            columns={2}
            ratio={2.24}
            headingStyle="title"
            sizes="(max-width: 430px) 100vw, 50vw"
            className={styles.rowTwo}
          />
        </div>
      </section>

      <section className={styles.experience} style={experienceStyle}>
        <div className={`shell ${styles.experienceInner}`}>
          <Reveal className={styles.experienceHead}>
            <h2 className={`h3 centered ${styles.experienceTitle}`}>
              Une expérience simple, élégante, intemporelle
            </h2>
            <hr className={`rule rule--center ${styles.experienceRule}`} />
          </Reveal>

          <StepColumns steps={STEPS} titleStyle="serif" className={styles.experienceSteps} />
        </div>
      </section>

      <DarkBand size="md">
        <Reveal className={styles.bandInner}>
          <h2 className="h2 centered">Découvrez les collections</h2>
          <EditorialLink
            href="#collections"
            label="Voir le portfolio"
            className={styles.bandLink}
          />
        </Reveal>
      </DarkBand>
    </>
  );
}
