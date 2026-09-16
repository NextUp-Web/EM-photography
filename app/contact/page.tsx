import type { Metadata } from "next";
import Figure from "@/components/ui/Figure";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/sections/ContactForm";
import ImageBand from "@/components/sections/ImageBand";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact EM Photography | Switzerland Wedding Photographer",
  description:
    "Tell me your story. Enquire about wedding, couple and intimate celebration photography in Switzerland and across Europe.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <ImageBand
        src="/images/portfolio/anniversaires.jpg"
        alt="A table laid with white roses, candles and cut glass"
        ratio={2.5}
        mobileRatio={1.25}
        sizes="100vw"
        priority
      />

      <section className={`shell ${styles.intro}`} aria-labelledby="contact-title">
        <div className={styles.column}>
          <Reveal>
            <h1 className={`serif ${styles.title}`} id="contact-title">
              Tell me your story.
            </h1>
            <p className={`copy ${styles.lead}`}>
              Whether you&rsquo;re planning a wedding, an intimate gathering, or
              simply want to capture a season of life to remember — I&rsquo;d love to
              hear from you.
            </p>
          </Reveal>

          <div className={styles.formWrap}>
            <ContactForm />
          </div>
        </div>
      </section>

      <div className={`shell ${styles.closing}`}>
        <Figure
          src="/images/contact/closing-03.jpg"
          alt="A small boat crossing still water at the foot of the mountains"
          ratio={2.4}
          sizes="100vw"
          position="center 55%"
        />
      </div>
    </>
  );
}
