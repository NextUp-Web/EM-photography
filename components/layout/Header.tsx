"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/ui/Logo";
import MobileMenu from "./MobileMenu";
import { NAV } from "@/lib/data";
import styles from "./Header.module.css";

/**
 * A thin warm-white bar: the supplied EM lockup on the left, four tracked
 * links on the right, the current page underlined. It sits in the flow —
 * every mockup starts its first photograph directly beneath it.
 */
export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="EM Photography — home">
          <Logo priority />
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          <ul className={styles.list}>
            {NAV.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`${styles.link} ${active ? styles.linkActive : ""}`}
                    aria-current={active ? "page" : undefined}
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
