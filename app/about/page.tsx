import Figure from "@/components/ui/Figure";
import {
  ABOUT_GALLERY,
  APPROACH_STEPS,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHOTOS,
} from "@/lib/data";
import { InstagramGlyph } from "@/components/ui/SocialIcons";
import styles from "./page.module.css";

export const metadata = {
  title: "About Emma | EM Photography",
  description:
    "Emma, the photographer behind EM Photography — editorial documentary photography with a quietly romantic soul.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* ---------- A quiet eye ----------
          Centred text, one horizontal photograph beneath it — never beside
          it, and never taking the whole page. The phone keeps the same
          order: text, then the photograph. */}
      <section className={`shell ${styles.intro}`}>
        <p className="label">About</p>
        <h1 className={`display ${styles.introTitle}`}>
          A quiet eye for what <br className={styles.wide} />
          unfolds naturally.
        </h1>
        <p className={`copy ${styles.introCopy}`}>
          Drawn to the beauty of what is felt rather than staged. To the softness of a
          gesture, the fleeting details that give a moment its atmosphere, and what
          happens in between. I&rsquo;m interested in what feels honest, instinctive
          and quietly meaningful.
        </p>
        <p className={styles.signature}>Hi, I&rsquo;m Emma.</p>

        <div className={styles.wideFigure}>
          <Figure
            photo={PHOTOS.aboutHero}
            ratio={1.94}
            mobileRatio={1.3}
            sizes="(max-width: 860px) 100vw, 72vw"
            priority
          />
        </div>
      </section>

      {/* ---------- More than a record ---------- */}
      <section className={`shell ${styles.trace}`}>
        <h2 className={`display ${styles.traceTitle}`}>
          More than a record <br className={styles.wide} />
          of the day — a trace <br className={styles.wide} />
          of what it felt like.
        </h2>

        <div className={styles.traceCopy}>
          <p className="copy">
            Inspired by genuine connection, natural beauty and the imperfect character
            of real moments, I create editorial imagery that feels refined, timeless
            and deeply personal.
          </p>
          <p className="copy">
            I work quietly and attentively, allowing moments to unfold naturally while
            offering gentle direction when needed. There is space for spontaneity,
            refined portraits and everything that happens in between.
          </p>
        </div>

        <div className={styles.wideFigure}>
          <Figure
            photo={PHOTOS.aboutBride}
            ratio={1.94}
            mobileRatio={1.3}
            sizes="(max-width: 860px) 100vw, 72vw"
          />
        </div>
      </section>

      {/* ---------- Ivory statement ---------- */}
      <section className={`band-ivory ${styles.band}`}>
        <div className="shell">
          <p className={`display ${styles.bandTitle}`}>
            Editorial documentary photography <br className={styles.wide} />
            with a quietly romantic soul.
          </p>
          <p className={`label ${styles.bandMeta}`}>
            Observed with intention. <br className={styles.metaBreak} />
            Shaped with sensitivity. <br className={styles.metaBreak} />
            Made to remain.
          </p>
        </div>
      </section>

      {/* ---------- My approach ----------
          One horizontal photograph, and the three movements of the work
          printed beneath it. */}
      <section className={`shell ${styles.approach}`} aria-labelledby="approach">
        <h2 className={`display ${styles.approachTitle}`} id="approach">
          My approach
        </h2>

        <div className={styles.approachCopy}>
          <p className="copy">
            I want your photographs to bring you back — not only to how it all looked,
            but to what it felt like to be there.
          </p>
          <p className="copy">
            The light. The laughter. The people you loved. The way you held each other.
          </p>
          <p className="copy">
            A little piece of that time, kept close enough to feel again.
          </p>
        </div>

        <div className={styles.wideFigure}>
          <Figure
            photo={PHOTOS.aboutApproach}
            ratio={2.6}
            mobileRatio={1.5}
            sizes="(max-width: 860px) 100vw, 82vw"
          />
        </div>

        <ol className={styles.steps}>
          {APPROACH_STEPS.map((step) => (
            <li key={step.number} className={styles.step}>
              <p className={`label ${styles.stepNumber}`}>{step.number}</p>
              <h3 className={`display ${styles.stepTitle}`}>{step.title}</h3>
              <p className={`copy ${styles.stepCopy}`}>{step.copy}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ---------- Closing gallery ----------
          Two frames on one line on the desktop; the phone prints all six,
          two to a line. */}
      <section className={styles.gallery} aria-labelledby="gallery">
        <div className={`shell ${styles.galleryHead}`}>
          <p className="label" id="gallery">
            A more meaningful tomorrow
          </p>
          <p className={`display ${styles.galleryTitle}`}>
            Always chasing places <br className={styles.wide} />
            that feel like home.
          </p>
        </div>

        <div className={`shell ${styles.galleryGrid}`}>
          {ABOUT_GALLERY.map((photo, index) => (
            <Figure
              key={photo.src}
              photo={photo}
              ratio={1.32}
              mobileRatio={1}
              sizes="(max-width: 860px) 46vw, 46vw"
              /* The desktop line holds the first two; the rest are the
                 phone's second and third lines. */
              className={index > 1 ? styles.galleryExtra : undefined}
            />
          ))}
        </div>

        <div className={`shell ${styles.follow}`}>
          <a
            className={styles.followLink}
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer noopener"
          >
            <InstagramGlyph size={16} className={styles.followGlyph} />
            <span>Follow on Instagram</span>
          </a>
          <p className={`label ${styles.followHandle}`}>@{INSTAGRAM_HANDLE}</p>
        </div>
      </section>
    </>
  );
}
