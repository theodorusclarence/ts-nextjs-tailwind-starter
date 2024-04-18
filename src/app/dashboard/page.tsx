"use client";

import clsx from "clsx";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import "@/lib/env";

import DashboardSection from "@/components/DashboardSection";

import { fetchData } from "@/pages/api/chart";

const DashboardChart = dynamic(() => import("@/components/DashboardChart"), {
  ssr: false,
});

const DashboardPage = () => {
  return (
    <>
      <IntroSection />
      <div className="text-3xl font-semibold">Global Trends</div>
      <GlobalTrendSection />
      <SalmonCollapseSection />
      <SalmonFarmingSection />
      <TopCountriesSection />
      <div className="text-3xl font-semibold">Compagnies</div>
      <MainProductionSection />
      <LandPlantsSection />
    </>
  );
};

export default DashboardPage;

const IntroSection = () => {
  return (
    <section className="grid grid-rows-[1fr, auto, 1fr] px-6 lg:px-12 py-3 lg:py-7 h-screen min-h-96 text-orange2 bg-rose2">
      <h1 className={clsx("h1", "row-start-3 self-end items-left")}>
        The numbers behind the story
      </h1>
    </section>
  );
};

const GlobalTrendSection = () => {
  return (
    <section className="grid grid-rows-[1fr, auto, 1fr] px-6 lg:px-12 py-3 lg:py-7"></section>
  );
};

const SalmonCollapseSection = () => {
  return (
    <section className="grid grid-rows-[1fr, auto, 1fr] px-6 lg:px-12 py-3 lg:py-7">
      <DashboardSection
        title="Wild Altantic salmon collapse"
        chartOrder="order-1"
        id="salmon-collapse"
        cta={
          <a
            href="https://atlanticsalmontrust.org/donate/"
            target="_blank"
            className="inline-flex items-center justify-center rounded-full bg-black w-12 h-12 text-white"
          >
            <FaEye className="w-6 h-6" />
          </a>
        }
        textOrder="order-2"
        content="Atlantic salmon entered the IUCN Red List of Threatened Species in December 2023 . This is largely due to overfishing, habitat degradation, especially from dams blocking migratory routes, but also from climate change that alters their environments, impacting their growth and survival rates."
      />
    </section>
  );
};

const SalmonFarmingSection = () => {
  return (
    <section className="grid grid-rows-[1fr, auto, 1fr] px-6 lg:px-12 py-3 lg:py-7">
      <DashboardSection
        title="Hyper-growth in salmon farming"
        chartOrder="order-2"
        id="hyper-growth"
        textOrder="order-1"
        content="Salmon production has experienced unparalleled growth. Almost nonexistent 30 years ago, it surged to three million tons of salmon in 2021, equating to the farming and slaughtering of one billion salmon."
      />
    </section>
  );
};

const TopCountriesSection = () => {
  const [mapData, setMapData] = useState({
    data: [],
    layout: {},
  });
  useEffect(() => {
    const fetchGraphData = async () => {
      const mapResponse = await fetchData("evolution-map");
      setMapData(mapResponse);
    };
    fetchGraphData();
  }, [mapData]);
  return (
    <section className="grid grid-rows-[1fr, auto, 1fr] px-6 lg:px-12 py-3 lg:py-7">
      <DashboardSection
        title="Main countries producing farmed salmon"
        chartOrder="order-1"
        id="top-10"
        textOrder="order-2"
        content="Salmon require cold waters to grow, and thus production is concentrated in a few countries located far to the North or far to the South. Today, four countries alone account for 90% of the world's salmon production."
      />
      <DashboardChart
        data={mapData.data}
        layout={mapData.layout}
        id="evolution-map"
      />
    </section>
  );
};

const MainProductionSection = () => {
  return (
    <section className="grid grid-rows-[1fr, auto, 1fr] px-6 lg:px-12 py-3 lg:py-7">
      <DashboardSection
        title="Main producers of open-net salmon"
        chartOrder="order-1"
        id="top-comp"
        textOrder="order-2"
        cta={
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full">
            CTA
          </button>
        }
        content="Small artisanal salmon farms have given way to industrial aquaculture. In just a few decades, the market has come to be dominated by a handful of multinationals. Mowi, formerly Marine Harvest, leads the sector. The company operates in 25 countries."
      />
    </section>
  );
};

const LandPlantsSection = () => {
  return (
    <section className="grid grid-rows-[1fr, auto, 1fr] px-6 lg:px-12 py-3 lg:py-7">
      <DashboardSection
        title="The new threat: on land plants"
        chartOrder="order-1"
        id="top-land"
        textOrder="order-2"
        content="In 2021, the combined theoretical production capacity of land-based salmon farms amounts to 2.5 million tonnes, nearly as high as the the world’s salmon production in marine farms (2.7 million tonnes). "
      />
      <div className="px-12 py-24">
        <p className="text-center">
          Land-based farms use RAS technology (Recirculating Aquaculture
          Systems) in fully enclosed tanks. Whilst, this approach to salmon
          farming gives control over the impact on biodiversity and the local
          environment (limited disease contamination, rejection of feces and
          salmon escapes), it also requires large amount of fresh water and is
          very energy-hungry, as it aims to recreate very precisely the natural
          conditions found in the sea. As a result, the carbon footprint of
          salmon produced on land is higher than salmon produced in marine
          farms. In order to make such farms profitable, the fish density can be
          3 times higher than in marine farms. And there has been a small number
          of accidents where large number of fish died as a result of inadequate
          water conditions and a fire at a plant in Denmark.
        </p>
      </div>
    </section>
  );
};
