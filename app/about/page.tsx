import type { Metadata } from "next";
import Figure from "@/components/ui/Figure";
import Reveal from "@/components/ui/Reveal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: {
    absolute: "About EM Photography | Documentary Wedding Photographer Switzerland",
  },
  description:
    "Emma, the person behind EM Photography. Documentary wedding photography with an editorial eye, based in Switzerland and photographing across Europe.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* hero — her face, then the sentence that holds the whole page */}
      <section className={styles.hero} aria-labelledby="about-statement">
        <div className={`shell ${styles.heroInner}`}>
          <Figure
            className={styles.heroFigure}
            src="/images/about/portrait.jpg"
            alt="Emma, chin resting on her hand, looking away towards the light"
            ratio={0.82}
            sizes="(max-width: 860px) 100vw, 52vw"
            position="54% 38%"
            priority
          />

          <h1 id="about-statement" className={`title ${styles.heroTitle}`}>
            I find beauty in what is quietly felt.
          </h1>
        </div>
      </section>

      {/* your story */}
      <section className={styles.story} aria-labelledby="story-title">
        <Reveal className={`shell ${styles.storyInner}`}>
          <h2 className={`label ${styles.storyLabel}`} id="story-title">
            Your story
          </h2>

          <div className={`verse ${styles.storyText}`}>
            <p>I&apos;m Emma, the person behind EM Photography.</p>
            <p>
              I&apos;m drawn to what is honest and fleeting —{" "}
              <br />
              the moments that happen naturally,{" "}
              <br />
              when no one is thinking about the camera.
            </p>
            <p>
              The kind of beauty that lives in a glance,{" "}
              <br />
              a hand held a little longer,{" "}
              <br />
              a laugh that wasn&apos;t meant to be photographed.
            </p>
          </div>
        </Reveal>

        <Reveal className={styles.storyFigure}>
          <Figure
            src="/images/about/hero.jpg"
            alt="Emma photographing from a terrace, the lake and the mountains stretching away in front of her"
            ratio={2.4}
            sizes="100vw"
            position="40% center"
          />
        </Reveal>
      </section>

      {/* my approach */}
      <section className={styles.approach} aria-labelledby="approach-title">
        <Reveal className={`shell ${styles.approachInner}`}>
          <h2 className={`label ${styles.approachLabel}`} id="approach-title">
            My approach
          </h2>

          <div className={`verse ${styles.approachText}`}>
            <p>
              My approach is documentary at heart,{" "}
              <br />
              with an editorial eye for light, composition and details.
            </p>
            <p>
              I&apos;ll gently guide you when needed,{" "}
              <br />
              while leaving space for your connection to unfold naturally.
            </p>
            <p>
              Because the photographs I value most{" "}
              <br />
              are the ones that feel unmistakably yours.
            </p>
          </div>
        </Reveal>
      </section>

      {/* positioning — a whole screen for one sentence */}
      <section className={`band--warm ${styles.positioning}`}>
        <Reveal className={`shell ${styles.positioningInner}`}>
          <p className={`heading ${styles.positioningLine}`}>
            Editorial documentary photography with a quietly romantic soul.
          </p>
        </Reveal>
      </section>

      {/* what I want for you */}
      <section className={styles.wish} aria-labelledby="wish-title">
        <div className={`shell ${styles.wishInner}`}>
          <Reveal className={styles.wishFigure}>
            <Figure
              src="/images/weddings/hero.jpg"
              alt="A couple holding each other above the water as the afternoon light softens"
              ratio={0.85}
              sizes="(max-width: 1160px) 100vw, 34vw"
              position="45% center"
            />
          </Reveal>

          <Reveal className={styles.wishText} delay={120}>
            <h2 className={`label ${styles.wishLabel}`} id="wish-title">
              What I want for you
            </h2>

            <div className={`verse ${styles.wishVerse}`}>
              <p>
                Years from now, I want your photographs to bring you back —{" "}
                <br />
                not only to how the day looked,{" "}
                <br />
                but to the feeling of being there.
              </p>
              <p className="lines">
                The light.{" "}
                <br />
                The laughter.{" "}
                <br />
                The people you loved.{" "}
                <br />
                The way you held each other.
              </p>
              <p>
                A little piece of that time,{" "}
                <br />
                kept for you to feel again.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* three last frames */}
      <section className={styles.coda} aria-label="A last look">
        <div className={`shell ${styles.codaInner}`}>
          <Reveal className={styles.codaA}>
            <Figure
              src="/images/contact/closing-03.jpg"
              alt="A small boat crossing still water early in the morning"
              ratio={1.06}
              sizes="(max-width: 860px) 70vw, 30vw"
            />
          </Reveal>

          <Reveal className={styles.codaB} delay={100}>
            <Figure
              src="/images/weddings/inclus-preparatifs.jpg"
              alt="Hands slipping a pin into a bride's hair"
              ratio={1.09}
              sizes="(max-width: 860px) 86vw, 34vw"
            />
          </Reveal>

          <Reveal className={styles.codaC} delay={200}>
            <Figure
              src="/images/birthdays/mosaic-06.jpg"
              alt="A woman turned away from a room of soft lights"
              ratio={0.6}
              sizes="(max-width: 860px) 62vw, 24vw"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
