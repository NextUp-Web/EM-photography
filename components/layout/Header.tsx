"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import TopLink from "@/components/ui/TopLink";
import NavPanel from "./MobileMenu";
import LanguageSwitch from "./LanguageSwitch";
import { NAV } from "@/lib/data";
import { localizePath, stripLocale, type Dictionary, type Locale } from "@/lib/i18n";
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
type HeaderProps = { lang: Locale; common: Dictionary["common"] };

export default function Header({ lang, common }: HeaderProps) {
  const pathname = usePathname();
  const path = stripLocale(pathname);
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
            label={common.backToTop}
            onClick={() => setOpen(false)}
          >
            {/* The supplied lockup — EM PHOTOGRAPHY over WEDDING & PORTRAIT
                PHOTOGRAPHER — never re-typed with a font. */}
            <Image
              src="/brand/em-wordmark-black.png"
              alt={common.logoAlt}
              width={1219}
              height={174}
              priority
              sizes="(max-width: 860px) 272px, 340px"
              className={styles.wordmarkImage}
            />
          </TopLink>

          {/* Desktop — the four links themselves, widely spaced and thin. */}
          <nav className={styles.nav} aria-label={common.primaryNav}>
            <ul className={styles.navList}>
              {NAV.map((item) => {
                const active =
                  item.href === "/" ? path === "/" : path.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={localizePath(item.href, lang)}
                      className={styles.navLink}
                      aria-current={active ? "page" : undefined}
                    >
                      {common.nav[item.key]}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <LanguageSwitch
              lang={lang}
              label={common.language}
              names={common.languageNames}
              className={styles.langDesktop}
            />
          </nav>

          {/* Phone — the language on the left, balancing the burger on the right. */}
          <LanguageSwitch
            lang={lang}
            label={common.language}
            names={common.languageNames}
            className={styles.langPhone}
            compact
            onNavigate={() => setOpen(false)}
          />

          {/* Phone — the same four, behind one burger. */}
          <button
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? common.closeMenu : common.openMenu}
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

      <NavPanel
        id={panelId}
        open={open}
        onClose={() => setOpen(false)}
        lang={lang}
        common={common}
      />
    </>
  );
}
