import Link from "next/link";
import Figure from "@/components/ui/Figure";
import SelectedStories from "@/components/sections/SelectedStories";
import { PHOTOS } from "@/lib/data";
import styles from "./page.module.css";

export const metadata = {
  title: "EM Photography | Wedding Photographer in Switzerland",
  alternates: { canonical: "/" },
};

/**
 * The home page is one column of sections on one measure: every section
 * shares the same left and right edges and the same distance to the next.
 * Text uses three sizes only — title, lead and body — plus the small
 * tracked label; the two ivory panels are set as main sets them (see
 * page.module.css).
 */
export default function HomePage() {
  return (
    <div className={styles.home}>
      {/* ---------- Hero — a tall monochrome frame, a colour frame over its corner ---------- */}
      <section className={styles.hero} aria-label="EM Photography">
        <Figure
          photo={PHOTOS.homeHeroMain}
          ratio={1.05}
          mobileRatio={0.71}
          sizes="(max-width: 860px) 80vw, 800px"
          priority
          className={styles.heroMain}
        />
        <Figure
          photo={PHOTOS.homeHeroSide}
          ratio={0.652}
          mobileRatio={0.63}
          sizes="(max-width: 860px) 40vw, 380px"
          priority
          className={styles.heroSide}
        />
      </section>

      {/* ---------- Philosophy ---------- */}
      <section className={styles.intro} aria-labelledby="philosophy">
        <p className="label">Philosophy</p>
        <h1 className={`${styles.title} ${styles.caps}`} id="philosophy">
          Where refined imagery
          <br />
          meets genuine emotion.
        </h1>
        <span className={styles.rule} aria-hidden="true" />
      </section>

      {/* ---------- Approach — text, then two frames ---------- */}
      <section className={styles.split} aria-labelledby="approach">
        <div className={styles.text}>
          <p className="label" id="approach">
            Approach
          </p>
          <h2 className={styles.title}>
            For all that words
            <br />
            cannot hold.
          </h2>
          <span className={styles.rule} aria-hidden="true" />
          <p className={styles.lead}>
            The quiet details.
            <br />
            The moments in between.
          </p>
          <p className={styles.body}>
            I photograph stories with a documentary sensitivity and a refined
            editorial eye&nbsp;&mdash; attentive to the subtle gestures, fleeting
            expressions and details that quietly shape the day.
          </p>
          <Link href="/portfolio" className={`btn btn-dark ${styles.cta}`}>
            View portfolio
          </Link>
        </div>

        <div className={styles.pair}>
          <Figure
            photo={PHOTOS.approachOne}
            ratio={0.72}
            sizes="(max-width: 860px) 50vw, 300px"
          />
          <Figure
            photo={PHOTOS.approachTwo}
            ratio={0.72}
            sizes="(max-width: 860px) 50vw, 300px"
          />
        </div>
      </section>

      {/* ---------- Ivory statement ---------- */}
      <section className="panel">
        {/* Set in the second panel's face and size exactly: two lines on the
            desktop, one flowing measure on the phone. */}
        <p className={styles.quoteText}>
          <span className={styles.bandLine}>For those drawn to photographs that</span>{" "}
          <span className={styles.bandLine}>reveal more the longer you look.</span>
        </p>
        <p className={styles.quoteMeta}>The art of looking closer.</p>
      </section>

      {/* ---------- Selected stories ---------- */}
      <section className={styles.stories} aria-labelledby="stories">
        <div className={styles.storiesHead}>
          <p className="label" id="stories">
            Selected stories
          </p>
          <p className={styles.body}>
            A collection that feels natural, considered and deeply connected to the
            atmosphere of your celebration&nbsp;&mdash; unfolding chapter by chapter,
            each with its own rhythm and feeling.
          </p>
        </div>

        <SelectedStories />
      </section>

      {/* ---------- About — a frame, then the text ---------- */}
      <section className={styles.split} aria-labelledby="about-preview">
        <Figure
          photo={PHOTOS.aboutPortrait}
          ratio={1.2}
          sizes="(max-width: 860px) 100vw, 440px"
        />

        <div className={styles.text}>
          <p className="label" id="about-preview">
            About
          </p>
          <h2 className={styles.title}>
            A quiet eye for what
            <br />
            unfolds naturally.
          </h2>
          <span className={styles.rule} aria-hidden="true" />
          <p className={styles.body}>
            Drawn to the beauty of what is felt rather than staged. To subtle gestures,
            fleeting expressions, and the details that shape the atmosphere of a
            moment. I&rsquo;m interested in photographs that feel honest, instinctive
            and deeply connected to the people within them.
          </p>
          <Link href="/about" className={`btn btn-dark ${styles.cta}`}>
            More about me
          </Link>
        </div>
      </section>

      {/* ---------- Ivory statement ---------- */}
      <section className="panel">
        {/* Set exactly as main sets "Documenting love in its softest form." */}
        <p className={styles.quoteText}>Documenting love in its softest form.</p>
        <p className={styles.quoteMeta}>
          Documentary presence. Editorial sensibility. Softly felt.
        </p>
      </section>

      {/* ---------- The invitation — one monochrome photograph from margin
          to margin, the words over its left side, centred on its height ---------- */}
      <section className={styles.invite} aria-labelledby="invite">
        <Figure
          photo={PHOTOS.homeInvite}
          ratio={2.2}
          mobileRatio={0.8}
          sizes="100vw"
          className={styles.inviteFigure}
        />
        <div className={styles.inviteText}>
          <h2 className={`${styles.title} ${styles.caps}`} id="invite">
            Let&rsquo;s create
            <br />
            something
            <br />
            <em className={styles.inviteEm}>meaningful.</em>
          </h2>
          <p className={`label ${styles.inviteTags}`}>
            Weddings
            <span className={styles.inviteDot} aria-hidden="true">
              &middot;
            </span>
            Love stories
            <span className={styles.inviteDot} aria-hidden="true">
              &middot;
            </span>
            Portraits
          </p>
          <Link href="/contact" className={`btn btn-light ${styles.inviteCta}`}>
            Enquire
          </Link>
        </div>
      </section>
    </div>
  );
}
