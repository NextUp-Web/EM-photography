import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SEO_LINE, SITE_URL } from "@/lib/data";
import "./globals.css";

/* Instrument Serif carries the whole editorial voice. */
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-instrument",
});

/* Helvetica Neue first; Inter is the fallback where it is missing. */
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "EM Photography | Wedding Photographer in Switzerland",
    template: "%s | EM Photography",
  },
  description:
    "Editorial documentary wedding photography in Switzerland and across Europe. Honest, intimate and timeless imagery for modern love stories.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: "EM Photography",
    title: "EM Photography | Wedding Photographer in Switzerland",
    description: SEO_LINE,
    images: [{ url: "/images/home/hero.jpg", width: 2913, height: 1050, alt: "A couple on a terrace above the lake" }],
  },
  icons: { icon: "/brand/em-logo-black.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${instrument.variable} ${inter.variable}`}>
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
