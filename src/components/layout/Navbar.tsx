"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemsProps = {
  link: string;
  text: string;
}[];

const navItems: NavItemsProps = [
  {
    link: "/",
    text: "Story",
  },
  {
    link: "/dashboard",
    text: "Dashboard",
  },
  {
    link: "/to-act",
    text: "To act",
  },
  {
    link: "/about",
    text: "About",
  },
];

const Navbar = () => {
  const pathName = usePathname();

  return (
    <header className="absolute left-0 top-0 z-10 w-full">
      <div className="flex flex-wrap items-center justify-between px-6 lg:px-12 py-3 lg:py-6">
        <Link href="/">
          <Image
            src="/images/pinkbombs.svg"
            alt="PinkBombs"
            width={176}
            height={43}
            className="w-24 md:w-36 lg:w-44 object-contain"
          />
        </Link>

        <nav className="flex gap-4 lg:gap-16" aria-label="Main navigation">
          {navItems.map((item, key) => (
            <Link
              className={clsx(
                "font-secondary uppercase font-bold text-darkblue1 hover:text-red1 focus:text-red1 lg:text-xl",
                item.link === pathName ? "navbar-active" : "",
              )}
              href={item.link}
              aria-current={item.link === pathName ? "page" : undefined}
              key={`nav-${key}`}
            >
              {item.text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
