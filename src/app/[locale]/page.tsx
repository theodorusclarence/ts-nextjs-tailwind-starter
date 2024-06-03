"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import * as React from "react";
import "@/lib/env";

import Chart from "@/components/Chart";
import Edito from "@/components/Edito";
import IconCard from "@/components/IconCard";
import IntroBlock from "@/components/IntroBlock";
import JoinBlock from "@/components/JoinBlock";
import MetaChart from "@/components/MetaChart";

const HomePage = () => {
  const t = useTranslations("story");

  return (
    <>
      <IntroBlock title={t("title")} image="/images/salmon.svg" />

      <BombSection />
      <ExplodeSection />
      <EditoSection />
      <BusinessSection />

      <JoinBlock />
    </>
  );
};

export default HomePage;

const BombSection = () => {
  const t = useTranslations("story");

  return (
    <section className="flex p-6 lg:p-12 min-h-[300px] h-screen text-red1 bg-darkblue1">
      <div className="grid grid-rows-[1fr, auto, 1fr] w-full">
        <div className="row-start-2 self-center justify-self-center  px-6 max-w-[766px] max-h-full object-contain">
          <Image src="/images/bombs.svg" alt="" width={766} height={616} />
        </div>
        <div className="row-start-3 self-end items-left flex gap-2 items-end">
          <p className={clsx("h1", "max-w-[1500px] mx-auto w-full")}>
            {t("bomb")}
          </p>
        </div>
      </div>
    </section>
  );
};

const ExplodeSection = () => {
  const t = useTranslations("story");

  return (
    <section className="flex items-center justify-center p-6 lg:p-12 lg:pt-24 lg:pb-48 2xl:py-24 text-red1 bg-darkblue1 min-h-screen">
      <div className="relative">
        <p className="mb-6 md:mb-12 mx-auto text-xl xl:absolute xl:left-[310px] xl:bottom-[100px] 3xl:left-[600px] 3xl:bottom-[200px] xl:max-w-96 text-center text-white">
          {t("explode.intro")}
        </p>
        <ul
          className="
        grid grid-cols-1 xs:grid-cols-2 gap-8 list-none bg-no-repeat bg-center
        xs:bg-[url(/images/explose-small.svg)] xs:bg-[length:438px_320px]
        xl:bg-[url(/images/explose.svg)]
        xl:w-[969px] xl:h-[829px] xl:bg-[length:727px_662px]
        3xl:w-[1515px] 3xl:h-[1190px] 3xl:bg-[length:969px_829px]
      "
        >
          <li className="xl:absolute xl:-left-[20px] xl:top-[180px] 3xl:left-[112px] 3xl:top-[330px]">
            <IconCard
              icon={{ src: "/images/people.svg", width: 130, height: 114 }}
              title={t("explode.social.title")}
              content={t("explode.social.content")}
            />
          </li>
          <li className="xl:absolute xl:left-[120px] xl:bottom-[20px] 3xl:left-[242px] 3xl:bottom-[180px]">
            <IconCard
              icon={{ src: "/images/climat.svg", width: 94, height: 153 }}
              title={t("explode.climat.title")}
              content={t("explode.climat.content")}
            />
          </li>
          <li className="xl:absolute xl:-right-[150px] xl:top-[50px] 3xl:-right-[100px] 3xl:top-[160px]">
            <IconCard
              icon={{ src: "/images/hearth.svg", width: 95, height: 99 }}
              title={t("explode.health.title")}
              content={t("explode.health.content")}
            />
          </li>
          <li className="xl:absolute xl:-right-[140px] xl:bottom-[140px] 3xl:-right-[80px] 3xl:bottom-[360px]">
            <IconCard
              icon={{ src: "/images/butterfly.svg", width: 120, height: 116 }}
              title={t("explode.biodiversity.title")}
              content={t("explode.biodiversity.content")}
            />
          </li>
          <li className="xl:absolute xl:right-[100px] xl:-bottom-[60px] 3xl:right-[340px] 3xl:bottom-[40px]">
            <IconCard
              title={t("explode.animals.title")}
              content={t("explode.animals.content")}
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

const EditoSection = () => {
  const t = useTranslations("story");

  const editosContent = [
    {
      title: t("edito.biodiversity.title"),
      content: t("edito.biodiversity.content"),
      link: "/dashboard#biodiversity-section",
      image: {
        small: "/images/storytelling/biodiversity-hd.webp",
        medium: "/images/storytelling/biodiversity-hd.webp",
        large: "/images/storytelling/biodiversity-hd.webp",
      },
    },
    {
      title: t("edito.health.title"),
      content: t("edito.health.content"),
      link: "/dashboard#health-section",
      image: {
        small: "/images/storytelling/health-hd.webp",
        medium: "/images/storytelling/health-hd.webp",
        large: "/images/storytelling/health-hd.webp",
        caption: t("edito.health.credit"),
      },
    },
    {
      title: t("edito.climat.title"),
      content: t("edito.climat.content"),
      link: "/dashboard#climate-section",
      image: {
        small: "/images/storytelling/climat-400.jpg",
        medium: "/images/storytelling/climat-600.jpg",
        large: "/images/storytelling/climat-1200.jpg",
      },
    },
    {
      title: t("edito.social.title"),
      content: t("edito.social.content"),
      link: "/dashboard#social-section",
      image: {
        small: "/images/storytelling/social-400.jpg",
        medium: "/images/storytelling/social-600.jpg",
        large: "/images/storytelling/social-1200.jpg",
      },
    },
    {
      title: t("edito.animals.title"),
      content: t("edito.animals.content"),
      link: "/dashboard#animals-section",
      image: {
        small: "/images/storytelling/animals-hd.webp",
        medium: "/images/storytelling/animals-hd.webp",
        large: "/images/storytelling/animals-hd.webp",
      },
    },
  ];

  return (
    <>
      {editosContent.map((edito, key) => (
        <Edito
          key={`edito-${key}`}
          {...edito}
          contentPosition={key % 2 ? "left" : "right"}
        />
      ))}
    </>
  );
};

const BusinessSection = () => {
  const t = useTranslations("story");

  return (
    <section className="p-6 lg:px-12 lg:pt-36 lg:pb-64 text-red1 bg-darkblue1">
      <div className="max-w-[1500px] mx-auto">
        <h3 className={clsx("h3", "mb-4 lg:mb-6 max-w-5xl m-auto text-center")}>
          {t("industry.title")}
        </h3>
        <p className="mb-6 lg:mb-14 max-w-xl text-white m-auto text-center">
          {t("industry.content")}
        </p>
        <Chart id="hyper-growth-grouped" />
        <MetaChart
          hasBackground={false}
          data={[
            {
              type: "source",
              link: t("industry.source"),
              isBlank: true,
            },
            {
              type: "methodology",
              link: "/about#macro-section",
            },
            {
              type: "data",
              link: t("industry.data"),
              artifact: t("industry.artifact"),
            },
          ]}
        />
        <div className="flex justify-center">
          <Link
            className="inline-flex justify-center gap-4 mt-6 lg:mt-12 p-4 min-w-40 lg:text-2xl text-red1 bg-darkblue1 font-secondary uppercase rounded-xl tracking-widest border-2 font-bold border-red1 hover:bg-red1 hover:text-darkblue1 transition-all ease-in-out duration-100"
            href="/to-act"
          >
            {t("industry.link")}
          </Link>
        </div>
      </div>
    </section>
  );
};
