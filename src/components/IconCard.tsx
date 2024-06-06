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
  icon?: string;
  content: string;
}) => {
  return (
    <div className={className}>
      {icon ? (
        <Image
          loading="lazy"
          src={icon}
          width={100}
          height={100}
          alt=""
          className="max-[767px]:w-12 max-[767px]:h-12 max-[1023px]:w-24 max-[1023px]:h-24 object-contain"
        />
      ) : null}
      <p className="h3 xl:max-w-[380px] 3xl:max-w-[600px]">{title}</p>
      <p className="mt-4 text-white xl:max-w-72 3xl:max-w-96">{content}</p>
    </div>
  );
};
export default IconCard;
