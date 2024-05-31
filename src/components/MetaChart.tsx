import clsx from "clsx";
import Link from "next/link";
import { useTranslations } from "next-intl";
import React from "react";

export type MetaChartProps = {
  data: {
    type: "source" | "methodology" | "image" | "data" | "document";
    link: string;
    moreInfo?: string;
    artifact?: string;
    isBlank?: boolean;
  }[];
  hasBackground?: boolean;
  className?: string;
};

const MetaChart = ({
  data,
  className,
  hasBackground = true,
  ...rest
}: MetaChartProps) => {
  const t = useTranslations("components");

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    link: string,
    artifact: string,
  ) => {
    e.preventDefault();

    const url = URL.createObjectURL(new Blob([link]));
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.href = url;
    a.setAttribute("download", artifact);
    a.click();
    window.URL.revokeObjectURL(url);
  };

  if (!data.length) return <></>;

  return (
    <ul
      className={clsx(
        className,
        "flex flex-wrap gap-4 mt-4 p-caption",
        hasBackground ? "p-2 rounded-sm text-black bg-gray-50" : "",
      )}
      {...rest}
    >
      {data.map((d, key) => (
        <li key={key}>
          <Link
            href={d.link}
            onClick={
              d.artifact
                ? (e) => handleClick(e, d.link, d.artifact || d.link)
                : undefined
            }
            className="underline hover:no-underline"
            target={d.isBlank ? "_blank" : undefined}
            rel={d.isBlank ? "noopener" : undefined}
            download={d.artifact}
            {...rest}
          >
            {t(`metaChart.${d.type}`)}
            {d.moreInfo ? <> ({d.moreInfo})</> : null}

            {d.isBlank ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="12"
                className="inline-block ml-1 align-middle"
                viewBox="0 -960 960 960"
                width="12"
              >
                <path
                  d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"
                  className="fill-current"
                />
              </svg>
            ) : d.artifact ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="12"
                viewBox="0 -960 960 960"
                width="12"
                className="inline-block ml-1 align-middle"
              >
                <path
                  d="M480-336 288-528l51-51 105 105v-342h72v342l105-105 51 51-192 192ZM263.72-192Q234-192 213-213.15T192-264v-72h72v72h432v-72h72v72q0 29.7-21.16 50.85Q725.68-192 695.96-192H263.72Z"
                  className="fill-current"
                />
              </svg>
            ) : null}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MetaChart;
