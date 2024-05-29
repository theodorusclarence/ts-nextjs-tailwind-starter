"use client";

import clsx from "clsx";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

// import Link from "next/link";
import { basePathType, Link, locales, usePathname } from "../../navigation";

type NavItemsProps = {
  link: string;
  text: string;
}[];

const Navbar = () => {
  const t = useTranslations("layout");
  const pathname = usePathname();
  const locale = useLocale();

  const navItems: NavItemsProps = [
    {
      link: "/",
      text: t("nav.story"),
    },
    {
      link: "/dashboard",
      text: t("nav.dashboard"),
    },
    {
      link: "/to-act",
      text: t("nav.act"),
    },
    {
      link: "/about",
      text: t("nav.about"),
    },
  ];

  return (
    <header className="lg:absolute left-0 top-0 z-10 w-full text-darkblue1 bg-pink1 lg:bg-transparent">
      <div className="flex flex-wrap items-center justify-between gap-6 px-6 lg:px-12 py-3 lg:py-6">
        <Link href="/">
          <Image
            src="/images/pinkbombs.svg"
            alt="PinkBombs"
            width={176}
            height={43}
            className="w-24 md:w-36 lg:w-44 object-contain"
          />
        </Link>

        <nav
          className="flex flex-wrap gap-4 lg:gap-16 ml-auto"
          aria-label={t("nav.title")}
        >
          {navItems.map((item, key) => (
            <Link
              className={clsx(
                "font-secondary uppercase font-bold text-darkblue1 hover:text-red1 focus:text-red1 lg:text-2xl transition-colors ease-in-out duration-200",
                item.link === pathname ? "navbar-active" : "",
              )}
              href={item.link as basePathType}
              aria-current={item.link === pathname ? "page" : undefined}
              key={`nav-${key}`}
            >
              {item.text}
            </Link>
          ))}

          <div className="flex gap-1 items-center">
            {locales.map((lang, keyLang) => (
              <Link
                className={clsx(
                  "px-2 py-1 rounded-md uppercase text-sm md:text-base hover:text-white hover:bg-red1 transition-colors ease-in-out duration-200",
                  lang === locale
                    ? "font-bold text-white bg-darkblue1"
                    : "text-darkblue1 bg-transparent",
                )}
                href={pathname}
                key={`lang-${keyLang}`}
                aria-current={lang === locale ? "page" : undefined}
                locale={lang}
              >
                {lang}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
