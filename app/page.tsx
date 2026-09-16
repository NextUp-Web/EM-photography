import type { Metadata } from "next";
import Figure from "@/components/ui/Figure";
import EditorialLink from "@/components/ui/EditorialLink";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import ImageBand from "@/components/sections/ImageBand";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "EM Photography | Wedding Photographer in Switzerland",
  description:
    "Editorial documentary wedding photography in Switzerland and across Europe. Honest, intimate and timeless imagery for modern love stories.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <ImageBand
        src="/images/home/hero.jpg"
        alt="A couple leaning forehead to forehead on a terrace above a mountain lake"
        ratio={1.72}
        mobileRatio={0.56}
        variant="hero"
        scrim="bottom"
        priority
        position="center 38%"
        className={styles.hero}
      >
        <div className={styles.heroText}>
          <p className={`label ${styles.heroLabel}`}>Switzerland based</p>
          <h1 className={`serif-italic ${styles.heroTitle}`}>
            Documenting love
            <br />
            in its softest form.
          </h1>
          <p className={`label ${styles.heroMeta}`}>
            Weddings <span aria-hidden="true">·</span> Couples{" "}
            <span aria-hidden="true">·</span> Intimate stories
          </p>
        </div>
        <p className={`label ${styles.scroll}`} aria-hidden="true">
          Scroll <span className={styles.scrollArrow}>↓</span>
        </p>
      </ImageBand>

      {/* ---------- Philosophy ---------- */}
      <section className={`shell ${styles.philosophy}`} aria-labelledby="philosophy">
        <Reveal>
          <h2 className={`serif-italic ${styles.statement}`} id="philosophy">
            For all that
            <br />
            words cannot hold.
          </h2>
          <p className={`copy ${styles.philosophyCopy}`}>
            The quiet glances.
            <br />
            The hands held a little tighter.
            <br />
            The laughter between photographs.
            <br />
            The moments you never planned for.
            <br />
            The beauty of what happens in between.
          </p>
        </Reveal>
        <hr className={`rule ${styles.philosophyRule}`} />
      </section>

      {/* ---------- Selected stories ---------- */}
      <section className={`shell ${styles.stories}`} aria-labelledby="stories">
        <Reveal className={styles.storiesHead}>
          <SectionLabel>Selected stories</SectionLabel>
          <h2 className={`serif ${styles.storiesTitle}`} id="stories">
            Love, documented.
          </h2>
          <p className={`copy ${styles.storiesLead}`}>
            A collection of honest moments, quiet emotions
            <br />
            and beautiful beginnings.
          </p>
        </Reveal>

        <Figure
          className={styles.storiesWide}
          src="/images/portfolio/hero.jpg"
          alt="A bride on a terrace above the lake, cypress trees along the water"
          ratio={3.6}
          sizes="100vw"
          position="center 46%"
        />

        <div className={styles.grid}>
          <Figure
            className={styles.gridTall}
            src="/images/home/mariages.jpg"
            alt="A bride at a stone balustrade, her veil falling towards the lake"
            ratio={1.04}
            sizes="(max-width: 768px) 100vw, 58vw"
            position="center 30%"
          />
          <Figure
            className={styles.gridTop}
            src="/images/weddings/gallery-03.jpg"
            alt="A couple close together, her hand resting against his face"
            ratio={1.4}
            sizes="(max-width: 768px) 50vw, 40vw"
            position="center 34%"
          />
          <Figure
            className={styles.gridBottom}
            src="/images/home/anniversaires.jpg"
            alt="White roses and cut glass on a table laid above the water"
            ratio={1.4}
            sizes="(max-width: 768px) 50vw, 40vw"
          />
        </div>

        <div className={styles.storiesCta}>
          <EditorialLink href="/portfolio" label="View portfolio" />
        </div>
      </section>

      {/* ---------- The approach ---------- */}
      <section className={`shell ${styles.approach}`} aria-labelledby="approach">
        <Figure
          className={styles.approachImage}
          src="/images/civil/gallery-02.jpg"
          alt="A bride's hands holding a small bouquet against her dress"
          ratio={0.8}
          sizes="(max-width: 768px) 60vw, 26vw"
        />
        <Reveal className={styles.approachText}>
          <SectionLabel as="h2" id="approach">The approach</SectionLabel>
          <p className={`copy ${styles.approachCopy}`}>
            My approach is documentary at heart, with an editorial eye for light,
            composition and details. I gently guide when needed, while leaving space
            for your connection to unfold naturally. So your photographs feel honest,
            effortless and entirely yours.
          </p>
          <EditorialLink href="/about" label="About me" />
        </Reveal>
      </section>

      {/* ---------- About teaser ---------- */}
      <section className={`band-warm ${styles.teaserBand}`} aria-labelledby="teaser">
        <div className={`shell ${styles.teaser}`}>
          <Figure
            className={styles.teaserImage}
            src="/images/about/portrait.jpg"
            alt="Emma, resting her chin on her hand, looking out of frame"
            ratio={0.88}
            sizes="(max-width: 768px) 60vw, 26vw"
            position="center 26%"
          />
          <Reveal className={styles.teaserText}>
            <h2 className={`serif-italic ${styles.teaserTitle}`} id="teaser">
              I find beauty in
              <br />
              what is quietly felt.
            </h2>
            <SectionLabel tone="ink" className={styles.teaserLabel}>
              I&rsquo;m Emma, the person behind EM Photography.
            </SectionLabel>
            <p className={`copy ${styles.teaserCopy}`}>
              I&rsquo;m drawn to quiet beauty, to beautiful light and to the moments
              that don&rsquo;t ask to be photographed.
            </p>
            <EditorialLink href="/about" label="Read more" />
          </Reveal>
        </div>
      </section>

      {/* ---------- Closing ---------- */}
      <ImageBand
        src="/images/birthdays/hero.jpg"
        alt="A long table lit by candles, dressed with pale flowers"
        ratio={3.3}
        mobileRatio={1.15}
        scrim="full"
        align="center"
        position="center 55%"
      >
        <p className={`serif-italic ${styles.closingTitle}`}>Made to be felt again.</p>
        <p className={`serif ${styles.closingSub}`}>Tell me your story.</p>
        <EditorialLink href="/contact" label="Get in touch" variant="outline" />
      </ImageBand>
    </>
  );
}
