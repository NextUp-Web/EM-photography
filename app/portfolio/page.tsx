import type { Metadata } from "next";
import Figure from "@/components/ui/Figure";
import EditorialLink from "@/components/ui/EditorialLink";
import Reveal from "@/components/ui/Reveal";
import ImageBand from "@/components/sections/ImageBand";
import { CHAPTERS } from "@/lib/data";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Wedding Photography Portfolio | EM Photography",
  description:
    "A collection of honest moments, quiet emotions and beautiful beginnings — weddings, couples and intimate celebrations photographed across Switzerland and Europe.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      {/* ---------- Intro ---------- */}
      <section className={`shell ${styles.intro}`}>
        <h1 className={`serif-italic ${styles.title}`}>Love, documented.</h1>
        <p className={`copy ${styles.lead}`}>
          A collection of honest moments, quiet emotions{" "}
          <br className={styles.break} />
          and beautiful beginnings.
        </p>

        <nav className={styles.categories} aria-label="Collections">
          <ul className={styles.categoryList}>
            {CHAPTERS.map((chapter, index) => (
              <li key={chapter.id} className={styles.categoryItem}>
                {index > 0 ? (
                  <span className={styles.dot} aria-hidden="true">
                    ·
                  </span>
                ) : null}
                <a href={`#${chapter.id}`} className={`label ${styles.categoryLink}`}>
                  {chapter.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <hr className={`rule ${styles.introRule}`} />
      </section>

      {/* ---------- Chapters ---------- */}
      {CHAPTERS.map((chapter, index) => (
        <div key={chapter.id}>
          <section
            className={`shell ${styles.chapter}`}
            id={chapter.id}
            aria-labelledby={`${chapter.id}-title`}
          >
            <Reveal className={styles.chapterHead}>
              <h2 className={`serif ${styles.chapterTitle}`} id={`${chapter.id}-title`}>
                {chapter.title}
              </h2>
              <p className={`label ${styles.chapterMeta}`}>{chapter.meta}</p>
            </Reveal>

            <Figure
              className={styles.chapterLead}
              src={chapter.lead.src}
              alt={chapter.lead.alt}
              ratio={chapter.lead.ratio}
              position={chapter.lead.position}
              sizes="100vw"
              priority={index === 0}
            />

            <div className={styles.pair}>
              {chapter.pair.map((image) => (
                <Figure
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  ratio={0.85}
                  position={image.position}
                  sizes="(max-width: 768px) 50vw, 44vw"
                />
              ))}
            </div>

            {chapter.detail ? (
              <Figure
                className={styles.detail}
                src={chapter.detail.src}
                alt={chapter.detail.alt}
                ratio={chapter.detail.ratio}
                position={chapter.detail.position}
                sizes="100vw"
              />
            ) : null}

            {chapter.wide ? (
              <Figure
                className={styles.wide}
                src={chapter.wide.src}
                alt={chapter.wide.alt}
                ratio={chapter.wide.ratio}
                position={chapter.wide.position}
                sizes="100vw"
              />
            ) : null}
          </section>

          {index === 0 ? (
            <section className={`shell ${styles.quoteWrap}`}>
              <blockquote className={`serif-italic ${styles.quote}`}>
                &ldquo;The moments in between.&rdquo;
              </blockquote>
            </section>
          ) : null}
        </div>
      ))}

      {/* ---------- Closing ---------- */}
      <ImageBand
        src="/images/weddings/hero.jpg"
        alt="Newlyweds looking out over the lake from a terrace lined with cypress trees"
        ratio={3}
        mobileRatio={1.15}
        scrim="full"
        align="center"
        position="center 40%"
        className={styles.closing}
      >
        <p className={`serif-italic ${styles.closingTitle}`}>
          Some stories deserve
          <br />
          to be felt again.
        </p>
        <EditorialLink href="/contact" label="Tell me your story" variant="outline" />
      </ImageBand>
    </>
  );
}
