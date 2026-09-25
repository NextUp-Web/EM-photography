"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavPanel from "./MobileMenu";
import { NAV } from "@/lib/data";
import styles from "./Header.module.css";

/**
 * The name set as type in the middle of the bar — EM PHOTOGRAPHY over
 * WEDDING & PORTRAIT PHOTOGRAPHER — with, on the right, the four links
 * printed in full on the desktop — Home, Portfolio, About, Contact — and,
 * on the phone, the burger that opens the same four full screen.
 *
 * The bar sits on warm white on every page and stays put while scrolling.
 * It carries no rule of its own at any point.
 */
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelId = useId();

  /* Close on navigation. */
  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <Link href="/" className={styles.brand} aria-label="EM Photography — home">
            <span className={styles.wordmark}>EM Photography</span>
            <span className={styles.tagline}>Wedding &amp; Portrait Photographer</span>
          </Link>

          {/* Desktop — the four links themselves, widely spaced and thin. */}
          <nav className={styles.nav} aria-label="Primary">
            <ul className={styles.navList}>
              {NAV.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={styles.navLink}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Phone — the same four, behind one burger. */}
          <button
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span
              className={`${styles.icon} ${open ? styles.iconOpen : ""}`}
              aria-hidden="true"
            >
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      <NavPanel id={panelId} open={open} onClose={() => setOpen(false)} />
    </>
  );
}
