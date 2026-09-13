import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SectionHeading from "@/components/sections/SectionHeading";
import Gallery from "@/components/sections/Gallery";
import FeatureColumns from "@/components/sections/FeatureColumns";
import StepColumns from "@/components/sections/StepColumns";
import DarkBand from "@/components/sections/DarkBand";
import CTASection from "@/components/sections/CTASection";
import styles from "../mariages/page.module.css";

export const metadata: Metadata = {
  title: "Maternité & Naissance",
  description:
    "Les premiers instants, une éternité d’émotions. Séances maternité et naissance, à domicile et en lumière naturelle.",
  alternates: { canonical: "/maternite-naissance" },
};

const GALLERY = [
  { src: "/images/maternity/gallery-01.jpg", alt: "Silhouette de future maman en contre-jour" },
  { src: "/images/maternity/gallery-02.jpg", alt: "Pieds de nouveau-né dans une couverture" },
  { src: "/images/maternity/gallery-03.jpg", alt: "Mère embrassant son nouveau-né", weight: 1.16 },
  { src: "/images/maternity/gallery-04.jpg", alt: "Main du bébé dans celle de sa mère" },
  { src: "/images/maternity/gallery-05.jpg", alt: "Nouveau-né endormi contre sa mère" },
];

const VALUES = [
  { number: "01", title: "Douceur", caption: ["Un rythme lent,", "des gestes calmes."] },
  { number: "02", title: "Patience", caption: ["Le temps qu’il faut,", "jamais plus."] },
  { number: "03", title: "Authenticité", caption: ["Vos habitudes,", "votre quotidien."] },
];

const EXPERIENCE = [
  { title: "À domicile", caption: ["Chez vous, là où", "vous êtes le plus vous."] },
  { title: "En lumière naturelle", caption: ["Aucun flash,", "rien que le jour."] },
  { title: "À votre rythme", caption: ["Les pauses, les tétées,", "les câlins."] },
];

export default function MaterniteNaissancePage() {
  return (
    <>
      <Hero
        image="/images/maternity/hero.jpg"
        alt="Mère et nouveau-né dans une lumière douce"
        ratio={2.8}
        title="Maternité & Naissance"
        subtitle={["Les premiers instants, une éternité d’émotions."]}
      />

      <section className="section section--ivory">
        <div className="shell">
          <SectionHeading
            eyebrow="Le début de tout"
            heading="Des premiers instants, pour toujours."
            rule
            lead={[
              "Des images douces et sincères,",
              "pour se souvenir de ces jours qui passent si vite.",
            ]}
          />
        </div>
      </section>

      <Gallery
        items={GALLERY}
        heightRatio={0.268}
        maxHeight={420}
        label="Galerie maternité & naissance"
      />

      <DarkBand size="md">
        <SectionHeading eyebrow="Mes valeurs" heading="Douceur, patience, authenticité." tracked />
        <StepColumns steps={VALUES} titleStyle="tracked" className={styles.steps} />
      </DarkBand>

      <section className="section section--ivory">
        <div className={`shell ${styles.included}`}>
          <SectionHeading eyebrow="L’expérience" heading="Une séance qui s’adapte à vous." />
          <FeatureColumns items={EXPERIENCE} columns={3} className={styles.includedCols} />
        </div>
      </section>

      <CTASection
        eyebrow="Prête à figer ces instants ?"
        href="/contact"
        label="Réserver une séance"
        variant="serif"
      />
    </>
  );
}
