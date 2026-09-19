"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { COPYRIGHT_YEAR, NAV } from "@/lib/data";
import styles from "./Footer.module.css";

/**
 * The mockups print two variants of the same footer: Home drops HOME from
 * the link row and spells the word Copyright; the other three keep all four
 * links and set the © sign.
 */
export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const links = isHome ? NAV.filter((item) => item.href !== "/") : NAV;

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <p className={styles.name}>EM Photography</p>
          <p className={styles.place}>
            Based in Switzerland - available across Europe
          </p>
        </div>

        <nav className={styles.navWrap} aria-label="Footer">
          <ul className={styles.nav}>
            {links.map((item, index) => (
              <li key={item.href} className={styles.navItem}>
                {index > 0 ? (
                  <span className={styles.dot} aria-hidden="true">
                    ·
                  </span>
                ) : null}
                <Link href={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className={styles.legal}>
          {isHome ? "Copyright" : "©"} {COPYRIGHT_YEAR} EM PHOTOGRAPHY
        </p>
      </div>
    </footer>
  );
}
