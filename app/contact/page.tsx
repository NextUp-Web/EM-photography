import ContactForm from "@/components/sections/ContactForm";
import Figure from "@/components/ui/Figure";
import { PHOTOS } from "@/lib/data";
import styles from "./page.module.css";

export const metadata = {
  title: "Contact | EM Photography",
  description:
    "Tell me what you want to remember — enquiries for weddings, couples and intimate celebrations in Switzerland and across Europe.",
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
      <section
        className={`${styles.column} ${styles.centred}`}
        aria-labelledby="contact-title"
      >
        <p className="label">Get in touch</p>
        <h1 className={styles.display} id="contact-title">
          Tell me what you
          <br />
          want to remember.
        </h1>
        <p className={styles.lead}>
          I&rsquo;d love to hear what you&rsquo;re imagining&nbsp;&mdash; where it
          will unfold, who will be there, and what matters most to you, whether
          it&rsquo;s a wedding, an intimate gathering or simply a chapter of life you
          want to preserve.
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
        <p className="label">Share your vision</p>
        <h2 className={`${styles.title} ${styles.caps}`} id="enquiry">
          Thoughtful photography for the meaningful moments.
        </h2>
        <p className={styles.body}>
          Every celebration has its own rhythm. Tell me what you&rsquo;re planning,
          what feels important to you, and the atmosphere you&rsquo;re drawn to. From
          there, I&rsquo;ll shape the coverage with care and intention.
        </p>

        <div className={styles.form}>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
