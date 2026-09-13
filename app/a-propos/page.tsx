import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SplitFeature from "@/components/sections/SplitFeature";
import DarkBand from "@/components/sections/DarkBand";
import EditorialLink from "@/components/ui/EditorialLink";
import Reveal from "@/components/ui/Reveal";
import { PinIcon, CameraIcon, StarIcon } from "@/components/ui/Icons";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Derrière l’objectif : Emilie, photographe basée en Suisse. Une approche sensible, discrète et intemporelle des histoires vraies.",
  alternates: { canonical: "/a-propos" },
};

const VALUES = [
  {
    title: "Émotion",
    caption: ["Des images qui font ressentir,", "qui racontent l’essentiel."],
  },
  {
    title: "Élégance",
    caption: ["Une esthétique intemporelle,", "à la fois naturelle et raffinée."],
  },
  {
    title: "Sincérité",
    caption: ["Des histoires vraies,", "sans artifice, avec le cœur."],
  },
];

const FACTS = [
  {
    Icon: PinIcon,
    title: ["Suisse & Europe"],
    caption: ["Des histoires partout", "où l’amour nous mène"],
  },
  {
    Icon: CameraIcon,
    title: ["Mariages, civil, naissance,", "anniversaires"],
    caption: ["Tous les grands et petits", "moments de la vie"],
  },
  {
    Icon: StarIcon,
    title: ["Expérience soignée"],
    caption: ["Un accompagnement personnalisé", "du premier échange à la livraison"],
  },
];

export default function AProposPage() {
  return (
    <>
      <Hero
        image="/images/about/hero.jpg"
        alt="Emilie photographiant face aux montagnes"
        ratio={3.314}
        position="left center"
        title="À propos"
        subtitle={["Derrière l’objectif, une approche sensible et intemporelle."]}
        align="right"
      />

      <section className="section section--ivory">
        <div className={`shell ${styles.storyBlock}`}>
          <SplitFeature
            image="/images/about/portrait.jpg"
            alt="Portrait d’Emilie, photographe"
            ratio={1.12}
            sizes="(max-width: 900px) 100vw, 36vw"
            columns="minmax(0, 0.94fr) minmax(0, 1fr)"
            gap="clamp(32px, 6vw, 88px)"
            eyebrow="Mon histoire"
            heading={["Une passion pour", "les histoires vraies."]}
            headingLevel="h2"
            paragraphs={[
              "Je m’appelle Emilie, et derrière EM Photography, il y a une passion profonde pour les gens, les émotions et la beauté du réel.",
              "Depuis toujours, je suis sensible à ces instants fugaces qui racontent l’essentiel : un regard, un geste, une présence. À travers mon objectif, je cherche à capturer des souvenirs sincères, élégants et intemporels, pour que vous puissiez les revivre encore et encore, au fil des années.",
            ]}
            signature="Emilie"
          />
        </div>
      </section>

      <section className={`section section--deep ${styles.values}`}>
        <div className={`shell ${styles.valuesInner}`}>
          <Reveal>
            <p className="eyebrow centered">Mes valeurs</p>
          </Reveal>

          <ul className={`columns columns--3 ${styles.valuesList}`}>
            {VALUES.map((value, index) => (
              <Reveal as="li" key={value.title} delay={index * 100} className={styles.value}>
                <h2 className={`h3 ${styles.valueTitle}`}>{value.title}</h2>
                <hr className={`rule rule--center rule--short ${styles.valueRule}`} />
                <p className={`caption ${styles.valueCaption}`}>
                  {value.caption.map((line, lineIndex) => (
                    <span key={line}>
                      {line}
                      {lineIndex < value.caption.length - 1 ? <br /> : null}
                    </span>
                  ))}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className={`section section--white ${styles.workingSection}`}>
        <div className="shell">
          <SplitFeature
            image="/images/about/working.jpg"
            alt="Emilie en reportage, appareil à la main"
            ratio={2.09}
            sizes="(max-width: 900px) 100vw, 42vw"
            columns="minmax(0, 418fr) minmax(0, 400fr)"
            gap="clamp(28px, 4.3vw, 62px)"
            eyebrow="Ma façon de travailler"
            heading={["Observer, guider, préserver."]}
            headingLevel="h2"
            paragraphs={[
              "Je prends le temps d’observer, de vous connaître et de vous mettre à l’aise. Je vous guide avec douceur, tout en laissant place à la spontanéité. Mon approche est discrète et bienveillante, pour capturer des moments authentiques, sans jamais les forcer. Des souvenirs vrais, pour aujourd’hui et pour toujours.",
            ]}
          />
        </div>
      </section>

      <section className={`section section--deep ${styles.facts}`}>
        <ul className={`shell columns columns--3 ${styles.factsList}`}>
          {FACTS.map(({ Icon, title, caption }, index) => (
            <Reveal as="li" key={title[0]} delay={index * 100} className={styles.fact}>
              <Icon size={22} className={styles.factIcon} />
              <h2 className={`h4 ${styles.factTitle}`}>
                {title.map((line, lineIndex) => (
                  <span key={line}>
                    {line}
                    {lineIndex < title.length - 1 ? <br /> : null}
                  </span>
                ))}
              </h2>
              <hr className={`rule rule--center rule--short ${styles.factRule}`} />
              <p className={`eyebrow centered ${styles.factCaption}`}>
                {caption.map((line, lineIndex) => (
                  <span key={line}>
                    {line}
                    {lineIndex < caption.length - 1 ? <br /> : null}
                  </span>
                ))}
              </p>
            </Reveal>
          ))}
        </ul>
      </section>

      <DarkBand size="md">
        <Reveal className={styles.bandInner}>
          <p className="eyebrow centered">Et si on écrivait votre histoire ?</p>
          <h2 className={`h2 centered ${styles.bandHeading}`}>Rencontrons-nous.</h2>
          <EditorialLink
            href="/contact"
            label="Prendre contact"
            variant="outline"
            className={styles.bandCta}
          />
        </Reveal>
      </DarkBand>
    </>
  );
}
