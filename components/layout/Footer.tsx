import Link from "next/link";
import { INSTAGRAM_URL, NAV, SEO_LINE } from "@/lib/data";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`shell ${styles.inner}`}>
        <hr className="rule" />

        <div className={styles.top}>
          <div className={styles.identity}>
            <p className={styles.name}>EM Photography</p>
            <p className={`label ${styles.based}`}>Switzerland based</p>
          </div>

          <a
            href={INSTAGRAM_URL}
            className={`label ${styles.instagram}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            Instagram
          </a>

          <nav aria-label="Footer">
            <ul className={styles.nav}>
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={`label ${styles.navLink}`}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.base}>
          <p className={styles.seo}>{SEO_LINE}</p>
          <p className={`label ${styles.copy}`}>© 2026 EM Photography</p>
        </div>
      </div>
    </footer>
  );
}
