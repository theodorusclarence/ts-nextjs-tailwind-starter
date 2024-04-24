"use client";

import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import "@/lib/env";

import CustomDashboardSection from "@/components/CustomDashboardSection";
import DashboardSection from "@/components/DashboardSection";
import IntroBlock from "@/components/IntroBlock";
import JoinBlock from "@/components/JoinBlock";
import Summary, { SummaryLinksProps } from "@/components/Summary";
import TitleBlock from "@/components/TitleBlock";

import { fetchData } from "@/pages/api/chart";

const DashboardChart = dynamic(() => import("@/components/DashboardChart"), {
  ssr: false,
});

const summary: SummaryLinksProps = [
  {
    title: "Intro",
    sublinks: [
      {
        label: "Wild Altantic salmon collapse",
        targetId: "salmon-collapse",
      },
      {
        label: "Hyper-growth in salmon farming",
        targetId: "hyper-growth",
      },
      {
        label: "Main countries producing farmed salmon",
        targetId: "top-10",
      },
    ],
  },
  {
    title: "Companies",
    sublinks: [
      {
        label: "Main producers of open-net salmon",
        targetId: "top-comp",
      },
      {
        label: "The new threat: on land-based aquaculture farms",
        targetId: "top-land",
      },
      {
        label: "The future of land-based aquaculture farms",
        targetId: "future-land-based",
      },
    ],
  },
  {
    title: "Biodiversity",
    sublinks: [
      {
        label: "Deforestation",
        targetId: "deforestation",
      },
      {
        label: "Escapes",
        targetId: "escapes-rates",
      },
    ],
  },
  {
    title: "Animal welfare",
    sublinks: [
      {
        label: "Stress in land-based facilities",
        targetId: "salmon-collapse",
      },
      {
        label: "Mortality rate",
        targetId: "hyper-growth",
      },
    ],
  },
  {
    title: "Climate",
    sublinks: [
      {
        label: "Carbon",
        targetId: "salmon-collapse",
      },
    ],
  },
  {
    title: "Social",
    sublinks: [
      {
        label: "/",
        targetId: "salmon-collapse",
      },
    ],
  },
  {
    title: "Alternatives",
    sublinks: [
      {
        label: "Nutrition matrix",
        targetId: "salmon-collapse",
      },
    ],
  },
];

const DashboardPage = () => {
  return (
    <>
      <IntroBlock title="The numbers behind the story" />
      <Summary links={summary} />
      <section>
        <TitleBlock id="intro" title="Introduction" />
        <SalmonCollapseSection />
        <SalmonFarmingSection />
        <TopCountriesSection />
        <SalmonConsumptionSection />
      </section>

      <section>
        <TitleBlock id="companies" title="Companies" />
        <MainProductionSection />
        <LandPlantsSection />
        <SalmonConsumptionBisSection />
      </section>

      <section>
        <TitleBlock id="biodiversity" title="Biodiversity" />
        <DeforestationSection />
        <EscapeSection />
      </section>

      <section>
        <TitleBlock id="human-health" title="Human health" />
        <AntibioticSection />
      </section>

      <JoinBlock headDark={false} />
    </>
  );
};

export default DashboardPage;

const SalmonCollapseSection = () => {
  return (
    <DashboardSection
      title="Wild Altantic salmon collapse"
      id="salmon-collapse"
      content="The Atlantic salmon was added to the IUCN Red List of Threatened Species in December 2023. This is largely due to overfishing, habitat degradation, particularly caused by dams blocking migratory routes, as well as climate change altering their environments, impacting their growth and survival rates."
    />
  );
};

const SalmonFarmingSection = () => {
  return (
    <DashboardSection
      title="Hyper-growth in salmon farming"
      id="hyper-growth"
      content="Salmon production has experienced unprecedented growth. Nearly nonexistent 30 years ago, it surged to three million tons of salmon in 2021, equivalent to the farming and slaughtering of one billion salmon."
    />
  );
};

const TopCountriesSection = () => {
  const [mapData, setMapData] = useState({
    data: [],
    layout: {},
  });
  const fetchGraphData = async () => {
    const mapResponse = await fetchData("graphs", "evolution-map");
    setMapData(mapResponse);
  };
  useEffect(() => {
    fetchGraphData();
  }, []);

  if (!mapData) {
    return <></>;
  }

  return (
    <>
      <DashboardSection
        title="Main countries producing farmed salmon"
        id="top-10"
        content="Salmon require cold waters to grow, and thus production is concentrated in a few countries located far to the North or far to the South. Today, four countries alone account for 90% of the world's salmon production."
      />

      <div className="p-6 md:p-12 max-w-[1500px] mx-auto text-center">
        <h3 className="h3 text-red1 text-center">
          Salmon farming evolution by country
        </h3>

        <DashboardChart
          data={mapData.data}
          layout={mapData.layout}
          id="evolution-map"
        />
      </div>
    </>
  );
};

const SalmonConsumptionSection = () => {
  return (
    <DashboardSection
      id=""
      title="Salmon Consumption"
      content="The United States is the largest consumer of salmon, followed by Japan and Russia. European countries are also significant consumers of salmon, with France leading the pack with a high consumption rate of 4.4kg per person per year."
    />
  );
};

