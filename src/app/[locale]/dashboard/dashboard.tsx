"use client";

import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import React from "react";
import "@/lib/env";

import Calculator from "@/components/Calculator";
import DashboardSection from "@/components/DashboardSection";
import IntroBlock from "@/components/IntroBlock";
import JoinBlock from "@/components/JoinBlock";
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
        <TitleBlock title={t("sections.biodiversity.title")} />
        <DeforestationSection />
        <EscapeSection />
      </section>

      <section>
        <TitleBlock title={t("sections.health.title")} />
        <AntibioticSection />
        <MicroplasticSection />
      </section>

      <section>
        <TitleBlock title={t("sections.animals.title")} />
        <StressOnshoreSection />
        <MortalityRateSection />
      </section>

      <section>
        <TitleBlock title={t("sections.climate.title")} />
        <CarbonSection />
      </section>

      <section>
        <TitleBlock title={t("sections.social.title")} />
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
        hasChart
      />

      <div className="p-6 md:p-12 max-w-[1500px] mx-auto text-center">
        <h3 className="h3 mb-4 lg:mb-8 text-red1 text-center">
          {t("sections.intro.blocks.top-10.subblock.title")}
        </h3>

        <Chart id="evolution-map" type="maps" className="min-h-[700px]" />
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 py-20">
          {data.map((d, key) => (
            <div key={`data-${key}`}>
              <h4 className="h4 pb-4 text-red1">{d.title}</h4>
              <p>{d.content}</p>
            </div>
          ))}
        </div>
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
  return (
    <DashboardSection
      title="Déforestation"
      src="/images/deforestation.webp"
      id="deforestation"
      content="L'ambition du gouvernement norvégien prévoyait d'augmenter la production de 500 % d'ici 2050. Cela nécessitera l'importation de 11 000 km2 de production de soja du Brésil. Cela équivaut à la déforestation légale de l’Amazonie en 2022."
    />
  );
};

const EscapeSection = () => {
  return (
    <DashboardSection
      title="Les évasions"
      id="escapes-rates"
      content="De 2018 à 2022, plus de 4 000 000 de saumons se sont échappés des élevages des 11 plus grands producteurs*. Ces saumons menacent la faune car ils... [source].

      *Aucune donnée de Cooke n’a été trouvée."
      hasChart
    />
  );
};

const AntibioticSection = () => {
  return (
    <DashboardSection
      title="Consommation d'antibiotiques"
      id="antibiotic-conso"
      mainContent="Si la Norvège prétend que moins de 99 % de son aquaculture est exempte d'antibiotiques, d'autres pays ne sont pas aussi vertueux. Au Chili, l'utilisation d'antibiotiques a augmenté d'un tiers depuis la crise du covid."
      content="Au Chili : 421 tonnes d'atb utilisées pour les 17 principaux producteurs, soit 0,04% (tonnes d'atb/tonne de poisson produit) en moyenne. Les taux ont diminué en 2018, mais du fait de la crise covid, ils ont de nouveau augmenté en 2021 pour atteindre un taux en tonnes atb/tonne de poisson soit 1/3 supérieur à celui de 2018."
      hasChart
    />
  );
};

const MicroplasticSection = () => {
  return (
    <DashboardSection
      title="Microplastique"
      src="/images/microplastics.webp"
      id="microplastics"
      content="Un saumon de 5 kg contient environ 575 microplastiques.
      Une personne française moyenne consommant 4,4 kg de saumon par an ingérera environ 575 microplastiques par an sur un total de 97.500 provenant de différentes sources.
      Les microplastiques sont particulièrement présents dans le saumon en raison de la bioaccumulation dans la chaîne alimentaire et de l'affinité des plastiques pour les graisses.
      Cela affecte surtout les saumons d'élevage, qui sont nettement plus gras et vivent dans des environnements riches en plastiques."
    />
  );
};

const StressOnshoreSection = () => {
  return (
    <DashboardSection
      title="Densité / stress dans usine à terre"
      src="/images/stress.webp"
      id="stress-onshore"
      content="La densité de saumons est trois fois plus élevée dans des usines à terre par rapport à des élevages en mer déjà trop denses, pour des raisons de rentabilité.
      Les conséquences peuvent être nombreuses :
      mortalité de masse liées à des pathogènes, plus hauts niveaux de stress."
    />
  );
};

const MortalityRateSection = () => {
  return (
    <DashboardSection
      title="Taux de mortalité"
      id="mortality-rates"
      mainContent="Les taux de mortalité varient considérablement d'un producteur à l'autre et d'une année à l'autre. Des taux exceptionnellement élevés sont observés, atteignant 20 % certaines années."
      content="Certains producteurs atteignent des taux de mortalité bien inférieurs grâce à de meilleures pratiques mais aussi à la législation locale. Attention : ces chiffres ne prennent en compte que la mortalité en mer. La mortalité dans les plans d'eau douce est proche de 30% (rapports Multiexport)"
      hasChart
    />
  );
};

const CarbonSection = () => {
  return (
    <DashboardSection
      title="Impact carbone"
      id="carbon-bomb"
      content="
      L'industrie du saumon a émis environ 16 millions de tonnes de CO2 en 2021, tout comme un pays comme la Slovénie ou l'objectif d'émissions de 8 millions d'êtres humains en 2050.
Environ 90 % des émissions totales proviennent de la chaîne de valeur, principalement de l'alimentation du poisson et du transport.
Cette valeur est extrapolée à partir des émissions de 9 des plus grands producteurs de saumon."
      hasChart
    />
  );
};

const SocialCarbonSection = () => {
  return (
    <DashboardSection
      title="Impact carbone"
      src="/images/social-carbon.webp"
      id="social-carbon"
      mainContent="En 2020, 3 % de tous les poissons capturés dans le monde sont élevés pour le saumon de l'Atlantique (2,72 millions de tonnes)."
      content="Le saumon étant carnivore, il est nécessaire de le nourrir avec des farines à base de poissons. Le saumon d'élevage moyen consomme l'équivalent de 5 fois son propre poids en poisson, issu de la pêche industrielle.
      Et ce type de surpêche a eu de nombreux impacts sociaux négatifs, comme en Mauritanie et en Gambie, où la quantité de poisson dans la mer a été réduite et où les quelques poissons pêchés sont achetés par les industriels pour un prix insignifiant, limitant l'emploi et la vie de la communauté locale. accès à l’une des principales sources de leur approvisionnement alimentaire.
      [Article sur l'impact de la pêche industrielle] -> ici (ou un autre)
      Les captures annuelles mondiales de poissons, coquillages et crustacés devraient atteindre environ 90 millions de tonnes d'ici 2020. La grande majorité de ce volume est destinée à la consommation humaine (environ 70 millions). Et puis, près de la moitié de ce qui reste (42 %) est utilisée pour la production mondiale de farine de poisson, approvisionnant le secteur aquacole (pour la pisciculture)."
    />
  );
};
