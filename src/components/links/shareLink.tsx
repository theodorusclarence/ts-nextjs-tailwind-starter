import clsx from "clsx";
import { useTranslations } from "next-intl";
import React from "react";

type ShareLinkProps = {
  className?: string;
  type?: "twitter" | "linkedin" | "website" | "email";
  href: string;
  name: string;
};

const ShareLink = ({
  className,
  type = "website",
  href,
  name,
  ...rest
}: ShareLinkProps) => {
  const t = useTranslations("components");

  if (!href || !name) {
    return <></>;
  }

  return (
    <a
      className={clsx("mt-2 hover:underline", className)}
      href={(type === "email" ? "mailto:" : "") + href}
      target="_blank"
      rel="noopener noreferrer"
      title={`${t(`shareLink.${type}`)} ${name} (${t("shareLink.blank")})`}
      {...rest}
    >
      {t(`shareLink.${type}`)}
      <span className="sr-only">{name}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="16"
        className="inline-block ml-2 align-baseline fill-yellow1"
        viewBox="0 -960 960 960"
        width="16"
      >
        <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
      </svg>
    </a>
  );
};

export default ShareLink;
