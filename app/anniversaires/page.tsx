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
    "Capturer la beauté des célébrations intimes : décoration, invités, émotions et instants spontanés.",
  alternates: { canonical: "/anniversaires" },
};

/** La mosaïque de la maquette : deux colonnes pleine hauteur encadrant
    deux colonnes coupées en deux rangées. */
const MOSAIC = [
  { src: "/images/birthdays/mosaic-01.jpg", alt: "Table de fête dressée aux chandelles", area: "a" },
  { src: "/images/birthdays/mosaic-02.jpg", alt: "Toast porté entre invités", area: "b" },
  { src: "/images/birthdays/mosaic-03.jpg", alt: "Gâteau d’anniversaire et bougies", area: "c" },
  { src: "/images/birthdays/mosaic-04.jpg", alt: "Invitée riant pendant la soirée", area: "d" },
  { src: "/images/birthdays/mosaic-05.jpg", alt: "Carte « Happy Birthday » posée sur un cadeau", area: "e" },
  { src: "/images/birthdays/mosaic-06.jpg", alt: "Invitée de dos dans la lumière du soir", area: "f" },
];

const SUBCATEGORIES = [
  {
    title: "Décoration",
    caption: ["Les détails qui créent l’atmosphère."],
    image: "/images/birthdays/strip-decoration.jpg",
    alt: "Centre de table fleuri aux bougies",
  },
  {
    title: "Invités",
    caption: ["Les personnes qui rendent", "la journée unique."],
    image: "/images/birthdays/strip-invites.jpg",
    alt: "Coupes levées entre invités",
  },
  {
    title: "Émotions",
    caption: ["Des rires, des larmes, des instants vrais."],
    image: "/images/birthdays/strip-emotions.jpg",
    alt: "Deux invitées complices",
  },
  {
    title: "Instants spontanés",
    caption: ["La magie du naturel."],
    image: "/images/birthdays/strip-spontane.jpg",
    alt: "Cierges magiques en fin de soirée",
  },
];

export default function AnniversairesPage() {
  return (
    <>
      <Hero
        image="/images/birthdays/hero.jpg"
        alt="Table d’anniversaire dressée à la tombée du jour"
        ratio={3.063}
        title="Anniversaires"
        titleSize="45px"
        rule={false}
        subtitle={["Capturer la beauté des célébrations intimes."]}
      />

      <section className="section section--ivory">
        <div className="shell">
          <SectionHeading
            eyebrow="EM Photography"
            heading="Des instants précieux, pour toujours."
            lead={[
              "Anniversaires en petit comité, grandes tablées ou célébrations surprises :",
              "je raconte votre histoire à travers des images vraies, élégantes et intemporelles.",
            ]}
          />

          <ul className={styles.mosaic}>
            {MOSAIC.map((item, index) => (
              <Reveal
                as="li"
                key={item.src}
                delay={index * 80}
                className={`${styles.cell} ${styles[`area${item.area.toUpperCase()}`]}`}
              >
                <Figure
                  src={item.src}
                  alt={item.alt}
                  sizes="(max-width: 768px) 50vw, 25vw"
                  zoom
                  className={styles.cellFigure}
                />
              </Reveal>
            ))}
          </ul>

          <FeatureColumns
            items={SUBCATEGORIES}
            columns={4}
            ratio={1.92}
            mediaWidth="88%"
            rule
            separators={false}
            sizes="(max-width: 768px) 45vw, 21vw"
            className={styles.strip}
          />
        </div>
      </section>

      <DarkBand size="md" texture="/images/birthdays/quote.jpg">
        <Reveal className={styles.quoteWrap}>
          <blockquote className={styles.quote}>
            “Les plus beaux souvenirs
            <br />
            naissent souvent des instants les plus simples.”
          </blockquote>
          <hr className={`rule rule--center rule--wide ${styles.quoteRule}`} />
          <p className="eyebrow centered">Switzerland &amp; Europe</p>
        </Reveal>
      </DarkBand>

      <CTASection
        eyebrow="Créons vos souvenirs"
        heading="Planifier votre séance."
        href="/contact"
        label="Nous contacter"
        variant="outline"
      />
    </>
  );
}
