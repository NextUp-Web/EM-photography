import Link from "next/link";
import { COPYRIGHT_YEAR, INSTAGRAM_URL, NAV, SEO_LINE } from "@/lib/data";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <p className={styles.brand}>
            <span className={styles.brandName}>EM Photography</span>
            <span className={styles.brandPlace}>Switzerland based</span>
          </p>

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

        <hr className={styles.rule} />

        <div className={styles.base}>
          <p className={styles.legal}>© {COPYRIGHT_YEAR} EM Photography</p>
          <p className={styles.seo}>{SEO_LINE}</p>
        </div>
      </div>
    </footer>
  );
}
