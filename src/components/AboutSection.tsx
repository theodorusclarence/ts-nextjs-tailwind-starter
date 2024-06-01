import clsx from "clsx";
import { useTranslations } from "next-intl";
import React from "react";

const AboutSection = ({
  content,
  className = "",
  title,
  id = "",
}: {
  content: string;
  className?: string;
  title?: string;
  id?: string;
}) => {
  const t = useTranslations();
  if (!content) return <></>;

  return (
    <div
      id={id}
      className={clsx(className, "p-6 md:p-12 max-w-[1596px] mx-auto prose")}
    >
      {title && <h3 className="h3">{title}</h3>}
      <div dangerouslySetInnerHTML={{ __html: t.raw(content) }} />
    </div>
  );
};

export default AboutSection;
