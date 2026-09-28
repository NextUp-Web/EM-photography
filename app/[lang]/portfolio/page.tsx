import Link from "next/link";
import Figure from "@/components/ui/Figure";
import Lines from "@/components/ui/Lines";
import { PORTFOLIO_CLOSING, PORTFOLIO_GRID, PORTFOLIO_GRID_PHONE } from "@/lib/data";
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
  const { meta } = getDictionary(lang);
  return {
    title: meta.portfolioTitle,
    description: meta.portfolioDescription,
    alternates: alternatesFor("/portfolio", lang),
  };
}

/**
 * On the home page's system: one column on the site's measure, sections
 * separated by --gap-section, type from the one scale. The page opens on
 * its title, centred, then a cascade of photographs from margin to margin,
 * and one photograph with the invitation that closes it.
 */
/* on the desktop, item i goes to column i mod 3 */
const desktopColumns = [0, 1, 2].map((column) =>
  PORTFOLIO_GRID.flatMap((_, index) => (index % 3 === column ? [index] : [])),
);

export default async function PortfolioPage({ params }: PageParams) {
  const lang = (await params).lang as Locale;
  const dict = getDictionary(lang);
  const t = dict.portfolio;

  return (
    <div className="page">
      {/* ---------- Opening — the title, centred ---------- */}
      <section className={styles.intro} aria-labelledby="portfolio-title">
        <p className="label">{t.label}</p>
        <h1 className={styles.title} id="portfolio-title">
          {t.title}
        </h1>
        <span className={styles.rule} aria-hidden="true" />
        <p className={`label ${styles.tagline}`}>
          {t.tagline[0]}
          <br className={styles.wide} /> {t.tagline[1]}
        </p>
      </section>

      {/* ---------- The cascade — three columns on the desktop, two on the
          phone, from margin to margin ---------- */}
      {[desktopColumns, PORTFOLIO_GRID_PHONE].map((columns, layout) => (
        <section
          key={layout}
          className={`${styles.grid} ${layout === 0 ? styles.gridWide : styles.gridNarrow}`}
          aria-label={t.photographs}
        >
          {columns.map((indices, column) => (
            <div key={column} className={styles.column}>
              {indices.map((index) => {
                const photo = localizePhoto(PORTFOLIO_GRID[index], dict);
                return (
                  <Figure
                    key={photo.src}
                    photo={photo}
                    ratio={photo.ratio ?? 1}
                    sizes={layout === 0 ? "33vw" : "50vw"}
                  />
                );
              })}
            </div>
          ))}
        </section>
      ))}

      {/* ---------- The invitation — one rectangle, margin to margin ---------- */}
      <section className={styles.closing} aria-labelledby="portfolio-invite">
        <Figure
          photo={localizePhoto(PORTFOLIO_CLOSING, dict)}
          ratio={2.2}
          mobileRatio={0.8}
          sizes="100vw"
          className={styles.closingFigure}
        />
        <div className={styles.closingText}>
          <p className={`label ${styles.closingLabel}`}>{t.closingLabel}</p>
          <h2 className={styles.closingTitle} id="portfolio-invite">
            <Lines lines={t.closingTitle} />
          </h2>
          <Link
            href={localizePath("/contact", lang)}
            className={`btn btn-light ${styles.closingCta}`}
          >
            {dict.common.enquire}
          </Link>
        </div>
      </section>
    </div>
  );
}
