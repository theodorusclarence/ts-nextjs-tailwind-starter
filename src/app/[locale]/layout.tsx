import clsx from "clsx";
import { Barlow_Condensed, Montserrat } from "next/font/google";
import Image from "next/image";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { getTranslations } from "next-intl/server";
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

import { locales } from "@/navigation";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: typeof locales };
}) {
  const t = await getTranslations({ locale, namespace: "siteConfig" });

  return {
    metadataBase: new URL(t("url")),
    title: {
      default: t("title"),
      template: `%s | ${t("title")}`,
    },
    description: t("description"),
    robots: { index: true, follow: true },
    icons: {
      icon: "/favicon/favicon.ico",
      shortcut: "/favicon/favicon.ico",
      apple: "/favicon/apple-touch-icon.png",
    },
    manifest: `/favicon/site.webmanifest`,
    openGraph: {
      url: t("url"),
      title: t("title"),
      description: t("description"),
      siteName: t("title"),
      images: [`${t("url")}/images/og.jpg`],
      type: "website",
      locale: "fr",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [`${t("url")}/images/og.jpg`],
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: "layout" });
  return (
    <html
      lang={locale}
      className={clsx(
        barlow.variable,
        montserrat.variable,
        "scroll-smooth overflow-x-hidden",
      )}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>
            {children}
            <a
              href="#"
              className="hidden md:flex items-center justify-center bg-white hover:bg-darkblue1 w-14 h-14 rounded-tl-md fixed bottom-0 right-0 transition-all ease-in duration-75"
            >
              <Image
                src="/images/bottom.svg"
                alt={t("top")}
                width="40"
                height="20"
                className="w-8 aspect-square rotate-180"
              />
            </a>
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
