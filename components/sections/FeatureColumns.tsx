import Figure from "@/components/ui/Figure";
import Reveal from "@/components/ui/Reveal";
import styles from "./FeatureColumns.module.css";

export type FeatureColumn = {
  title: string;
  caption: string[];
  image?: string;
  alt?: string;
};

type FeatureColumnsProps = {
  items: FeatureColumn[];
  columns: 3 | 4;
  /** width / height of the small image above each column */
  ratio?: number;
  sizes?: string;
  className?: string;
};

export default function FeatureColumns({
  items,
  columns,
  ratio = 1.12,
  sizes = "(max-width: 768px) 60vw, 18vw",
  className,
}: FeatureColumnsProps) {
  return (
    <ul
      className={["columns", `columns--${columns}`, styles.list, className]
        .filter(Boolean)
        .join(" ")}
    >
      {items.map((item, index) => (
        <Reveal as="li" key={item.title} delay={index * 90} className={styles.item}>
          {item.image ? (
            <Figure
              src={item.image}
              alt={item.alt ?? item.title}
              ratio={ratio}
              sizes={sizes}
              zoom
              className={styles.media}
            />
          ) : null}

          <h3 className={`label ${styles.title}`}>{item.title}</h3>

          <p className={`caption ${styles.caption}`}>
            {item.caption.map((line, lineIndex) => (
              <span key={line}>
                {line}
                {lineIndex < item.caption.length - 1 ? <br /> : null}
              </span>
            ))}
          </p>
        </Reveal>
      ))}
    </ul>
  );
}
