import type { Metadata } from "next";
import { Bodoni_Moda, Montserrat, Sacramento } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_URL } from "@/lib/data";
import "./globals.css";

/* The client's art direction, in two families: Bodoni Moda — a Didot-class
   editorial serif — for every headline, paragraph and button, and Montserrat,
   widely tracked, for the small uppercase labels and the navigation. The
   signature on About stays a monoline script. */
const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-bodoni",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-montserrat",
});

const sacramento = Sacramento({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-sacramento",
});

const FAVICON = "/brand/em-logo-black.png";

const DESCRIPTION =
  "Editorial documentary wedding photography in Switzerland and across Europe. Honest, intimate and timeless imagery for modern love stories.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "EM Photography | Wedding Photographer in Switzerland",
    template: "%s",
  },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: "EM Photography",
    title: "EM Photography | Wedding Photographer in Switzerland",
    description: DESCRIPTION,
  },
  icons: { icon: FAVICON },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bodoni.variable} ${montserrat.variable} ${sacramento.variable}`}
    >
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
