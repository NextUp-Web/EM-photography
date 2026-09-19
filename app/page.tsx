import Link from "next/link";
import Figure from "@/components/ui/Figure";
import SelectedStories from "@/components/sections/SelectedStories";
import { PHOTOS } from "@/lib/data";
import styles from "./page.module.css";

export const metadata = {
  title: "EM Photography | Wedding Photographer in Switzerland",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className={styles.hero} aria-label="EM Photography">
        <Figure
          photo={PHOTOS.homeHero}
          ratio={2.22}
          mobileRatio={1.12}
          sizes="100vw"
          priority
          className={styles.heroFigure}
        />
        <div className={styles.heroInner}>
          <h1 className={styles.heroMark}>
            <span className={styles.heroEm}>EM</span>
            <span className={styles.heroWord}>Photography</span>
          </h1>
          <p className={styles.heroLine}>Switzerland based &middot; Europe</p>
          <p className={`${styles.heroLine} ${styles.heroTags}`}>
            <span className={styles.heroTag}>Weddings</span>
            <span className={styles.heroTag}>Couples</span>
            <span className={styles.heroTag}>Personal stories</span>
          </p>
          <Link href="/contact" className={`cta-solid ${styles.heroCta}`}>
            Begin here
          </Link>
        </div>
      </section>

      {/* ---------- Philosophy ---------- */}
      <section className={`shell ${styles.philosophy}`} aria-labelledby="philosophy">
        <div className={styles.philosophyText}>
          <p className="label" id="philosophy">
            Philosophy
          </p>
          <h2 className={`display ${styles.philosophyTitle}`}>
            For all that
            <br />
            words cannot hold.
          </h2>
          <p className={`copy ${styles.philosophyCopy}`}>
            The quiet details. The moments in between. I photograph stories with a
            documentary sensitivity and a refined editorial eye — attentive to the
            subtle gestures, fleeting expressions and details that quietly shape the
            day.
          </p>
        </div>

        <div className={styles.philosophyFrames}>
          <Figure
            photo={PHOTOS.philosophyOne}
            ratio={0.65}
            mobileRatio={0.72}
            sizes="(max-width: 860px) 32vw, 21vw"
          />
          <Figure
            photo={PHOTOS.philosophyTwo}
            ratio={0.65}
            mobileRatio={0.72}
            sizes="(max-width: 860px) 32vw, 21vw"
          />
          <Figure
            photo={PHOTOS.philosophyThree}
            ratio={0.65}
            mobileRatio={0.72}
            sizes="(max-width: 860px) 32vw, 21vw"
          />
        </div>
      </section>

      {/* ---------- Ivory statement ---------- */}
      <section className={`band-ivory ${styles.band}`}>
        <div className="shell">
          <p className={`display ${styles.bandTitle}`}>
            For those drawn to photographs that reveal more the longer you look.
          </p>
          <p className={`label ${styles.bandMeta}`}>
            Documentary observation
            <span className={`${styles.bandDot} ${styles.bandDotOne}`}>&middot;</span>
            <br className={styles.bandBreak} /> Editorial sensibility{" "}
            <span className={styles.bandDot}>&middot;</span> Quietly felt.
          </p>
        </div>
      </section>

      {/* ---------- Selected stories ---------- */}
      <section className={`shell ${styles.stories}`} aria-labelledby="stories">
        <div className={styles.storiesText}>
          <p className="label" id="stories">
            Selected stories
          </p>
          <h2 className={`display ${styles.storiesTitle}`}>Love, documented.</h2>
          <p className={`copy ${styles.storiesCopy}`}>
            A collection that feels natural, considered and deeply connected to the
            atmosphere of your celebration — unfolding chapter by chapter, each with
            its own rhythm and feeling.
          </p>
        </div>

        <SelectedStories
          framesClassName={styles.storiesFrames}
          controlsClassName={styles.storiesControls}
        />
      </section>

      {/* ---------- About preview ---------- */}
      <section className={`shell ${styles.about}`} aria-labelledby="about-preview">
        <Figure
          photo={PHOTOS.aboutPortrait}
          ratio={1.37}
          mobileRatio={1.4}
          sizes="(max-width: 860px) 45vw, 33vw"
          className={styles.aboutPortrait}
        />

        <div className={styles.aboutText}>
          <p className="label" id="about-preview">
            About
          </p>
          <h2 className={`display ${styles.aboutTitle}`}>
            A quiet eye for what <br className={styles.aboutBreak} />
            unfolds naturally.
          </h2>
          <p className={`copy ${styles.aboutCopy}`}>
            Drawn to the beauty of what is felt rather than staged. To the softness of
            a gesture, the fleeting details that give a moment its atmosphere, and what
            happens in between. I&rsquo;m interested in what feels honest, instinctive
            and quietly meaningful.
          </p>
        </div>

        <Link href="/about" className={`cta-underline ${styles.aboutLink}`}>
          More about me
          <span className="arrow" aria-hidden="true">
            &#8594;
          </span>
        </Link>
      </section>

      {/* ---------- Closing ---------- */}
      <section className={styles.closing} aria-label="Get in touch">
        <Figure
          photo={PHOTOS.homeClosing}
          ratio={4.15}
          mobileRatio={1.87}
          sizes="100vw"
          className={styles.closingFigure}
        />
        <div className={styles.closingInner}>
          <p className={`display ${styles.closingTitle}`}>Made to be felt again.</p>
          <Link href="/contact" className={`cta-ghost ${styles.closingCta}`}>
            Tell me your story.
          </Link>
        </div>
      </section>
    </>
  );
}
