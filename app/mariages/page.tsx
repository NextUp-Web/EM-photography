import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SectionHeading from "@/components/sections/SectionHeading";
import Gallery from "@/components/sections/Gallery";
import FeatureColumns from "@/components/sections/FeatureColumns";
import StepColumns from "@/components/sections/StepColumns";
import DarkBand from "@/components/sections/DarkBand";
import CTASection from "@/components/sections/CTASection";
import Reveal from "@/components/ui/Reveal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Mariages",
  description:
    "Des histoires d’amour documentées avec délicatesse. Reportage de mariage élégant et intemporel en Suisse et en Europe.",
  alternates: { canonical: "/mariages" },
};

const GALLERY = [
  { src: "/images/weddings/gallery-01.jpg", alt: "Mariée de dos face au lac", weight: 1 },
  { src: "/images/weddings/gallery-02.jpg", alt: "Alliances posées sur un livre", weight: 1 },
  { src: "/images/weddings/gallery-03.jpg", alt: "Les mariés front contre front", weight: 1.16 },
  { src: "/images/weddings/gallery-04.jpg", alt: "Table de réception aux chandelles", weight: 1 },
  { src: "/images/weddings/gallery-05.jpg", alt: "Terrasse fleurie face aux montagnes", weight: 1 },
];

const INCLUDED = [
  {
    title: "Préparatifs",
    caption: ["Les premiers instants,", "pleins d’émotion."],
    image: "/images/weddings/inclus-preparatifs.jpg",
    alt: "Coiffure de la mariée pendant les préparatifs",
  },
  {
    title: "Cérémonie",
    caption: ["Les moments essentiels,", "sans artifice."],
    image: "/images/weddings/inclus-ceremonie.jpg",
    alt: "Entrée dans l’église pendant la cérémonie",
  },
  {
    title: "Couple",
    caption: ["Des portraits naturels", "et sincères."],
    image: "/images/weddings/inclus-couple.jpg",
    alt: "Portrait de couple en extérieur",
  },
  {
    title: "Détails & émotions",
    caption: ["Ces petits riens", "qui font tout."],
    image: "/images/weddings/inclus-details.jpg",
    alt: "Détail des alliances et de la papeterie",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Réserver",
    caption: ["On échange sur votre projet", "et on bloque votre date."],
  },
  {
    number: "02",
    title: "Préparer",
    caption: ["On vous guide avec bienveillance", "à chaque étape."],
  },
  { number: "03", title: "Vivre", caption: ["Vous profitez, on raconte", "le reste."] },
];

export default function MariagesPage() {
  return (
    <>
      <Hero
        image="/images/weddings/hero.jpg"
        alt="Mariés enlacés sur une terrasse face au lac"
        ratio={2.8}
        title="Mariages"
        subtitle={["Des histoires d’amour documentées avec délicatesse."]}
      />

      <section className="section section--ivory">
        <div className="shell">
          <SectionHeading
            eyebrow="Plus qu’un jour"
            heading="Des souvenirs pour toujours."
            rule
            lead={[
              "Des images authentiques, élégantes et intemporelles",
              "pour raconter votre histoire.",
            ]}
          />
        </div>
      </section>

      <Gallery items={GALLERY} heightRatio={0.268} maxHeight={420} label="Galerie mariages" />

      <section className="section section--ivory">
        <div className={`shell ${styles.included}`}>
          <Reveal className={styles.includedHead}>
            <p className="eyebrow centered">Ce qui est inclus</p>
            <hr className={`rule rule--center ${styles.includedRule}`} />
          </Reveal>

          <FeatureColumns items={INCLUDED} columns={4} ratio={1.12} className={styles.includedCols} />
        </div>
      </section>

      <DarkBand size="md">
        <SectionHeading eyebrow="Notre approche" heading="Simple, fluide, humaine." tracked />
        <StepColumns steps={STEPS} titleStyle="tracked" className={styles.steps} />
      </DarkBand>

      <CTASection
        eyebrow="Prêts à écrire votre histoire ?"
        href="/contact"
        label="Voir les disponibilités"
        variant="serif"
      />
    </>
  );
}
