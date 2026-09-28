import Link from "next/link";
import { notFound } from "next/navigation";
import Figure from "@/components/ui/Figure";
import {
  COLLECTIONS,
  getCollection,
  getNextCollection,
  type Collection,
} from "@/lib/data";
import {
  alternatesFor,
  getDictionary,
  isLocale,
  localizePath,
  localizePhoto,
  type Dictionary,
  type Locale,
} from "@/lib/i18n";
import styles from "./page.module.css";

type Params = { params: Promise<{ lang: string; slug: string }> };

/** Every story is known at build time, so every story page is static. */
export function generateStaticParams() {
  return COLLECTIONS.map((collection) => ({ slug: collection.slug }));
}

/** A story's place, date and opening in the page's language. */
const localize = (collection: Collection, dict: Dictionary): Collection => ({
  ...collection,
  ...dict.collections[collection.slug],
});

export async function generateMetadata({ params }: Params) {
  const { lang, slug } = await params;
  const found = getCollection(slug);
  if (!found || !isLocale(lang)) return {};
  const dict = getDictionary(lang);
  const collection = localize(found, dict);

  return {
    title: `${collection.name} — ${collection.place} | EM Photography`,
    description:
      collection.intro ?? dict.meta.storyDescription(collection.name, collection.place),
    alternates: alternatesFor(`/portfolio/${collection.slug}`, lang),
  };
}

export default async function CollectionPage({ params }: Params) {
  const { lang: langParam, slug } = await params;
  const lang = langParam as Locale;
  const found = getCollection(slug);
  if (!found) notFound();

  const dict = getDictionary(lang);
  const collection = localize(found, dict);
  const next = localize(getNextCollection(collection.slug), dict);
  const [lead, ...rest] = collection.photos.map((photo) => localizePhoto(photo, dict));

  return (
    <div className="page page-opening">
      {/* ---------- Opening — the story's title, then its photographs ---------- */}
      <div className={styles.opening}>
        <section className={styles.head}>
          <Link href={localizePath("/portfolio", lang)} className={`label ${styles.back}`}>
            <span className={styles.backArrow} aria-hidden="true">
              &larr;
            </span>
            {dict.story.allStories}
          </Link>

          <h1 className={`display ${styles.name}`}>{collection.name}</h1>
          <p className={`label ${styles.place}`}>{collection.place}</p>
          {collection.date ? (
            <p className={`label ${styles.date}`}>{collection.date}</p>
          ) : null}
          {collection.intro ? (
            <p className={`copy ${styles.intro}`}>{collection.intro}</p>
          ) : null}
        </section>

        {/* One wide lead, then two columns that flow rather than a rigid
            grid, so every frame keeps the crop it was made with. */}
        <div className={styles.photos}>
          {lead ? (
            <Figure
              photo={lead}
              ratio={lead.ratio ?? 1.9}
              mobileRatio={1.28}
              sizes="(max-width: 860px) 100vw, 1080px"
              priority
            />
          ) : null}

          <div className={styles.gallery}>
            {rest.map((photo, index) => (
              <Figure
                key={`${photo.src}-${index}`}
                photo={photo}
                ratio={photo.ratio ?? 1.2}
                mobileRatio={photo.ratio && photo.ratio > 2 ? 1.7 : undefined}
                sizes="(max-width: 860px) 100vw, 540px"
                className={styles.frame}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ---------- On to the next story ---------- */}
      <section className={styles.next}>
        <p className="label">{dict.story.nextStory}</p>
        <Link href={localizePath(`/portfolio/${next.slug}`, lang)} className={styles.nextLink}>
          <span className={`display ${styles.nextName}`}>{next.name}</span>
          <span className={`label ${styles.nextPlace}`}>{next.place}</span>
        </Link>
        <Link href={localizePath("/contact", lang)} className={`btn btn-dark ${styles.nextCta}`}>
          {dict.common.enquire}
        </Link>
      </section>
    </div>
  );
}
