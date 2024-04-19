import clsx from "clsx";
import React, { ReactNode } from "react";
import Image from "next/image";

const IconCard = ({
  className,
  title,
  icon,
  content,
}: {
  className?: string;
  title: string;
  icon: {
    src: string;
    width: number;
    height: number;
  };
  content: string;
}) => {
  return (
    <div className={clsx("space-y-3 lg:space-y-6 lg:max-w-72", className)}>
      <Image
        loading="lazy"
        src={icon.src}
        width={icon.width}
        height={icon.height}
        alt=""
        className="max-[767px]:w-12 max-[767px]:h-12 max-[1023px]:w-24 max-[1023px]:h-24 object-contain"
      />
      <p className="text-2xl md:text-4xl 2xl:text-5xl uppercase font-bold">
        {title}
      </p>
      <p className="2xl:text-xl font-secondary">{content}</p>
    </div>
  );
};
export default IconCard;
