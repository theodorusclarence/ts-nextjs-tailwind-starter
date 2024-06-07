import clsx from "clsx";
import React from "react";

const AboutSection = ({
  content,
  className = "",
  title,
  subtitle,
  id = "",
}: {
  content?: string;
  className?: string;
  title?: string;
  subtitle?: string;
  id?: string;
}) => {
  if (!content && !title && !subtitle) return <></>;

  return (
    <div
      id={id}
      className={clsx(className, "px-6 md:px-12 max-w-[1000px] mx-auto prose")}
    >
      {title && <h3>{title}</h3>}
      {subtitle && <h4>{subtitle}</h4>}
      {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
    </div>
  );
};

export default AboutSection;
