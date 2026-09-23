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
    <>
      {/* ---------- The one where ----------
          One centred title and a great deal of white around it, exactly as
          the brief asks — this opening is not compressed. */}
      <section className={`shell ${styles.opening}`}>
        <h1 className={`display ${styles.openingTitle}`}>
          The one where
          <br />
          You get to know more about EM
        </h1>
      </section>

      {/* ---------- A quiet eye ----------
          Text on the left, three frames of Emma on the right, set off one
          another rather than in a row. */}
      <section className={`shell ${styles.emma}`} aria-labelledby="about-emma">
        <div className={styles.emmaText}>
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
            {/* Two lines on the desktop, one on the phone — the break is
                CSS, so the space between them is never lost. */}
            <span className={styles.line}>I&rsquo;m Emma, the photograph</span>{" "}
            <span className={styles.line}>behind EM Photography.</span>
          </p>

          <p className={`copy ${styles.emmaCopy}`}>
            Drawn to the beauty of what is felt rather than staged. To the softness
            of a gesture, the fleeting details that give a moment its atmosphere, and
            what happens in between. I&rsquo;m interested in what feels honest,
            instinctive and quietly meaningful.
          </p>
        </div>

        <div className={styles.emmaFrames}>
          <Figure
            photo={PHOTOS.aboutPortraitMain}
            ratio={0.66}
            mobileRatio={0.75}
            sizes="(max-width: 860px) 100vw, 26vw"
            priority
            className={styles.portraitMain}
          />
          <Figure
            photo={PHOTOS.aboutPortraitTwo}
            ratio={0.86}
            mobileRatio={0.84}
            sizes="(max-width: 860px) 46vw, 20vw"
            className={styles.portraitTop}
          />
          <div className={styles.portraitMat}>
            <Figure
              photo={PHOTOS.aboutPortraitThree}
              ratio={0.94}
              mobileRatio={0.84}
              sizes="(max-width: 860px) 46vw, 19vw"
              className={styles.portraitOver}
            />
          </div>
        </div>
      </section>

      {/* ---------- More than a record ---------- */}
      <section className={`shell ${styles.trace}`} aria-labelledby="about-trace">
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

          <div className={styles.traceCopy}>
            <p className="copy">
              Inspired by genuine connection, natural beauty and the imperfect
              character of real moments, I create editorial imagery that feels
              refined, timeless and deeply personal.
            </p>
            <p className="copy">
              I work quietly and attentively, allowing moments to unfold naturally
              while offering gentle direction when needed. There is space for
              spontaneity, refined portraits and everything that happens in between.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Ivory statement ---------- */}
      <section className={`band-ivory ${styles.band}`}>
        <div className="shell">
          <p className={`display ${styles.bandTitle}`}>
            <span className={styles.bandLine}>A little piece of that time,</span>{" "}
            <span className={styles.bandLine}>
              kept close enough to feel again.
            </span>
          </p>
          <p className={`label ${styles.bandMeta}`}>
            Observed with intention. Shaped with sensitivity. Made to remain.
          </p>
        </div>
      </section>

      {/* ---------- Three frames, then the three movements ---------- */}
      <section className={`shell ${styles.approach}`}>
        <div className={styles.verticals}>
          {ABOUT_VERTICALS.map((photo) => (
            <Figure
              key={photo.src}
              photo={photo}
              ratio={0.66}
              mobileRatio={0.72}
              sizes="(max-width: 860px) 92vw, 30vw"
            />
          ))}
        </div>

        <ol className={styles.steps}>
          {APPROACH_STEPS.map((step) => (
            <li key={step.number} className={styles.step}>
              <p className={`label ${styles.stepNumber}`}>{step.number}</p>
              <span className={styles.stepRule} aria-hidden="true" />
              <h3 className={`display ${styles.stepTitle}`}>{step.title}</h3>
              <p className={`copy ${styles.stepCopy}`}>{step.copy}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
