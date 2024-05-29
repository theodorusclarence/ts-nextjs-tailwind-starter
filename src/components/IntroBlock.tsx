import clsx from "clsx";
import Image from "next/image";
import React from "react";

import Summary, { SummaryLinksProps } from "@/components/Summary";

const IntroBlock = ({
  className,
  title,
  image,
  summary,
}: {
  className?: string;
  title: string;
  image?: string;
  summary?: SummaryLinksProps;
}) => {
  if (!title) {
    return <></>;
  }

  return (
    <header
      className={clsx(
        className,
        "flex p-6 lg:p-12 text-red1 bg-pink1 min-h-[300px]",
        image ? "h-screen min-h-[300px]" : "lg:pt-60",
      )}
    >
      <div className="grid grid-rows-[1fr, auto, 1fr] w-full max-w-[1500px] mx-auto">
        {image && (
          <div className="row-start-2 self-center justify-self-center px-6 max-w-[490px]">
            <Image src="/images/salmon.svg" alt="" width={490} height={203} />
          </div>
        )}
        <div className="row-start-3 self-end items-left flex flex-wrap gap-2 items-end">
          <h1 className={clsx("h1", "flex-1")}>{title}</h1>

          {summary ? <Summary className="w-full" links={summary} /> : null}
        </div>
      </div>
    </header>
  );
};
export default IntroBlock;
