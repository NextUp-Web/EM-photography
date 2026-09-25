import ContactForm from "@/components/sections/ContactForm";
import Figure from "@/components/ui/Figure";
import { PHOTOS } from "@/lib/data";
import styles from "./page.module.css";

export const metadata = {
  title: "Contact | EM Photography",
  description:
    "Tell me what this day will feel like — enquiries for weddings, couples and intimate celebrations in Switzerland and across Europe.",
  alternates: { canonical: "/contact" },
};

/**
 * On the home page's system: one column on the site's measure, sections
 * separated by --gap-section, type from the one scale. The photograph runs
 * the full measure; the words and the form sit on a narrower column
 * centred inside it, their left edge shared.
 */
export default function ContactPage() {
  return (
    <div className="page">
      {/* ---------- Get in touch ---------- */}
      <section className={styles.column} aria-labelledby="contact-title">
        <p className={`label ${styles.eyebrow}`}>Get in touch</p>
        <h1 className={styles.display} id="contact-title">
          Tell me what this day
          <br />
          will feel like.
        </h1>
        <p className={styles.lead}>
          I&rsquo;d love to hear what you&rsquo;re planning. Whether you&rsquo;re
          celebrating a wedding, an intimate gathering, or simply a season of life you
          want to remember, tell me a little about it. Your vision. Where it will
          unfold. Who will be there. What matters most to you.
        </p>
      </section>

      <section aria-label="A couple on the terrace above the lake">
        <Figure
          photo={PHOTOS.contactHero}
          ratio={1.97}
          mobileRatio={1.2}
          sizes="100vw"
          priority
        />
      </section>

      {/* ---------- Inquiry — the words, then the form ---------- */}
      <section className={styles.column} aria-labelledby="enquiry">
        <p className={`label ${styles.eyebrow}`}>Inquiry</p>
        <h2 className={`${styles.title} ${styles.caps}`} id="enquiry">
          Share your vision.
        </h2>
        <p className={styles.subtitle}>
          Thoughtful photography for the meaningful moments.
        </p>
        <p className={styles.body}>
          Every celebration has its own rhythm, atmosphere and way of unfolding. Tell
          me a little about what you&rsquo;re planning and what matters most to you,
          and we can shape the coverage around the way your day is meant to feel.
        </p>

        <div className={styles.form}>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
