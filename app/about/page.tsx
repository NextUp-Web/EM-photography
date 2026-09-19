import Figure from "@/components/ui/Figure";
import { PHOTOS } from "@/lib/data";
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
      {/* ---------- A quiet eye ---------- */}
      <section className={styles.intro}>
        <div className={styles.portraitWrap}>
          <Figure
            photo={PHOTOS.aboutHero}
            ratio={0.88}
            mobileRatio={1.24}
            sizes="(max-width: 860px) 100vw, 46vw"
            priority
            className={styles.portrait}
          />
          <p className={styles.signature}>Hi, I&rsquo;m Emma.</p>
        </div>

        <div className={styles.introHead}>
          <p className={`label ${styles.introLabel}`}>About</p>
          <h1 className={`display ${styles.introTitle}`}>
            A quiet eye for what <br className={styles.wide} />
            unfolds naturally.
          </h1>
        </div>

        <p className={`copy ${styles.introCopy}`}>
          Drawn to the beauty of what is felt rather than staged. To the softness of a
          gesture, the fleeting details that give a moment its atmosphere, and what
          happens in between. I&rsquo;m interested in what feels honest, instinctive
          and quietly meaningful.
        </p>
      </section>

      {/* ---------- More than a record ---------- */}
      <section className={styles.trace}>
        <Figure
          photo={PHOTOS.aboutBride}
          ratio={0.96}
          mobileRatio={1.54}
          sizes="(max-width: 860px) 100vw, 46vw"
          className={styles.traceFigure}
        />

        <div className={styles.traceText}>
          <h2 className={`display ${styles.traceTitle}`}>
            More than a record <br />
            of the day — a trace <br />
            of what it felt like.
          </h2>
          <p className={`copy ${styles.traceCopy}`}>
            I&rsquo;m Emma, the photographer behind EM Photography.
          </p>
          <p className="copy">
            Inspired by genuine connection, natural beauty, atmosphere, and the
            imperfect character of real moments, I create editorial imagery that feels
            refined, timeless, and deeply personal.
          </p>
          <p className="copy">
            My approach is documentary at heart, with an editorial sensitivity to
            detail. I work quietly and attentively, letting moments unfold without
            interruption while stepping in with gentle direction when it feels right.
            There is space for spontaneity, for refined portraits, and for everything
            that happens naturally in between.
          </p>
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

      {/* ---------- What I want for you ---------- */}
      <section className={`shell ${styles.want}`} aria-labelledby="want">
        <div className={styles.wantTop}>
          <div className={styles.wantText}>
          <p className="label" id="want">
            What I want for you
          </p>
          <p className={`copy ${styles.wantCopy}`}>
            Years from now, I want your photographs to bring you back — not only to how
            the day looked, but to what it felt like to be there. The light. The
            laughter. The people you loved. The way you held each other.
          </p>
            <p className="copy">
              A little piece of that time, kept close enough to feel again.
            </p>
          </div>

          <Figure
            photo={PHOTOS.aboutVilla}
            ratio={0.83}
            mobileRatio={1.44}
            sizes="(max-width: 860px) 46vw, 23vw"
            className={styles.villa}
          />
          <Figure
            photo={PHOTOS.aboutVeil}
            ratio={0.93}
            sizes="26vw"
            className={styles.veil}
          />
        </div>

        <div className={styles.wantRow}>
          <Figure
            photo={PHOTOS.aboutCouple}
            ratio={1.74}
            mobileRatio={1.44}
            sizes="(max-width: 860px) 46vw, 31vw"
            className={styles.couple}
          />
          <Figure
            photo={PHOTOS.aboutTable}
            ratio={1.74}
            mobileRatio={1.44}
            sizes="(max-width: 860px) 46vw, 31vw"
            className={styles.table}
          />
          <Figure
            photo={PHOTOS.aboutBoat}
            ratio={1.74}
            mobileRatio={1.44}
            sizes="(max-width: 860px) 46vw, 31vw"
            className={styles.boat}
          />
        </div>
      </section>
    </>
  );
}
