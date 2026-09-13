import Figure from "@/components/ui/Figure";
import styles from "./Gallery.module.css";

export type GalleryItem =
  | { kind?: "image"; src: string; alt: string; weight?: number; position?: string }
  | { kind: "note"; lines: string[]; weight?: number };

type GalleryProps = {
  items: GalleryItem[];
  /** strip height as a share of the viewport width, e.g. 0.268 */
  heightRatio: number;
  minHeight?: number;
  maxHeight?: number;
  /** la maquette pose parfois la bande dans la gouttière plutôt qu’à fond perdu */
  inset?: boolean;
  gap?: string;
  className?: string;
  label?: string;
};

/** Full-bleed editorial strip. Column weights reproduce the reference rhythm. */
export default function Gallery({
  items,
  heightRatio,
  minHeight = 180,
  maxHeight = 420,
  inset = false,
  gap,
  className,
  label,
}: GalleryProps) {
  const columns = items.map((item) => `${item.weight ?? 1}fr`).join(" ");
  const height = `clamp(${minHeight}px, ${(heightRatio * 100).toFixed(2)}vw, ${maxHeight}px)`;

  return (
    <section
      aria-label={label}
      className={[styles.strip, inset ? styles.inset : "", className].filter(Boolean).join(" ")}
      style={{ gridTemplateColumns: columns, height, ...(gap ? { gap } : null) }}
    >
      {items.map((item, index) =>
        item.kind === "note" ? (
          <div key={`note-${index}`} className={styles.note}>
            <p className={`eyebrow centered ${styles.noteText}`}>
              {item.lines.map((line, lineIndex) => (
                <span key={line}>
                  {line}
                  {lineIndex < item.lines.length - 1 ? <br /> : null}
                </span>
              ))}
            </p>
            <hr className={`rule rule--center rule--short ${styles.noteRule}`} />
          </div>
        ) : (
          <Figure
            key={item.src}
            src={item.src}
            alt={item.alt}
            position={item.position}
            sizes={`${Math.round(100 / items.length)}vw`}
            zoom
            className={styles.cell}
          />
        ),
      )}
    </section>
  );
}
