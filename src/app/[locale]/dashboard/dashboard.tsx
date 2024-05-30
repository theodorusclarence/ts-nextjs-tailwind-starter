"use client";

import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import React from "react";
import "@/lib/env";

import Calculator from "@/components/Calculator";
import DashboardSection from "@/components/DashboardSection";
import IntroBlock from "@/components/IntroBlock";
import JoinBlock from "@/components/JoinBlock";
import MetaChart from "@/components/MetaChart";
import { SummaryLinksProps } from "@/components/Summary";
import TitleBlock from "@/components/TitleBlock";

const Chart = dynamic(() => import("@/components/Chart"), {
  ssr: false,
});

const Dashboard = () => {
  const t = useTranslations("dashboard");
  const summary: SummaryLinksProps = [
    {
      id: "intro",
      title: t("sections.intro.title"),
      sublinks: [
        {
          label: t("sections.intro.blocks.salmon-collapse.title"),
          targetId: "salmon-collapse-block",
        },
        {
          label: t("sections.intro.blocks.hyper-growth.title"),
          targetId: "hyper-growth-block",
        },
        {
          label: t("sections.intro.blocks.top-10.title"),
          targetId: "top-10-block",
        },
        /*{
          label: t("sections.intro.blocks.intro-consumption.title"),
          targetId: "intro-consumption-block",
        },*/
      ],
    },
    {
      id: "company",
      title: t("sections.company.title"),
      sublinks: [
        {
          label: t("sections.company.blocks.top-comp.title"),
          targetId: "top-comp-block",
        },
        {
          label: t("sections.company.blocks.top-land.title"),
          targetId: "top-land-block",
        },
        {
          label: t("sections.company.blocks.future-land-based.title"),
          targetId: "future-land-based-block",
        },
        /*{
          label: t("sections.company.blocks.companies-consumption.title"),
          targetId: "companies-consumption-block",
        },*/
      ],
    },
    {
      id: "biodiversity",
      title: t("sections.biodiversity.title"),
      sublinks: [
        {
          label: t("sections.biodiversity.blocks.deforestation.title"),
          targetId: "deforestation-block",
        },
        {
          label: t("sections.biodiversity.blocks.escapes-rates.title"),
          targetId: "escapes-rates-block",
        },
      ],
    },
    {
      id: "health",
      title: t("sections.health.title"),
      sublinks: [
        {
          label: t("sections.health.blocks.antibiotic-conso.title"),
          targetId: "antibiotic-conso-block",
        },
        {
          label: t("sections.health.blocks.microplastics.title"),
          targetId: "microplastics-block",
        },
      ],
    },
    {
      id: "animals",
      title: t("sections.animals.title"),
      sublinks: [
        {
          label: t("sections.animals.blocks.stress-onshore.title"),
          targetId: "stress-onshore-block",
        },
        {
          label: t("sections.animals.blocks.mortality-rates.title"),
          targetId: "mortality-rates-block",
        },
      ],
    },
    {
      id: "climate",
      title: t("sections.climate.title"),
      sublinks: [
        {
          label: t("sections.climate.blocks.carbon-bomb.title"),
          targetId: "carbon-bomb-block",
        },
      ],
    },
    {
      id: "social",
      title: t("sections.social.title"),
      sublinks: [
        {
          label: t("sections.social.blocks.social-carbon.title"),
          targetId: "social-carbon-block",
        },
      ],
    },
    {
      id: "alternative",
      title: t("sections.alternative.title"),
      sublinks: [
        {
          label: t("sections.alternative.blocks.alternatives.title"),
          targetId: "alternatives-block",
        },
      ],
    },
  ];

  return (
    <>
      <IntroBlock title={t("title")} summary={summary} />

      <Calculator
        data={[
          { multiplicator: 18, label: t("calculator.salmon") },
          {
            multiplicator: 8107,
            label: t("calculator.fish"),
          },
          { multiplicator: 0.5, label: t("calculator.companies") },
          {
            multiplicator: 618,
            label: t("calculator.money"),
          },
        ]}
      />

      <section>
        <TitleBlock title={t("sections.intro.title")} />
        <SalmonCollapseSection />
        <SalmonFarmingSection />
        <TopCountriesSection />
        {/* <SalmonConsumptionSection /> */}
      </section>

      <section>
        <TitleBlock title={t("sections.company.title")} />
        <MainProductionSection />
        <LandPlantsSection />
        {/* <SalmonConsumptionBisSection /> */}
      </section>

      <section>
        <TitleBlock
          id="biodiversity-section"
          title={t("sections.biodiversity.title")}
        />
        <DeforestationSection />
        <EscapeSection />
      </section>

      <section>
        <TitleBlock id="health-section" title={t("sections.health.title")} />
        <AntibioticSection />
        <MicroplasticSection />
      </section>

      <section>
        <TitleBlock id="animals-section" title={t("sections.animals.title")} />
        <StressOnshoreSection />
        <MortalityRateSection />
      </section>

      <section>
        <TitleBlock id="climate-section" title={t("sections.climate.title")} />
        <CarbonSection />
      </section>

      <section>
        <TitleBlock id="social-section" title={t("sections.social.title")} />
        <SocialCarbonSection />
      </section>

      <JoinBlock headDark={false} />
    </>
  );
};

