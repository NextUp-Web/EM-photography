import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { InstagramGlyph } from "@/components/ui/SocialIcons";
import {
  COPYRIGHT_YEAR,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  NAV,
} from "@/lib/data";
import styles from "./Footer.module.css";

/** Home is reached through the lockup above, so the row lists the other three. */
const FOOTER_LINKS = NAV.filter((item) => item.href !== "/");

/**
 * Everything on one centred axis: the lockup, the place-line, the three
 * links, the Instagram mark and the copyright.
 */
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="EM Photography — home">
          <Logo height="var(--footer-logo-h)" />
        </Link>

        <p className={styles.place}>
          Based in Switzerland &mdash; available across Europe
        </p>

        <nav className={styles.navWrap} aria-label="Footer">
          <ul className={styles.nav}>
            {FOOTER_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a
          className={styles.social}
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`EM Photography on Instagram — @${INSTAGRAM_HANDLE}`}
        >
          <InstagramGlyph size={19} />
        </a>

        <p className={styles.legal}>&copy; {COPYRIGHT_YEAR} EM Photography</p>
      </div>
    </footer>
  );
}
