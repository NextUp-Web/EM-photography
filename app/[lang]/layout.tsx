import type { Metadata } from "next";
import { Bodoni_Moda, Cormorant_Garamond, Montserrat } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/data";
import { LOCALES, alternatesFor, getDictionary, isLocale } from "@/lib/i18n";
import "../globals.css";

/* One family for the whole site — Cormorant Garamond, the face of the
   navigation and the footer — in its regular, semibold and bold weights,
   upright and italic. Nothing else is loaded. */
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cormorant",
});

/* The two ivory statements on the home page are set in the faces main
   sets them in, at the client's request: Bodoni Moda for the sentence,
   Montserrat for the tracked line beneath it. Nothing else uses them. */
const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-bodoni",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
  variable: "--font-montserrat",
});

const FAVICON = "/brand/em-logo-black.svg";

/* Both languages are built ahead of time; any other prefix is a 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

type LayoutParams = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: LayoutParams): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { meta } = getDictionary(lang);

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: meta.siteTitle, template: "%s" },
    description: meta.siteDescription,
    alternates: alternatesFor("/", lang),
    openGraph: {
      type: "website",
      locale: meta.ogLocale,
      url: SITE_URL,
      siteName: "EM Photography",
      title: meta.siteTitle,
      description: meta.siteDescription,
    },
    icons: { icon: FAVICON },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutParams & { children: React.ReactNode }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <html
      lang={dict.htmlLang}
      className={`${cormorant.variable} ${bodoni.variable} ${montserrat.variable}`}
    >
      <body>
        <a className="skip-link" href="#main">
          {dict.common.skipToContent}
        </a>
        <Header lang={lang} common={dict.common} />
        <main id="main">{children}</main>
        <Footer lang={lang} common={dict.common} />
      </body>
    </html>
  );
}
