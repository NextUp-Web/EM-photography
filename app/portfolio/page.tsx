import type { Metadata } from "next";
import Figure from "@/components/ui/Figure";
import EditorialLink from "@/components/ui/EditorialLink";
import Reveal from "@/components/ui/Reveal";
import ImageBand from "@/components/sections/ImageBand";
import { PORTFOLIO_CATEGORIES, STORY } from "@/lib/data";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Portfolio | EM Photography",
  description:
    "Love, documented. A collection of honest moments, quiet emotions and beautiful beginnings — weddings, couples and intimate celebrations.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      {/* ---------- Title ---------- */}
      <section className={`shell ${styles.intro}`}>
        <Reveal>
          <h1 className={`serif-italic ${styles.title}`}>Love, documented.</h1>
          <p className={`copy ${styles.lead}`}>
            A collection of honest moments, quiet emotions{" "}
            <br className="br-wide" />
            and beautiful beginnings.
          </p>
        </Reveal>

        <ul className={styles.categories}>
          {PORTFOLIO_CATEGORIES.flatMap((category, index) => [
            ...(index > 0
              ? [
                  <li
                    key={`${category}-dot`}
                    className={`label ${styles.dot}`}
                    aria-hidden="true"
                  >
                    ·
                  </li>,
                ]
              : []),
            <li key={category} className={`label ${styles.category}`}>
              {category}
            </li>,
          ])}
        </ul>

        <hr className={`rule ${styles.introRule}`} />
      </section>

      {/* ---------- M & J ---------- */}
      <section className={`shell ${styles.story}`} aria-labelledby={STORY.id}>
        <Reveal className={styles.storyHead}>
          <h2 className={`serif ${styles.storyTitle}`} id={STORY.id}>
            {STORY.title}
          </h2>
          <p className={`label ${styles.storyMeta}`}>
            <span>{STORY.venue}</span>
            <span className={styles.metaDot} aria-hidden="true">
              ·
            </span>
            <span>{STORY.country}</span>
          </p>
        </Reveal>

        <div className={`bleed-phone ${styles.gallery}`}>
          <Figure
            src={STORY.lead.src}
            alt={STORY.lead.alt}
            ratio={STORY.lead.ratio}
            sizes="100vw"
            position={STORY.lead.position}
            priority
          />

          <div className={styles.pair}>
            {STORY.pair.map((frame) => (
              <Figure
                key={frame.src}
                src={frame.src}
                alt={frame.alt}
                ratio={frame.ratio}
                sizes="(max-width: 768px) 50vw, 49vw"
                position={frame.position}
              />
            ))}
          </div>

          <Figure
            src={STORY.detail.src}
            alt={STORY.detail.alt}
            ratio={STORY.detail.ratio}
            sizes="100vw"
            position={STORY.detail.position}
          />

          <Figure
            src={STORY.wide.src}
            alt={STORY.wide.alt}
            ratio={STORY.wide.ratio}
            sizes="100vw"
            position={STORY.wide.position}
          />
        </div>
      </section>

      {/* ---------- Quote ---------- */}
      <section className={`shell ${styles.quoteBlock}`}>
        <Reveal>
          <p className={`serif-italic ${styles.quote}`}>
            &ldquo;The moments in between.&rdquo;
          </p>
        </Reveal>
      </section>

      {/* ---------- Closing — full bleed, 252 × 206 on the board ---------- */}
      <ImageBand
        src="/images/v3/portfolio/closing.webp"
        alt="The lake below the mountains, a headland reaching into still water"
        ratio={1.223}
        mobileRatio={1}
        scrim="full"
        align="center"
        position="center 48%"
      >
        <p className={`serif ${styles.closingTitle}`}>
          Some stories deserve
          <br />
          to be felt again.
        </p>
        <EditorialLink
          href="/contact"
          label="Tell me your story"
          variant="outline"
          className={styles.closingCta}
        />
      </ImageBand>
    </>
  );
}
