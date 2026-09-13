import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SectionHeading from "@/components/sections/SectionHeading";
import CategoryGrid from "@/components/sections/CategoryGrid";
import DarkBand from "@/components/sections/DarkBand";
import SplitFeature from "@/components/sections/SplitFeature";
import CTASection from "@/components/sections/CTASection";
import EditorialLink from "@/components/ui/EditorialLink";
import Reveal from "@/components/ui/Reveal";
import { CATEGORIES } from "@/lib/data";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "EM Photography — Photographe mariage, Suisse & Europe",
  description:
    "Documenter l’amour dans sa forme la plus douce. Mariages, cérémonies civiles, anniversaires et naissances, photographiés avec élégance en Suisse et en Europe.",
  alternates: { canonical: "/" },
};

const HOME_LABELS: Record<string, string> = { "maternite-naissance": "Naissance" };

const HOME_CATEGORIES = CATEGORIES.slice(0, 4).map((category) => ({
  href: category.href,
  heading: HOME_LABELS[category.slug] ?? category.label,
  image: `/images/home/${category.slug}.jpg`,
  alt: category.alt,
}));

const PALETTE = [
  { name: "Noir", value: "#000000" },
  { name: "Charcoal", value: "#61605E" },
  { name: "Stone", value: "#969592" },
  { name: "Mist", value: "#CAC6C1" },
  { name: "Ivory", value: "#F2EFEB" },
];

export default function HomePage() {
  return (
    <>
      <Hero
        image="/images/home/hero.jpg"
        alt="Mariés enlacés face à un lac de montagne"
        ratio={2.705}
        display={["Documenting love", "in its softest form"]}
        meta="Weddings · Civil ceremonies · Birthdays · Newborn"
      />

      <section className="section section--ivory">
        <div className="shell">
          <SectionHeading
            as="h2"
            eyebrow="EM Photography"
            heading="Stories, simply and beautifully preserved."
            lead={["Authentic moments. Timeless memories. Yours, forever."]}
          />

          <CategoryGrid
            items={HOME_CATEGORIES}
            columns={4}
            ratio={1.08}
            sizes="(max-width: 430px) 100vw, (max-width: 768px) 50vw, 25vw"
            className={styles.homeGrid}
          />
        </div>
      </section>

      <DarkBand size="sm">
        <Reveal className={styles.bandInner}>
          <h2 className="h2 centered">A refined, emotional and timeless approach.</h2>
          <hr className="rule rule--center rule--wide" />
          <p className="eyebrow centered">Switzerland &amp; Europe</p>
        </Reveal>
      </DarkBand>

      <section className={`section section--ivory ${styles.behindSection}`}>
        <div className="shell shell--wide">
          <SplitFeature
            image="/images/home/behind-the-lens.jpg"
            alt="Emilie photographiant face aux montagnes"
            ratio={1.766}
            sizes="(max-width: 900px) 100vw, 40vw"
            columns="minmax(0, 378fr) minmax(0, 325fr)"
            gap="clamp(32px, 7.4vw, 107px)"
            eyebrow="Behind the lens"
            heading={["For the moments you", "never want to forget."]}
            paragraphs={["People, connections and the little in-betweens that make life beautiful."]}
          >
            <EditorialLink href="/a-propos" label="About EM" className={styles.aboutLink} />
          </SplitFeature>
        </div>
      </section>

      <section className={`section--white ${styles.palette}`}>
        <Reveal className="shell">
          <p className="eyebrow centered">The palette</p>
          <ul className={styles.swatches}>
            {PALETTE.map((swatch) => (
              <li key={swatch.name} className={styles.swatch}>
                <span
                  className={styles.chip}
                  style={{ background: swatch.value }}
                  aria-hidden="true"
                />
                <span className={`label ${styles.swatchName}`}>{swatch.name}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <CTASection heading="Let’s create something timeless." href="/contact" label="Inquire" />
    </>
  );
}
