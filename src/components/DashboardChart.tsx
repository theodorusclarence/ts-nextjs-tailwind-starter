import Plotly from "plotly.js-dist-min";
import React, { useEffect } from "react";

const DashboardChart = ({
  data,
  layout,
  id,
}: {
  data: object[] | undefined;
  layout: object | undefined;
  id: string | undefined;
}) => {
  useEffect(() => {
    Plotly.newPlot(id, data, layout, {
      responsive: true,
      displayModeBar: false,
    });
  }, [data, layout, id]);

  return <div id={id} />;
};

export default DashboardChart;
