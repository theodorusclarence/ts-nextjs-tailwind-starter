"use client";

import clsx from "clsx";
import React, { useEffect } from 'react';
import "@/lib/env";

import DashboardSection from "@/components/DashboardSection";

import { fetchData } from '@/pages/api/chart';


const DashboardPage = () => {
  return (
    <>
      <IntroSection />
      <GlobalTrendSection />
      <SalmonCollapseSection />
      <SalmonFarmingSection />
      <TopCountriesSection />
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
    <section className="grid grid-rows-[1fr, auto, 1fr] px-6 lg:px-12 py-3 lg:py-7 h-screen min-h-74">
      <DashboardSection />
    </section>
  );
};

const SalmonCollapseSection = () => {
  const chartLayout = {
    title: "Tons of wild salmon catch in Atlantic waters"
  };
  useEffect(() => {
    const fetchGraphData = async () => {
        const data = await fetchData();
        console.log(data);
    };
    fetchGraphData();
  }, []);
  return (
    <section className="grid grid-rows-[1fr, auto, 1fr] px-6 lg:px-12 py-3 lg:py-7">
      <DashboardSection
        title="Wild Altantic salmon collapse"
        chartOrder="order-1"
        id="salmon-collapse-chart"
        textOrder="order-2"
        content="Atlantic salmon entered the IUCN Red List of Threatened Species in December 2023 . This is largely due to overfishing, habitat degradation, especially from dams blocking migratory routes, but also from climate change that alters their environments, impacting their growth and survival rates."
        chartLayout={chartLayout}
      />
    </section>
  );
};

const SalmonFarmingSection = () => {
  const chartLayout = {
    title: "Atlantic salmon - Aquaculture quantity by country year"
  };
  return (
    <section className="grid grid-rows-[1fr, auto, 1fr] px-6 lg:px-12 py-3 lg:py-7">
      <DashboardSection
        title="Hyper-growth in salmon farming"
        chartOrder="order-2"
        id="salmon-farming-chart"
        textOrder="order-1"
        content="Salmon production has experienced unparalleled growth. Almost nonexistent 30 years ago, it surged to three million tons of salmon in 2021, equating to the farming and slaughtering of one billion salmon."
        chartLayout={chartLayout}
      />
    </section>
  );
};

const TopCountriesSection = () => {
  const chartLayout = {
    title: "Top 10 countries producing salmon"
  };
  return (
    <section className="grid grid-rows-[1fr, auto, 1fr] px-6 lg:px-12 py-3 lg:py-7">
      <DashboardSection
        title="Main countries producing farmed salmon"
        chartOrder="order-1"
        id="salmon-countries-chart"
        textOrder="order-2"
        content="Salmon require cold waters to grow, and thus production is concentrated in a few countries located far to the North or far to the South. Today, four countries alone account for 90% of the world's salmon production."
        chartLayout={chartLayout}
      />
      <div>SalmonFarming by country</div>
    </section>
  );
};
