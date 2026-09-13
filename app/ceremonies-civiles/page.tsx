import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SectionHeading from "@/components/sections/SectionHeading";
import FeatureColumns from "@/components/sections/FeatureColumns";
import Gallery from "@/components/sections/Gallery";
import EditorialLink from "@/components/ui/EditorialLink";
import Reveal from "@/components/ui/Reveal";
import { EyeIcon, SunIcon, HeartIcon } from "@/components/ui/Icons";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Cérémonies civiles",
  description:
    "L’intimité d’un oui, dans sa forme la plus vraie. Reportage discret et élégant de cérémonies civiles en Suisse et en Europe.",
  alternates: { canonical: "/ceremonies-civiles" },
};

const BLOCKS = [
  {
    title: "Cérémonie",
    caption: ["La couverture complète", "de votre cérémonie civile."],
    image: "/images/civil/bloc-ceremonie.jpg",
    alt: "Signature des registres pendant la cérémonie civile",
  },
  {
    title: "Couple en ville",
    caption: ["Une séance en toute simplicité", "dans un lieu qui vous ressemble."],
    image: "/images/civil/bloc-couple.jpg",
    alt: "Les mariés marchant dans les rues de la ville",
  },
  {
    title: "Petit reportage",
    caption: ["Les essentiels de votre journée :", "cérémonie, portraits et instants spontanés."],
    image: "/images/civil/bloc-reportage.jpg",
    alt: "Coupes levées après la cérémonie",
  },
];

const GALLERY = [
  { src: "/images/civil/gallery-01.jpg", alt: "Les mariés montant les marches de l’hôtel de ville", weight: 170 },
  { src: "/images/civil/gallery-02.jpg", alt: "Bouquet tenu contre la robe", weight: 181 },
  { src: "/images/civil/gallery-03.jpg", alt: "Baiser des mariés dans la rue", weight: 182 },
  { src: "/images/civil/gallery-04.jpg", alt: "Devise Liberté, Égalité, Fraternité sur la façade", weight: 181 },
  { src: "/images/civil/gallery-05.jpg", alt: "Les mariés s’éloignant dans la ville", weight: 171 },
];

const QUALITIES = [
  {
    title: "Discrétion",
    caption: ["Une présence attentive", "et respectueuse."],
    icon: <EyeIcon size={34} />,
  },
  {
    title: "Lumière",
    caption: ["Des images douces", "et naturelles."],
    icon: <SunIcon size={34} />,
  },
  {
    title: "Naturel",
    caption: ["Des émotions vraies,", "sans mise en scène."],
    icon: <HeartIcon size={34} />,
  },
];

export default function CeremoniesCivilesPage() {
  return (
    <>
      <Hero
        image="/images/civil/hero.jpg"
        alt="Les mariés assis pendant la cérémonie civile"
        ratio={2.697}
        title="Cérémonies civiles"
        titleSize="48px"
        rule={false}
        subtitle={["L’intimité d’un oui, dans sa forme la plus vraie."]}
      />

      <section className="section section--ivory">
        <div className="shell">
          <SectionHeading
            eyebrow="Une approche sur mesure"
            heading="Trois façons de raconter votre journée."
          />

          <FeatureColumns
            items={BLOCKS}
            columns={3}
            ratio={1.81}
            mediaWidth="100%"
            rule
            separators={false}
            sizes="(max-width: 768px) 80vw, 28vw"
            className={styles.blocks}
          />
        </div>
      </section>

      <section className={`section section--white ${styles.gallerySection}`}>
        <div className="shell">
          <SectionHeading eyebrow="Galerie" heading="Des instants vrais, en toute simplicité." rule />
        </div>

        <Gallery
          items={GALLERY}
          heightRatio={0.2688}
          maxHeight={470}
          inset
          gap="12px"
          label="Galerie cérémonies civiles"
          className={styles.gallery}
        />
      </section>

      <section className={`section section--white ${styles.qualitiesSection}`}>
        <div className="shell">
          <SectionHeading
            eyebrow="Pour les moments simples et précieux"
            heading="Des souvenirs qui comptent vraiment."
            lead={[
              "Les cérémonies civiles sont des instants uniques, souvent intimes, parfois discrets, mais toujours chargés d’émotion.",
              "Je les photographie avec la même attention et la même sensibilité que les grands jours.",
            ]}
          />

          <FeatureColumns items={QUALITIES} columns={3} className={styles.qualities} />
        </div>
      </section>

      <section className={`section--bright ${styles.ctaSection}`}>
        <Reveal className={`shell ${styles.ctaInner}`}>
          <EditorialLink href="/contact" label="Demander la brochure" variant="solid" />
        </Reveal>
      </section>
    </>
  );
}