const MainProductionSection = () => {
  return (
    <DashboardSection
      title="Main producers of open-net salmon"
      id="top-comp"
      content="Small artisanal salmon farms have given way to industrial aquaculture. In a few decades, the market has become dominated by a handful of multinational corporations. Mowi, formerly known as Marine Harvest, is the leader in the sector. The company operates in 25 countries."
    />
  );
};

const LandPlantsSection = () => {
  return (
    <>
      <DashboardSection
        title="The new threat: on land plants"
        id="top-land"
        mainContent="
          In 2021, the theoretical combined production capacity of 
          land-based salmon farms amounted to 2.5 million tons, nearly equaling 
          the global production of salmon in marine farms (2.7 million tons)."
        content="
          Land-based farms use RAS technology (Recirculating Aquaculture Systems) 
          in fully enclosed tanks. Whilst, this approach to salmon farming gives
          control over the impact on biodiversity and the local
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
      <div
        id="future-land-based"
        className="p-6 md:p-12 max-w-[1500px] mx-auto"
      >
        <div className="lg:w-2/4">
          <h3 className="h3 text-red1">
            The future of land-based aquaculture farms
          </h3>
          <p className="text-xl font-bold py-4">
            A land-based farm producing 10,000 tons of salmon per year - if
            built - would require as much electricity as a city of 45,000
            inhabitants (to be confirmed). Currently, there are several projects
            in Europe, including mega-farms aiming to produce 100,000 tons or
            more per year.
          </p>
          <p className="text-xl">
            Despite technological and profitability challenges, the industry is
            investing heavily in land-based farms, with a large number of
            projects announced over the past 5 years. Many farms are being
            planned or are under construction in Europe, Asia, the Middle East,
            and the United States to supply their local markets.
          </p>
        </div>
        <div className="flex flex-wrap gap-y-6 md:gap-y-12 py-20">
          <div className="w-full md:w-1/2 lg:w-1/4 md:pr-10">
            <h3 className="h3 pb-4 text-red1">+91.1%</h3>
            <p className="text-xl">
              Combined land-based farm (RAS) projects could represent an
              increase of over 91% in global salmon production.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 md:pr-10">
            <h3 className="h3 pb-4 text-red1">291 Billion</h3>
            <p className="text-xl">
              More than 290 billion wild fish, known as forage fish, will be
              harvested annually to produce the necessary meal to feed these new
              salmon.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 md:pr-10">
            <h3 className="h3 pb-4 text-red1">1.4 Million</h3>
            <p className="text-xl">
              These same meals contain soy. 975,000 hectares will be required
              for soy production, equivalent to approximately 1.4 million
              football fields.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 md:pr-10">
            <h3 className="h3 pb-4 text-red1">15.8 Million</h3>
            <p className="text-xl">
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
      </div>
    </>
  );
};
const SalmonConsumptionBisSection = () => {
  return (
    <DashboardSection
      title="Salmon Consumption"
      id=""
      mainContent="The United States are by far the largest consumers of salmon, followed by Japan and Russia. European countries are also significant consumers of this fish. Salmon consumption per capita for these major countries is approximately 2 kg/person/year and can reach values exceeding 5 kg/person/year."
      content="Apparent salmon consumption (all species combined) is calculated as production, including aquaculture and capture, plus imports minus exports. All data is provided by the FAO. Conversion factors between product weight and live weight are approximated using FAO documentation: https://www.fao.org/3/bt963e/bt963e.pdf These approximations may lead to erroneous indicators, especially in sparsely populated and/or high-production countries. This is why per capita consumption is not included in the graph."
    />
  );
};

const DeforestationSection = () => {
  return (
    <CustomDashboardSection
      title="Deforestation"
      src="/images/deforestation.webp"
      id="deforestation"
      content="The ambition of the Norwegian government was to increase salmon production by 500% by 2050. This will require the importation of 11,000 km2 of soybean production from Brazil. This is equivalent to the legal deforestation of the Amazon in 2022."
    />
  );
};

const EscapeSection = () => {
  return (
    <DashboardSection
      title="Escapes"
      id="escapes-rates"
      content="From 2018 to 2022, over 4,000,000 salmon escaped from the farms of the 11 largest producers. These escaped salmon pose a threat to wildlife as they... [source]. *No data from Cooke was found."
    />
  );
};

const AntibioticSection = () => {
  return (
    <DashboardSection
      title="Antibiotic consumption"
      id="antibiotic-conso"
      content="If Norway is claiming to have less than 99% of its aquaculture antibiotics-free, other countries are not as vertuous. In Chile, the use of antibiotics has increased by 1/3 since covid-crisis.  In Chile: 421 tonnes of atb used for the 17 major producers, i.e. 0.04% (tonnes of atb /tonne of fish produced) on average. Rates diminished in 2018, but because of the covid crisis, they have risen again in 2021 to reach a rate of tonnes atb/tonnes fish i.e., 1/3 higher than in 2018."
    />
  );
};
