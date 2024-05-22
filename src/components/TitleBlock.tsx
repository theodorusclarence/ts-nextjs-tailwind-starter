import clsx from "clsx";
import React from "react";

const TitleBlock = ({
  className,
  title,
  id,
  ...rest
}: {
  className?: string;
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
      className={clsx(
        className,
        "flex items-end p-6 md:p-12 xl:p-[60px] text-red1 bg-pink1",
      )}
    >
      <h2 className="h2 max-w-[1500px] mx-auto w-full">{title}</h2>
    </div>
  );
};
export default TitleBlock;
