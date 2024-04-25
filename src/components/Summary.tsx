import clsx from "clsx";
import React from "react";

export type SummaryLinksProps = {
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
  if (!links) {
    return <></>;
  }

  return (
    <div className={clsx(className, "bg-darkblue1 p-6 md:p-12 lg:py-20")}>
      <div className="max-w-[1500px] mx-auto">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-8 lg:gap-y-14">
          {links.map((link, keyLink) => (
            <li key={`link-${keyLink}`}>
              <p className="h4 pb-6 text-red1">{link.title}</p>

              <ul className="space-y-4">
                {link.sublinks.map((sublink, keySubLink) => (
                  <li key={`link-${keyLink}-${keySubLink}`}>
                    <a
                      href={`#${sublink.targetId}`}
                      className="block p-4 md:px-8 md:py-5 bg-white text-darkblue1 font-bold text-xl hover:bg-red1"
                    >
                      {sublink.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Summary;
