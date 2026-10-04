"use client";

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
 * shows, as a toggle. Switching keeps the reader where they are on the
 * page rather than sending them back to its top.
 */
export default function LanguageSwitch({
  lang,
  label,
  names,
  className,
  compact = false,
  onNavigate,
}: LanguageSwitchProps) {
  const path = stripLocale(usePathname());
  const shown = compact ? LOCALES.filter((locale) => locale !== lang) : LOCALES;

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
            onClick={onNavigate}
          >
            {locale.toUpperCase()}
          </Link>
        </span>
      ))}
    </nav>
  );
}
