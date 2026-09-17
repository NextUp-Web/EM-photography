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
      {/* ---------- Hero — full bleed, 280 × 227 on the board ---------- */}
      <ImageBand
        src="/images/v3/home/hero.webp"
        alt="A bride and groom forehead to forehead above a Swiss lake at dusk"
        ratio={1.233}
        mobileRatio={0.62}
        variant="hero"
        scrim="bottom"
        align="bottom"
        priority
        position="center 42%"
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
          <p className={`label ${styles.scroll}`} aria-hidden="true">
            Scroll <span className={styles.scrollArrow}>↓</span>
          </p>
        </div>
      </ImageBand>

      {/* ---------- For all that words cannot hold ---------- */}
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
            A collection of honest moments, quiet emotions{" "}
            <br className="br-wide" />
            and beautiful beginnings.
          </p>
        </Reveal>

        {/* 57 / 41 collage — the right column stacks 1.76 over 1.21. */}
        <div className={`bleed-phone ${styles.grid}`}>
          <Figure
            className={styles.gridTall}
            src="/images/v3/home/story-lead.webp"
            alt="A bride at a stone balustrade, the mountains and the lake behind her"
            ratio={0.959}
            sizes="(max-width: 768px) 100vw, 57vw"
            position="center 46%"
          />
          <Figure
            className={styles.gridTop}
            src="/images/v3/home/story-embrace.webp"
            alt="A couple close together in black and white, her hand at his face"
            ratio={1.759}
            sizes="(max-width: 768px) 50vw, 41vw"
            position="center 40%"
          />
          <Figure
            className={styles.gridBottom}
            src="/images/v3/home/story-flowers.webp"
            alt="A bouquet of white roses and ranunculus against dark foliage"
            ratio={1.214}
            sizes="(max-width: 768px) 50vw, 41vw"
            position="center 52%"
          />
        </div>

        <Figure
          className={`bleed-phone ${styles.storiesWide}`}
          src="/images/v3/home/story-shore.webp"
          alt="A village on the wooded shore of the lake, seen from the water"
          ratio={4.31}
          mobileRatio={1.45}
          sizes="100vw"
          position="center 52%"
        />

        <div className={styles.storiesCta}>
          <EditorialLink href="/portfolio" label="View portfolio" />
        </div>
      </section>

      {/* ---------- The approach — 42 / 53 with a 5% gutter ---------- */}
      <section className={`shell ${styles.approach}`} aria-labelledby="approach">
        <Figure
          className={styles.approachImage}
          src="/images/v3/home/approach.webp"
          alt="His hand at her waist against the white of her dress, in black and white"
          ratio={0.93}
          sizes="(max-width: 768px) 70vw, 42vw"
          position="center 50%"
        />
        <Reveal className={styles.approachText}>
          <SectionLabel as="h2" id="approach">
            The approach
          </SectionLabel>
          <p className={`copy ${styles.approachCopy}`}>
            My approach is documentary at heart, with an editorial eye for light,
            composition and details. I gently guide when needed, while leaving space
            for your connection to unfold naturally. So your photographs feel honest,
            effortless and entirely yours.
          </p>
          <EditorialLink href="/about" label="About me" />
        </Reveal>
      </section>

      {/* ---------- I find beauty in what is quietly felt ---------- */}
      <section className={`band-ivory ${styles.teaserBand}`} aria-labelledby="teaser">
        <div className={`shell ${styles.teaser}`}>
          <Figure
            className={styles.teaserImage}
            src="/images/v3/home/emra.webp"
            alt="Emra in a cream knit, looking out across the hillside"
            ratio={0.93}
            sizes="(max-width: 768px) 70vw, 42vw"
            position="center 40%"
          />
          <Reveal className={styles.teaserText}>
            <h2 className={`serif-italic ${styles.teaserTitle}`} id="teaser">
              I find beauty in
              <br />
              what is quietly felt.
            </h2>
            <SectionLabel tone="ink" className={styles.teaserLabel}>
              I&rsquo;m Emra, the person behind
              <br />
              EM Photography.
            </SectionLabel>
            <p className={`copy ${styles.teaserCopy}`}>
              I&rsquo;m drawn to quiet beauty, to beautiful light and to the moments
              that don&rsquo;t ask to be photographed.
            </p>
            <EditorialLink href="/about" label="Read more" />
          </Reveal>
        </div>
      </section>

      {/* ---------- Closing — full bleed, 280 × 98 on the board ---------- */}
      <ImageBand
        src="/images/v3/home/closing.webp"
        alt="The mountains above the lake, light falling across the far shore"
        ratio={2.857}
        mobileRatio={1.2}
        scrim="full"
        align="center"
        position="center 46%"
      >
        <p className={`serif ${styles.closingTitle}`}>Made to be felt again.</p>
        <p className={`serif-italic ${styles.closingSub}`}>Tell me your story.</p>
        <EditorialLink href="/contact" label="Get in touch" variant="outline" />
      </ImageBand>
    </>
  );
}
