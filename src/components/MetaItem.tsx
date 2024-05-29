import clsx from "clsx";
import Link from "next/link";
import { useTranslations } from "next-intl";
import React from "react";

export const chartMeta = ["source", "methodology", "image", "data", "document"];

type MetaItemProps = {
  data: (typeof chartMeta)[number];
  link: string;
  moreInfo?: string;
  artifact?: string;
  className?: string;
};

const MetaItem = ({
  data,
  link,
  moreInfo,
  artifact,
  className,
  ...rest
}: MetaItemProps) => {
  const t = useTranslations("components");

  return (
    <Link
      href={link}
      className={clsx(className, "underline hover:no-underline")}
      target={data === "source" ? "_blank" : undefined}
      rel={data === "source" ? "noopener" : undefined}
      download={artifact}
      {...rest}
    >
      {t(`metaItem.${data}`)}
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

export default MetaItem;