export default Dashboard;

const SalmonCollapseSection = () => {
  const t = useTranslations("dashboard");

  return (
    <DashboardSection
      title={t("sections.intro.blocks.salmon-collapse.title")}
      id="salmon-collapse"
      content={t.raw("sections.intro.blocks.salmon-collapse.content")}
      meta={{
        data: [
          {
            type: "source",
            isBlank: true,
            link: "https://nasco.int/ices-2/statistics/",
            moreInfo: t("sections.intro.blocks.salmon-collapse.source"),
          },
          {
            type: "methodology",
            link: "/to-act#",
          },
          {
            type: "data",
            link: t("sections.intro.blocks.salmon-collapse.data"),
            artifact: t("sections.intro.blocks.salmon-collapse.artifact"),
          },
        ],
      }}
      hasChart
    />
  );
};

const SalmonFarmingSection = () => {
  const t = useTranslations("dashboard");

  return (
    <DashboardSection
      title={t("sections.intro.blocks.hyper-growth.title")}
      id="hyper-growth"
      content={t.raw("sections.intro.blocks.hyper-growth.content")}
      meta={{
        data: [
          {
            type: "source",
            isBlank: true,
            link: "https://www.fao.org/fishery/en/collection/aquaculture?lang=en",
            moreInfo: t("sections.intro.blocks.hyper-growth.source"),
          },
          {
            type: "methodology",
            link: "/to-act#",
          },
          {
            type: "data",
            link: t("sections.intro.blocks.hyper-growth.data"),
            artifact: t("sections.intro.blocks.hyper-growth.artifact"),
          },
        ],
      }}
      hasChart
    />
  );
};

const TopCountriesSection = () => {
  const t = useTranslations("dashboard");

  return (
    <>
      <DashboardSection
        title={t("sections.intro.blocks.top-10.title")}
        id="top-10"
        content={t.raw("sections.intro.blocks.top-10.content")}
        meta={{
          data: [
            {
              type: "source",
              isBlank: true,
              link: "https://www.fao.org/fishery/en/collection/aquaculture?lang=en",
              moreInfo: t("sections.intro.blocks.top-10.source"),
            },
            {
              type: "methodology",
              link: "/to-act#",
            },
            {
              type: "data",
              link: t("sections.intro.blocks.top-10.data"),
              artifact: t("sections.intro.blocks.top-10.artifact"),
            },
          ],
        }}
        hasChart
      />

      <div className="p-6 md:p-12 max-w-[1500px] mx-auto text-center">
        <h3 className="h3 mb-4 lg:mb-8 text-red1 text-center">
          {t("sections.intro.blocks.top-10.subblock.title")}
        </h3>

        <Chart id="evolution-map" className="min-h-[700px]" />
        <MetaChart
          data={[
            {
              type: "source",
              link: t("sections.intro.blocks.top-10.subblock.source"),
              isBlank: true,
            },
            {
              type: "methodology",
              link: "/to-act#tendances",
            },
            {
              type: "data",
              link: t("sections.intro.blocks.top-10.subblock.data"),
              artifact: t("sections.intro.blocks.top-10.subblock.artifact"),
            },
          ]}
        />
      </div>
    </>
  );
};

/*
const SalmonConsumptionSection = () => {
  const t = useTranslations("dashboard");

  return (
    <DashboardSection
      title={t("sections.intro.blocks.intro-consumption.title")}
      id="intro-consumption"
      content={t("sections.intro.blocks.intro-consumption.content")}
      hasChart
    />
  );
};
*/

const MainProductionSection = () => {
  const t = useTranslations("dashboard");

  return (
    <DashboardSection
      title={t("sections.company.blocks.top-comp.title")}
      id="top-comp"
      content={t.raw("sections.company.blocks.top-comp.content")}
      meta={{
        data: [
          {
            type: "source",
            artifact: "2023-Salmon-Farming-Industry-Handbook-2023.pdf",
            link: "https://mowi.com/wp-content/uploads/2023/06/2023-Salmon-Farming-Industry-Handbook-2023.pdf",
            moreInfo: t("sections.company.blocks.top-comp.source"),
          },
          {
            type: "methodology",
            link: "/to-act#",
          },
          {
            type: "data",
            link: t("sections.company.blocks.top-comp.data"),
            artifact: t("sections.company.blocks.top-comp.artifact"),
          },
        ],
      }}
      hasChart
    />
  );
};

