import type { Metadata } from "next";
import Figure from "@/components/ui/Figure";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import ImageBand from "@/components/sections/ImageBand";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Emra | EM Photography",
  description:
    "I'm Emra, the person behind EM Photography — editorial documentary photography with a quietly romantic soul, from Switzerland and across Europe.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* ---------- Hero — full bleed, 268 × 227 on the board ---------- */}
      <ImageBand
        src="/images/v3/about/hero.webp"
        alt="Emra seated on a terrace in a cream knit, looking out across the lake"
        ratio={1.181}
        mobileRatio={0.78}
        variant="hero"
        scrim="bottom"
        priority
        position="center 32%"
      >
        <h1 className={`serif ${styles.heroTitle}`}>
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
            I&rsquo;m Emra, the person behind
            <br />
            EM Photography.
          </p>
          <p className={`copy ${styles.storyCopy}`}>
            I&rsquo;m drawn to what is honest and fleeting —{" "}
            <br className="br-wide" />
            the moments that happen naturally,{" "}
            <br className="br-wide" />
            when no one is thinking about the camera.
          </p>
          <p className="copy">
            The kind of beauty that lives in a glance,{" "}
            <br className="br-wide" />
            a hand held a little longer,{" "}
            <br className="br-wide" />
            a laugh that wasn&rsquo;t meant to be photographed.
          </p>
        </Reveal>

        <Figure
          className={`bleed-phone ${styles.storyImage}`}
          src="/images/v3/about/portrait.webp"
          alt="Emra holding her camera, the lake behind her"
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
            My approach is documentary at heart,{" "}
            <br className="br-wide" />
            with an editorial eye for light, composition and details.
          </p>
          <p className="copy">
            I&rsquo;ll gently guide you when needed,{" "}
            <br className="br-wide" />
            while leaving space for your connection to unfold naturally.
          </p>
          <p className="copy">
            Because the photographs I value most{" "}
            <br className="br-wide" />
            are the ones that feel unmistakably yours.
          </p>
        </Reveal>
        <hr className={`rule ${styles.approachRule}`} />
      </section>

      {/* ---------- Quote ---------- */}
      <section className={`shell band-ivory ${styles.quoteBlock}`}>
        <Reveal>
          <p className={`serif ${styles.quote}`}>
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
          src="/images/v3/about/villa.webp"
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
            Years from now, I want your photographs to bring you back —{" "}
            <br className="br-wide" />
            not only to how the day looked,{" "}
            <br className="br-wide" />
            but to the feeling of being there.
          </p>
          <p className="copy">
            The light.
            <br />
            The laughter.
            <br />
            The people you loved.
            <br />
            The way you held each other.
          </p>
          <p className="copy">
            A little piece of that time,{" "}
            <br className="br-wide" />
            kept for you to feel again.
          </p>
        </Reveal>
      </section>

      {/* ---------- Triptych — three verticals, 0.644 each ---------- */}
      <div className={`shell bleed-phone ${styles.triptych}`}>
        <Figure
          src="/images/v3/about/trip-flowers.webp"
          alt="White roses beneath a statue in the garden of a villa"
          ratio={0.644}
          sizes="(max-width: 768px) 33vw, 31vw"
          position="center 50%"
        />
        <Figure
          src="/images/v3/about/trip-couple.webp"
          alt="A couple walking away down a shaded gallery, in black and white"
          ratio={0.644}
          sizes="(max-width: 768px) 33vw, 31vw"
          position="center 50%"
        />
        <Figure
          src="/images/v3/about/trip-lake.webp"
          alt="A small boat crossing the lake below the mountains"
          ratio={0.644}
          sizes="(max-width: 768px) 33vw, 31vw"
          position="center 50%"
        />
      </div>
    </>
  );
}
