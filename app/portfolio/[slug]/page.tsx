import Link from "next/link";
import { notFound } from "next/navigation";
import Figure from "@/components/ui/Figure";
import { COLLECTIONS, getCollection, getNextCollection } from "@/lib/data";
import styles from "./page.module.css";

type Params = { params: Promise<{ slug: string }> };

/** Every story is known at build time, so every story page is static. */
export function generateStaticParams() {
  return COLLECTIONS.map((collection) => ({ slug: collection.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) return {};

  return {
    title: `${collection.name} — ${collection.place} | EM Photography`,
    description:
      collection.intro ??
      `${collection.name}, photographed in ${collection.place} — a love story documented with softness, depth and intention.`,
    alternates: { canonical: `/portfolio/${collection.slug}` },
  };
}

export default async function CollectionPage({ params }: Params) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) notFound();

  const next = getNextCollection(collection.slug);
  const [lead, ...rest] = collection.photos;

  return (
    <div className="page page-opening">
      {/* ---------- Opening — the story's title, then its photographs ---------- */}
      <div className={styles.opening}>
        <section className={styles.head}>
          <Link href="/portfolio" className={`label ${styles.back}`}>
            <span className={styles.backArrow} aria-hidden="true">
              &larr;
            </span>
            All stories
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
        <p className="label">Next story</p>
        <Link href={`/portfolio/${next.slug}`} className={styles.nextLink}>
          <span className={`display ${styles.nextName}`}>{next.name}</span>
          <span className={`label ${styles.nextPlace}`}>{next.place}</span>
        </Link>
        <Link href="/contact" className={`btn btn-dark ${styles.nextCta}`}>
          Enquire
        </Link>
      </section>
    </div>
  );
}
