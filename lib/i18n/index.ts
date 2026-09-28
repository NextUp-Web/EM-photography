import type { Photo } from "@/lib/data";
import { en } from "./en";
import { fr } from "./fr";
import type { Locale } from "./config";

export * from "./config";
export type { Dictionary } from "./en";

const DICTIONARIES = { en, fr };

export const getDictionary = (locale: Locale) => DICTIONARIES[locale];

/** A photograph with its description in the page's language. */
export const localizePhoto = <P extends Photo>(photo: P, dict: typeof en): P =>
  dict.alts[photo.alt] ? { ...photo, alt: dict.alts[photo.alt] } : photo;
