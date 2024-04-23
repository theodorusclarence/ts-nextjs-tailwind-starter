import clsx from "clsx";
import Image from "next/image";
import React from "react";

const IconCard = ({
  className,
  title,
  icon,
  content,
}: {
  className?: string;
  title: string;
  icon?: {
    src: string;
    width: number;
    height: number;
  };
  content: string;
}) => {
  return (
    <div className={clsx("space-y-3", className)}>
      {icon ? (
        <Image
          loading="lazy"
          src={icon.src}
          width={icon.width}
          height={icon.height}
          alt=""
          className="max-[767px]:w-12 max-[767px]:h-12 max-[1023px]:w-24 max-[1023px]:h-24 object-contain"
        />
      ) : null}
      <p className="h3 lg:max-w-[600px]">{title}</p>
      <p className="lg:text-xl text-white lg:max-w-96">{content}</p>
    </div>
  );
};
export default IconCard;
