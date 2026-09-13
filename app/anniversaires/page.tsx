import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SectionHeading from "@/components/sections/SectionHeading";
import FeatureColumns from "@/components/sections/FeatureColumns";
import DarkBand from "@/components/sections/DarkBand";
import CTASection from "@/components/sections/CTASection";
import Figure from "@/components/ui/Figure";
import Reveal from "@/components/ui/Reveal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Anniversaires",
  description:
    "Célébrer ce qui compte. Reportage d’anniversaire élégant : décoration, invités, émotions et instants spontanés.",
  alternates: { canonical: "/anniversaires" },
};

const MOSAIC = [
  {
    src: "/images/birthdays/mosaic-01.jpg",
    alt: "Table de fête dressée aux chandelles",
    shape: "wide" as const,
  },
  {
    src: "/images/birthdays/mosaic-02.jpg",
    alt: "Invitée riant pendant la soirée",
    shape: "tall" as const,
  },
  {
    src: "/images/birthdays/mosaic-03.jpg",
    alt: "Détail floral de la décoration",
    shape: "square" as const,
  },
  {
    src: "/images/birthdays/mosaic-04.jpg",
    alt: "Toast porté entre amis",
    shape: "square" as const,
  },
  {
    src: "/images/birthdays/mosaic-05.jpg",
    alt: "Gâteau d’anniversaire et bougies",
    shape: "tall" as const,
  },
  {
    src: "/images/birthdays/mosaic-06.jpg",
    alt: "Danse improvisée en fin de soirée",
    shape: "wide" as const,
  },
];

const SUBCATEGORIES = [
  { title: "Décoration", caption: ["Les détails pensés", "pour vous."] },
  { title: "Invités", caption: ["Ceux qui comptent,", "réunis."] },
  { title: "Émotions", caption: ["Les regards,", "les éclats de rire."] },
  { title: "Instants spontanés", caption: ["Ce qui arrive", "sans prévenir."] },
];

export default function AnniversairesPage() {
  return (
    <>
      <Hero
        image="/images/birthdays/hero.jpg"
        alt="Table d’anniversaire dressée à la tombée du jour"
        ratio={2.8}
        title="Anniversaires"
        subtitle={["Célébrer ce qui compte."]}
      />

      <section className="section section--ivory">
        <div className="shell">
          <SectionHeading
            eyebrow="Une soirée, mille détails"
            heading="Le souvenir d’une belle réunion."
            rule
          />

          <ul className={styles.mosaic}>
            {MOSAIC.map((item, index) => (
              <Reveal
                as="li"
                key={item.src}
                delay={index * 80}
                className={`${styles.cell} ${styles[item.shape]}`}
              >
                <Figure
                  src={item.src}
                  alt={item.alt}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  zoom
                  className={styles.cellFigure}
                />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--deep">
        <div className="shell">
          <FeatureColumns items={SUBCATEGORIES} columns={4} />
        </div>
      </section>

      <DarkBand size="lg">
        <Reveal className={styles.quoteWrap}>
          <p className="h2 centered">
            Une fête passe vite.
            <br />
            Les images, elles, restent.
          </p>
          <hr className={`rule rule--center rule--wide ${styles.quoteRule}`} />
        </Reveal>
      </DarkBand>

      <CTASection
        eyebrow="Envie d’en garder une trace ?"
        href="/contact"
        label="Voir les disponibilités"
        variant="serif"
      />
    </>
  );
}
