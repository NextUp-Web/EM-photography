/* ------------------------------------------------------------------
   Languages

   English is the site's first language and keeps the plain paths
   (/, /about, /portfolio…); French lives under /fr (/fr, /fr/about…).
   proxy.ts maps the plain paths onto app/[lang] as "en" behind the
   scenes, so every page is written once and rendered in both.
   ------------------------------------------------------------------ */

export const LOCALES = ["en", "fr"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export const isLocale = (value: string): value is Locale =>
  (LOCALES as readonly string[]).includes(value);

/** A site path ("/about") as it reads in the given language ("/fr/about"). */
export function localizePath(path: string, locale: Locale): string {
  if (locale === DEFAULT_LOCALE) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/**
 * The path without its language prefix: "/fr/about" → "/about". The
 * English pages are rendered at /en/… behind the scenes, so that prefix
 * is taken off as well.
 */
export function stripLocale(pathname: string): string {
  for (const locale of LOCALES) {
    if (pathname === `/${locale}`) return "/";
    if (pathname.startsWith(`/${locale}/`)) return pathname.slice(locale.length + 1);
  }
  return pathname;
}

/** The language a browser path is in. */
export const localeOf = (pathname: string): Locale =>
  LOCALES.find((locale) => locale !== DEFAULT_LOCALE && (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`))) ??
  DEFAULT_LOCALE;

/** hreflang alternates for a page's metadata. */
export function alternatesFor(path: string, locale: Locale) {
  return {
    canonical: localizePath(path, locale),
    languages: {
      en: localizePath(path, "en"),
      fr: localizePath(path, "fr"),
      "x-default": localizePath(path, DEFAULT_LOCALE),
    },
  };
}
