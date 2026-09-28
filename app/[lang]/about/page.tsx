import Link from "next/link";
import Figure from "@/components/ui/Figure";
import Lines from "@/components/ui/Lines";
import { PHOTOS } from "@/lib/data";
import {
  alternatesFor,
  getDictionary,
  isLocale,
  localizePath,
  localizePhoto,
  type Locale,
} from "@/lib/i18n";
import styles from "./page.module.css";

type PageParams = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: PageParams) {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { meta } = getDictionary(lang);
  return {
    title: meta.aboutTitle,
    description: meta.aboutDescription,
    alternates: alternatesFor("/about", lang),
  };
}

/**
 * On the home page's system: one column on the site's measure, sections
 * separated by --gap-section, type from the one scale. Two-column sections
 * split 5 / 7 across --col-gap; the statements sit in the ivory panel.
 */
export default async function AboutPage({ params }: PageParams) {
  const lang = (await params).lang as Locale;
  const dict = getDictionary(lang);
  const t = dict.about;

  return (
    <div className="page">
      {/* ---------- A quiet attention — text 5, frames 7 ---------- */}
      <section className={styles.opening} aria-labelledby="about-title">
        <div className={styles.text}>
          <p className={`label ${styles.eyebrow}`}>{t.label}</p>
          <h1 className={styles.display} id="about-title">
            <Lines lines={t.title} />
          </h1>
          <span className={styles.rule} aria-hidden="true" />
          <p className={styles.lead}>
            {t.lead[0]}
            <br className={styles.wide} /> {t.lead[1]}
          </p>
          <p className={styles.body}>{t.body}</p>
        </div>

        {/* One tall frame, and a smaller one laid over its lower right corner,
            both inside the measure. */}
        <div className={styles.frames}>
          <Figure
            photo={localizePhoto(PHOTOS.aboutLead, dict)}
            ratio={0.71}
            mobileRatio={0.8}
            sizes="(max-width: 860px) 80vw, 44vw"
            priority
            className={styles.frameMain}
          />
          <Figure
            photo={localizePhoto(PHOTOS.aboutLeadInset, dict)}
            ratio={0.65}
            mobileRatio={0.7}
            sizes="(max-width: 860px) 45vw, 26vw"
            priority
            className={styles.frameInset}
          />
        </div>
      </section>

      {/* ---------- More than a record — frame 7, text 5 ---------- */}
      <section className={styles.trace} aria-labelledby="about-trace">
        <Figure
          photo={localizePhoto(PHOTOS.aboutTrace, dict)}
          ratio={1.16}
          mobileRatio={1.1}
          sizes="(max-width: 860px) 100vw, 56vw"
        />

        <div className={styles.text}>
          <h2 className={styles.title} id="about-trace">
            <Lines lines={t.traceTitle} />
          </h2>
          <span className={styles.rule} aria-hidden="true" />
          {t.traceBody.map((paragraph) => (
            <p key={paragraph} className={styles.body}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* ---------- Ivory statement ---------- */}
      <section className="panel">
        <p className={styles.panelQuote}>{t.panelText}</p>
        <p className={styles.panelMeta}>
          <span className={styles.metaLine}>{t.panelMeta[0]}</span>{" "}
          <span className={styles.metaLine}>{t.panelMeta[1]}</span>
        </p>
      </section>

      {/* ---------- One large vertical frame, centred ---------- */}
      <section className={styles.portrait} aria-label={t.verticalLabel}>
        <Figure
          photo={localizePhoto(PHOTOS.aboutVertical, dict)}
          ratio={0.75}
          sizes="(max-width: 860px) 100vw, 50vw"
        />
      </section>

      {/* ---------- The invitation ---------- */}
      <section className="panel" aria-labelledby="about-invite">
        <h2 className={`${styles.title} ${styles.inviteTitle}`} id="about-invite">
          <span className={styles.phrase}>{t.inviteTitle[0]}</span>{" "}
          <span className={styles.phrase}>{t.inviteTitle[1]}</span>
        </h2>
        <p className={`${styles.body} ${styles.inviteNote}`}>{t.inviteNote}</p>
        <Link href={localizePath("/contact", lang)} className={`btn btn-dark ${styles.cta}`}>
          {dict.common.enquire}
        </Link>
      </section>
    </div>
  );
}
