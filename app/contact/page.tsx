import type { Metadata } from "next";
import Image from "next/image";
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
      {/* ---------- Hero — full bleed, 262 × 226 on the board ---------- */}
      <ImageBand
        src="/images/v3/contact/hero.webp"
        alt="Jasmine flowering against a stone wall above the lake, Good People Better Stories written on the render"
        ratio={1.159}
        mobileRatio={0.86}
        sizes="100vw"
        position="center 50%"
        priority
      />

      {/* ---------- Tell me your story ---------- */}
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

      {/* ---------- Closing — full bleed, 262 × 252 on the board ---------- */}
      <ImageBand
        src="/images/v3/contact/closing.webp"
        alt="A table and a chair set out on the shore beneath an olive tree at dusk"
        ratio={1.04}
        mobileRatio={0.92}
        sizes="100vw"
        position="center 50%"
      />

      {/* The handwritten mark the board prints under the closing photograph. */}
      <div className={`shell ${styles.signature}`}>
        <Image
          src="/images/v3/brand/some-people-brighter-days.png"
          alt="Some people brighten days"
          width={504}
          height={567}
          sizes="200px"
          className={styles.signatureImage}
        />
      </div>
    </>
  );
}
