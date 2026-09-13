export type NavItem = { label: string; href: string };

/** Wording is taken verbatim from the reference header. */
export const NAV_LEFT: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/a-propos" },
];

export const NAV_RIGHT: NavItem[] = [
  { label: "Portfolio", href: "/portfolio" },
  // No standalone Services mockup was supplied: the link resolves to the
  // collections block of the portfolio, as instructed.
  { label: "Services", href: "/portfolio#collections" },
  { label: "Contact", href: "/contact" },
];

export const NAV_ALL: NavItem[] = [...NAV_LEFT, ...NAV_RIGHT];

export type Category = {
  slug: string;
  href: string;
  /** short label used on the home and contact strips */
  label: string;
  /** full title used on the portfolio board */
  title: string;
  caption: string;
  image: string;
  alt: string;
};

export const CATEGORIES: Category[] = [
  {
    slug: "mariages",
    href: "/mariages",
    label: "Mariages",
    title: "Mariages",
    caption: "Des histoires d’amour, pour toujours.",
    image: "/images/portfolio/mariages.jpg",
    alt: "Mariés enlacés devant un lac de montagne",
  },
  {
    slug: "ceremonies-civiles",
    href: "/ceremonies-civiles",
    label: "Civile",
    title: "Cérémonies civiles",
    caption: "L’essentiel, en toute simplicité.",
    image: "/images/portfolio/ceremonies-civiles.jpg",
    alt: "Mains des mariés et alliance lors d’une cérémonie civile",
  },
  {
    slug: "anniversaires",
    href: "/anniversaires",
    label: "Anniversaires",
    title: "Anniversaires",
    caption: "Célébrer ce qui compte.",
    image: "/images/portfolio/anniversaires.jpg",
    alt: "Table de fête dressée avec fleurs et verres",
  },
  {
    slug: "maternite-naissance",
    href: "/maternite-naissance",
    label: "Maternité & Naissance",
    title: "Maternité & Naissance",
    caption: "Les premiers instants, une éternité d’émotions.",
    image: "/images/portfolio/maternite-naissance.jpg",
    alt: "Mère embrassant son nouveau-né",
  },
  {
    slug: "couples",
    href: "/portfolio#collections",
    label: "Couples",
    title: "Couples & Fiançailles",
    caption: "Avant tout, vous.",
    image: "/images/portfolio/couples.jpg",
    alt: "Couple complice lors d’une séance de fiançailles",
  },
];

/** Session types offered by the contact form. */
export const SESSION_TYPES = [
  "Mariage",
  "Cérémonie civile",
  "Anniversaire",
  "Maternité",
  "Naissance",
  "Couple / Fiançailles",
  "Autre",
] as const;

export const CONTACT_EMAIL = "contact@em-photography.ch";
export const INSTAGRAM_HANDLE = "@em.photography";
export const INSTAGRAM_URL = "https://www.instagram.com/em.photography/";
export const PINTEREST_URL = "https://www.pinterest.com/";
export const SITE_URL = "https://em-photography.ch";
