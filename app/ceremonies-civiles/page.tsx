import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SectionHeading from "@/components/sections/SectionHeading";
import FeatureColumns from "@/components/sections/FeatureColumns";
import Gallery from "@/components/sections/Gallery";
import DarkBand from "@/components/sections/DarkBand";
import StepColumns from "@/components/sections/StepColumns";
import CTASection from "@/components/sections/CTASection";
import styles from "../mariages/page.module.css";

export const metadata: Metadata = {
  title: "Cérémonies civiles",
  description:
    "L’essentiel, en toute simplicité. Reportage discret et élégant de cérémonies civiles en Suisse et en Europe.",
  alternates: { canonical: "/ceremonies-civiles" },
};

const BLOCKS = [
  {
    title: "Cérémonie",
    caption: ["Le oui, les regards,", "les mains qui se trouvent."],
    image: "/images/civil/bloc-ceremonie.jpg",
    alt: "Échange des alliances pendant la cérémonie civile",
  },
  {
    title: "Couple en ville",
    caption: ["Quelques pas dehors,", "rien que vous deux."],
    image: "/images/civil/bloc-couple.jpg",
    alt: "Couple marchant dans les rues de la ville",
  },
  {
    title: "Petit reportage",
    caption: ["Les proches, les rires,", "les toasts improvisés."],
    image: "/images/civil/bloc-reportage.jpg",
    alt: "Proches réunis après la cérémonie",
  },
];

const GALLERY = [
  { src: "/images/civil/gallery-01.jpg", alt: "Mains des mariés et alliance" },
  { src: "/images/civil/gallery-02.jpg", alt: "Signature des registres" },
  { src: "/images/civil/gallery-03.jpg", alt: "Bouquet tenu à deux mains" },
  { src: "/images/civil/gallery-04.jpg", alt: "Sortie de la mairie sous les confettis" },
];

const QUALITIES = [
  { number: "01", title: "Discrétion", caption: ["Présente, jamais imposante."] },
  { number: "02", title: "Lumière", caption: ["Naturelle, toujours."] },
  { number: "03", title: "Naturel", caption: ["Rien de posé, tout de vrai."] },
];

export default function CeremoniesCivilesPage() {
  return (
    <>
      <Hero
        image="/images/civil/hero.jpg"
        alt="Mains des mariés lors d’une cérémonie civile"
        ratio={2.8}
        title="Cérémonies civiles"
        subtitle={["L’essentiel, en toute simplicité."]}
      />

      <section className="section section--ivory">
        <div className={`shell ${styles.included}`}>
          <SectionHeading eyebrow="Une journée à votre image" heading="Simple, juste, à vous." rule />
          <FeatureColumns items={BLOCKS} columns={3} ratio={1.3} className={styles.includedCols} />
        </div>
      </section>

      <Gallery
        items={GALLERY}
        heightRatio={0.24}
        maxHeight={380}
        label="Galerie cérémonies civiles"
      />

      <DarkBand size="md">
        <SectionHeading eyebrow="Notre approche" heading="Discrétion, lumière, naturel." tracked />
        <StepColumns steps={QUALITIES} titleStyle="tracked" className={styles.steps} />
      </DarkBand>

      <CTASection
        eyebrow="Une date en tête ?"
        href="/contact"
        label="Voir les disponibilités"
        variant="serif"
      />
    </>
  );
}
