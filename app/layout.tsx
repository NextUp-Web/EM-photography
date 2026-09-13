import type { Metadata } from "next";
import { Playfair_Display, Jost, Parisienne } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { assetExists } from "@/lib/assets";
import { SITE_URL } from "@/lib/data";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-playfair",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
  variable: "--font-jost",
});

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-parisienne",
});

const FAVICON = "/brand/em-logo-black.svg";

export function generateMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: "EM Photography — Photographe mariage, Suisse & Europe",
      template: "%s — EM Photography",
    },
    description:
      "EM Photography documente mariages, cérémonies civiles, anniversaires et naissances avec une approche sensible et intemporelle. Suisse & Europe.",
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      locale: "fr_CH",
      url: SITE_URL,
      siteName: "EM Photography",
      title: "EM Photography — Photographe mariage, Suisse & Europe",
      description:
        "Documenter l’amour dans sa forme la plus douce. Mariages, cérémonies civiles, anniversaires et naissances.",
    },
    // Resolves as soon as the brand file is supplied.
    ...(assetExists(FAVICON) ? { icons: { icon: FAVICON } } : {}),
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${jost.variable} ${parisienne.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Aller au contenu
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
