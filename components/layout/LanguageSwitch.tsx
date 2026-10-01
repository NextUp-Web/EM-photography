"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALES, localizePath, stripLocale, type Locale } from "@/lib/i18n/config";
import styles from "./LanguageSwitch.module.css";

type LanguageSwitchProps = {
  lang: Locale;
  label: string;
  names: Record<Locale, string>;
  className?: string;
  /** only the other language, as a single toggle (the phone's bar) */
  compact?: boolean;
  onNavigate?: () => void;
};

/**
 * EN / FR — the same page in the other language. The current language is
 * set in ink, the other a shade quieter; each link names its language in
 * that language for screen readers. Compact, only the other language
 * shows, as a toggle.
 *
 * Switching keeps the reader where they were: the share of the page
 * already scrolled is noted on the way out and restored on the same page
 * in the other language, rather than starting again at the top.
 */
const KEPT_SCROLL = "em:language-scroll";
export default function LanguageSwitch({
  lang,
  label,
  names,
  className,
  compact = false,
  onNavigate,
}: LanguageSwitchProps) {
  const pathname = usePathname();
  const path = stripLocale(pathname);
  const shown = compact ? LOCALES.filter((locale) => locale !== lang) : LOCALES;

  useEffect(() => {
    let kept: { to: string; share: number } | null = null;
    try {
      kept = JSON.parse(sessionStorage.getItem(KEPT_SCROLL) ?? "null");
      if (kept?.to !== localizePath(path, lang)) return;
      sessionStorage.removeItem(KEPT_SCROLL);
    } catch {
      return;
    }
    const share = kept.share;
    requestAnimationFrame(() => {
      const room = document.documentElement.scrollHeight - window.innerHeight;
      window.scrollTo({ top: Math.round(share * room), behavior: "instant" });
    });
  }, [path, lang]);

  function keepScroll(to: string) {
    const room = document.documentElement.scrollHeight - window.innerHeight;
    const share = room > 0 ? window.scrollY / room : 0;
    try {
      sessionStorage.setItem(KEPT_SCROLL, JSON.stringify({ to, share }));
    } catch {
      /* without storage the page simply opens at the top */
    }
  }

  return (
    <nav aria-label={label} className={[styles.switch, className].filter(Boolean).join(" ")}>
      {shown.map((locale, index) => (
        <span key={locale} className={styles.item}>
          {index > 0 ? (
            <span className={styles.divider} aria-hidden="true">
              /
            </span>
          ) : null}
          <Link
            href={localizePath(path, locale)}
            hrefLang={locale}
            lang={locale}
            aria-label={names[locale]}
            aria-current={locale === lang ? "true" : undefined}
            className={`${styles.link} ${locale === lang ? styles.current : ""}`}
            scroll={false}
            onClick={() => {
              if (locale !== lang) keepScroll(localizePath(path, locale));
              onNavigate?.();
            }}
          >
            {locale.toUpperCase()}
          </Link>
        </span>
      ))}
    </nav>
  );
}
