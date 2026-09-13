import type { ReactNode } from "react";
import Figure from "@/components/ui/Figure";
import Reveal from "@/components/ui/Reveal";
import styles from "./SplitFeature.module.css";

type SplitFeatureProps = {
  image: string;
  alt: string;
  ratio: number;
  position?: string;
  sizes: string;
  /** grid-template-columns value, tuned per reference */
  columns?: string;
  gap?: string;
  eyebrow?: string;
  heading: string[];
  headingLevel?: "h2" | "h3";
  paragraphs?: string[];
  signature?: string;
  children?: ReactNode;
};

export default function SplitFeature({
  image,
  alt,
  ratio,
  position,
  sizes,
  columns = "minmax(0, 0.86fr) minmax(0, 1fr)",
  gap = "clamp(32px, 5vw, 72px)",
  eyebrow,
  heading,
  headingLevel = "h3",
  paragraphs,
  signature,
  children,
}: SplitFeatureProps) {
  const Heading = headingLevel;

  return (
    <div className={styles.split} style={{ gridTemplateColumns: columns, gap }}>
      <Reveal className={styles.media}>
        <Figure src={image} alt={alt} ratio={ratio} position={position} sizes={sizes} zoom />
      </Reveal>

      <Reveal className={styles.body} delay={120}>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}

        <Heading className={`${headingLevel === "h2" ? "h2" : "h3"} ${styles.heading}`}>
          {heading.map((line, index) => (
            <span key={line}>
              {line}
              {index < heading.length - 1 ? <br /> : null}
            </span>
          ))}
        </Heading>

        {paragraphs?.map((text) => (
          <p key={text} className={`body ${styles.paragraph}`}>
            {text}
          </p>
        ))}

        {signature ? <p className={`script ${styles.signature}`}>{signature}</p> : null}

        {children}
      </Reveal>
    </div>
  );
}