const LandPlantsSection = () => {
  const t = useTranslations("dashboard");
  const data = [];
  for (let i = 0; i < 4; i++) {
    data.push({
      title: t(`sections.company.blocks.future-land-based.data.${i}.title`),
      content: t(`sections.company.blocks.future-land-based.data.${i}.content`),
    });
  }

  return (
    <>
      <DashboardSection
        title={t("sections.company.blocks.top-land.title")}
        id="top-land"
        mainContent={t.raw("sections.company.blocks.top-land.mainContent")}
        content={t.raw("sections.company.blocks.top-land.content")}
        meta={{
          data: [
            {
              type: "methodology",
              link: "/to-act#",
            },
            {
              type: "data",
              link: t("sections.company.blocks.top-comp.data"),
              artifact: t("sections.company.blocks.top-comp.artifact"),
            },
          ],
        }}
        hasChart
      />

      <div
        id="future-land-based-block"
        className="p-6 md:p-12 max-w-[1596px] mx-auto"
      >
        <div className="lg:w-2/4">
          <h3 className="h3 mb-4 lg:mb-8 text-red1">
            {t("sections.company.blocks.future-land-based.title")}
          </h3>
          <div
            className="p-leavy prose mb-4"
            dangerouslySetInnerHTML={{
              __html: t.raw(
                "sections.company.blocks.future-land-based.mainContent",
              ),
            }}
          />
          <div
            className="prose mb-4"
            dangerouslySetInnerHTML={{
              __html: t.raw(
                "sections.company.blocks.future-land-based.content",
              ),
            }}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 mt-20">
          {data.map((d, key) => (
            <div key={`data-${key}`}>
              <h4 className="h4 pb-4 text-red1">{d.title}</h4>
              <p>{d.content}</p>
            </div>
          ))}
        </div>
        <MetaChart
          data={[
            {
              type: "methodology",
              link: "/to-act#tendances",
            },
          ]}
        />

        <Chart id="ras-map" type="maps" className="min-h-[900px]" />
      </div>
    </>
  );
};

/*
const SalmonConsumptionBisSection = () => {
  const t = useTranslations("dashboard");

  return (
    <DashboardSection
      title={t("sections.company.blocks.companies-consumption.title")}
      hasChart
      id="companies-consumption"
      mainContent={t("sections.company.blocks.companies-consumption.mainContent")}
      content={t("sections.company.blocks.companies-consumption.content")}
    />
  );
};
*/

const DeforestationSection = () => {
  const t = useTranslations("dashboard");

  return (
    <DashboardSection
      title={t("sections.biodiversity.blocks.deforestation.title")}
      src="/images/deforestation.webp"
      id="deforestation"
      content={t.raw("sections.biodiversity.blocks.deforestation.content")}
    />
  );
};

const EscapeSection = () => {
  const t = useTranslations("dashboard");

  return (
    <DashboardSection
      title={t("sections.biodiversity.blocks.escapes-rates.title")}
      id="escapes-rates"
      content={t.raw("sections.biodiversity.blocks.escapes-rates.content")}
      hasChart
    />
  );
};

const AntibioticSection = () => {
  const t = useTranslations("dashboard");

  return (
    <DashboardSection
      title={t("sections.health.blocks.antibiotic-conso.title")}
      id="antibiotic-conso"
      mainContent={t.raw("sections.health.blocks.antibiotic-conso.mainContent")}
      content={t.raw("sections.health.blocks.antibiotic-conso.content")}
      hasChart
    />
  );
};

const MicroplasticSection = () => {
  const t = useTranslations("dashboard");

  return (
    <DashboardSection
      title={t("sections.health.blocks.microplastics.title")}
      src="/images/microplastics.webp"
      id="microplastics"
      content={t.raw("sections.health.blocks.microplastics.content")}
    />
  );
};

const StressOnshoreSection = () => {
  const t = useTranslations("dashboard");

  return (
    <DashboardSection
      title={t("sections.animals.blocks.stress-onshore.title")}
      src="/images/stress.webp"
      id="stress-onshore"
      content={t.raw("sections.animals.blocks.stress-onshore.content")}
    />
  );
};

const MortalityRateSection = () => {
  const t = useTranslations("dashboard");

  return (
    <DashboardSection
      title={t("sections.animals.blocks.mortality-rates.title")}
      id="mortality-rates"
      mainContent={t.raw("sections.animals.blocks.mortality-rates.mainContent")}
      content={t.raw("sections.animals.blocks.mortality-rates.content")}
      hasChart
    />
  );
};

const CarbonSection = () => {
  const t = useTranslations("dashboard");

  return (
    <DashboardSection
      title={t("sections.climate.blocks.carbon-bomb.title")}
      id="carbon-bomb"
      content={t.raw("sections.climate.blocks.carbon-bomb.content")}
      hasChart
    />
  );
};

const SocialCarbonSection = () => {
  const t = useTranslations("dashboard");

  return (
    <DashboardSection
      title={t("sections.social.blocks.social-carbon.title")}
      src="/images/social-carbon.webp"
      id="social-carbon"
      mainContent={t.raw("sections.social.blocks.social-carbon.mainContent")}
      content={t.raw("sections.social.blocks.social-carbon.content")}
    />
  );
};
