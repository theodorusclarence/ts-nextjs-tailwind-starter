import clsx from "clsx";
import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

const IconCard = ({
  className,
  title,
  image,
  content,
  link,
  imagePosition = "left",
}: {
  className?: string;
  title: string;
  image: string;
  content: string;
  link: string;
  imagePosition?: "left" | "right";
}) => {
  return (
    <div
      className={clsx(
        "flex flex-col md:flex-row md:items-center gap-6 xl:gap-14 p-6 pb-14 xl:p-14 text-white bg-darkblue1",
        className,
      )}
    >
      <div className="max-w-[560px]">
        <h2 className={clsx("h2", "text-orange1")}>{title}</h2>
        <p className="mt-3 lg:mt-6 2xl:text-xl font-secondary">{content}</p>
        <Link
          className="inline-flex px-5 py-4 mt-3 border-solid border border-orange1 uppercase text-orange1 hover:bg-orange1 hover:text-white transition duration-100"
          href="/"
        >
          Learn more
        </Link>
      </div>
      <Image
        loading="lazy"
        src={image}
        width={776}
        height={901}
        alt=""
        className={imagePosition === "right" ? "md:-order-1" : ""}
      />
    </div>
  );
};
export default IconCard;
