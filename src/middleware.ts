import createMiddleware from "next-intl/middleware";

import { localePrefix, locales, pathnames } from "./navigation";

export default createMiddleware({
  defaultLocale: "fr",
  localePrefix,
  locales,
  pathnames,
});

export const config = {
  //matcher: ["/", "/(fr|en)/:path*"],
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    "/((?!api|_next|_vercel|.*\\..*).*)",
    // However, match all pathnames within `/users`, optionally with a locale prefix
    "/([\\w-]+)?/users/(.+)",
  ],
};
