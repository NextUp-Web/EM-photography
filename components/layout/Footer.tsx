import Link from "next/link";
import Logo from "@/components/ui/Logo";
import TopLink from "@/components/ui/TopLink";
import { InstagramGlyph, WhatsAppGlyph } from "@/components/ui/SocialIcons";
import {
  COPYRIGHT_YEAR,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  NAV,
  WHATSAPP_URL,
} from "@/lib/data";
import { localizePath, type Dictionary, type Locale } from "@/lib/i18n";
import styles from "./Footer.module.css";

/**
 * One centred column under a hairline: the EM monogram, the four links,
 * the two social marks, the place-line and the copyright — each a line of
 * its own, the same distance apart.
 */
type FooterProps = { lang: Locale; common: Dictionary["common"] };

export default function Footer({ lang, common }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <hr className={styles.rule} />

      <div className={styles.inner}>
        <TopLink
          className={styles.brand}
          label={common.backToTop}
        >
          <Logo height="var(--footer-logo-h)" sizes="(max-width: 860px) 96px, 160px" />
        </TopLink>

        <nav aria-label={common.footerNav}>
          <ul className={styles.nav}>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={localizePath(item.href, lang)} className={styles.navLink}>
                  {common.nav[item.key]}
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
            aria-label={`${common.instagram} — @${INSTAGRAM_HANDLE}`}
          >
            <InstagramGlyph size={22} />
          </a>
          <a
            className={styles.social}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={common.whatsapp}
          >
            <WhatsAppGlyph size={22} />
          </a>
        </div>

        {/* The whole line centred on the page, the dot between the two places. */}
        <p className={styles.place}>
          <span>{common.placeStart}</span>
          <span className={styles.dot} aria-hidden="true">
            &bull;
          </span>
          <span>{common.placeEnd}</span>
        </p>

        {/* The copyright in the links' own face and size. Cormorant draws its
            © as a small low swirl, so the mark is the links' own capital C —
            same face and weight — in a fine circle, centred on the height of
            the capitals. */}
        <p className={styles.legal}>
          <span className={styles.copyMark} role="img" aria-label={common.copyright}>
            C
          </span>
          {COPYRIGHT_YEAR} EM Photography
        </p>
      </div>
    </footer>
  );
}
