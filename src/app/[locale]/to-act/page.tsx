import { getTranslations } from "next-intl/server";
import React from "react";
import "@/lib/env";

import { locales } from "@/navigation";

import Act from "./act";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: typeof locales };
}) {
  const t = await getTranslations({ locale, namespace: "act" });

  return {
    title: t("meta.title"),
  };
}

const Page = () => {
  return <Act />;
};

export default Page;
