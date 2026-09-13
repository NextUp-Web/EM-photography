import type { ReactNode } from "react";
import Figure from "@/components/ui/Figure";
import Reveal from "@/components/ui/Reveal";
import styles from "./FeatureColumns.module.css";

export type FeatureColumn = {
  title: string;
  caption?: string[];
  image?: string;
  alt?: string;
  icon?: ReactNode;
};

type FeatureColumnsProps = {
  items: FeatureColumn[];
  columns: 3 | 4;
  /** largeur / hauteur de la vignette placée au-dessus de la colonne */
  ratio?: number;
  /** largeur de la vignette dans sa colonne, telle que lue sur la maquette */
  mediaWidth?: string;
  /** filet court sous l'intitulé */
  rule?: boolean;
  /** hairlines verticaux entre les colonnes */
  separators?: boolean;
  sizes?: string;
  className?: string;
};

export default function FeatureColumns({
  items,
  columns,
  ratio = 1.12,
  mediaWidth,
  rule = false,
  separators = true,
  sizes = "(max-width: 768px) 60vw, 18vw",
  className,
}: FeatureColumnsProps) {
  return (
    <ul
      className={[
        "columns",
        `columns--${columns}`,
        styles.list,
        separators ? "" : styles.plain,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {items.map((item, index) => (
        <Reveal as="li" key={item.title} delay={index * 90} className={styles.item}>
          {item.icon ? (
            <span className={styles.icon} aria-hidden="true">
              {item.icon}
            </span>
          ) : null}

          {item.image ? (
            <Figure
              src={item.image}
              alt={item.alt ?? item.title}
              ratio={ratio}
              sizes={sizes}
              zoom
              className={styles.media}
              style={mediaWidth ? { width: mediaWidth } : undefined}
            />
          ) : null}

          <h3 className={`label ${styles.title}`}>{item.title}</h3>

          {rule ? <hr className={`rule rule--center rule--short ${styles.rule}`} /> : null}

          {item.caption ? (
            <p className={`caption ${styles.caption}`}>
              {item.caption.map((line, lineIndex) => (
                <span key={line}>
                  {line}
                  {lineIndex < item.caption!.length - 1 ? <br /> : null}
                </span>
              ))}
            </p>
          ) : null}
        </Reveal>
      ))}
    </ul>
  );
}
