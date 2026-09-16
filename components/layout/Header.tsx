"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";
import { NAV } from "@/lib/data";
import styles from "./Header.module.css";

function isCurrent(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={`shell ${styles.inner}`}>
        <Link href="/" className={styles.lockup} aria-label="EM Photography — home">
          <span className={styles.mark}>EM</span>
          <span className={styles.word}>Photography</span>
        </Link>

        <nav className={styles.nav} aria-label="Main">
          <ul className={styles.list}>
            {NAV.map((item) => {
              const current = isCurrent(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`${styles.link} ${current ? styles.linkCurrent : ""}`}
                    aria-current={current ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
