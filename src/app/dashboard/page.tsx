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
      <GlobalTrendSection />
      <SalmonCollapseSection />
      <SalmonFarmingSection />
      <TopCountriesSection />
      <section className="grid grid-rows-[1fr, auto, 1fr] px-6 lg:px-12 py-3 lg:py-7 min-h-48 text-red1 bg-pink1">
        <h2 className={clsx("h2", "row-start-3 self-end items-left")}>
          Compagnies
        </h2>
      </section>
      <MainProductionSection />
      <LandPlantsSection />
      <section className="grid grid-rows-[1fr, auto, 1fr] px-6 lg:px-12 py-3 lg:py-7 min-h-48 text-red1 bg-pink1">
        <h2 className={clsx("h2", "row-start-3 self-end items-left")}>
          Human health
        </h2>
      </section>
      <AntibioticSection />
    </>
  );
};

export default DashboardPage;

const IntroSection = () => {
  return (
    <section className="grid grid-rows-[1fr, auto, 1fr] px-6 lg:px-12 py-3 lg:py-7 h-screen min-h-96 text-red1 bg-pink1">
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
        content="The Atlantic salmon was added to the IUCN Red List of Threatened Species in December 2023. This is largely due to overfishing, habitat degradation, particularly caused by dams blocking migratory routes, as well as climate change altering their environments, impacting their growth and survival rates."
      />
    </section>
  );
};

const SalmonFarmingSection = () => {
  return (
    <section className="grid grid-rows-[1fr, auto, 1fr] px-6 lg:px-12 py-3 lg:py-7">
      <DashboardSection
        title="Hyper-growth in salmon farming"
        id="hyper-growth"
        content="Salmon production has experienced unprecedented growth. Nearly nonexistent 30 years ago, it surged to three million tons of salmon in 2021, equivalent to the farming and slaughtering of one billion salmon."
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

  if (!mapData) {
    return <></>;
  }

  return (
    <section className="grid grid-rows-[1fr, auto, 1fr] px-6 lg:px-12 py-3 lg:py-7">
      <DashboardSection
        title="Main countries producing farmed salmon"
        id="top-10"
        content="Salmon require cold waters to grow, and thus production is concentrated in a few countries located far to the North or far to the South. Today, four countries alone account for 90% of the world's salmon production."
      />
      <h3 className="h3 text-red1 text-center">
        Salmon farming evolution by country
      </h3>

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
        id="top-comp"
        cta={
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full">
            CTA
          </button>
        }
        content="Small artisanal salmon farms have given way to industrial aquaculture. In a few decades, the market has become dominated by a handful of multinational corporations. Mowi, formerly known as Marine Harvest, is the leader in the sector. The company operates in 25 countries."
      />
    </section>
  );
};

const LandPlantsSection = () => {
  return (
    <section className="grid grid-rows-[1fr, auto, 1fr] px-6 lg:px-12 py-3 lg:py-7">
      <DashboardSection
        title="The new threat: on land plants"
        id="top-land"
        content="In 2021, the theoretical combined production capacity of land-based salmon farms amounted to 2.5 million tons, nearly equaling the global production of salmon in marine farms (2.7 million tons).Land-based farms use RAS technology (Recirculating Aquaculture Systems) in fully enclosed tanks. Whilst, this approach to salmon farming gives control over the impact on biodiversity and the local
          environment (limited disease contamination, rejection of feces and
          salmon escapes), it also requires large amount of fresh water and is
          very energy-hungry, as it aims to recreate very precisely the natural
          conditions found in the sea. As a result, the carbon footprint of
          salmon produced on land is higher than salmon produced in marine
          farms. In order to make such farms profitable, the fish density can be
          3 times higher than in marine farms. And there has been a small number
          of accidents where large number of fish died as a result of inadequate
          water conditions and a fire at a plant in Denmark."
      />
      <div className="text-left w-2/4 py-8">
        <h3 className="h3 text-red1">
          The future of land-based aquaculture farms
        </h3>
        <p className="font-semibold py-4">
          A land-based farm producing 10,000 tons of salmon per year - if built
          - would require as much electricity as a city of 45,000 inhabitants
          (to be confirmed). Currently, there are several projects in Europe,
          including mega-farms aiming to produce 100,000 tons or more per year.
        </p>
        <p>
          Despite technological and profitability challenges, the industry is
          investing heavily in land-based farms, with a large number of projects
          announced over the past 5 years. Many farms are being planned or are
          under construction in Europe, Asia, the Middle East, and the United
          States to supply their local markets.
        </p>
      </div>
      <div className="text-left flex">
        <div className="w-1/4">
          <h3 className="h3 text-red1 py-4">+91.1%</h3>
          <p className="py-8 px-4">
            Combined land-based farm (RAS) projects could represent an increase
            of over 91% in global salmon production.
          </p>
        </div>
        <div className="w-1/4">
          <h3 className="h3 text-red1 py-4">291 Billion</h3>
          <p className="py-8 px-4">
            More than 290 billion wild fish, known as forage fish, will be
            harvested annually to produce the necessary meal to feed these new
            salmon.
          </p>
        </div>
        <div className="w-1/4">
          <h3 className="h3 text-red1 py-4">1.4 Million</h3>
          <p className="py-8 px-4">
            These same meals contain soy. 975,000 hectares will be required for
            soy production, equivalent to approximately 1.4 million football
            fields.
          </p>
        </div>
        <div className="w-1/4">
          <h3 className="h3 text-red1 py-4">15.8 Million</h3>
          <p className="py-8 px-4">
            The electricity consumption required for filtering, cooling, and
            circulating water in RAS farms is equivalent to the annual
            consumption of 15.8 million Europeans.
          </p>
        </div>
      </div>
      <iframe
        title="Land plants map"
        src="/iframes/map-land-plan.html"
        width={1000}
        height={900}
        className="w-full"
      ></iframe>
    </section>
  );
};

const AntibioticSection = () => {
  return (
    <section className="grid grid-rows-[1fr, auto, 1fr] px-6 lg:px-12 py-3 lg:py-7">
      <DashboardSection
        title="Antibiotic consumption"
        id="antibiotic-conso"
        content="If Norway is claiming to have less than 99% of its aquaculture antibiotics-free, other countries are not as vertuous. In Chile, the use of antibiotics has increased by 1/3 since covid-crisis.  In Chile: 421 tonnes of atb used for the 17 major producers, i.e. 0.04% (tonnes of atb /tonne of fish produced) on average. Rates diminished in 2018, but because of the covid crisis, they have risen again in 2021 to reach a rate of tonnes atb/tonnes fish i.e., 1/3 higher than in 2018."
      />
    </section>
  );
};
