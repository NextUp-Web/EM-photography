import Link from "next/link";
import Figure from "@/components/ui/Figure";
import { COLLECTIONS } from "@/lib/data";
import styles from "./CollectionGrid.module.css";

/**
 * The reportages themselves — no categories, no cards, no shadows: one
 * cover photograph, the couple's initials beneath it, then the place.
 * Three to a line on the desktop, two on the phone. The whole frame is
 * the link, and it opens that story's own page.
 */
export default function CollectionGrid() {
  return (
    <ul className={styles.grid}>
      {COLLECTIONS.map((collection) => (
        <li key={collection.slug}>
          <Link href={`/portfolio/${collection.slug}`} className={styles.item}>
            <Figure
              photo={collection.cover}
              ratio={1.28}
              mobileRatio={1.05}
              sizes="(max-width: 860px) 46vw, 360px"
              className={styles.cover}
            />
            <p className={`label ${styles.name}`}>{collection.name}</p>
            <p className={`label ${styles.place}`}>{collection.place}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
