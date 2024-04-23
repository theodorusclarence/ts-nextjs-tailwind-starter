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
    <div className="h-full">
      <div className="flex pt-12">
        <div className="w-1/3 items-right">
          <h3 className="h3 text-red1 py-8">{title}</h3>
          <p className="text-left">{content}</p>
          <div className="text-center py-8">{cta}</div>
        </div>
        <div className="w-2/3 h-full text-right">
          {id && isLoading ? (
            <p className="text-center">Chargement en cours...</p>
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
