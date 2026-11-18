import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { BRAND } from "@/lib/constants";

import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const defaultTitle = `${BRAND.shortName} | Orange County Flooring & Renovation`;
const defaultDescription = `${BRAND.tagline}. Professional flooring installation, refinishing, and complete home renovation in Orange County. Call for an in-home free estimate. ${BRAND.years}+ years of experience.`;

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${BRAND.shortName}`,
  },
  description: defaultDescription,
  applicationName: BRAND.shortName,
  authors: [{ name: BRAND.contactName }],
  creator: BRAND.name,
  publisher: BRAND.name,
  keywords: [
    "flooring Orange County",
    "hardwood refinishing",
    "floor installation",
    "home renovation Orange County",
    "in-home flooring estimate",
    BRAND.shortName,
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BRAND.siteUrl,
    siteName: BRAND.shortName,
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
  category: "home improvement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${sourceSans.variable} antialiased`}
      >
        <JsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
