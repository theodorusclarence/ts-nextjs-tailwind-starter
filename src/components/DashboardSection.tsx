import clsx from "clsx";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

const Chart = dynamic(() => import("@/components/Chart"), {
  ssr: false,
});

const DashboardMeta = ["source", "methodology", "image", "data", "document"];

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
    (typeof DashboardMeta)[number],
    {
      link: string;
      moreInfo?: string;
      artifact?: string;
    }
  >;
};

type MetaDataItemProps = {
  data: (typeof DashboardMeta)[number];
  link: string;
  moreInfo?: string;
  artifact?: string;
};

const metaDataContent: Record<(typeof DashboardMeta)[number], string> = {
  source: "Source",
  methodology: "Méthodologie",
  image: "Image",
  data: "Données",
  document: "PDF",
};

const MetaDataItem = ({
  data,
  link,
  moreInfo,
  artifact,
}: MetaDataItemProps) => {
  return (
    <Link
      href={link}
      className="underline hover:no-underline"
      target={data === "source" ? "_blank" : undefined}
      rel={data === "source" ? "noopener" : undefined}
      download={artifact}
    >
      {metaDataContent[data]}
      {moreInfo ? <> ({moreInfo})</> : null}

      {data === "source" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="12"
          className="inline-block ml-1 align-middle"
          viewBox="0 -960 960 960"
          width="12"
        >
          <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
        </svg>
      ) : artifact ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="12"
          viewBox="0 -960 960 960"
          width="12"
          className="inline-block ml-1 align-middle"
        >
          <path d="M480-336 288-528l51-51 105 105v-342h72v342l105-105 51 51-192 192ZM263.72-192Q234-192 213-213.15T192-264v-72h72v72h432v-72h72v72q0 29.7-21.16 50.85Q725.68-192 695.96-192H263.72Z" />
        </svg>
      ) : null}
    </Link>
  );
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
          <p className="font-semibold">{mainContent}</p>
          <p className="py-7">{content}</p>

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
            <ul className="flex flex-wrap gap-4 mt-4 p-2 text-sm rounded-sm bg-gray-50">
              {Object.keys(meta).map((data, key) => (
                <li key={`meta-${key}`}>
                  <MetaDataItem data={data} {...meta[data]} />
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
