import clsx from "clsx";
import { useTranslations } from "next-intl";
import React from "react";

const AboutSection = ({
  content,
  className = "",
  title,
  subtitle,
  id = "",
}: {
  content: string;
  className?: string;
  title?: string;
  subtitle?: string;
  id?: string;
}) => {
  const t = useTranslations();
  if (!content) return <></>;

  return (
    <div
      id={id}
      className={clsx(className, "px-6 md:px-12 max-w-[1200px] mx-auto prose")}
    >
      {title && <h3>{title}</h3>}
      {subtitle && <h4>{subtitle}</h4>}
      <div dangerouslySetInnerHTML={{ __html: t.raw(content) }} />
    </div>
  );
};

export default AboutSection;
