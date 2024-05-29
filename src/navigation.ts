import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from "next-intl/navigation";

export const locales = ["fr", "en"] as const;
export const localesValues = ["fr", "en"];
export const localePrefix = "as-needed";
export type basePathType = "/" | "/dashboard" | "/to-act" | "/about";

export const pathnames = {
  "/": "/",
  "/dashboard": "/dashboard",
  "/to-act": {
    fr: "/agir",
    en: "/to-act",
  },
  "/about": {
    fr: "/a-propos",
    en: "/about",
  },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
