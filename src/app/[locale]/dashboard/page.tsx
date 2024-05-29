import { getTranslations } from "next-intl/server";
import React from "react";
import "@/lib/env";

import { locales } from "@/navigation";

import Dashboard from "./dashboard";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: typeof locales };
}) {
  const t = await getTranslations({ locale, namespace: "dashboard" });

  return {
    title: t("meta.title"),
  };
}

const Page = () => {
  return <Dashboard />;
};

export default Page;
