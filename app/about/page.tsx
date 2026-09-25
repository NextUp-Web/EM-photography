import Link from "next/link";
import Figure from "@/components/ui/Figure";
import { APPROACH_STEPS, PHOTOS } from "@/lib/data";
import styles from "./page.module.css";

export const metadata = {
  title: "About Emma | EM Photography",
  description:
    "Emma, the photographer behind EM Photography — a quiet eye for what unfolds naturally.",
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
      {/* ---------- A quiet eye — text 5, frames 7 ---------- */}
      <section className={styles.opening} aria-labelledby="about-title">
        <div className={styles.text}>
          <p className={`label ${styles.eyebrow}`}>About</p>
          <h1 className={styles.display} id="about-title">
            A quiet eye for
            <br />
            what unfolds
            <br />
            naturally.
          </h1>
          <span className={styles.rule} aria-hidden="true" />
          <p className={styles.lead}>
            I&rsquo;m Emma, the photographer
            <br className={styles.wide} /> behind EM Photography.
          </p>
          <p className={styles.body}>
            I&rsquo;m drawn to the beauty of what is felt rather than staged. To the
            subtle gestures, the fleeting details that shape a moment. I&rsquo;m
            inspired by natural light, honest in-between moments and a love that feels
            honest, instinctive and quietly meaningful.
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
            <br className={styles.wide} /> of the day &mdash; a trace
            <br className={styles.wide} /> of what it felt like.
          </h2>
          <span className={styles.rule} aria-hidden="true" />
          <p className={styles.body}>
            Inspired by genuine connection, natural beauty and the in-between moments
            of real interaction &mdash; nuance and true presence that feel effortless,
            timeless and deeply personal.
          </p>
          <p className={styles.body}>
            I work quietly and intuitively, allowing moments to unfold naturally while
            offering gentle direction when needed.
          </p>
        </div>
      </section>

      {/* ---------- Ivory statement ---------- */}
      <section className={`panel ${styles.framed}`}>
        <p className={styles.panelQuote}>Capturing how it felt.</p>
        <p className={styles.panelMeta}>
          Observed with intention. Shaped with sensitivity. Made to remain.
        </p>
      </section>

      {/* ---------- Observe / Guide / Preserve ---------- */}
      <section aria-label="Observe, guide, preserve">
        <ol className={styles.steps}>
          {APPROACH_STEPS.map((step) => (
            <li key={step.number} className={styles.step}>
              <p className="label">{step.number}</p>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <span className={styles.stepRule} aria-hidden="true" />
              <p className={`${styles.body} ${styles.stepCopy}`}>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ---------- One wide frame ---------- */}
      <section aria-label="Emma at work">
        <Figure
          photo={PHOTOS.aboutPanorama}
          ratio={3.2}
          mobileRatio={1.3}
          sizes="100vw"
        />
      </section>

      {/* ---------- The invitation ---------- */}
      <section className={`panel ${styles.framed}`} aria-labelledby="about-invite">
        <h2 className={styles.title} id="about-invite">
          <span className={styles.phrase}>If my approach feels like you,</span>{" "}
          <span className={styles.phrase}>I would love to hear your story.</span>
        </h2>
        <Link href="/contact" className={`btn btn-dark ${styles.cta}`}>
          Enquire
        </Link>
      </section>
    </div>
  );
}
