import type { Metadata } from "next";
import Figure from "@/components/ui/Figure";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import ImageBand from "@/components/sections/ImageBand";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Emma | EM Photography",
  description:
    "I'm Emma, the person behind EM Photography — editorial documentary photography with a quietly romantic soul, from Switzerland and across Europe.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* ---------- Hero — full bleed, 268 × 227 on the board ---------- */}
      <ImageBand
        src="/images/v3/about/hero.jpg"
        alt="Emma seated on a terrace in a cream knit, looking out across the lake"
        ratio={1.181}
        mobileRatio={0.78}
        variant="hero"
        scrim="bottom"
        priority
        position="center 32%"
      >
        <h1 className={`serif-italic ${styles.heroTitle}`}>
          I find beauty
          <br />
          in what is
          <br />
          quietly felt.
        </h1>
      </ImageBand>

      {/* ---------- Your story — text left, portrait right ---------- */}
      <section className={`shell ${styles.story}`} aria-labelledby="story">
        <Reveal className={styles.storyText}>
          <SectionLabel as="h2" id="story">
            Your story
          </SectionLabel>
          <p className={`copy ${styles.storyLead}`}>
            I&rsquo;m Emma, the person behind
            <br />
            EM Photography.
          </p>
          <p className={`copy ${styles.storyCopy}`}>
            I&rsquo;m drawn to honest moments, to people in love, to beautiful places
            and to the in-between. I believe the most meaningful photographs are the
            ones that feel real — the fleeting moments, the gentle chaos, the quiet
            glances that say everything.
          </p>
        </Reveal>

        <Figure
          className={`bleed-phone ${styles.storyImage}`}
          src="/images/v3/about/portrait.jpg"
          alt="Emma holding her camera, the lake behind her"
          ratio={0.631}
          mobileRatio={0.86}
          sizes="(max-width: 768px) 70vw, 44vw"
          position="center 40%"
        />
        <hr className={`rule ${styles.storyRule}`} />
      </section>

      {/* ---------- My approach ---------- */}
      <section className={`shell ${styles.approach}`} aria-labelledby="approach">
        <Reveal>
          <SectionLabel as="h2" id="approach">
            My approach
          </SectionLabel>
          <p className={`copy ${styles.approachCopy}`}>
            My approach is documentary at heart, with an editorial eye for light,
            composition and details. I gently guide when needed, while leaving space
            for your connection to unfold naturally. So your photographs feel honest,
            effortless and entirely yours.
          </p>
        </Reveal>
        <hr className={`rule ${styles.approachRule}`} />
      </section>

      {/* ---------- Quote ---------- */}
      <section className={`shell ${styles.quoteBlock}`}>
        <Reveal>
          <p className={`serif-italic ${styles.quote}`}>
            Editorial documentary photography
            <br />
            with a quietly romantic soul.
          </p>
        </Reveal>
      </section>

      {/* ---------- The villa above the lake ---------- */}
      <div className={`shell ${styles.villa}`}>
        <Figure
          className="bleed-phone"
          src="/images/v3/about/villa.jpg"
          alt="A stone villa and cypresses above the lake, the mountains behind"
          ratio={1.419}
          sizes="100vw"
          position="center 50%"
        />
      </div>

      {/* ---------- What I want for you ---------- */}
      <section className={`shell ${styles.want}`} aria-labelledby="want">
        <Reveal>
          <SectionLabel as="h2" id="want">
            What I want for you
          </SectionLabel>
          <p className={`copy ${styles.wantCopy}`}>
            I want you to look back at your photographs and feel everything all over
            again. Not just how it looked, but how it felt — the people, the place,
            the energy, the in-between moments. I want your story to live on through
            images that feel like you.
          </p>
        </Reveal>
      </section>

      {/* ---------- Triptych — three verticals, 0.644 each ---------- */}
      <div className={`shell bleed-phone ${styles.triptych}`}>
        <Figure
          src="/images/v3/about/trip-flowers.jpg"
          alt="White roses beneath a statue in the garden of a villa"
          ratio={0.644}
          sizes="(max-width: 768px) 33vw, 31vw"
          position="center 50%"
        />
        <Figure
          src="/images/v3/about/trip-couple.jpg"
          alt="A couple walking away down a shaded gallery, in black and white"
          ratio={0.644}
          sizes="(max-width: 768px) 33vw, 31vw"
          position="center 50%"
        />
        <Figure
          src="/images/v3/about/trip-lake.jpg"
          alt="A small boat crossing the lake below the mountains"
          ratio={0.644}
          sizes="(max-width: 768px) 33vw, 31vw"
          position="center 50%"
        />
      </div>
    </>
  );
}
