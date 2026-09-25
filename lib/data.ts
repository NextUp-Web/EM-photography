export type NavItem = { label: string; href: string };

/** Public navigation — Home / Portfolio / About / Contact, in that order. */
export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export type Photo = {
  src: string;
  alt: string;
  /** object-position — chosen so faces, hands and details are never clipped */
  position?: string;
  /** the mockup prints this frame monochrome */
  bw?: boolean;
  /** width / height, when the frame carries its own crop (collection pages) */
  ratio?: number;
};

const V3 = "/images/v3";

/* ------------------------------------------------------------------
   Photography

   One entry per frame printed on the mockups. Every file below is an
   asset already in the repository (public/images/v3, extracted from the
   client's own boards) — no stock, no placeholder. Where a mockup frame
   is monochrome and only the colour original exists, `bw` applies a CSS
   grayscale filter and the file on disk is left untouched.
   ------------------------------------------------------------------ */

export const PHOTOS = {
  /* ---- Home ----

     The hero is two frames: a tall monochrome embrace, and a smaller
     colour frame laid over its lower right corner. */
  homeHeroMain: {
    src: `${V3}/home/hero.webp`,
    alt: "A bride and groom held close on the terrace, the lake and the mountains behind them",
    position: "44% center",
    bw: true,
  },
  homeHeroSide: {
    src: `${V3}/home/story-lead.webp`,
    alt: "A bride at the balustrade looking out over the lake",
    position: "38% center",
  },
  approachOne: {
    src: `${V3}/portfolio/pair-veil.webp`,
    alt: "The veil lifted and lit from behind under a stone loggia",
    position: "center 45%",
  },
  approachTwo: {
    src: `${V3}/home/approach.webp`,
    alt: "A hand resting on the lace of a wedding dress",
    position: "center 42%",
    bw: true,
  },
  aboutPortrait: {
    src: `${V3}/about/portrait.webp`,
    alt: "Emma, camera in hand, on a terrace above the lake",
    position: "center 55%",
    bw: true,
  },
  /* The invitation that closes the home page: the couple at the
     balustrade, in monochrome, the type over the open lake to their left. */
  homeInvite: {
    src: `${V3}/portfolio/lead.webp`,
    alt: "The couple on the balustraded terrace, the lake and the mountains behind them",
    position: "center 52%",
    bw: true,
  },


  /* ---- About ---- */
  aboutHero: {
    src: `${V3}/about/hero.webp`,
    alt: "Emma on a terrace above the lake, the mountains catching the last light",
    position: "center 46%",
  },
  /* The About opening: one tall frame of Emma at work, and a smaller
     frame laid over its lower right corner. */
  aboutLead: {
    src: `${V3}/about/portrait.webp`,
    alt: "Emma, camera in hand, on the shore of the lake",
    position: "center 40%",
  },
  aboutLeadInset: {
    src: `${V3}/home/emra.webp`,
    alt: "Emma looking out over the lake and the mountains at sunset",
    position: "center 34%",
  },
  /* The monochrome frame beside "More than a record of the day". */
  aboutTrace: {
    src: `${V3}/about/hero.webp`,
    alt: "Emma seated on the terrace, the lake and the mountains beyond her",
    position: "30% 50%",
    bw: true,
  },
  /* The wide frame before the closing invitation. */
  aboutPanorama: {
    src: "/images/about/hero.jpg",
    alt: "Emma photographing the lake from a terrace, the mountains behind",
    position: "center 45%",
  },
  /* ---- Contact ---- */
  contactHero: {
    src: `${V3}/portfolio/lead.webp`,
    alt: "The couple on a balustraded terrace above the lake at sunset",
    position: "center 46%",
  },
} satisfies Record<string, Photo>;

/* ------------------------------------------------------------------
   Home — Selected stories

   The mockup prints three frames side by side and a 01 / 06 counter,
   so the gallery holds six photographs and steps one at a time.
   ------------------------------------------------------------------ */

export const SELECTED_STORIES: Photo[] = [
  {
    src: `${V3}/home/story-flowers.webp`,
    alt: "A bouquet of white roses and ranunculus held against a knitted sleeve",
    position: "center 50%",
  },
  {
    src: `${V3}/home/story-embrace.webp`,
    alt: "The couple forehead to forehead, the lake behind them",
    position: "center 40%",
    bw: true,
  },
  {
    src: `${V3}/portfolio/pair-couple.webp`,
    alt: "The couple from behind, her veil the length of her dress",
    position: "center 40%",
    bw: true,
  },
  {
    src: `${V3}/about/trip-couple.webp`,
    alt: "The couple walking away through the old town",
    position: "center 45%",
    bw: true,
  },
  {
    src: `${V3}/about/trip-lake.webp`,
    alt: "A wooden boat below the village on the lake",
    position: "center 55%",
  },
  {
    src: `${V3}/about/villa.webp`,
    alt: "A villa among cypresses above the lake",
    position: "center 50%",
  },
];

