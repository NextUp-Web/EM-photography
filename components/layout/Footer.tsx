import Link from "next/link";
import Wordmark from "@/components/ui/Wordmark";
import { COPYRIGHT_YEAR, INSTAGRAM_URL, NAV, SEO_LINE } from "@/lib/data";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" aria-label="EM Photography — home">
              <Wordmark layout="inline" />
            </Link>
            <p className={styles.place}>Switzerland based</p>
          </div>

          <div className={styles.right}>
            <a
              className={styles.instagram}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer noopener"
            >
              Instagram
            </a>

            <nav aria-label="Footer">
              <ul className={styles.nav}>
                {NAV.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={styles.navLink}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className={styles.base}>
          <p className={styles.legal}>© {COPYRIGHT_YEAR} EM Photography</p>
          <p className={styles.seo}>{SEO_LINE}</p>
        </div>
      </div>
    </footer>
  );
}
