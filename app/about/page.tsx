import Link from "next/link";
import Figure from "@/components/ui/Figure";
import { PHOTOS } from "@/lib/data";
import styles from "./page.module.css";

export const metadata = {
  title: "About Emma | EM Photography",
  description:
    "Emma, the photographer behind EM Photography — a quiet attention to what remains.",
  alternates: { canonical: "/about" },
};

/**
 * On the home page's system: one column on the site's measure, sections
 * separated by --gap-section, type from the one scale. Two-column sections
 * split 5 / 7 across --col-gap; the statements sit in the ivory panel.
 */
export default function AboutPage() {
  return (
    <div className="page">
      {/* ---------- A quiet attention — text 5, frames 7 ---------- */}
      <section className={styles.opening} aria-labelledby="about-title">
        <div className={styles.text}>
          <p className={`label ${styles.eyebrow}`}>About</p>
          <h1 className={styles.display} id="about-title">
            A quiet attention to
            <br />
            what remains.
          </h1>
          <span className={styles.rule} aria-hidden="true" />
          <p className={styles.lead}>
            I&rsquo;m Emma, the photographer
            <br className={styles.wide} /> behind EM Photography.
          </p>
          <p className={styles.body}>
            Based in Lausanne and working throughout Switzerland, I&rsquo;m drawn to
            what feels natural, understated and deeply human&nbsp;&mdash; subtle
            gestures, fleeting expressions and the quiet details that give a moment
            its meaning.
          </p>
        </div>

        {/* One tall frame, and a smaller one laid over its lower right corner,
            both inside the measure. */}
        <div className={styles.frames}>
          <Figure
            photo={PHOTOS.aboutLead}
            ratio={0.71}
            mobileRatio={0.8}
            sizes="(max-width: 860px) 80vw, 44vw"
            priority
            className={styles.frameMain}
          />
          <Figure
            photo={PHOTOS.aboutLeadInset}
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
          photo={PHOTOS.aboutTrace}
          ratio={1.16}
          mobileRatio={1.1}
          sizes="(max-width: 860px) 100vw, 56vw"
        />

        <div className={styles.text}>
          <h2 className={styles.title} id="about-trace">
            More than a record
            <br />
            of the day,
            <br />
            a trace of what
            <br />
            it felt like.
          </h2>
          <span className={styles.rule} aria-hidden="true" />
          <p className={styles.body}>
            Inspired by natural light, genuine connection and the beauty of what often
            goes unnoticed, I photograph with a sensitivity to atmosphere, rhythm and
            presence.
          </p>
          <p className={styles.body}>
            I work intuitively and with a light touch&nbsp;&mdash; observing closely,
            guiding gently when needed, and preserving what feels true to you.
          </p>
        </div>
      </section>

      {/* ---------- Ivory statement ---------- */}
      <section className="panel">
        <p className={styles.panelQuote}>Capturing how it felt.</p>
        <p className={styles.panelMeta}>
          <span className={styles.metaLine}>
            Observed with intention. Shaped with sensitivity.
          </span>{" "}
          <span className={styles.metaLine}>Made to remain.</span>
        </p>
      </section>

      {/* ---------- One large vertical frame, centred ---------- */}
      <section className={styles.portrait} aria-label="A couple walking through a stone loggia">
        <Figure
          photo={PHOTOS.aboutVertical}
          ratio={0.75}
          sizes="(max-width: 860px) 100vw, 50vw"
        />
      </section>

      {/* ---------- The invitation ---------- */}
      <section className="panel" aria-labelledby="about-invite">
        <h2 className={`${styles.title} ${styles.inviteTitle}`} id="about-invite">
          <span className={styles.phrase}>If my approach feels like you,</span>{" "}
          <span className={styles.phrase}>I would love to hear your story.</span>
        </h2>
        <p className={`${styles.body} ${styles.inviteNote}`}>
          Share your date, location and plans, and I&rsquo;ll be in touch with
          availability and next steps.
        </p>
        <Link href="/contact" className={`btn btn-dark ${styles.cta}`}>
          Enquire
        </Link>
      </section>
    </div>
  );
}