/* ------------------------------------------------------------------
   Portfolio
   ------------------------------------------------------------------ */

/**
 * One reportage — a couple, the place it happened, the cover frame the
 * Portfolio grid prints, and the photographs its own page holds.
 *
 * >>> TO ADD A COUPLE: copy one entry, give it a new `slug`, set `name`
 * >>> to their initials ("A & L") and `place` to city + country, point
 * >>> `cover` at the cover frame and list the rest under `photos`.
 * >>> The Portfolio grid, the route /portfolio/<slug>, the sitemap-ready
 * >>> static params and the story-to-story navigation all read from here;
 * >>> nothing else needs touching.
 */
export type Collection = {
  slug: string;
  /** the couple's initials, exactly as they should print — "A & L" */
  name: string;
  /** city + country — "Zermatt, Switzerland" */
  place: string;
  /** the month and year, printed small on the story's own page */
  date?: string;
  /** one paragraph opening the story's own page */
  intro?: string;
  cover: Photo;
  photos: Photo[];
};

export const COLLECTIONS: Collection[] = [
  {
    slug: "i-and-e",
    name: "I & E",
    place: "Montreux, Switzerland",
    date: "September 2026",
    intro:
      "A morning that began quietly above the lake and never quite hurried. We walked, we waited for the light, and let the day arrive on its own terms.",
    cover: {
      src: `${V3}/home/emra.webp`,
      alt: "Emra looking out over the lake and the mountains in the early light",
      position: "center 35%",
    },
    photos: [
      {
        src: `${V3}/home/emra.webp`,
        alt: "Emra on the hillside above the lake, the mountains catching the first light",
        position: "center 35%",
        ratio: 1.9,
      },
      {
        src: `${V3}/home/story-lead.webp`,
        alt: "At the balustrade, looking out across the water",
        position: "center 45%",
        ratio: 0.96,
      },
      {
        src: `${V3}/home/story-embrace.webp`,
        alt: "The two of them forehead to forehead beneath the veil",
        position: "center 38%",
        ratio: 1.3,
        bw: true,
      },
      {
        src: `${V3}/home/story-flowers.webp`,
        alt: "A bouquet of white roses and ranunculus held against a knitted sleeve",
        position: "center 50%",
        ratio: 1.21,
      },
      {
        src: `${V3}/about/hero.webp`,
        alt: "A table laid for two on the terrace, the village and the lake beyond",
        position: "center 45%",
        ratio: 1.18,
      },
      {
        src: `${V3}/home/story-shore.webp`,
        alt: "The far shore of the lake at sunrise, the mountains behind it",
        position: "center 50%",
        ratio: 3.1,
      },
    ],
  },
  {
    slug: "m-and-j",
    name: "M & J",
    place: "Vuillerens, Switzerland",
    date: "July 2026",
    intro:
      "A château, a long table under candlelight, and a day that stayed close and unhurried from the first gesture to the last dance.",
    cover: {
      src: `${V3}/portfolio/lead.webp`,
      alt: "M & J on the terrace of the château, the lake and mountains behind them",
      position: "center 48%",
    },
    photos: [
      {
        src: `${V3}/portfolio/lead.webp`,
        alt: "M & J on the terrace, the lake and the mountains behind them",
        position: "center 48%",
        ratio: 1.9,
      },
      {
        src: `${V3}/home/approach.webp`,
        alt: "A ringed hand resting against a dark suit",
        position: "center 45%",
        ratio: 0.93,
        bw: true,
      },
      {
        src: `${V3}/portfolio/detail-note.webp`,
        alt: "Candlelight along the dinner table, white roses and cut glass",
        position: "center 50%",
        ratio: 1.46,
      },
      {
        src: `${V3}/portfolio/pair-veil.webp`,
        alt: "The bride under the loggia, her veil spread across the stone",
        position: "center 42%",
        ratio: 0.84,
        bw: true,
      },
      {
        src: `${V3}/portfolio/village.webp`,
        alt: "The villa and cypresses above the lake at sunset",
        position: "center 50%",
        ratio: 1.47,
      },
      {
        src: `${V3}/home/closing.webp`,
        alt: "The mountains and the lake at the end of the day",
        position: "center 50%",
        ratio: 2.86,
      },
    ],
  },
  {
    slug: "a-and-l",
    name: "A & L",
    place: "Lake Como, Italy",
    date: "June 2026",
    intro:
      "Two days on the water, an elopement of their own making — a walk through the old town, a boat at golden hour, and dinner beneath the olive trees.",
    cover: {
      src: `${V3}/home/hero.webp`,
      alt: "A & L at the water's edge, the village of Lake Como beyond",
      position: "center 46%",
    },
    photos: [
      {
        src: `${V3}/home/hero.webp`,
        alt: "A & L at the water's edge, the village beyond them",
        position: "center 46%",
        ratio: 1.9,
      },
      {
        src: `${V3}/about/trip-couple.webp`,
        alt: "The couple walking away down a wet cobbled street",
        position: "center 42%",
        ratio: 0.64,
        bw: true,
      },
      {
        src: `${V3}/about/trip-flowers.webp`,
        alt: "A bouquet of white roses on a stone ledge",
        position: "center 52%",
        ratio: 0.64,
      },
      {
        src: `${V3}/about/villa.webp`,
        alt: "A villa among cypresses on the hillside above the lake",
        position: "center 50%",
        ratio: 1.42,
      },
      {
        src: `${V3}/about/trip-lake.webp`,
        alt: "A wooden boat crossing beneath the village",
        position: "center 58%",
        ratio: 0.64,
      },
      {
        src: `${V3}/contact/hero.webp`,
        alt: "A table laid for two beneath an olive tree at sunset",
        position: "center 50%",
        ratio: 1.16,
      },
    ],
  },
];

