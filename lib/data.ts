export type NavItem = { label: string; href: string };

/** Public navigation — Home / About / Portfolio / Contact, nothing else. */
export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

/**
 * Portfolio chapters. The presentation board shows a couple's initials and a
 * venue above the first sequence; no such story data exists in the project, so
 * the chapters are titled with the collections that are actually documented.
 */
export type Chapter = {
  id: string;
  title: string;
  meta: string;
  lead: { src: string; alt: string; ratio: number; position?: string };
  pair: { src: string; alt: string; position?: string }[];
  detail?: { src: string; alt: string; ratio: number; position?: string };
  wide?: { src: string; alt: string; ratio: number; position?: string };
};

export const CHAPTERS: Chapter[] = [
  {
    id: "weddings",
    title: "Weddings",
    meta: "Switzerland · Across Europe",
    lead: {
      src: "/images/portfolio/mariages.jpg",
      alt: "A bride and groom leaning into one another above a mountain lake",
      ratio: 1.75,
      position: "center 42%",
    },
    pair: [
      {
        src: "/images/weddings/gallery-01.jpg",
        alt: "A bride on a stone balustrade, her veil spread behind her",
      },
      {
        src: "/images/weddings/gallery-03.jpg",
        alt: "A couple resting forehead to forehead after the ceremony",
      },
    ],
    detail: {
      src: "/images/weddings/gallery-02.jpg",
      alt: "Two wedding rings resting on an open book",
      ratio: 2,
      position: "center 55%",
    },
    wide: {
      src: "/images/civil/bloc-couple.jpg",
      alt: "A couple walking away from the ceremony, a bouquet at her side",
      ratio: 2.4,
      position: "center 40%",
    },
  },
  {
    id: "couples",
    title: "Couples",
    meta: "Engagements · In-between seasons",
    lead: {
      src: "/images/portfolio/couples.jpg",
      alt: "A woman laughing against her partner's shoulder in open light",
      ratio: 2.2,
    },
    pair: [
      {
        src: "/images/civil/gallery-03.jpg",
        alt: "A couple kissing, a small bouquet held between them",
      },
      {
        src: "/images/contact/couples.jpg",
        alt: "A couple standing close together, mountains softening behind them",
        position: "center 35%",
      },
    ],
    detail: {
      src: "/images/contact/ceremonies-civiles.jpg",
      alt: "Two hands resting one over the other, a wedding band catching the light",
      ratio: 2,
    },
  },
  {
    id: "intimate-celebrations",
    title: "Intimate celebrations",
    meta: "Civil ceremonies · Family gatherings",
    lead: {
      src: "/images/civil/bloc-reportage.jpg",
      alt: "Glasses raised in a toast across a table of white flowers",
      ratio: 1.8,
    },
    pair: [
      {
        src: "/images/civil/gallery-01.jpg",
        alt: "A couple walking up the steps of a town hall, hand in hand",
      },
      {
        src: "/images/maternity/gallery-01.jpg",
        alt: "An expecting mother at a window, hands resting on her bump",
      },
    ],
    detail: {
      src: "/images/birthdays/mosaic-03.jpg",
      alt: "A cake crowned with lit candles on a table of white flowers",
      ratio: 2,
    },
    wide: {
      src: "/images/civil/hero.jpg",
      alt: "Guests seated behind a couple during a civil ceremony",
      ratio: 2.6,
      position: "center 45%",
    },
  },
];

/** Category line printed under the portfolio title. */
export const PORTFOLIO_CATEGORIES = CHAPTERS.map((chapter) => ({
  label: chapter.title,
  href: `#${chapter.id}`,
}));

export const CONTACT_EMAIL = "contact@em-photography.ch";
export const INSTAGRAM_URL = "https://www.instagram.com/em.photography/";
export const SITE_URL = "https://em-photography.ch";
export const COPYRIGHT_YEAR = 2026;
export const SEO_LINE =
  "Wedding & couple photographer based in Switzerland, available across Europe.";
