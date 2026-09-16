import type { Metadata } from "next";
import EditorialLink from "@/components/ui/EditorialLink";
import Figure from "@/components/ui/Figure";
import Reveal from "@/components/ui/Reveal";
import { SEQUENCES, type Sequence } from "@/lib/data";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: { absolute: "Wedding Photography Portfolio | EM Photography" },
  description:
    "Weddings, couples and intimate celebrations photographed in Switzerland and across Europe — honest moments, quiet emotions and beautiful beginnings.",
  alternates: { canonical: "/portfolio" },
};

/* Three sequences, three rhythms. Each one is laid out on purpose. */
const VARIANTS = [styles.v1, styles.v2, styles.v3];

function SequenceBlock({ sequence, variant }: { sequence: Sequence; variant: string }) {
  const { id, index, title, line, opening, pair, detail, wide } = sequence;

  return (
    <section id={id} className={`${styles.sequence} ${variant}`} aria-labelledby={`${id}-title`}>
      <div className={`shell ${styles.sequenceInner}`}>
        <header className={styles.sequenceHead}>
          <p className={`label ${styles.sequenceIndex}`} aria-hidden="true">
            {index}
          </p>
          <h2 id={`${id}-title`} className={`label ${styles.sequenceTitle}`}>
            {title}
          </h2>
        </header>

        <Reveal className={styles.opening}>
          <Figure
            src={opening.src}
            alt={opening.alt}
            ratio={opening.ratio}
            position={opening.position}
            sizes="(max-width: 860px) 100vw, 92vw"
          />
        </Reveal>

        <div className={styles.pair}>
          <Reveal className={styles.pairA}>
            <Figure
              src={pair[0].src}
              alt={pair[0].alt}
              ratio={pair[0].ratio}
              position={pair[0].position}
              sizes="(max-width: 860px) 62vw, 34vw"
            />
          </Reveal>
          <Reveal className={styles.pairB} delay={120}>
            <Figure
              src={pair[1].src}
              alt={pair[1].alt}
              ratio={pair[1].ratio}
              position={pair[1].position}
              sizes="(max-width: 860px) 76vw, 34vw"
            />
          </Reveal>
        </div>

        <Reveal className={styles.detail}>
          <Figure
            src={detail.src}
            alt={detail.alt}
            ratio={detail.ratio}
            position={detail.position}
            sizes="(max-width: 860px) 58vw, 24vw"
          />
        </Reveal>

        <Reveal className={styles.wide}>
          <Figure
            src={wide.src}
            alt={wide.alt}
            ratio={wide.ratio}
            position={wide.position}
            sizes="(max-width: 860px) 100vw, 76vw"
          />
        </Reveal>

        <Reveal className={styles.line}>
          <p className="statement">{line}</p>
        </Reveal>
      </div>
    </section>
  );
}

export default function PortfolioPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`shell ${styles.heroInner}`}>
          <h1 className={`hero-title ${styles.heroTitle}`}>Love, documented.</h1>

          <p className={`lede ${styles.heroLede}`}>
            A collection of honest moments,{" "}
            <br />
            quiet emotions and beautiful beginnings.
          </p>

          <nav className={styles.collections} aria-label="Collections">
            <ul className={styles.collectionsList}>
              {SEQUENCES.map((sequence, i) => (
                <li key={sequence.id}>
                  <a href={`#${sequence.id}`} className={`label ${styles.collectionsLink}`}>
                    {sequence.title}
                  </a>
                  {i < SEQUENCES.length - 1 ? (
                    <span className={styles.dot} aria-hidden="true">
                      ·
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {SEQUENCES.map((sequence, i) => (
        <SequenceBlock key={sequence.id} sequence={sequence} variant={VARIANTS[i % VARIANTS.length]} />
      ))}

      <section className={styles.closing} aria-labelledby="portfolio-closing">
        <Figure
          className={styles.closingFigure}
          src="/images/civil/hero.jpg"
          alt="Two people seated side by side in a quiet room, listening, moments before they are married"
          sizes="100vw"
          position="center 40%"
        />

        <Reveal className={`shell ${styles.closingInner}`}>
          <h2 id="portfolio-closing" className={`title ${styles.closingTitle}`}>
            Some stories deserve to be felt again.
          </h2>
          <EditorialLink href="/contact" label="Tell me your story" />
        </Reveal>
      </section>
    </>
  );
}
