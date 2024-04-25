import clsx from "clsx";
import React from "react";

const social: Record<string, { name: string }> = {
  twitter: {
    name: "Twitter",
  },
  linkedin: {
    name: "Linkedin",
  },
  website: {
    name: "Website",
  },
  email: {
    name: "Email",
  },
};

type ShareLinkProps = {
  className?: string;
  type?: keyof typeof social;
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
  if (!href || !name) {
    return <></>;
  }

  return (
    <a
      className={clsx("mt-2 hover:underline lg:text-xl", className)}
      href={(type === "email" ? "mailto:" : "") + href}
      target="_blank"
      rel="noopener noreferrer"
      title={`${social[type].name} ${name} (new tab)`}
      {...rest}
    >
      {social[type].name}
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
