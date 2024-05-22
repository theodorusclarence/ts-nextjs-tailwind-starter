import Image from "next/image";
import React from "react";

const CustomDashboardSection = ({
  title,
  id,
  mainContent,
  content,
  src,
}: {
  title?: string | undefined;
  mainContent?: string;
  content?: string | undefined;
  id: string;
  src?: string | undefined;
}) => {
  return (
    <div id={id} className="p-6 md:p-12 max-w-[1596px] mx-auto">
      <h3 className="h3 text-red1 mb-4 lg:mb-8 max-w-screen-md">{title}</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[1fr_2fr]">
        <div>
          <p className="font-semibold">{mainContent}</p>
          <p className="py-7">{content}</p>
        </div>
        <div className="self-center px-24 min-h-[300px] overflow-y-auto h-full text-center">
          {src && <Image src={src} alt={id} width={700} height={300} />}
        </div>
      </div>
    </div>
  );
};
export default CustomDashboardSection;
