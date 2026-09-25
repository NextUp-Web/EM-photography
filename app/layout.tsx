import type { Metadata } from "next";
import { Bodoni_Moda, Cormorant_Garamond, Montserrat } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_URL } from "@/lib/data";
import "./globals.css";

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

/* The two ivory statements on the home page keep the faces they are set
   in on main, at the client's request: Bodoni Moda for the sentence,
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
      className={`${cormorant.variable} ${bodoni.variable} ${montserrat.variable}`}
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
