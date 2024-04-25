// import Plot from "react-plotly.js";
import dynamic from "next/dynamic";
import { Data } from "plotly.js-dist-min";
import React from "react";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

const DashboardChart = ({
  data,
  layout,
  id,
}: {
  data: Data[];
  layout: object;
  id: string;
}) => {
  return <Plot divId={id} data={data} layout={layout} />;
};

export default DashboardChart;
