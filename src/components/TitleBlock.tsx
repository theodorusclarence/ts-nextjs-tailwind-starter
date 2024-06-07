import clsx from "clsx";
import React from "react";

const TitleBlock = ({
  className,
  title,
  id,
  spaceY = "mt-12 lg:mt-24",
  ...rest
}: {
  className?: string;
  spaceY?: string;
  id?: string;
  title: string;
}) => {
  if (!title) {
    return <></>;
  }

  return (
    <div
      {...rest}
      id={id}
      className={clsx(className, "p-6 md:p-12 text-red1 bg-pink1", spaceY)}
    >
      <h2 className="h2 max-w-[1500px] mx-auto w-full">{title}</h2>
    </div>
  );
};
export default TitleBlock;
