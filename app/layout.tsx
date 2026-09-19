import type { Metadata } from "next";
import { Montserrat, Playfair_Display, Sacramento } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_URL } from "@/lib/data";
import "./globals.css";

/* The mockups are set in two families: a high-contrast editorial serif for
   every headline and paragraph, and a geometric sans for navigation, small
   labels and the form. The signature on About is a monoline script. */
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-playfair",
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
      className={`${playfair.variable} ${montserrat.variable} ${sacramento.variable}`}
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
