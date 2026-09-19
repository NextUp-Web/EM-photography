export type NavItem = { label: string; href: string };

/** Public navigation — Home / About / Portfolio / Contact, nothing else. */
export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export type Photo = {
  src: string;
  alt: string;
  /** object-position — chosen so faces, hands and details are never clipped */
  position?: string;
  /** the mockup prints this frame monochrome */
  bw?: boolean;
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
  /* ---- Home ---- */
  homeHero: {
    src: `${V3}/portfolio/lead.webp`,
    alt: "A bride and groom on a balustraded terrace above the lake at sunset",
    position: "center 46%",
  },
  philosophyOne: {
    src: `${V3}/home/approach.webp`,
    alt: "A hand resting on the lace of a wedding dress",
    position: "center 42%",
    bw: true,
  },
  philosophyTwo: {
    src: `${V3}/portfolio/detail-note.webp`,
    alt: "A dinner table laid with white flowers, glasses and a handwritten card",
    position: "center 50%",
  },
  philosophyThree: {
    src: `${V3}/portfolio/pair-couple.webp`,
    alt: "The couple seen from behind, her veil falling the length of her dress",
    position: "center 40%",
    bw: true,
  },
  aboutPortrait: {
    src: `${V3}/about/portrait.webp`,
    alt: "Emma, camera in hand, on a terrace above the lake",
    position: "center 30%",
    bw: true,
  },
  homeClosing: {
    src: `${V3}/home/hero.webp`,
    alt: "The couple held close on the terrace as the sun sets over the lake",
    position: "center 44%",
  },

  /* ---- About ---- */
  aboutHero: {
    src: `${V3}/about/portrait.webp`,
    alt: "Emma photographing, camera raised to her eye",
    position: "center 28%",
  },
  aboutBride: {
    src: `${V3}/home/story-lead.webp`,
    alt: "A bride at the balustrade, her veil spread behind her, the lake beyond",
    position: "center 45%",
  },
  aboutVilla: {
    src: `${V3}/about/villa.webp`,
    alt: "A villa among cypresses on the hillside above the lake",
    position: "center 50%",
  },
  aboutVeil: {
    src: `${V3}/home/approach.webp`,
    alt: "A ringed hand gathering the veil against a dark suit",
    position: "center 48%",
    bw: true,
  },
  aboutCouple: {
    src: `${V3}/about/trip-couple.webp`,
    alt: "The couple walking away together, her veil trailing behind",
    position: "center 40%",
    bw: true,
  },
  aboutTable: {
    src: `${V3}/portfolio/detail-note.webp`,
    alt: "Candles and white flowers along a dinner table at dusk",
    position: "center 52%",
  },
  aboutBoat: {
    src: `${V3}/about/trip-lake.webp`,
    alt: "A wooden boat crossing the lake below the village",
    position: "center 55%",
  },

  /* ---- Contact ---- */
  contactHero: {
    src: `${V3}/portfolio/pair-couple.webp`,
    alt: "The couple seen from behind, her veil falling the length of her dress",
    position: "center 22%",
    bw: true,
  },
  contactBouquet: {
    src: `${V3}/about/trip-flowers.webp`,
    alt: "A bouquet of white roses resting on a stone ledge above the lake",
    position: "center 55%",
  },
} satisfies Record<string, Photo>;

/* ------------------------------------------------------------------
   Home — Selected stories

   The mockup prints three frames and a 01 / 12 counter, so the gallery
   holds twelve photographs and steps three at a time. The first three
   are exactly the frames the mockup shows.
   ------------------------------------------------------------------ */

export const SELECTED_STORIES: Photo[] = [
  {
    src: `${V3}/home/story-lead.webp`,
    alt: "A bride at the balustrade looking out over the lake",
    position: "center 45%",
  },
  {
    src: `${V3}/portfolio/pair-veil.webp`,
    alt: "The veil lifted and lit from behind under a stone loggia",
    position: "center 40%",
    bw: true,
  },
  {
    src: `${V3}/about/trip-lake.webp`,
    alt: "A wooden boat below the village on the lake",
    position: "center 55%",
  },
  {
    src: `${V3}/portfolio/lead.webp`,
    alt: "The couple on the terrace at sunset",
    position: "center 46%",
  },
  {
    src: `${V3}/home/approach.webp`,
    alt: "A hand on the lace of the dress",
    position: "center 45%",
    bw: true,
  },
  {
    src: `${V3}/about/villa.webp`,
    alt: "A villa among cypresses above the lake",
    position: "center 50%",
  },
  {
    src: `${V3}/portfolio/pair-couple.webp`,
    alt: "The couple from behind, her veil the length of her dress",
    position: "center 40%",
    bw: true,
  },
  {
    src: `${V3}/portfolio/village.webp`,
    alt: "Cypresses above the lake, the village and the mountains beyond",
    position: "center 50%",
  },
  {
    src: `${V3}/about/trip-flowers.webp`,
    alt: "White roses on a stone ledge",
    position: "center 55%",
  },
  {
    src: `${V3}/home/story-embrace.webp`,
    alt: "The couple forehead to forehead beneath the veil",
    position: "center 40%",
    bw: true,
  },
  {
    src: `${V3}/contact/hero.webp`,
    alt: "A table laid for two beneath an olive tree at sunset",
    position: "center 50%",
  },
  {
    src: `${V3}/about/trip-couple.webp`,
    alt: "The couple walking away through the old town",
    position: "center 40%",
    bw: true,
  },
];

