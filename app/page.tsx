import EditorialLink from "@/components/ui/EditorialLink";
import Figure from "@/components/ui/Figure";
import Reveal from "@/components/ui/Reveal";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      {/* 01 — the photograph first */}
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={`shell ${styles.heroTop}`}>
          <p className="label">Switzerland based</p>
        </div>

        <Figure
          className={styles.heroFigure}
          src="/images/home/hero.jpg"
          alt="A couple leaning into one another on a terrace above the lake, her veil lifting in the wind"
          sizes="100vw"
          position="52% 42%"
          priority
        />

        <div className={`shell ${styles.heroFoot}`}>
          <h1 id="hero-title" className={`hero-title ${styles.heroTitle}`}>
            Documenting love{" "}
            <br />
            in its softest form
          </h1>

          <div className={styles.heroMeta}>
            <p className="label">Weddings · Couples · Intimate stories</p>
            <a href="#philosophy" className={`label ${styles.scroll}`}>
              Scroll <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* 02 — intention */}
      <section id="philosophy" className={styles.philosophy}>
        <Reveal className={`shell ${styles.philosophyInner}`}>
          <h2 className={`heading ${styles.philosophyTitle}`}>For all that words cannot hold.</h2>

          <div className={`verse ${styles.verse}`}>
            <p>The quiet glances.</p>
            <p>The hands held a little tighter.</p>
            <p>The laughter between photographs.</p>
            <p>The moments you never planned for.</p>
            <p>The beauty of what happens in between.</p>
          </div>
        </Reveal>
      </section>

      {/* 03 — selected stories */}
      <section className={styles.stories} aria-labelledby="stories-title">
        <div className="shell">
          <Reveal className={styles.storiesHead}>
            <p className="label">Selected stories</p>
            <h2 id="stories-title" className={`title ${styles.storiesTitle}`}>
              Love, documented.
            </h2>
            <p className={`lede ${styles.storiesLede}`}>
              A collection of honest moments,{" "}
              <br />
              quiet emotions and beautiful beginnings.
            </p>
            <EditorialLink href="/portfolio" label="View portfolio" />
          </Reveal>

          <div className={styles.spread}>
            <Reveal className={styles.spreadTall}>
              <Figure
                src="/images/civil/gallery-05.jpg"
                alt="A couple walking a quiet street together, a bouquet held at her side"
                ratio={0.655}
                sizes="(max-width: 860px) 92vw, 38vw"
              />
            </Reveal>

            <Reveal className={styles.spreadSmallA}>
              <Figure
                src="/images/weddings/gallery-02.jpg"
                alt="Two rings set down on an engraved card"
                ratio={0.74}
                sizes="(max-width: 860px) 62vw, 22vw"
              />
            </Reveal>

            <Reveal className={styles.spreadSmallB}>
              <Figure
                src="/images/weddings/gallery-03.jpg"
                alt="Two faces resting against each other, eyes closed"
                ratio={0.9}
                sizes="(max-width: 860px) 76vw, 30vw"
              />
            </Reveal>

            <Reveal className={styles.spreadWide}>
              <Figure
                src="/images/civil/bloc-couple.jpg"
                alt="A couple walking away beneath a stone arcade"
                ratio={1.75}
                sizes="(max-width: 860px) 100vw, 78vw"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 04 — the approach */}
      <section className={styles.approach} aria-labelledby="approach-title">
        <div className={`shell ${styles.approachInner}`}>
          <Reveal className={styles.approachFigure}>
            <Figure
              src="/images/civil/gallery-02.jpg"
              alt="A small bouquet held against the folds of a dress"
              ratio={0.69}
              sizes="(max-width: 860px) 78vw, 36vw"
            />
          </Reveal>

          <Reveal className={styles.approachText} delay={120}>
            <p className="label">The approach</p>
            <h2 id="approach-title" className={`statement ${styles.approachStatement}`}>
              My approach is documentary at heart, with an editorial eye for light,
              composition and details.
            </h2>
            <div className={`prose ${styles.approachProse}`}>
              <p>
                I gently guide when needed,{" "}
                <br />
                while leaving space for your connection to unfold naturally.
              </p>
              <p>
                So your photographs feel honest, effortless{" "}
                <br />
                and entirely yours.
              </p>
            </div>
            <EditorialLink href="/about" label="About me" />
          </Reveal>
        </div>
      </section>

      {/* 05 — the person behind the camera */}
      <section className={`band--warm ${styles.about}`} aria-labelledby="about-title">
        <div className={`shell ${styles.aboutInner}`}>
          <Reveal className={styles.aboutFigure}>
            <Figure
              src="/images/about/working.jpg"
              alt="Emma at work, camera raised, the lake and mountains behind her"
              ratio={1}
              sizes="(max-width: 860px) 88vw, 42vw"
              position="42% center"
            />
          </Reveal>

          <Reveal className={styles.aboutText} delay={120}>
            <h2 id="about-title" className={`heading ${styles.aboutStatement}`}>
              I find beauty in what is quietly felt.
            </h2>
            <p className={`label ${styles.aboutLabel}`}>
              I&apos;m Emma, the person behind EM Photography.
            </p>
            <p className={`prose ${styles.aboutProse}`}>
              Drawn to quiet beauty, beautiful light{" "}
              <br />
              and the moments that don&apos;t ask to be photographed.
            </p>
            <EditorialLink href="/about" label="Read more" />
          </Reveal>
        </div>
      </section>

      {/* 06 — the rhythm slows */}
      <section className={styles.closing} aria-labelledby="closing-title">
        <Figure
          className={styles.closingFigure}
          src="/images/portfolio/hero.jpg"
          alt="A bride at the balustrade, the train of her veil across the stone and the lake beyond"
          sizes="100vw"
          position="30% 45%"
        />

        <Reveal className={`shell ${styles.closingInner}`}>
          <h2 id="closing-title" className={`title ${styles.closingTitle}`}>
            Made to be felt again.
          </h2>
          <p className={`lede ${styles.closingLede}`}>Tell me your story.</p>
          <EditorialLink href="/contact" label="Get in touch" />
        </Reveal>
      </section>
    </>
  );
}
