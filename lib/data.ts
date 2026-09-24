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
  /* The very large monochrome band that closes the home page, with
     "Let's create something meaningful." printed over it.

     Chosen for its composition rather than its subject alone: the
     reference holds the couple in the right half and leaves the left
     open, which is where the type goes. This frame does the same — the
     couple at the centre right, water and balustrade to their left — so
     nothing is laid over the photograph to make the type read. */
  homeBanner: {
    src: `${V3}/home/hero.webp`,
    alt: "A couple forehead to forehead on the terrace, the lake and the mountains behind them",
    position: "center 62%",
    bw: true,
  },

  /* ---- About ----

     The page opens on a title and a great deal of white; the two long
     sections that follow set their photographs beside the text. */
  aboutHero: {
    src: `${V3}/about/hero.webp`,
    alt: "Emma on a terrace above the lake, the mountains catching the last light",
    position: "center 46%",
  },
  /* The three frames of the Emma collage. The reference prints all three
     in warm colour, so none of them carries the monochrome flag, and each
     object-position below is set for the crop its slot asks for. */
  aboutPortraitMain: {
    src: `${V3}/about/portrait.webp`,
    alt: "Emma, camera in hand, on the shore of the lake",
    /* the slot is far narrower than the frame, so the crop holds her */
    position: "56% 46%",
  },
  aboutPortraitTwo: {
    src: `${V3}/home/emra.webp`,
    alt: "Emma looking out over the lake and the mountains at sunset",
    position: "center 34%",
  },
  aboutPortraitThree: {
    src: `${V3}/about/hero.webp`,
    alt: "Emma on the terrace, the village and the water beyond her",
    /* a landscape frame in a portrait slot — held on her, not the lake */
    position: "36% 50%",
  },
  /* The tall frame beside "More than a record of the day". */
  aboutTrace: {
    src: `${V3}/portfolio/pair-veil.webp`,
    alt: "A bride lifting her veil under a stone loggia",
    position: "center 42%",
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
  /* The monochrome band that closes the page. */
  contactClosing: {
    src: `${V3}/home/closing.webp`,
    alt: "The lake at the end of the day, cypresses on the shore and the mountains beyond",
    position: "center 50%",
    bw: true,
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

/**
 * A monochrome original, and the darkest of them on its left, which is
 * where "Some stories are / Meant to stay" is set.
 */
export const PORTFOLIO_CLOSING: Photo = {
  src: `${V3}/home/story-embrace.webp`,
  alt: "A couple forehead to forehead as the sun sets behind the mountains",
  position: "center 10%",
};

/* ------------------------------------------------------------------
   About — the three vertical frames printed side by side, and the
   three movements of the work set beneath them.
   ------------------------------------------------------------------ */

export const ABOUT_VERTICALS: Photo[] = [
  {
    src: `${V3}/about/trip-couple.webp`,
    alt: "A couple walking away together through the old town",
    position: "center 40%",
    bw: true,
  },
  {
    src: `${V3}/about/trip-flowers.webp`,
    alt: "A bouquet of white roses resting on a stone ledge above the lake",
    position: "center 52%",
  },
  {
    src: `${V3}/about/trip-lake.webp`,
    alt: "A wooden boat crossing the lake below the village",
    position: "center 55%",
  },
];

export const APPROACH_STEPS = [
  {
    number: "01",
    title: "Observe",
    copy: "I pay attention to what is quietly unfolding — the gestures, the atmosphere, and the in-between moments that give the day its feeling.",
  },
  {
    number: "02",
    title: "Guide",
    copy: "With a calm, gentle presence, I offer just enough direction for you to feel at ease, so the photographs remain natural and unforced.",
  },
  {
    number: "03",
    title: "Preserve",
    copy: "What remains is more than a record — it is a way back into the feeling, a little piece of that time kept close.",
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
   Home — closing strip

   Four vertical frames, nothing printed over them.
   ------------------------------------------------------------------ */

export const HOME_CLOSING_STRIP: Photo[] = [
  {
    src: `${V3}/home/story-embrace.webp`,
    alt: "The couple forehead to forehead beneath the veil",
    position: "center 38%",
  },
  {
    src: `${V3}/portfolio/pair-veil.webp`,
    alt: "The veil lifted and lit from behind under a stone loggia",
    position: "center 42%",
    bw: true,
  },
  {
    src: `${V3}/home/story-lead.webp`,
    alt: "A bride at the balustrade looking out over the lake",
    position: "center 45%",
  },
  {
    src: `${V3}/portfolio/detail-note.webp`,
    alt: "Candlelight along the dinner table, white roses and a handwritten card",
    position: "center 50%",
  },
];

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
