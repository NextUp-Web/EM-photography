import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { InstagramIcon, PinterestIcon } from "@/components/ui/Icons";
import { NAV_ALL, INSTAGRAM_URL, PINTEREST_URL } from "@/lib/data";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logoLink} aria-label="EM Photography — accueil">
          <Logo variant="white" height="var(--logo-h-footer)" />
        </Link>

        <nav aria-label="Pied de page">
          <ul className={styles.nav}>
            {NAV_ALL.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.base}>
          <p className={styles.legal}>
            © 2024 EM Photography
            <br />
            All rights reserved.
          </p>

          <p className={styles.tagline}>
            Switzerland &amp; Europe
            <br />
            Capturing a more meaningful tomorrow
          </p>

          <ul className={styles.social}>
            <li>
              <a
                href={INSTAGRAM_URL}
                className={styles.socialLink}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
            </li>
            <li>
              <a
                href={PINTEREST_URL}
                className={styles.socialLink}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Pinterest"
              >
                <PinterestIcon size={18} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
