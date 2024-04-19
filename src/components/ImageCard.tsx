import clsx from "clsx";
import React, { ReactNode } from "react";

const ImageCard = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className={clsx("rounded-xl bg-transparent", className)}>
      {children}
    </div>
  );
};
export default ImageCard;
