import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { ReactNode } from "react";

import { fetchData } from "@/pages/api/chart";
const DashboardChart = dynamic(() => import("@/components/DashboardChart"), {
  ssr: false,
});

const DashboardSection = ({
  title,
  id,
  content,
  cta,
}: {
  title?: string | undefined;
  content?: string | undefined;
  id: string;
  cta?: ReactNode | undefined;
}) => {
  const [chartData, setChartData] = useState({
    data: [],
    layout: {},
  });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchGraphData = async () => {
      const response = await fetchData(id);
      setChartData(response);
      setIsLoading(false);
    };
    fetchGraphData();
  }, [chartData, id]);

  if (!chartData || !id) {
    return <></>;
  }

  return (
    <div className="p-6 md:p-12">
      <div className="flex flex-wrap max-w-[1500px] mx-auto">
        <div className="w-1/3 items-right">
          <h3 className="h3 text-red1">{title}</h3>
          <p className="py-7">{content}</p>

          {cta && <div className="text-center py-8">{cta}</div>}
        </div>
        <div className="w-2/3 self-center h-full text-center">
          {id && isLoading ? (
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
