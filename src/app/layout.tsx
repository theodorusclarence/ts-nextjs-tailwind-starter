import { Metadata } from "next";
import { Barlow_Condensed, Montserrat } from "next/font/google";
import * as React from "react";

const barlow = Barlow_Condensed({
  weight: ["700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow",
});

const montserrat = Montserrat({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

import "@/styles/globals.css";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

import { siteConfig } from "@/constant/config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: "website",
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${barlow.variable} ${montserrat.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
