import Link from "next/link";
import Figure from "@/components/ui/Figure";
import SelectedStories from "@/components/sections/SelectedStories";
import { HOME_CLOSING_STRIP, PHOTOS } from "@/lib/data";
import styles from "./page.module.css";

export const metadata = {
  title: "EM Photography | Wedding Photographer in Switzerland",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* ---------- Hero ----------
          Exactly as the client's generated reference (document, page 1,
          first image): EM, PHOTOGRAPHY tracked beneath it, the italic
          place-line, then BEGIN HERE — all Cormorant Garamond, white,
          centred low in the frame. The old version (the second image on
          that page: EM PHOTOGRAPHY on one line, two tracked sans lines)
          is what this replaces. */}
      <section className={styles.hero} aria-label="EM Photography">
        <Figure
          photo={PHOTOS.homeHero}
          ratio={1.78}
          sizes="100vw"
          priority
          className={styles.heroFigure}
        />
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroEm}>EM</span>
            <span className={styles.heroPhotography}>Photography</span>
          </h1>
          <p className={styles.heroLine}>
            Wedding &amp; Couple photographer based in Switzerland
          </p>
          <Link href="/contact" className={styles.heroCta}>
            Begin here
          </Link>
        </div>
      </section>

      {/* ---------- Philosophy ----------
          The text holds the left column; the right is a collage of three
          frames — one tall and dominant, two smaller ones set above and
          across it. */}
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
          <p className={`display ${styles.philosophyLede}`}>
            The quiet details.
            <br />
            The moments in between.
          </p>
          <p className={`copy ${styles.philosophyCopy}`}>
            I photograph stories with a documentary sensitivity and a refined
            editorial eye — attentive to the subtle gestures, fleeting expressions
            and details that quietly shape the day.
          </p>
        </div>

        <div className={styles.philosophyFrames}>
          <Figure
            photo={PHOTOS.philosophyThree}
            ratio={0.68}
            mobileRatio={0.78}
            sizes="(max-width: 860px) 100vw, 30vw"
            className={styles.frameMain}
          />
          <Figure
            photo={PHOTOS.philosophyOne}
            ratio={0.93}
            mobileRatio={0.86}
            sizes="(max-width: 860px) 46vw, 20vw"
            className={styles.frameTop}
          />
          <div className={styles.frameOverMat}>
            <Figure
              photo={PHOTOS.philosophyTwo}
              ratio={0.79}
              mobileRatio={0.86}
              sizes="(max-width: 860px) 46vw, 18vw"
              className={styles.frameOver}
            />
          </div>
        </div>
      </section>

      {/* ---------- Ivory statement ---------- */}
      <section className={`band-ivory ${styles.band}`}>
        <div className="shell">
          {/* Two lines on the desktop, one flowing measure on the phone —
              the break is CSS, so the space between them is never lost. */}
          <p className={`display ${styles.bandTitle}`}>
            <span className={styles.bandLine}>
              For those drawn to photographs that
            </span>{" "}
            <span className={styles.bandLine}>reveal more the longer you look</span>
          </p>
          <p className={`label ${styles.bandMeta}`}>
            Where observation meets intention.
          </p>
        </div>
      </section>

      {/* ---------- Selected stories ---------- */}
      <section className={`shell ${styles.stories}`} aria-labelledby="stories">
        <div className={styles.storiesText}>
          <h2 className={`display ${styles.storiesTitle}`} id="stories">
            Selected stories
          </h2>
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
          ratio={0.92}
          mobileRatio={1.2}
          sizes="(max-width: 860px) 100vw, 33vw"
          className={styles.aboutPortrait}
        />

        <div className={styles.aboutText}>
          <p className="label" id="about-preview">
            About
          </p>
          <h2 className={`display ${styles.aboutTitle}`}>
            A quiet eve for what <br className={styles.aboutBreak} />
            unfolds naturally.
          </h2>
          <p className={`copy ${styles.aboutCopy}`}>
            Drawn to the beauty of what is felt rather than staged. To subtle
            gestures, fleeting expressions, and the details that shape the atmosphere
            of a moment. I&rsquo;m interested in photographs that feel honest,
            instinctive and deeply connected to the people within them.
          </p>
          <Link href="/about" className={`btn btn-dark ${styles.aboutLink}`}>
            More about me
          </Link>
        </div>
      </section>

      {/* ---------- Closing — four frames, the statement, the invitation ---------- */}
      <section className={styles.closing} aria-label="Get in touch">
        <div className={styles.strip}>
          {HOME_CLOSING_STRIP.map((photo) => (
            <Figure
              key={photo.src}
              photo={photo}
              ratio={0.67}
              mobileRatio={0.67}
              sizes="(max-width: 860px) 50vw, 25vw"
            />
          ))}
        </div>

        <div className={`band-ivory ${styles.quote}`}>
          <p className={`display ${styles.quoteText}`}>
            Documenting love in its softest form.
          </p>
          {/* Centred on the sentence above, and far smaller than it. */}
          <p className={`label ${styles.quoteMeta}`}>
            Documentary observation. Editorial sensibility. Quietly felt.
          </p>
        </div>

        {/* One very large monochrome photograph with, over it, everything
            the client's reference prints (document, Home, the image under
            "écris exactement tout ceci"): the three-line statement, the
            tracked line beneath it and the Enquire rectangle. */}
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
