export type NavItem = { label: string; href: string };

/** The whole public journey is four pages — no Services, no Book now. */
export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export const SITE_URL = "https://em-photography.ch";
export const CONTACT_EMAIL = "contact@em-photography.ch";
export const INSTAGRAM_URL = "https://www.instagram.com/em.photography/";

/** Footer line, also used as the site-wide SEO sentence. */
export const SEO_LINE =
  "Wedding & couple photographer based in Switzerland, available across Europe.";

/* ------------------------------------------------------------------ *
 * Portfolio sequences
 *
 * Each sequence is edited by hand: the order, the sizes and the gaps are
 * part of the design. No couple, venue or location is named — the supplied
 * assets carry no reliable story metadata, so the sequences are presented
 * by collection only.
 * ------------------------------------------------------------------ */

export type Frame = {
  src: string;
  alt: string;
  /** width / height of the frame as it is displayed */
  ratio: number;
  position?: string;
};

export type Sequence = {
  id: string;
  index: string;
  title: string;
  /** one isolated line closing the sequence — wording from the brief */
  line: string;
  opening: Frame;
  pair: [Frame, Frame];
  detail: Frame;
  wide: Frame;
};

export const SEQUENCES: Sequence[] = [
  {
    id: "weddings",
    index: "01",
    title: "Weddings",
    line: "The moments in between.",
    opening: {
      src: "/images/weddings/hero.jpg",
      alt: "A couple leaning into each other on a terrace above the lake, the veil caught by the wind",
      ratio: 2.05,
      position: "48% 45%",
    },
    pair: [
      {
        src: "/images/weddings/gallery-01.jpg",
        alt: "A bride turned towards the mountains, her veil falling the length of her back",
        ratio: 0.76,
      },
      {
        src: "/images/weddings/gallery-05.jpg",
        alt: "Cypresses and a stone urn of flowers above the water",
        ratio: 0.74,
      },
    ],
    detail: {
      src: "/images/weddings/inclus-details.jpg",
      alt: "Two rings resting beside crystal glasses",
      ratio: 1.12,
    },
    wide: {
      src: "/images/civil/bloc-reportage.jpg",
      alt: "Glasses raised across a table of flowers",
      ratio: 1.81,
    },
  },
  {
    id: "couples",
    index: "02",
    title: "Couples",
    line: "The quiet glances.",
    opening: {
      src: "/images/portfolio/couples.jpg",
      alt: "A woman laughing, her hand resting on the back of her partner's neck",
      ratio: 2.23,
      position: "56% center",
    },
    pair: [
      {
        src: "/images/civil/gallery-03.jpg",
        alt: "Two people kissing in a quiet street, a bouquet held low",
        ratio: 0.7,
      },
      {
        src: "/images/civil/gallery-01.jpg",
        alt: "A couple climbing the steps of a town hall, hand in hand",
        ratio: 0.65,
      },
    ],
    detail: {
      src: "/images/home/ceremonies-civiles.jpg",
      alt: "One hand laid over another, a new ring catching the light",
      ratio: 1.09,
    },
    wide: {
      src: "/images/civil/bloc-ceremonie.jpg",
      alt: "A hand signing the register, flowers just out of focus beside it",
      ratio: 1.81,
    },
  },
  {
    id: "celebrations",
    index: "03",
    title: "Intimate celebrations",
    line: "The laughter between photographs.",
    opening: {
      src: "/images/birthdays/hero.jpg",
      alt: "A long table set with roses and candles, the room low and warm behind it",
      ratio: 1.9,
      position: "0% center",
    },
    pair: [
      {
        src: "/images/birthdays/mosaic-01.jpg",
        alt: "Candles burning down among the flowers as the evening goes on",
        ratio: 0.6,
      },
      {
        src: "/images/birthdays/mosaic-06.jpg",
        alt: "A woman turned away from the room, the lights soft behind her",
        ratio: 0.6,
      },
    ],
    detail: {
      src: "/images/birthdays/mosaic-02.jpg",
      alt: "Two glasses meeting above the table",
      ratio: 1.33,
    },
    wide: {
      src: "/images/birthdays/strip-emotions.jpg",
      alt: "Two friends holding onto each other, mid-laugh",
      ratio: 1.83,
    },
  },
];
