import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { ReactNode } from "react";
import dynamic from "next/dynamic";

import { fetchData } from "@/pages/api/chart";
const DashboardChart = dynamic(() => import("@/components/DashboardChart"), {
  ssr: false,
});

const DashboardSection = ({
  chartOrder,
  textOrder,
  title,
  id,
  content,
  cta,
}: {
  chartOrder?: string | undefined;
  textOrder?: string | undefined;
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
    <div className="h-full items-center">
      <div className="text-2xl font-semibold">{title}</div>
      <div className="flex pt-12 items-center">
        <div className={clsx("w-2/3 h-full", chartOrder)}>
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
        <div className={clsx("w-1/3", textOrder)}>
          <p className="text-center">{content}</p>
          <div className="text-center py-8">{cta}</div>
        </div>
      </div>
    </div>
  );
};
export default DashboardSection;
