import clsx from "clsx";
import dynamic from 'next/dynamic';
import React from "react";

const DashboardChart = dynamic(() => import('./DashboardChart'), { ssr: false });

const DashboardSection = ({
  chartOrder,
  textOrder,
  title,
  id,
  content,
  chartLayout,
}: {
  chartOrder: string | undefined;
  textOrder: string | undefined;
  title: string | undefined;
  content: string | undefined;
  id: string | undefined;
  chartLayout: object | undefined;
}) => {
  const data = [
    {
      x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
      y: [1, 3, 6],
      type: 'scatter'
    }
  ];
  return (
    <div className="h-full items-center">
      <div className="text-2xl font-semibold">{title}</div>
      <div className="flex pt-12 items-center">
        <div
          className={clsx("w-2/3 h-full", chartOrder)}
        >
         {chartLayout && <DashboardChart data={data} layout={chartLayout} id={id} />} 
        </div>
        <div className={clsx("w-1/3", textOrder)}>
          <p className="text-center">{content}</p>
        </div>
      </div>
    </div>
  );
};
export default DashboardSection;
