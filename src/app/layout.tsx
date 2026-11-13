import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
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

export const metadata: Metadata = {
  title: {
    default: `${BRAND.shortName} | Orange County Flooring & Renovation`,
    template: `%s | ${BRAND.shortName}`,
  },
  description:
    "Professional flooring installation, refinishing, and complete home renovation in Orange County. Free in-home estimates. 25+ years of experience.",
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