/** The story a slug names, or undefined — the route answers 404 on undefined. */
export function getCollection(slug: string): Collection | undefined {
  return COLLECTIONS.find((collection) => collection.slug === slug);
}

/** The next story in the list, wrapping round, for the foot of a story page. */
export function getNextCollection(slug: string): Collection {
  const index = COLLECTIONS.findIndex((collection) => collection.slug === slug);
  return COLLECTIONS[(index + 1) % COLLECTIONS.length];
}

export const SELECTED_STORIES_INTRO =
  "A collection of love stories documented with softness, depth and intention — from quiet moments between two souls to intimate weddings and elopements shaped by meaningful places.";

/** The very large photograph that opens the page, under the title. */
export const PORTFOLIO_INTRO: Photo = {
  src: `${V3}/portfolio/lead.webp`,
  alt: "A couple on a balustraded terrace above the lake at sunset",
  position: "center 48%",
};

/** The invitation that closes the page — a couple at the balustrade, in
 *  monochrome, the words set over the open lake on their left. */
export const PORTFOLIO_CLOSING: Photo = {
  src: `${V3}/home/hero.webp`,
  alt: "A couple at the balustrade, the lake and the mountains behind them",
  position: "center 58%",
  bw: true,
};

/** The row of five frames under the opening — colour and monochrome. */
export const PORTFOLIO_STRIP: Photo[] = [
  {
    src: `${V3}/portfolio/village.webp`,
    alt: "A village among cypresses on the shore of the lake",
    position: "40% 50%",
  },
  {
    src: `${V3}/about/trip-couple.webp`,
    alt: "A couple walking away together through a stone loggia",
    position: "center 55%",
  },
  {
    src: `${V3}/portfolio/detail-note.webp`,
    alt: "Candlelight, white flowers and cut glass on the dinner table",
    position: "center 50%",
  },
  {
    src: `${V3}/home/story-flowers.webp`,
    alt: "A bouquet of white roses and ranunculus",
    position: "center 50%",
    bw: true,
  },
  {
    src: `${V3}/about/villa.webp`,
    alt: "A villa among cypresses above the lake",
    position: "30% 50%",
  },
];

/* ------------------------------------------------------------------
   About — the three movements of the work.
   ------------------------------------------------------------------ */

export const APPROACH_STEPS = [
  {
    number: "01",
    title: "Observe",
    text: "I notice the subtle details that bring depth, texture and feeling to a moment.",
  },
  {
    number: "02",
    title: "Guide",
    text: "When needed, I offer refined direction so the experience feels effortless and true.",
  },
  {
    number: "03",
    title: "Preserve",
    text: "What remains is a body of work that feels timeless, personal and quietly lasting.",
  },
];

/* ------------------------------------------------------------------
   Contact form
   ------------------------------------------------------------------ */

/** Maternity and Anniversary are deliberately not offered. */
export const INTERESTS = [
  "Wedding",
  "Couples",
  "Engagement",
  "Intimate celebration",
  "Other",
];

/** The five answers offered under “How did you hear about me?”. */
export const REFERRAL_SOURCES = [
  "Instagram",
  "Google",
  "A friend or family recommendation",
  "A wedding planner or venue",
  "Somewhere else",
];

/** The shortest message the form accepts, in words. */
export const MESSAGE_MIN_WORDS = 6;

export const CONTACT_EMAIL = "contact@em-photography.ch";
export const SITE_URL = "https://em-photography.ch";
export const COPYRIGHT_YEAR = 2026;

/* ------------------------------------------------------------------
   Social

   >>> The two values below are placeholders. Replace the handle and the
   >>> phone number with the client's own and nothing else needs touching:
   >>> every Instagram and WhatsApp link on the site reads from here.
   ------------------------------------------------------------------ */

export const INSTAGRAM_HANDLE = "emphotography.ch";
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;

/** International format, digits only — wa.me refuses anything else. */
export const WHATSAPP_NUMBER = "41790000000";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
