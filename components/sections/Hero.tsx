import Figure from "@/components/ui/Figure";
import styles from "./Hero.module.css";

type HeroProps = {
  image: string;
  alt: string;
  /** width / height of the band */
  ratio: number;
  position?: string;
  /** Large tracked uppercase page title (Portfolio, Mariages…) */
  title?: string;
  /** Two-line uppercase display headline (home) */
  display?: string[];
  /** filet fin : avant ou après le sous-titre, selon la maquette */
  rule?: "before" | "after" | false;
  subtitle?: string[];
  /** Small tracked line under the rule (home category list) */
  meta?: string;
  /** corps du titre relevé sur la maquette de la page */
  titleSize?: string;
  align?: "center" | "right";
};

export default function Hero({
  image,
  alt,
  ratio,
  position = "center",
  title,
  display,
  rule = "before",
  subtitle,
  meta,
  titleSize,
  align = "center",
}: HeroProps) {
  return (
    <section className={styles.hero} aria-label={title ?? display?.join(" ") ?? "Introduction"}>
      <Figure
        src={image}
        alt={alt}
        ratio={ratio}
        position={position}
        sizes="100vw"
        priority
        className={styles.media}
      />

      <div className={styles.scrim} aria-hidden="true" />

      <div className={`${styles.overlay} ${align === "right" ? styles.overlayRight : ""}`}>
        <div className={styles.content}>
          {display ? (
            <h1 className={`display centered ${styles.display}`}>
              {display.map((line, index) => (
                <span key={line} className={styles.line}>
                  {line}
                  {index < display.length - 1 ? <br /> : null}
                </span>
              ))}
            </h1>
          ) : null}

          {title ? (
            <h1
              className={`title centered ${styles.title}`}
              style={titleSize ? { fontSize: titleSize } : undefined}
            >
              {title}
            </h1>
          ) : null}

          {rule === "before" ? (
            <hr className={`rule rule--center rule--wide ${styles.rule}`} />
          ) : null}

          {subtitle ? (
            <p className={styles.subtitle}>
              {subtitle.map((line, index) => (
                <span key={line}>
                  {line}
                  {index < subtitle.length - 1 ? <br /> : null}
                </span>
              ))}
            </p>
          ) : null}

          {rule === "after" ? (
            <hr className={`rule rule--center rule--wide ${styles.rule}`} />
          ) : null}

          {meta ? <p className={`centered ${styles.meta}`}>{meta}</p> : null}
        </div>
      </div>
    </section>
  );
}
