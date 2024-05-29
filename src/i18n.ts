import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

import { localesValues } from "@/navigation";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!localesValues.includes(locale as "fr" | "en")) notFound();

  return {
    messages: {
      ...(await import(`../messages/${locale}/pages/about.json`)).default,
      ...(await import(`../messages/${locale}/pages/act.json`)).default,
      ...(await import(`../messages/${locale}/pages/dashboard.json`)).default,
      ...(await import(`../messages/${locale}/pages/story.json`)).default,
      ...(await import(`../messages/${locale}/components.json`)).default,
      ...(await import(`../messages/${locale}/layout.json`)).default,
    },
  };
});
