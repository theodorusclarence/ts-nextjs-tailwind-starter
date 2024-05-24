import clsx from "clsx";
import { Metadata } from "next";
import { Barlow_Condensed, Montserrat } from "next/font/google";
import Image from "next/image";
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
    locale: "fr",
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
    <html
      lang="fr"
      className={clsx(barlow.variable, montserrat.variable, "scroll-smooth")}
    >
      <body>
        <Navbar />
        <main>
          {children}
          <a
            href="#"
            className="hidden md:flex items-center justify-center bg-white hover:bg-black w-14 h-14 rounded-full fixed bottom-4 right-4 hover:-translate-y-1 transition-all ease-in duration-75"
          >
            <Image
              src="/images/bottom.svg"
              alt="Haut de page"
              width="40"
              height="20"
              className="w-8 aspect-square rotate-180"
            />
          </a>
        </main>
        <Footer />
      </body>
    </html>
  );
}
