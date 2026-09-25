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
 * One centred column under a hairline: the EM monogram, the four links,
 * the two social marks, the place-line and the copyright — each a line of
 * its own, the same distance apart.
 */
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <hr className={styles.rule} />

      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="EM Photography — home">
          <Logo height="var(--footer-logo-h)" sizes="(max-width: 860px) 96px, 160px" />
        </Link>

        {/* Two links either side of the page's centre line. */}
        <nav aria-label="Footer" className={styles.nav}>
          {[NAV.slice(0, 2), NAV.slice(2)].map((half, index) => (
            <ul key={index} className={styles.navHalf}>
              {half.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.navLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </nav>

        <div className={styles.socials}>
          <a
            className={styles.social}
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`EM Photography on Instagram — @${INSTAGRAM_HANDLE}`}
          >
            <InstagramGlyph size={22} />
          </a>
          <a
            className={styles.social}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="EM Photography on WhatsApp"
          >
            <WhatsAppGlyph size={22} />
          </a>
        </div>

        {/* The dot sits on the page's centre line, the two places either side. */}
        <p className={styles.place}>
          <span className={styles.placeStart}>Switzerland based</span>
          <span className={styles.dot} aria-hidden="true">
            &bull;
          </span>
          <span className={styles.placeEnd}>Available across Europe</span>
        </p>

        <p className={`label ${styles.legal}`}>
          &copy; {COPYRIGHT_YEAR} EM Photography
        </p>
      </div>
    </footer>
  );
}
