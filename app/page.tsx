import Link from "next/link";
import Figure from "@/components/ui/Figure";
import Logo from "@/components/ui/Logo";
import SelectedStories from "@/components/sections/SelectedStories";
import { InstagramGlyph, WhatsAppGlyph } from "@/components/ui/SocialIcons";
import {
  HOME_CLOSING_STRIP,
  INSTAGRAM_URL,
  PHOTOS,
  WHATSAPP_URL,
} from "@/lib/data";
import styles from "./page.module.css";

export const metadata = {
  title: "EM Photography | Wedding Photographer in Switzerland",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* ---------- Hero — one full-screen photograph, nothing else ---------- */}
      <section className={styles.hero} aria-label="EM Photography">
        <Figure
          photo={PHOTOS.homeHero}
          ratio={2.22}
          sizes="100vw"
          priority
          className={styles.heroFigure}
        />
        <div className={styles.heroInner}>
          <Logo
            variant="white"
            height="var(--hero-logo-h)"
            priority
            className={styles.heroLogo}
          />
          <p className={styles.heroLine}>Switzerland based &middot; Europe</p>
          <p className={`${styles.heroLine} ${styles.heroTags}`}>
            <span className={styles.heroTag}>Weddings</span>
            <span className={styles.heroTag}>Couples</span>
            <span className={styles.heroTag}>Love stories</span>
          </p>
          <Link href="/contact" className={`btn btn-light ${styles.heroCta}`}>
            Begin here
          </Link>
        </div>
        <span className={styles.scrollCue} aria-hidden="true" />
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
            mobileRatio={0.78}
            sizes="(max-width: 860px) 100vw, 21vw"
          />
          <Figure
            photo={PHOTOS.philosophyTwo}
            ratio={0.65}
            mobileRatio={0.78}
            sizes="(max-width: 860px) 100vw, 21vw"
          />
          <Figure
            photo={PHOTOS.philosophyThree}
            ratio={0.65}
            mobileRatio={0.78}
            sizes="(max-width: 860px) 100vw, 21vw"
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
            Documentary observation. Editorial sensibility. Quietly felt.
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
            A quiet eye for what <br className={styles.aboutBreak} />
            unfolds naturally.
          </h2>
          <p className={`copy ${styles.aboutCopy}`}>
            Drawn to the beauty of what is felt rather than staged. To the softness of
            a gesture, the fleeting details that give a moment its atmosphere, and what
            happens in between. I&rsquo;m interested in what feels honest, instinctive
            and quietly meaningful.
          </p>
          <Link href="/about" className={`btn btn-dark ${styles.aboutLink}`}>
            More about me
          </Link>
        </div>
      </section>

      {/* ---------- Closing — four frames, then the invitation ---------- */}
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
        </div>

        <div className={styles.enquire}>
          <p className={`label ${styles.enquireLabel}`}>
            Let&rsquo;s create something meaningful
          </p>
          <p className={`display ${styles.enquireTitle}`}>
            Tell me where your story begins.
          </p>
          <Link href="/contact" className={`btn btn-dark ${styles.enquireCta}`}>
            Enquire
          </Link>
        </div>

        <div className={styles.signoff}>
          <Logo height="var(--signoff-logo-h)" className={styles.signoffLogo} />
          <p className={styles.signoffLinks}>
            <a
              className={styles.signoffLink}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer noopener"
            >
              <InstagramGlyph size={17} />
              <span>Follow on Instagram</span>
            </a>
            <a
              className={styles.signoffLink}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer noopener"
            >
              <WhatsAppGlyph size={17} />
              <span>WhatsApp</span>
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
