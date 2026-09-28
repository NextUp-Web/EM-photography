import Link from "next/link";
import Figure from "@/components/ui/Figure";
import SelectedStories from "@/components/sections/SelectedStories";
import Lines from "@/components/ui/Lines";
import { PHOTOS, SELECTED_STORIES } from "@/lib/data";
import {
  alternatesFor,
  getDictionary,
  isLocale,
  localizePath,
  localizePhoto,
  type Locale,
} from "@/lib/i18n";
import styles from "./page.module.css";

type PageParams = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: PageParams) {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return {
    title: getDictionary(lang).meta.siteTitle,
    alternates: alternatesFor("/", lang),
  };
}

/**
 * The home page is one column of sections on one measure: every section
 * shares the same left and right edges and the same distance to the next.
 * Text uses three sizes only — title, lead and body — plus the small
 * tracked label; the two ivory panels are set as main sets them (see
 * page.module.css).
 */
export default async function HomePage({ params }: PageParams) {
  const lang = (await params).lang as Locale;
  const dict = getDictionary(lang);
  const t = dict.home;
  const photo = <P extends Parameters<typeof localizePhoto>[0]>(p: P) => localizePhoto(p, dict);

  return (
    <div className={styles.home}>
      {/* ---------- Hero — a tall monochrome frame, a colour frame over its corner ---------- */}
      <section className={styles.hero} aria-label={t.heroLabel}>
        <Figure
          photo={photo(PHOTOS.homeHeroMain)}
          ratio={1.05}
          mobileRatio={0.71}
          sizes="(max-width: 860px) 80vw, 800px"
          priority
          className={styles.heroMain}
        />
        <Figure
          photo={photo(PHOTOS.homeHeroSide)}
          ratio={0.652}
          mobileRatio={0.63}
          sizes="(max-width: 860px) 40vw, 380px"
          priority
          className={styles.heroSide}
        />
      </section>

      {/* ---------- Philosophy ---------- */}
      <section className={styles.intro} aria-labelledby="philosophy">
        <p className="label">{t.philosophyLabel}</p>
        <h1 className={`${styles.title} ${styles.caps}`} id="philosophy">
          <Lines lines={t.philosophyTitle} />
        </h1>
        <span className={styles.rule} aria-hidden="true" />
      </section>

      {/* ---------- Approach — two frames, then text ---------- */}
      <section
        className={`${styles.split} ${styles.splitReverse}`}
        aria-labelledby="approach"
      >
        <div className={styles.pair}>
          <Figure
            photo={photo(PHOTOS.approachOne)}
            ratio={0.72}
            sizes="(max-width: 860px) 50vw, 300px"
          />
          <Figure
            photo={photo(PHOTOS.approachTwo)}
            ratio={0.72}
            sizes="(max-width: 860px) 50vw, 300px"
          />
        </div>

        <div className={styles.text}>
          <p className="label" id="approach">
            {t.approachLabel}
          </p>
          <h2 className={styles.title}>
            <Lines lines={t.approachTitle} />
          </h2>
          <span className={styles.rule} aria-hidden="true" />
          <p className={styles.lead}>
            <Lines lines={t.approachLead} />
          </p>
          <p className={styles.body}>{t.approachBody}</p>
          <Link href={localizePath("/portfolio", lang)} className={`btn btn-dark ${styles.cta}`}>
            {t.viewPortfolio}
          </Link>
        </div>
      </section>

      {/* ---------- Ivory statement ---------- */}
      <section className="panel">
        {/* Set in the second panel's face and size exactly: two lines on the
            desktop, one flowing measure on the phone. */}
        <p className={`${styles.quoteText} ${styles.quoteTextOne}`}>
          <span className={styles.bandLine}>{t.panelOneLines[0]}</span>{" "}
          <span className={styles.bandLine}>{t.panelOneLines[1]}</span>
        </p>
        <p className={`${styles.quoteMeta} ${styles.quoteMetaOne} ${styles.quoteMetaFirst}`}>
          {t.panelOneMeta}
        </p>
      </section>

      {/* ---------- Selected stories ---------- */}
      <section className={styles.stories} aria-labelledby="stories">
        <div className={styles.storiesHead}>
          <p className="label" id="stories">
            {t.storiesLabel}
          </p>
          <p className={styles.body}>{t.storiesBody}</p>
        </div>

        <SelectedStories
          photos={SELECTED_STORIES.map(photo)}
          labels={dict.gallery}
        />
      </section>

      {/* ---------- About — a frame, then the text ---------- */}
      <section className={styles.split} aria-labelledby="about-preview">
        <Figure
          photo={photo(PHOTOS.aboutPortrait)}
          ratio={1.2}
          sizes="(max-width: 860px) 100vw, 440px"
        />

        <div className={styles.text}>
          <p className="label" id="about-preview">
            {t.aboutLabel}
          </p>
          <h2 className={styles.title}>
            <Lines lines={t.aboutTitle} />
          </h2>
          <span className={styles.rule} aria-hidden="true" />
          <p className={styles.body}>{t.aboutBody}</p>
          <Link href={localizePath("/about", lang)} className={`btn btn-dark ${styles.cta}`}>
            {t.moreAboutMe}
          </Link>
        </div>
      </section>

      {/* ---------- Ivory statement ---------- */}
      <section className="panel">
        {/* Set exactly as the first ivory panel above. */}
        <p className={`${styles.quoteText} ${styles.quoteTextOne}`}>
          {t.panelTwoText}
        </p>
        <p className={`${styles.quoteMeta} ${styles.quoteMetaOne} ${styles.quoteMetaTwo}`}>
          <span className={styles.metaLine}>{t.panelTwoMeta[0]}</span>{" "}
          <span className={styles.metaLine}>{t.panelTwoMeta[1]}</span>
        </p>
      </section>

      {/* ---------- The invitation — one monochrome photograph from margin
          to margin, the words over its left side, centred on its height ---------- */}
      <section className={styles.invite} aria-labelledby="invite">
        <Figure
          photo={photo(PHOTOS.homeInvite)}
          ratio={2.2}
          mobileRatio={0.818}
          sizes="100vw"
          className={styles.inviteFigure}
        />
        <div className={styles.inviteText}>
          <h2 className={`${styles.title} ${styles.caps}`} id="invite">
            <Lines lines={t.inviteTitle} />
            <br />
            <em className={styles.inviteEm}>{t.inviteTitleEm}</em>
          </h2>
          <p className={`label ${styles.inviteTags}`}>
            <Dotted items={t.inviteTags} dotClass={styles.inviteDot} />
          </p>
          <Link href={localizePath("/contact", lang)} className={`btn btn-light ${styles.inviteCta}`}>
            {dict.common.enquire}
          </Link>
        </div>
        <p className={`label ${styles.inviteLocation}`}>
          <Dotted items={t.inviteLocation} dotClass={styles.inviteDot} />
        </p>
      </section>
    </div>
  );
}

/** Words set in a line with a middle dot between each. */
function Dotted({ items, dotClass }: { items: readonly string[]; dotClass: string }) {
  return items.map((item, index) => (
    <span key={item}>
      {index > 0 ? (
        <span className={dotClass} aria-hidden="true">
          &middot;
        </span>
      ) : null}
      {item}
    </span>
  ));
}
