"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import TopLink from "@/components/ui/TopLink";
import NavPanel from "./MobileMenu";
import { NAV } from "@/lib/data";
import styles from "./Header.module.css";

/**
 * The supplied name lockup — EM PHOTOGRAPHY over WEDDING & PORTRAIT
 * PHOTOGRAPHER — at the left of the bar (centred on the phone), with, on
 * the right, the four links
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
          {/* The name takes the visitor back to the top of the page they are on. */}
          <TopLink
            className={styles.brand}
            label="EM Photography — back to the top of the page"
            onClick={() => setOpen(false)}
          >
            {/* The supplied lockup — EM PHOTOGRAPHY over WEDDING & PORTRAIT
                PHOTOGRAPHER — never re-typed with a font. */}
            <Image
              src="/brand/em-wordmark-black.png"
              alt="EM Photography — Wedding & Portrait Photographer"
              width={1219}
              height={174}
              priority
              sizes="(max-width: 860px) 272px, 340px"
              className={styles.wordmarkImage}
            />
          </TopLink>

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
