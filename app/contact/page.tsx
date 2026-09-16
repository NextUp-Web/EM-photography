import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";
import Figure from "@/components/ui/Figure";
import Reveal from "@/components/ui/Reveal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: { absolute: "Contact EM Photography | Switzerland Wedding Photographer" },
  description:
    "Tell me about your wedding, your celebration or the season of life you want to remember. Documentary photography in Switzerland and across Europe.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`shell ${styles.heroInner}`}>
          <h1 className={`hero-title ${styles.heroTitle}`}>Tell me your story.</h1>

          <div className={`verse ${styles.heroText}`}>
            <p>
              I&apos;d love to hear what you&apos;re planning.{" "}
              <br />
              Whether you&apos;re celebrating a wedding,{" "}
              <br />
              an intimate gathering, or simply a season of life{" "}
              <br />
              you want to remember —{" "}
              <br />
              tell me a little about it.
            </p>
            <p className="lines">
              Where you&apos;re going.{" "}
              <br />
              Who will be there.{" "}
              <br />
              What matters most to you.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.body} aria-labelledby="inquiry-title">
        <div className={`shell ${styles.bodyInner}`}>
          <Reveal className={styles.aside}>
            <Figure
              src="/images/contact/closing-05.jpg"
              alt="A veil held up to the light, the fabric almost transparent"
              ratio={0.89}
              sizes="(max-width: 960px) 62vw, 26vw"
            />
          </Reveal>

          <Reveal className={styles.formWrap} delay={120}>
            <h2 id="inquiry-title" className={`label ${styles.formLabel}`}>
              Your inquiry
            </h2>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
