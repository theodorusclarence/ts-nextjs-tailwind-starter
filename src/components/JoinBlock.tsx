import clsx from "clsx";
import Image from "next/image";
import React from "react";
// import Plot from "react-plotly.js";
import dynamic from "next/dynamic";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false, })

import { useState, useEffect } from "react";
import { fetchData } from "@/pages/api/chart";

import PrimaryButton from "@/components/buttons/PrimaryButton";

const IntroBlock = ({
  className,
  headDark = true,
}: {
  className?: string;
  headDark?: boolean;
}) => {

  const [plot, setPlot] = useState({
    data: [],
    layout: {},
  });
  const fetchGraphData = async () => {
    const response = await fetchData("graphs", "alternatives");
    setPlot(response);
  };
  useEffect(() => {
    fetchGraphData();
  }, []);

  if (!plot) {
    return <></>;
  }
  return (
    <div className={className}>
      <div
        className={clsx(
          "lg:bg-[url('/images/wave.svg')] bg-no-repeat bg-center bg-[length:3200px_275px]",
          headDark
            ? "text-darkblue1 lg:text-brown1 bg-brown1 lg:bg-darkblue1"
            : "text-red1",
        )}
      >
        <h2
          className={clsx(
            "h1",
            "p-6 lg:px-12 lg:pt-[120px] lg:pb-12 max-w-[1596px] mx-auto lg:bg-clip-text lg:text-transparent bg-no-repeat bg-center bg-[length:3200px_275px]",
            headDark
              ? "lg:bg-[url('/images/wave-text.svg')]"
              : "lg:bg-[url('/images/wave-text-light.svg')]",
          )}
        >
          Be the change.
        </h2>
      </div>
      <div className="px-6 lg:px-12 pb-6 lg:pb-24 text-darkblue1 bg-brown1">
        <div className="max-w-[1500px] mx-auto">
          <p className={clsx("h3", "pb-6 md:pb-12 max-w-3xl")}>
            There are alternatives to salmon in our way of eating, selling, and
            producing.
          </p>
          <p className={"text-xl pb-6 md:pb-16 max-w-3xl"}>
            France, located in the top 3 of the largest consumers of salmon in
            the world, bears a particular responsibility in guiding practices.
          </p>
          <div className="flex justify-center">
            <Plot data={plot.data} layout={plot.layout}/>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-12 xl:py-32 bg-yellow1 text-darkblue1">
        <div className="m-auto md:max-w-xl xl:max-w-4xl text-center font-secondary tracking-widest uppercase">
          <Image
            className="inline-block object-contain w-48 md:w-64 xl:w-[692px]"
            src="/images/eyes.svg"
            alt=""
            loading="lazy"
            width={692}
            height={134}
          />

          <p className="mt-6 xl:mt-10 text-xl//tight md:text-3xl//tight xl:text-6xl/tight font-bold">
            Join the collective effort against salmon farming by Signing the
            pledge below
          </p>

          <PrimaryButton
            href="/to-act"
            content="I act"
            className="mt-6 xl:mt-10"
          />
        </div>
      </div>
    </div>
  );
};
export default IntroBlock;
