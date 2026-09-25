import Link from "next/link";
import Figure from "@/components/ui/Figure";
import { COLLECTIONS } from "@/lib/data";
import styles from "./CollectionGrid.module.css";

/**
 * The reportages as cards: one cover photograph, then, inside a hairline,
 * the couple's initials over the place, and an arrow on the right. The
 * middle card of each row is printed monochrome, so colour and black and
 * white alternate. The whole card is the link to that story's own page.
 */
export default function CollectionGrid() {
  return (
    <ul className={styles.grid}>
      {COLLECTIONS.map((collection) => (
        <li key={collection.slug}>
          <Link href={`/portfolio/${collection.slug}`} className={styles.item}>
            <Figure
              photo={collection.cover}
              ratio={1.32}
              mobileRatio={1.2}
              sizes="(max-width: 860px) 100vw, 33vw"
              className={styles.cover}
            />
            <span className={styles.caption}>
              <span className={styles.text}>
                <span className={`caps-serif ${styles.name}`}>{collection.name}</span>
                <span className={`label ${styles.place}`}>{collection.place}</span>
              </span>
              <span className={styles.arrow} aria-hidden="true">
                &#8594;
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
