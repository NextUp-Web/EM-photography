import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ContactForm from "@/components/sections/ContactForm";
import CategoryGrid from "@/components/sections/CategoryGrid";
import SectionHeading from "@/components/sections/SectionHeading";
import Gallery, { type GalleryItem } from "@/components/sections/Gallery";
import DarkBand from "@/components/sections/DarkBand";
import Reveal from "@/components/ui/Reveal";
import { InstagramIcon, MailIcon, ClockIcon } from "@/components/ui/Icons";
import { CATEGORIES, CONTACT_EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/data";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Parlons de votre histoire. Demande de disponibilité pour un mariage, une cérémonie civile, un anniversaire ou une séance maternité.",
  alternates: { canonical: "/contact" },
};

const STRIP = CATEGORIES.map((category) => ({
  href: category.href,
  heading: category.label,
  image: `/images/contact/${category.slug}.jpg`,
  alt: category.alt,
}));

const CLOSING: GalleryItem[] = [
  { src: "/images/contact/closing-01.jpg", alt: "Village au bord du lac", weight: 1.06 },
  { src: "/images/contact/closing-02.jpg", alt: "Papeterie de mariage gravée", weight: 1.29 },
  { src: "/images/contact/closing-03.jpg", alt: "Barque sur le lac au petit matin", weight: 1 },
  { src: "/images/contact/closing-04.jpg", alt: "Table de réception dressée", weight: 0.87 },
  { src: "/images/contact/closing-05.jpg", alt: "Voile de mariée en contre-jour", weight: 0.84 },
  { kind: "note", lines: ["Plus qu’une séance,", "une histoire à jamais"], weight: 1.3 },
];

export default function ContactPage() {
  return (
    <>
      <Hero
        image="/images/contact/hero.jpg"
        alt="Mariés enlacés face au lac"
        ratio={3.092}
        title="Contact"
        rule={false}
        subtitle={["Parlons de votre histoire."]}
      />

      <section className="section section--ivory">
        <div className={`shell ${styles.main}`}>
          <Reveal className={styles.intro}>
            <p className="eyebrow">Une connexion, une belle histoire</p>
            <h2 className={`h2 ${styles.introHeading}`}>
              Chaque histoire mérite
              <br />
              d’être racontée.
            </h2>
            <hr className={`rule ${styles.introRule}`} />
            <p className={`body ${styles.introBody}`}>
              Que vous prépariez votre mariage, une séance en couple,
              <br />
              une séance maternité ou tout autre moment précieux,
              <br />
              je serais ravie d’en savoir plus sur votre projet.
            </p>
            <p className={`body ${styles.introBody}`}>
              Remplissez le formulaire ci-contre et je vous répondrai
              <br />
              avec attention sous 48 heures.
            </p>
            <p className={`script ${styles.signature}`}>À très bientôt,</p>
            <p className={`label ${styles.signatureName}`}>EM Photography</p>
          </Reveal>

          <Reveal className={styles.formWrap} delay={120}>
            <h2 className={styles.srOnly}>Formulaire de demande</h2>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="section section--white">
        <div className="shell">
          <SectionHeading
            eyebrow="Je photographie"
            heading="Des moments vrais, à chaque étape de votre vie."
          />
          <CategoryGrid
            items={STRIP}
            columns={5}
            ratio={1.22}
            sizes="(max-width: 430px) 100vw, (max-width: 768px) 50vw, 20vw"
            className={styles.strip}
          />
        </div>
      </section>

      <DarkBand size="sm">
        <Reveal className={styles.bandInner}>
          <h2 className="h2 centered">Basée en Suisse — disponible en Europe.</h2>
          <p className={`eyebrow centered ${styles.bandMeta}`}>
            Capturer vos histoires partout où elles se vivent
          </p>
          <hr className={`rule rule--center ${styles.bandRule}`} />
        </Reveal>
      </DarkBand>

      <section className="section section--ivory">
        <ul className={`shell columns columns--3 ${styles.infos}`}>
          <Reveal as="li" className={styles.info}>
            <span className={styles.infoIcon}>
              <InstagramIcon size={20} />
            </span>
            <div className={styles.infoBody}>
              <p className="eyebrow">Suivez mon univers</p>
              <p className={`h4 ${styles.infoTitle}`}>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={styles.infoLink}
                >
                  Instagram
                </a>
              </p>
              <p className={`caption ${styles.infoMeta}`}>{INSTAGRAM_HANDLE}</p>
              <hr className={`rule rule--short ${styles.infoRule}`} />
            </div>
          </Reveal>

          <Reveal as="li" className={styles.info} delay={100}>
            <span className={styles.infoIcon}>
              <MailIcon size={20} />
            </span>
            <div className={styles.infoBody}>
              <p className="eyebrow">Par email</p>
              <p className={`caption ${styles.infoTitleSmall}`}>
                <a href={`mailto:${CONTACT_EMAIL}`} className={styles.infoLink}>
                  {CONTACT_EMAIL}
                </a>
              </p>
              <hr className={`rule rule--short ${styles.infoRule}`} />
            </div>
          </Reveal>

          <Reveal as="li" className={styles.info} delay={200}>
            <span className={styles.infoIcon}>
              <ClockIcon size={20} />
            </span>
            <div className={styles.infoBody}>
              <p className="eyebrow">Délai de réponse</p>
              <p className={`h4 ${styles.infoTitle}`}>Sous 48 heures</p>
              <p className={`caption ${styles.infoMeta}`}>
                Je fais de mon mieux pour vous répondre rapidement.
              </p>
            </div>
          </Reveal>
        </ul>
      </section>

      <Gallery
        items={CLOSING}
        heightRatio={0.1452}
        minHeight={130}
        maxHeight={250}
        gap="2px"
        label="Galerie de clôture"
      />
    </>
  );
}
