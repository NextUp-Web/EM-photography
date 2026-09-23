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

/**
 * One hairline separates the site from its foot — it is drawn ABOVE the
 * lockup, not between the lockup and what follows. Under it: the EM
 * monogram, large and centred, then a quiet row holding the place-line,
 * the four links and the two social marks.
 */
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* The separation with the rest of the site. */}
        <hr className={styles.rule} />

        <Link href="/" className={styles.brand} aria-label="EM Photography — home">
          <Logo height="var(--footer-logo-h)" />
        </Link>

        <div className={styles.row}>
          <div className={styles.place}>
            <p>Wedding &amp; Couple photographer based in Switzerland.</p>
            <p className={styles.availability}>Available across Europe</p>
          </div>

          <nav className={styles.navWrap} aria-label="Footer">
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

          <div className={styles.end}>
            <div className={styles.socials}>
              <a
                className={styles.social}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`EM Photography on Instagram — @${INSTAGRAM_HANDLE}`}
              >
                <InstagramGlyph size={18} />
              </a>
              <a
                className={styles.social}
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="EM Photography on WhatsApp"
              >
                <WhatsAppGlyph size={18} />
              </a>
            </div>

            <p className={styles.legal}>&copy; {COPYRIGHT_YEAR} EM Photography</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
