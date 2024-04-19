"use client";

import Link from "next/link";
import Image from "next/image";
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
    link: "/about",
    text: "About",
  },
];

const Navbar = () => {
  const pathName = usePathname();

  return (
    <header className="absolute left-0 top-0 z-[9999] w-full">
      <div className="flex flex-wrap items-center justify-between px-6 lg:px-9 py-3 lg:py-6">
        <Link href="/">
          <Image
            src="/svg/pinkbombs-logo.svg"
            alt="PinkBombs"
            width={190}
            height={38}
            className="w-24 md:w-36 lg:w-48"
          />
        </Link>
        ̤̤̤̤
        <nav className="flex gap-4 lg:gap-16" aria-label="Main navigation">
          {navItems.map((item, key) => (
            <Link
              className={`uppercase font-bold ${item.link === pathName ? "underline" : ""} hover:underline focus:underline lg:text-[1.4rem]`}
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
