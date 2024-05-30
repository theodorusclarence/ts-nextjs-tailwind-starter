// import Plot from "react-plotly.js";
import clsx from "clsx";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });
import { useLocale, useTranslations } from "next-intl";

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
  const [mapData, setMapData] = useState("");
  const locale = useLocale();
  const t = useTranslations("components");

  useEffect(() => {
    if (!id) return;

    (async () => {
      if (id.length > 0) {
        const response = await fetchData(
          (locale === "fr" ? "fr/" : "") + type,
          id,
          type === "graphs",
        );

        if (!response) {
          return;
        }

        if (type === "maps") {
          setMapData(response);
        } else {
          setChartData(response);
        }
      }
    })();
  }, [id, type, locale]);

  if (!chartData.data?.length && !mapData) {
    return (
      <p
        className={clsx(
          "flex items-center justify-center p-caption text-center bg-gray-50 min-h-[450px]",
          className,
        )}
      >
        {t("chart.loading")}
      </p>
    );
  }

  return (
    <>
      {type === "maps" ? (
        <iframe
          title="Carte des fermes terrestres"
          id="ras-map"
          srcDoc={mapData}
          width={1000}
          height={900}
          className="w-full"
        />
      ) : (
        <Plot
          divId={id}
          data={chartData.data}
          layout={{
            ...chartData.layout,
            ...(width ? { width } : null),
            height,
          }}
          config={{ responsive: true }}
          className={clsx("!block min-h-[450px]", className)}
        />
      )}
    </>
  );
};

export default Chart;
