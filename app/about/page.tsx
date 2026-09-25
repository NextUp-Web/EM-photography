import Figure from "@/components/ui/Figure";
import { ABOUT_VERTICALS, APPROACH_STEPS, PHOTOS } from "@/lib/data";
import styles from "./page.module.css";

export const metadata = {
  title: "About Emma | EM Photography",
  description:
    "Emma, the photographer behind EM Photography — a quiet eye for what unfolds naturally.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="page">
      {/* ---------- The one where ----------
          One centred title and a great deal of white around it, exactly as
          the brief asks — this opening is not compressed. */}
      <section className={styles.opening}>
        <h1 className={`display ${styles.openingTitle}`}>
          The one where
          <br />
          You get to know more about EM
        </h1>
      </section>

      {/* ---------- A quiet eye ----------
          Text on the left, three frames of Emma on the right, set off one
          another rather than in a row. */}
      <section className={styles.emma} aria-labelledby="about-emma">
        <div>
          <p className="label" id="about-emma">
            About
          </p>
          <h2 className={`display ${styles.emmaTitle}`}>
            A quiet eye for
            <br />
            what unfolds
            <br />
            naturally.
          </h2>

          {/* Its own line, apart from the paragraph beneath it. */}
          <p className={`copy ${styles.emmaIntroLine}`}>
            I&rsquo;m Emma, the photograph behind EM Photography.
          </p>

          {/* The line breaks are the reference's own. */}
          <p className={`copy ${styles.emmaCopy}`}>
            <span className={styles.line}>Drawn to the beauty of what is felt rather</span>{" "}
            <span className={styles.line}>than staged. To the softness of a gesture,</span>{" "}
            <span className={styles.line}>the fleeting details that give a moment its</span>{" "}
            <span className={styles.line}>atmosphere, and what happens in between.</span>{" "}
            <span className={styles.line}>I&rsquo;m interested in what feels honest,</span>{" "}
            <span className={styles.line}>instinctive and quietly meaningful.</span>
          </p>
        </div>

        {/* As the reference: one wide, tall frame, and two smaller frames
            laid over its right-hand side. */}
        <div className={styles.emmaFrames}>
          <Figure
            photo={PHOTOS.aboutPortraitMain}
            ratio={0.64}
            mobileRatio={0.75}
            sizes="(max-width: 860px) 100vw, 24vw"
            priority
            className={styles.portraitMain}
          />
          <Figure
            photo={PHOTOS.aboutPortraitTwo}
            ratio={0.79}
            mobileRatio={0.84}
            sizes="(max-width: 860px) 46vw, 23vw"
            className={styles.portraitTop}
          />
          <Figure
            photo={PHOTOS.aboutPortraitThree}
            ratio={0.74}
            mobileRatio={0.84}
            sizes="(max-width: 860px) 46vw, 27vw"
            className={styles.portraitLow}
          />
        </div>
      </section>

      {/* ---------- More than a record ---------- */}
      <section className={styles.trace} aria-labelledby="about-trace">
        <Figure
          photo={PHOTOS.aboutTrace}
          ratio={0.78}
          mobileRatio={0.92}
          sizes="(max-width: 860px) 100vw, 40vw"
          className={styles.traceFigure}
        />

        <div className={styles.traceText}>
          <h2 className={`display ${styles.traceTitle}`} id="about-trace">
            More than a record <br className={styles.wide} />
            of the day — a trace <br className={styles.wide} />
            of what it felt like.
          </h2>

          {/* The line breaks are the reference's own. */}
          <div className={styles.traceCopy}>
            <p className="copy">
              <span className={styles.line}>Inspired by genuine connection, natural beauty</span>{" "}
              <span className={styles.line}>and the imperfect character of real moments,</span>{" "}
              <span className={styles.line}>I create editorial imagery that feels refined,</span>{" "}
              <span className={styles.line}>timeless and deeply personal.</span>
            </p>
            <p className="copy">
              <span className={styles.line}>I work quietly and attentively, allowing moments</span>{" "}
              <span className={styles.line}>to unfold naturally while offering gentle direction</span>{" "}
              <span className={styles.line}>when needed. There is space for spontaneity,</span>{" "}
              <span className={styles.line}>refined portraits and everything that happens</span>{" "}
              <span className={styles.line}>in between.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Ivory statement ---------- */}
      <section className="panel">
        <p className={`display ${styles.bandTitle}`}>
          <span className={styles.bandLine}>A little piece of that time,</span>{" "}
          <span className={styles.bandLine}>kept close enough to feel again.</span>
        </p>
        <span className={`rule ${styles.bandRule}`} aria-hidden="true" />
        <p className={`copy ${styles.bandMeta}`}>
          Observed with intention. Shaped with sensitivity. Made to remain.
        </p>
      </section>

      {/* ---------- Three frames, then the three movements ---------- */}
      <section className={styles.verticals}>
        {ABOUT_VERTICALS.map((photo) => (
          <Figure
            key={photo.src}
            photo={photo}
            ratio={0.66}
            mobileRatio={0.72}
            sizes="(max-width: 860px) 92vw, 360px"
          />
        ))}
      </section>

      <section aria-label="Observe, guide, preserve">
        <ol className={styles.steps}>
          {APPROACH_STEPS.map((step) => (
            <li key={step.number} className={styles.step}>
              <p className="label">{step.number}</p>
              <span className={`rule ${styles.stepRule}`} aria-hidden="true" />
              <h3 className={`display ${styles.stepTitle}`}>{step.title}</h3>
              <p className={`copy ${styles.stepCopy}`}>
                {step.lines.map((line, index) => (
                  <span key={line}>
                    {index > 0 && " "}
                    <span className={styles.line}>{line}</span>
                  </span>
                ))}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
