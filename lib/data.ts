export type NavItem = { label: string; href: string };

/** Public navigation — Home / About / Portfolio / Contact, nothing else. */
export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

/** The collections printed under the portfolio title, as one tracked line. */
export const PORTFOLIO_CATEGORIES = [
  "Weddings",
  "Couples",
  "Intimate celebrations",
];

/**
 * The board opens the portfolio with a single named story and its sequence of
 * six photographs. Ratios are the ones measured on the board panel.
 */
export const STORY = {
  id: "m-and-j",
  title: "M & J",
  venue: "Château de Vullierens",
  country: "Switzerland",
  lead: {
    src: "/images/v3/portfolio/lead.jpg",
    alt: "A bride and groom on a balustraded terrace, the lake and the mountains behind them",
    ratio: 1.237,
    position: "center 45%",
  },
  pair: [
    {
      src: "/images/v3/portfolio/pair-couple.jpg",
      alt: "The couple seen from behind, her veil falling the length of her dress",
      ratio: 0.836,
      position: "center 45%",
    },
    {
      src: "/images/v3/portfolio/pair-veil.jpg",
      alt: "The veil lifted and lit from behind under a stone loggia",
      ratio: 0.836,
      position: "center 40%",
    },
  ],
  detail: {
    src: "/images/v3/portfolio/detail-note.jpg",
    alt: "A handwritten card, À tous les beaux jours, among white flowers and cut glass",
    ratio: 1.456,
    position: "center 50%",
  },
  wide: {
    src: "/images/v3/portfolio/village.jpg",
    alt: "Cypresses above the lake, the village and the mountains beyond",
    ratio: 1.474,
    position: "center 50%",
  },
} as const;

export const CONTACT_EMAIL = "contact@em-photography.ch";
export const INSTAGRAM_URL = "https://www.instagram.com/em.photography/";
export const SITE_URL = "https://em-photography.ch";
export const COPYRIGHT_YEAR = 2026;
export const SEO_LINE =
  "Wedding & couple photographer based in Switzerland, available across Europe.";
