import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { InstagramGlyph, WhatsAppGlyph } from "@/components/ui/SocialIcons";
import {
  COPYRIGHT_YEAR,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  NAV,
  WHATSAPP_URL,
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

        {/* The trade and the country on one line, what follows on the next. */}
        <p className={styles.place}>
          <span>Wedding &amp; couple photographer</span>
          <span className={styles.dot} aria-hidden="true">
            &middot;
          </span>
          <span>Based in Switzerland</span>
        </p>

        <p className={styles.availability}>Available across Europe</p>

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

        <div className={styles.socials}>
          <a
            className={styles.social}
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`EM Photography on Instagram — @${INSTAGRAM_HANDLE}`}
          >
            <InstagramGlyph size={19} />
          </a>
          <a
            className={styles.social}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="EM Photography on WhatsApp"
          >
            <WhatsAppGlyph size={19} />
          </a>
        </div>

        <p className={styles.legal}>&copy; {COPYRIGHT_YEAR} EM Photography</p>
      </div>
    </footer>
  );
}
