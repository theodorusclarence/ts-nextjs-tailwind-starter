import clsx from "clsx";
// import Plot from "react-plotly.js";
import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";

const Chart = dynamic(() => import("@/components/Chart"), {
  ssr: false,
});

import PrimaryButton from "@/components/buttons/PrimaryButton";

const IntroBlock = ({
  className,
  headDark = true,
}: {
  className?: string;
  headDark?: boolean;
}) => {
  return (
    <div id="alternatives-block" className={className}>
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
          lang="en"
        >
          Be the change.
        </h2>
      </div>
      <div className="px-6 lg:px-12 pb-6 lg:pb-24 text-darkblue1 bg-brown1">
        <div className="max-w-[1500px] mx-auto">
          <p className={clsx("h3", "pb-6 md:pb-12 max-w-3xl")}>
            Il existe des alternatives au saumon dans notre manière de manger,
            de vendre et de produire.
          </p>
          <p className="text-xl pb-6 md:pb-16 max-w-3xl">
            La France, située dans le top 3 des plus gros consommateurs de
            saumon au monde, porte une responsabilité particulière dans
            l'orientation des pratiques.
          </p>
          <Chart id="alternatives" />
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
            Pour inverser la tendance et stopper le désastre, il est urgent
            d’agir. On a des leviers d’action !
          </p>

          <PrimaryButton
            href="/to-act"
            content="on agit"
            className="mt-6 xl:mt-10"
          />
        </div>
      </div>
    </div>
  );
};
export default IntroBlock;
