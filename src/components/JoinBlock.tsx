import clsx from "clsx";
import Image from "next/image";
import React from "react";

import PrimaryButton from "@/components/buttons/PrimaryButton";

const IntroBlock = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <div className="text-darkblue1 lg:text-brown1 bg-brown1 lg:bg-darkblue1 lg:bg-[url('/images/wave.svg')] bg-no-repeat bg-center bg-[length:3200px_275px]">
        <h2
          className={clsx(
            "h1",
            "p-6 lg:px-12 lg:pt-28 lg:pb-12 max-w-[1500px] mx-auto lg:bg-clip-text lg:text-transparent lg:bg-[url('/images/wave-text.svg')] bg-no-repeat bg-center bg-[length:3200px_275px]",
          )}
        >
          Be the change.
        </h2>
      </div>
      <div className="px-6 lg:px-12 pb-6 lg:pb-24 text-darkblue1 bg-brown1">
        <div className="max-w-[1500px] mx-auto">
          <p className={clsx("h3", "pb-6 md:pb-12 xl:pb-32 max-w-3xl")}>
            There are alternatives to salmon in our way of eating, selling, and
            producing.
          </p>
          <Image
            src="/images/saumon.jpg"
            alt=""
            className="w-full h-96 xl:h-[690px] object-cover"
            width={1000}
            height={600}
            loading="lazy"
          />
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
            href="/"
            content="Sign the pledge"
            className="mt-6 xl:mt-10"
          />
        </div>
      </div>
    </div>
  );
};
export default IntroBlock;
