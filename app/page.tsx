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
      {/* Everything drawn off the client's mockup sits on one canvas, which
          the desktop draws at three quarters of the page width. */}
      <div className={styles.home}>
        {/* ---------- Hero — a tall monochrome frame, a colour frame over its corner ---------- */}
        <section className={styles.hero} aria-label="EM Photography">
          <Figure
            photo={PHOTOS.homeHeroMain}
            ratio={0.955}
            mobileRatio={0.71}
            sizes="(max-width: 860px) 80vw, 68vw"
            priority
            className={styles.heroMain}
          />
          <Figure
            photo={PHOTOS.homeHeroSide}
            ratio={0.652}
            mobileRatio={0.63}
            sizes="(max-width: 860px) 38vw, 27vw"
            priority
            className={styles.heroSide}
          />
        </section>

        {/* ---------- Observation ---------- */}
        <section className={styles.observation} aria-labelledby="observation">
          <p className="label">Philosophy</p>
          <h1 className={`display ${styles.observationTitle}`} id="observation">
            Where refined imagery
            <br />
            meets genuine emotion.
          </h1>
          <span className={styles.rule} aria-hidden="true" />
        </section>

        {/* ---------- Approach ---------- */}
        <section className={styles.approach} aria-labelledby="approach">
          <div className={styles.approachText}>
            <p className="label" id="approach">
              Approach
            </p>
            <h2 className={`display ${styles.approachTitle}`}>
              For all that words
              <br />
              cannot hold.
            </h2>
            <span className={styles.rule} aria-hidden="true" />
            <p className={`copy ${styles.approachLead}`}>
              The quiet details.
              <br />
              The moments in between.
            </p>
            <p className={`copy ${styles.approachCopy}`}>
              I photograph stories with a documentary
              <br className={styles.desktopBreak} /> sensitivity and a refined editorial
              eye&nbsp;&mdash;
              <br className={styles.desktopBreak} /> attentive to the subtle gestures,
              fleeting
              <br className={styles.desktopBreak} /> expressions and details that quietly
              shape the day.
            </p>
          </div>

          <div className={styles.approachFrames}>
            <Figure
              photo={PHOTOS.approachOne}
              ratio={0.638}
              mobileRatio={0.7}
              sizes="(max-width: 860px) 50vw, 25vw"
            />
            <Figure
              photo={PHOTOS.approachTwo}
              ratio={0.638}
              mobileRatio={0.7}
              sizes="(max-width: 860px) 50vw, 25vw"
            />
          </div>
        </section>

        {/* ---------- Ivory statement ---------- */}
        <section className={styles.panel}>
          <p className={`display ${styles.panelTitle}`}>
            For those drawn to photographs that
            <br className={styles.desktopBreak} /> reveal more the longer you look.
          </p>
          <span className={styles.panelRule} aria-hidden="true" />
          <p className={styles.panelLead}>The art of looking closer.</p>
        </section>

        {/* ---------- Selected stories ---------- */}
        <section className={styles.stories} aria-labelledby="stories">
          <p className={`label ${styles.storiesLabel}`} id="stories">
            Selected stories
          </p>
          <p className={`copy ${styles.storiesCopy}`}>
            A collection that feels natural, considered and deeply connected to the
            atmosphere
            <br className={styles.desktopBreak} /> of your celebration &mdash; unfolding
            chapter by chapter, each with its own rhythm and feeling.
          </p>

          <SelectedStories className={styles.storiesGallery} />
        </section>

        {/* ---------- About preview ---------- */}
        <section className={styles.about} aria-labelledby="about-preview">
          <Figure
            photo={PHOTOS.aboutPortrait}
            ratio={1.39}
            mobileRatio={1.2}
            sizes="(max-width: 860px) 100vw, 39vw"
            className={styles.aboutPortrait}
          />

          <div className={styles.aboutText}>
            <p className="label" id="about-preview">
              About
            </p>
            <h2 className={`display ${styles.aboutTitle}`}>
              A quiet eye for what
              <br />
              unfolds naturally.
            </h2>
            <span className={styles.rule} aria-hidden="true" />
            <p className={`copy ${styles.aboutCopy}`}>
              Drawn to the beauty of what is felt rather than staged. To subtle gestures,
              <br className={styles.desktopBreak} /> fleeting expressions, and the details
              that shape the atmosphere of a moment.
              <br className={styles.desktopBreak} /> I&rsquo;m interested in photographs
              that feel honest, instinctive and deeply
              <br className={styles.desktopBreak} /> connected to the people within them.
            </p>
          </div>
        </section>

      </div>

      {/* ---------- Closing — the statement, then the invitation ---------- */}
      <section className={styles.closing} aria-label="Get in touch">
        <div className={`band-ivory ${styles.quote}`}>
          <p className={`display ${styles.quoteText}`}>
            Documenting love in its softest form.
          </p>
          {/* Centred on the sentence above, far smaller, on one line. */}
          <p className={`label ${styles.quoteMeta}`}>
            Documentary presence. Editorial sensibility. Softly felt.
          </p>
        </div>

        {/* One very large monochrome photograph with, over it, the
            three-line statement, the tracked line beneath it and the
            Enquire rectangle. */}
        <div className={styles.banner}>
          <Figure
            photo={PHOTOS.homeBanner}
            ratio={1.78}
            mobileRatio={0.72}
            sizes="100vw"
            className={styles.bannerFigure}
          />
          <div className={styles.bannerInner}>
            <p className={`display ${styles.bannerTitle}`}>
              Let&rsquo;s create
              <br />
              something
              <br />
              <em className={styles.bannerEm}>meaningful.</em>
            </p>
            <p className={styles.bannerTags}>
              Weddings<span aria-hidden="true"> &bull; </span>Couples
              <span aria-hidden="true"> &bull; </span>Love stories
            </p>
            <Link href="/contact" className={styles.bannerCta}>
              Enquire
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
