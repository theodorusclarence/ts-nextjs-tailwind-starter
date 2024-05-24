// import Plot from "react-plotly.js";
import clsx from "clsx";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });
import { fetchData } from "@/pages/api/chart";

type ChartProps = {
  id: string;
  className?: string;
  height?: number;
  width?: number;
  type?: "graphs" | "maps";
};

const Chart = ({
  id,
  className,
  type = "graphs",
  height = 450,
  width,
}: ChartProps) => {
  const [chartData, setChartData] = useState({
    data: [],
    layout: {},
  });

  useEffect(() => {
    if (!id) return;

    const fetchGraphData = async () => {
      if (id.length > 0) {
        const response = await fetchData(type, id);
        setChartData(response);
      }
    };
    fetchGraphData();
  }, [id, type]);

  if (!chartData)
    return (
      <p className="flex items-center justify-center text-md text-center bg-gray-50 min-h-[300px]">
        Chargement des données en cours...
      </p>
    );

  return (
    <Plot
      divId={id}
      data={chartData.data}
      layout={{ ...chartData.layout, ...(width ? { width } : null), height }}
      config={{ responsive: true }}
      className={clsx("!block min-h-[300px]", className)}
    />
  );
};

export default Chart;
