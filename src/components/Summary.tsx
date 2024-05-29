import clsx from "clsx";
import Image from "next/image";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

export type SummaryLinksProps = {
  id: string;
  title: string;
  sublinks: {
    label: string;
    targetId: string;
  }[];
}[];

const Summary = ({
  className,
  links,
}: {
  className?: string;
  links: SummaryLinksProps;
}) => {
  const [openMenu, setOpenMenu] = useState("");
  const t = useTranslations("components");
  const handleClickLink = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string,
  ) => {
    e.preventDefault();
    setOpenMenu(openMenu === id ? "" : id);
  };

  if (!links) {
    return <></>;
  }

  return (
    <nav
      className={clsx(className, "pt-6 lg:pt-12 text-red1 bg-pink1")}
      aria-label={t("summary.title")}
    >
      <ul
        role="menubar"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8 max-w-[1500px] mx-auto bg-white text-darkblue1 rounded-md"
      >
        {links.map((link, keyLink) => (
          <li role="none" className="flex-1 relative" key={`link-${keyLink}`}>
            <a
              role="menuitem"
              aria-haspopup="true"
              aria-expanded={openMenu === link.id}
              href={`#${link.sublinks[0].targetId}`}
              onClick={(e) => handleClickLink(e, link.id)}
              className={clsx(
                "min-w-max flex justify-between p-4 hover:bg-red1 hover:text-white",
                openMenu === link.id ? "bg-red1 text-white" : "",
              )}
            >
              {link.title}
              <Image
                src="/images/bottom-dark.svg"
                alt=""
                width="10"
                height="7"
                className="ml-2"
              />
            </a>

            <ul
              role="menu"
              className={clsx(
                "sm:absolute z-10 w-full bg-white",
                openMenu === link.id ? "block" : "hidden",
              )}
              aria-label={link.title}
            >
              {link.sublinks.map((sublink, keySubLink) => (
                <li key={`link-${keyLink}-${keySubLink}`}>
                  <a
                    href={`#${sublink.targetId}`}
                    role="menuitem"
                    className="block p-2 hover:text-red1"
                    onClick={() => {
                      setOpenMenu("");
                    }}
                  >
                    {sublink.label}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Summary;
