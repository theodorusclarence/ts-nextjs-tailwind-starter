import clsx from "clsx";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { ReactNode } from "react";

import MetaItem, { chartMeta } from "@/components/MetaItem";

const Chart = dynamic(() => import("@/components/Chart"), {
  ssr: false,
});

type DashboardSectionProps = {
  title?: string;
  mainContent?: string;
  className?: string;
  content?: string;
  id: string;
  cta?: ReactNode;
  src?: string;
  hasChart?: boolean;
  meta?: Record<
    (typeof chartMeta)[number],
    {
      link: string;
      moreInfo?: string;
      artifact?: string;
    }
  >;
};

const DashboardSection = ({
  title,
  id,
  mainContent,
  className,
  content,
  cta,
  src,
  hasChart = false,
  meta,
  ...rest
}: DashboardSectionProps) => {
  return (
    <div
      className={clsx(
        className,
        "p-6 md:px-12 md:py-24 max-w-[1596px] mx-auto",
      )}
      id={`${id}-block`}
      {...rest}
    >
      <h3 className="h3 text-red1 mb-4 lg:mb-8 max-w-screen-md">{title}</h3>
      <div className="grid gap-4 xl:gap-24 grid-cols-1 lg:grid-cols-2 xl:grid-cols-[1fr_2fr]">
        <div>
          {mainContent && (
            <div
              className="p-leavy prose mb-4"
              dangerouslySetInnerHTML={{ __html: mainContent }}
            />
          )}

          {content && (
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}

          {cta && <div className="text-center py-8">{cta}</div>}
        </div>
        <div className="self-center min-h-full overflow-x-auto text-center">
          {src ? (
            <Image
              src={src}
              className="block mx-auto object-contain max-w-full min-h-[300px]"
              alt=""
              width={700}
              height={300}
            />
          ) : null}

          {hasChart ? <Chart id={id} className="min-h-[300px]" /> : null}

          {meta ? (
            <ul className="flex flex-wrap gap-4 mt-4 p-2 p-caption rounded-sm bg-gray-50">
              {Object.keys(meta).map((data, key) => (
                <li key={`meta-${key}`}>
                  <MetaItem data={data} {...meta[data]} />
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default DashboardSection;
