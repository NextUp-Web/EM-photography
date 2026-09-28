import ContactForm from "@/components/sections/ContactForm";
import Figure from "@/components/ui/Figure";
import Lines from "@/components/ui/Lines";
import { PHOTOS } from "@/lib/data";
import { alternatesFor, getDictionary, isLocale, localizePhoto, type Locale } from "@/lib/i18n";
import styles from "./page.module.css";

type PageParams = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: PageParams) {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { meta } = getDictionary(lang);
  return {
    title: meta.contactTitle,
    description: meta.contactDescription,
    alternates: alternatesFor("/contact", lang),
  };
}

/**
 * On the home page's system: one column on the site's measure, sections
 * separated by --gap-section, type from the one scale. The photograph runs
 * the full measure; the words and the form sit on a narrower column
 * centred inside it, their left edge shared.
 */
export default async function ContactPage({ params }: PageParams) {
  const lang = (await params).lang as Locale;
  const dict = getDictionary(lang);
  const t = dict.contact;

  return (
    <div className="page">
      {/* ---------- Get in touch ---------- */}
      <section
        className={`${styles.column} ${styles.centred}`}
        aria-labelledby="contact-title"
      >
        <p className="label">{t.label}</p>
        <h1 className={styles.display} id="contact-title">
          <Lines lines={t.title} />
        </h1>
        <p className={styles.lead}>{t.lead}</p>
      </section>

      <section aria-label={t.photoLabel}>
        <Figure
          photo={localizePhoto(PHOTOS.contactHero, dict)}
          ratio={1.97}
          mobileRatio={1.2}
          sizes="100vw"
          priority
        />
      </section>

      {/* ---------- Inquiry — the words, then the form ---------- */}
      <section className={styles.column} aria-labelledby="enquiry">
        <p className="label">{t.formLabel}</p>
        <h2 className={`${styles.title} ${styles.caps}`} id="enquiry">
          {t.formTitle}
        </h2>
        <p className={styles.body}>{t.formBody}</p>

        <div className={styles.form}>
          <ContactForm labels={dict.form} calendar={dict.datePicker} />
        </div>
      </section>
    </div>
  );
}
