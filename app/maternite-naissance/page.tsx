import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SectionHeading from "@/components/sections/SectionHeading";
import Gallery from "@/components/sections/Gallery";
import FeatureColumns from "@/components/sections/FeatureColumns";
import DarkBand from "@/components/sections/DarkBand";
import CTASection from "@/components/sections/CTASection";
import Reveal from "@/components/ui/Reveal";
import { HomeIcon, SunIcon, HeartIcon } from "@/components/ui/Icons";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Maternité & Naissance",
  description:
    "Des débuts remplis de douceur, de calme et d’émotion. Séances maternité et naissance, à domicile et en lumière naturelle.",
  alternates: { canonical: "/maternite-naissance" },
};

const GALLERY = [
  {
    src: "/images/maternity/gallery-01.jpg",
    alt: "Future maman en contre-jour devant la fenêtre",
    weight: 221,
  },
  {
    src: "/images/maternity/gallery-02.jpg",
    alt: "Pieds de nouveau-né dans une couverture de laine",
    weight: 232,
  },
  {
    src: "/images/maternity/gallery-03.jpg",
    alt: "Mère embrassant son nouveau-né endormi",
    weight: 236,
  },
  {
    src: "/images/maternity/gallery-04.jpg",
    alt: "Mains posées sur un ventre arrondi",
    weight: 223,
  },
];

const VALUES = [
  { title: "Douceur", caption: ["Une approche bienveillante", "et respectueuse."] },
  { title: "Patience", caption: ["Le temps qu’il faut,", "sans pression."] },
  { title: "Authenticité", caption: ["Des souvenirs vrais,", "pleins d’émotion."] },
];

const EXPERIENCE = [
  { title: "À domicile", icon: <HomeIcon size={34} /> },
  { title: "En lumière naturelle", icon: <SunIcon size={34} /> },
  { title: "À votre rythme", icon: <HeartIcon size={34} /> },
];

export default function MaterniteNaissancePage() {
  return (
    <>
      <Hero
        image="/images/maternity/hero.jpg"
        alt="Mère et nouveau-né dans une lumière douce"
        ratio={2.759}
        title="Maternité & Naissance"
        titleSize="40px"
        rule="after"
        subtitle={["Des débuts remplis de douceur, de calme et d’émotion."]}
      />

      <section className="section section--ivory">
        <div className="shell">
          <SectionHeading
            eyebrow="EM Photography"
            heading="Des premiers instants, pour toujours."
            lead={[
              "Je capture la beauté de cette nouvelle étape, avec sensibilité et simplicité.",
              "Des images vraies, douces et intemporelles, pour raconter votre histoire.",
            ]}
          />
        </div>

        <Gallery
          items={GALLERY}
          heightRatio={0.2276}
          maxHeight={420}
          inset
          gap="10px"
          label="Galerie maternité & naissance"
          className={styles.gallery}
        />

        <Reveal className={`shell ${styles.galleryNote}`}>
          <hr className="rule rule--center" />
          <p className="eyebrow centered">Des détails qui racontent l’essentiel</p>
        </Reveal>
      </section>

      <DarkBand size="md" texture="/images/maternity/experience.jpg" textureOpacity={0.92}>
        <SectionHeading eyebrow="L’expérience" heading="Plus qu’une séance, un moment pour vous." />
        <FeatureColumns
          items={VALUES}
          columns={3}
          rule
          separators={false}
          className={styles.values}
        />
      </DarkBand>

      <section className="section section--ivory">
        <div className="shell">
          <SectionHeading eyebrow="En toute sérénité" heading="Une expérience pensée pour vous." />
          <FeatureColumns
            items={EXPERIENCE}
            columns={3}
            rule
            separators={false}
            className={styles.experience}
          />
        </div>
      </section>

      <CTASection
        heading="Réserver votre séance"
        href="/contact"
        label="Prendre rendez-vous"
        variant="outline"
      />
    </>
  );
}
