import clsx from "clsx";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ReactNode } from "react";

import { fetchData } from "@/pages/api/chart";
const DashboardChart = dynamic(() => import("@/components/DashboardChart"), {
  ssr: false,
});

const DashboardSection = ({
  title,
  id,
  mainContent,
  className,
  content,
  cta,
  src,
  ...rest
}: {
  title?: string;
  mainContent?: string;
  className?: string;
  content?: string;
  id: string;
  cta?: ReactNode;
  src?: string;
}) => {
  const [chartData, setChartData] = useState({
    data: [],
    layout: {},
  });

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (src) return;

    const fetchGraphData = async () => {
      if (id.length > 0) {
        const response = await fetchData("graphs", id);
        setChartData(response);
        setIsLoading(false);
      }
    };
    fetchGraphData();
  }, [id, src]);

  if (!chartData) {
    return <></>;
  }

  return (
    <div
      className={clsx(className, "p-6 md:p-12 max-w-[1596px] mx-auto")}
      {...rest}
    >
      <h3 className="h3 text-red1 mb-4 lg:mb-8 max-w-screen-md">{title}</h3>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-[1fr_2fr]">
        <div>
          <p className="font-semibold">{mainContent}</p>
          <p className="py-7">{content}</p>

          {cta && <div className="text-center py-8">{cta}</div>}
        </div>
        <div className="self-center min-h-[300px] overflow-y-auto h-full text-center">
          {src ? (
            <Image
              src={src}
              className="block mx-auto object-contain max-w-full"
              alt=""
              width={700}
              height={300}
            />
          ) : id && isLoading ? (
            <p className="text-xl text-center">Loading...</p>
          ) : (
            <DashboardChart
              data={chartData.data}
              layout={chartData.layout}
              id={id}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default DashboardSection;