import Link from "next/link";
import Figure from "@/components/ui/Figure";
import Reveal from "@/components/ui/Reveal";
import styles from "./CategoryGrid.module.css";

export type CategoryGridItem = {
  href: string;
  heading: string;
  caption?: string;
  image: string;
  alt: string;
  position?: string;
};

type CategoryGridProps = {
  items: CategoryGridItem[];
  columns: 2 | 3 | 4 | 5;
  /** width / height of each image slot */
  ratio: number;
  /** "label" = small tracked sans, "title" = serif editorial */
  headingStyle?: "label" | "title";
  sizes: string;
  className?: string;
};

export default function CategoryGrid({
  items,
  columns,
  ratio,
  headingStyle = "label",
  sizes,
  className,
}: CategoryGridProps) {
  return (
    <ul
      className={[styles.grid, styles[`cols${columns}`], className].filter(Boolean).join(" ")}
    >
      {items.map((item, index) => (
        <Reveal as="li" key={item.heading} delay={index * 90}>
          <Link href={item.href} className={styles.card}>
            <Figure
              src={item.image}
              alt={item.alt}
              ratio={ratio}
              position={item.position}
              sizes={sizes}
              zoom
            />
            <h3 className={headingStyle === "title" ? styles.title : styles.label}>
              {item.heading}
            </h3>
            <hr className={`rule rule--center rule--short ${styles.rule}`} />
            {item.caption ? <p className={`caption ${styles.caption}`}>{item.caption}</p> : null}
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}
