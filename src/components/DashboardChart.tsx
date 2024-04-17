import Plotly from 'plotly.js-dist-min';
import React, { useEffect } from 'react';

const DashboardChart = ({ data, layout, id }:  {
  data: object[];
  layout: object;
  id: string;
}) => {
    useEffect(() => {
        Plotly.newPlot(id, data, layout, {responsive: true});
    }, [data, layout, id]);

    return <div id={id} />;
};

export default DashboardChart;