/* ------------------------------------------------------------------
   Portfolio
   ------------------------------------------------------------------ */

export const PORTFOLIO_FILTERS = [
  { id: "all", label: "All" },
  { id: "weddings", label: "Weddings" },
  { id: "couples", label: "Couples" },
  { id: "engagements", label: "Engagements" },
  { id: "intimate-celebrations", label: "Intimate celebrations" },
];

/**
 * The two stories the mockup prints, each with its own composition.
 *
 * `A` — a tall lead on the left, two frames stacked beside it, then a row of
 *       three running the full width beneath the caption.
 * `B` — a tall lead on the left, and beside it one wide frame over a pair.
 *
 * On the phone both stories collapse to the same shape: lead, name, place,
 * then a band of three. `mobileRow` names which three.
 */
export type Story = {
  id: string;
  name: string;
  place: string;
  categories: string[];
  layout: "A" | "B";
  lead: Photo;
  /** the right-hand column — two frames for layout A, three for layout B */
  aside: Photo[];
  /** layout A only: the row of three beneath the caption */
  row?: Photo[];
  mobileRow: Photo[];
};

const MJ_HAND: Photo = {
  src: `${V3}/home/approach.webp`,
  alt: "A ringed hand resting against a dark suit",
  position: "center 45%",
  bw: true,
};

const MJ_TABLE: Photo = {
  src: `${V3}/portfolio/detail-note.webp`,
  alt: "Candlelight along the dinner table, white roses and cut glass",
  position: "center 50%",
};

const MJ_EMBRACE: Photo = {
  src: `${V3}/home/story-embrace.webp`,
  alt: "The couple forehead to forehead beneath the veil",
  position: "center 38%",
  bw: true,
};

const AL_STREET: Photo = {
  src: `${V3}/about/trip-couple.webp`,
  alt: "The couple walking away down a wet cobbled street",
  position: "center 42%",
  bw: true,
};

const AL_FLOWERS: Photo = {
  src: `${V3}/about/trip-flowers.webp`,
  alt: "A bouquet of white roses",
  position: "center 52%",
};

const AL_BOAT: Photo = {
  src: `${V3}/about/trip-lake.webp`,
  alt: "A wooden boat crossing beneath the village",
  position: "center 58%",
};

export const STORIES: Story[] = [
  {
    id: "m-and-j",
    name: "M & J",
    place: "Château de Vuillerens - Switzerland",
    categories: ["weddings", "couples"],
    layout: "A",
    lead: {
      src: `${V3}/portfolio/lead.webp`,
      alt: "M & J on the terrace of the château, the lake and mountains behind them",
      position: "center 48%",
    },
    aside: [MJ_HAND, MJ_TABLE],
    row: [
      MJ_EMBRACE,
      {
        src: `${V3}/portfolio/village.webp`,
        alt: "The villa and cypresses above the lake at sunset",
        position: "center 50%",
      },
      {
        src: `${V3}/portfolio/pair-veil.webp`,
        alt: "The bride under the loggia, her veil spread across the stone",
        position: "center 42%",
        bw: true,
      },
    ],
    mobileRow: [MJ_HAND, MJ_TABLE, MJ_EMBRACE],
  },
  {
    id: "a-and-l",
    name: "A & L",
    place: "Lake Como - Italy",
    categories: ["couples", "engagements", "intimate-celebrations"],
    layout: "B",
    lead: {
      src: `${V3}/home/hero.webp`,
      alt: "A & L at the water's edge, the village of Lake Como beyond",
      position: "center 46%",
    },
    aside: [AL_STREET, AL_FLOWERS, AL_BOAT],
    mobileRow: [AL_STREET, AL_FLOWERS, AL_BOAT],
  },
];

export const PORTFOLIO_CLOSING: Photo = {
  src: `${V3}/home/story-embrace.webp`,
  alt: "The couple forehead to forehead as the sun sets behind the mountains",
  position: "center 26%",
};

/* ------------------------------------------------------------------
   Contact form
   ------------------------------------------------------------------ */

/** Maternity and Anniversary are deliberately not offered. */
export const INTERESTS = [
  "Wedding",
  "Couples",
  "Engagement",
  "Intimate celebration",
];

export const CONTACT_EMAIL = "contact@em-photography.ch";
export const SITE_URL = "https://em-photography.ch";
export const COPYRIGHT_YEAR = 2026;
