import { Data } from "plotly.js-dist-min";
import React from "react";
import Plot from "react-plotly.js";

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
