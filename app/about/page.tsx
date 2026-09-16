import type { Metadata } from "next";
import Figure from "@/components/ui/Figure";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import ImageBand from "@/components/sections/ImageBand";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About EM Photography | Documentary Wedding Photographer Switzerland",
  description:
    "Emma, the person behind EM Photography — editorial documentary photography with a quietly romantic soul, based in Switzerland and available across Europe.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className={styles.heroWrap} aria-labelledby="about-title">
        <ImageBand
          src="/images/about/hero.jpg"
          alt="Emma photographing from a terrace, the lake and mountains beyond her"
          ratio={1.72}
          mobileRatio={0.95}
          position="24% center"
          scrim="bottom"
          priority
        />
        <h1 className={`serif-italic ${styles.heroTitle}`} id="about-title">
          I find beauty
          <br />
          in what is
          <br />
          quietly felt.
        </h1>
      </section>

      {/* ---------- Your story ---------- */}
      <section className={`shell ${styles.story}`} aria-labelledby="your-story">
        <Reveal className={styles.storyText}>
          <SectionLabel as="h2" id="your-story">Your story</SectionLabel>
          <p className={`copy ${styles.storyCopy}`}>
            I&rsquo;m Emma, the person behind EM Photography.
          </p>
          <p className="copy">
            I&rsquo;m drawn to honest moments, to people in love, to beautiful places
            and to the in-between. I believe the most meaningful photographs are the
            ones that feel real — the fleeting moments, the gentle chaos, the quiet
            glances that say everything.
          </p>
        </Reveal>

        <Figure
          className={styles.storyImage}
          src="/images/about/portrait.jpg"
          alt="Emma resting her chin on her hand, looking away from the camera"
          ratio={0.78}
          sizes="(max-width: 768px) 30vw, 26vw"
          position="center 22%"
        />
      </section>

      {/* ---------- My approach ---------- */}
      <div className={`shell ${styles.ruleWrap}`}>
        <hr className="rule" />
      </div>

      <section className={`shell ${styles.approach}`} aria-labelledby="my-approach">
        <Reveal>
          <SectionLabel as="h2" id="my-approach">My approach</SectionLabel>
          <p className={`copy ${styles.approachCopy}`}>
            My approach is documentary at heart, with an editorial eye for light,
            composition and details. I gently guide when needed, while leaving space
            for your connection to unfold naturally. So your photographs feel honest,
            effortless and entirely yours.
          </p>
        </Reveal>
      </section>

      <div className={`shell ${styles.ruleWrap}`}>
        <hr className="rule" />
      </div>

      {/* ---------- Positioning statement ---------- */}
      <section className={`shell ${styles.positioning}`}>
        <Reveal>
          <p className={`serif-italic ${styles.positioningText}`}>
            Editorial documentary photography
            <br />
            with a quietly romantic soul.
          </p>
        </Reveal>
      </section>

      {/* ---------- Atmosphere ---------- */}
      <div className={`shell ${styles.landscape}`}>
        <Figure
          src="/images/contact/closing-01.jpg"
          alt="A lakeside villa framed by cypress trees, mountains fading behind"
          ratio={2.3}
          sizes="100vw"
        />
      </div>

      {/* ---------- What I want for you ---------- */}
      <section className={`shell ${styles.wish}`} aria-labelledby="what-i-want">
        <Reveal className={styles.wishText}>
          <SectionLabel as="h2" id="what-i-want">What I want for you</SectionLabel>
          <p className={`copy ${styles.wishCopy}`}>
            I want you to look back at your photographs and feel everything all over
            again. Not just how it looked, but how it felt — the people, the place,
            the energy, the in-between moments. I want your story to live on through
            images that feel like you.
          </p>
        </Reveal>

        <div className={styles.gallery}>
          <Figure
            className={styles.galleryA}
            src="/images/weddings/gallery-05.jpg"
            alt="An urn of white flowers on a terrace above the lake, cypress trees behind"
            ratio={0.74}
            sizes="(max-width: 768px) 50vw, 30vw"
          />
          <Figure
            className={styles.galleryB}
            src="/images/civil/gallery-03.jpg"
            alt="A couple kissing, a small bouquet held between them"
            ratio={0.74}
            sizes="(max-width: 768px) 50vw, 30vw"
          />
          <Figure
            className={styles.galleryC}
            src="/images/contact/closing-03.jpg"
            alt="A small boat crossing still water beneath the mountains"
            ratio={0.74}
            sizes="(max-width: 768px) 100vw, 30vw"
            position="center 46%"
          />
        </div>
      </section>
    </>
  );
}
