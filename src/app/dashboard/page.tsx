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
import Calculator from "@/components/Calculator";

const DashboardChart = dynamic(() => import("@/components/DashboardChart"), {
  ssr: false,
});

const summary: SummaryLinksProps = [
  {
    title: "Intro",
    sublinks: [
      {
        label: "Effondrement du saumon sauvage de l'Atlantique",
        targetId: "salmon-collapse",
      },
      {
        label: "Hyper-croissance de l’élevage du saumon",
        targetId: "hyper-growth",
      },
      {
        label: "Principaux pays producteurs de saumon d'élevage",
        targetId: "top-10",
      },
      {
        label: "Consommation",
        targetId: "intro-consumption",
      },
    ],
  },
  {
    title: "Entreprises",
    sublinks: [
      {
        label: "Principaux producteurs de saumon en filet ouvert",
        targetId: "top-comp",
      },
      {
        label: "La nouvelle menace: sur fermes aquacoles terrestres",
        targetId: "top-land",
      },
      {
        label: "Le futur des fermes aquacoles terrestres",
        targetId: "future-land-based",
      },
      {
        label: "Consommation",
        targetId: "companies-consumption",
      },
    ],
  },
  {
    title: "Biodiversité",
    sublinks: [
      {
        label: "Deforestation",
        targetId: "deforestation",
      },
      {
        label: "Les évasions",
        targetId: "escapes-rates",
      },
    ],
  },
  {
    title: "Human health",
    sublinks: [
      {
        label: "Consommation d'antibiotiques",
        targetId: "antibiotic-conso",
      },
      {
        label: "Microplastique",
        targetId: "microplastics",
      },
    ],
  },
  {
    title: "Bien être animal",
    sublinks: [
      {
        label: "Densité / stress dans usine à terre",
        targetId: "stress-onshore",
      },
      {
        label: "Taux de mortalité",
        targetId: "mortality-rates",
      },
    ],
  },
  {
    title: "Climat",
    sublinks: [
      {
        label: "Carbon",
        targetId: "carbon-bomb",
      },
    ],
  },
  {
    title: "Social",
    sublinks: [
      {
        label: "Carbon",
        targetId: "social-carbon",
      },
    ],
  },
  {
    title: "Alternatives",
    sublinks: [
      {
        label: "Matrice de nutrition",
        targetId: "alternatives",
      },
    ],
  },
];

const DashboardPage = () => {
  return (
    <>
      <IntroBlock title="Les chiffres derrière l’histoire" />
      <Summary links={summary} />

      <Calculator
        data={[
          { multiplicator: 18, label: "saumons abattus" },
          {
            multiplicator: 8107,
            label: "poissons fourrages pêchés pour alimenter les saumons",
          },
          { multiplicator: 0.5, label: "tonnes de CO2 émis par l'industrie" },
          {
            multiplicator: 618,
            label:
              "Euros de chiffre d'affaire pour les entreprises leadeurs du marché",
          },
        ]}
      />

      <section>
        <TitleBlock id="intro" title="Intro" />
        <SalmonCollapseSection />
        <SalmonFarmingSection />
        <TopCountriesSection />
        <SalmonConsumptionSection />
      </section>

      <section>
        <TitleBlock id="companies" title="Entreprises" />
        <MainProductionSection />
        <LandPlantsSection />
        <SalmonConsumptionBisSection />
      </section>

      <section>
        <TitleBlock id="biodiversity" title="Biodiversité" />
        <DeforestationSection />
        <EscapeSection />
      </section>

      <section>
        <TitleBlock id="human-health" title="Santé humaine" />
        <AntibioticSection />
        <MicroplasticSection />
      </section>

      <section>
        <TitleBlock id="animal-welfare" title="Animal welfare" />
        <StressOnshoreSection />
        <MortalityRateSection />
      </section>

      <section>
        <TitleBlock id="climate" title="Climate" />
        <CarbonSection />
      </section>

      <section>
        <TitleBlock id="social" title="Social" />
        <SocialCarbonSection />
      </section>

      <section>
        <TitleBlock id="alternatives" title="Alternatives" />
        <NutritionMatrixSection />
      </section>

      <JoinBlock headDark={false} />
    </>
  );
};

export default DashboardPage;

const SalmonCollapseSection = () => {
  return (
    <DashboardSection
      title="Effondrement du saumon sauvage de l'Atlantique"
      id="salmon-collapse"
      content="Le saumon atlantique est inscrit sur la Liste rouge de l'UICN des espèces menacées en décembre 2023 . Cela est dû en grande partie à la surpêche, à la dégradation de l'habitat, notamment due aux barrages bloquant les routes migratoires, mais aussi au changement climatique qui modifie leurs environnements, impactant leurs taux de croissance et de survie."
    />
  );
};

const SalmonFarmingSection = () => {
  return (
    <DashboardSection
      title="Hyper-croissance de l’élevage du saumon"
      id="hyper-growth"
      content="La production de saumon a connu une croissance sans précédent. Quasi inexistante il y a 30 ans, elle a bondi à trois millions de tonnes de saumon en 2021, soit l’équivalent de l’élevage et de l’abattage d’un milliard de saumons."
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
        title="Principaux pays producteurs de saumon d'élevage"
        id="top-10"
        content="Le saumon a besoin d'eaux froides pour croître et la production est donc concentrée dans quelques pays situés loin au nord ou au sud. Aujourd'hui, quatre pays représentent à eux seuls 90 % de la production mondiale de saumon."
      />

      <div className="p-6 md:p-12 max-w-[1500px] mx-auto text-center">
        <h3 className="h3 text-red1 text-center">
          Evolution de l'élevage du saumon par pays
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
    <CustomDashboardSection
      title="Consommation de saumon"
      id="intro-consumption"
      content="Les États-Unis sont les plus gros consommateurs de saumon, suivis par le Japon et la Russie. Les pays européens sont aussi d’importants consommateurs saumon, la France étant en tête de proue avec une consommation élevée qui atteint 4,4kg/an/personne. "
    />
  );
};

const MainProductionSection = () => {
  return (
    <DashboardSection
      title="Principaux producteurs de saumon en CAGES MARINES"
      id="top-comp"
      content="Les petites fermes salmonicoles artisanales ont cédé la place à l’aquaculture industrielle. En quelques décennies, le marché est devenu dominé par une poignée de multinationales. Mowi, anciennement Marine Harvest, est leader du secteur. L'entreprise est présente dans 25 pays."
    />
  );
};

const LandPlantsSection = () => {
  const [mapData, setMapData] = useState("");
  const fetchGraphData = async () => {
    const mapResponse = await fetchData("maps", "ras-map", false);
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
        title="La nouvelle menace: Les fermes aquacoles terrestres"
        id="top-land"
        mainContent="
    En 2021, la capacité de production théorique combinée des élevages terrestres
    de saumon s’élève à 2,5 millions de tonnes, soit presque autant que la production
    mondiale de saumon dans les élevages marins (2,7 millions de tonnes)."
        content="
    Les fermes terrestres utilisent la technologie RAS (Recycled Aquaculture Systems)
    dans des réservoirs entièrement fermés. Si cette approche de l'élevage du saumon permet de
    limiter l'impact sur la biodiversité et l'environnement local (contamination limitée par les maladies,
    rejet des excréments et des évasions de saumons), elle nécessite également de grandes quantités
    d'eau douce et est très gourmande en énergie, car elle vise à recréer très précisément
    les conditions de l’habitat naturel des saumons.
    En conséquence, l’empreinte carbone du saumon produit sur terre est plus élevée que celle
    du saumon produit dans les fermes marines. Afin de rentabiliser de telles fermes,
    la densité de poissons peut être 3 fois plus élevée que dans les fermes marines.
    La technologie n’est pas encore totalement maîtrisée : actuellement, aucune usine en
    fonctionnement ne produit plus de 5 000 tonnes et les incidents techniques sont fréquents.
    Une usine au Danemark en a subi cinq, résultant de défaillances techniques
    (pollution au chlorure de fer dans le fjord, incendie complet de son usine, engendrant pollution de l’air et de l’eau)."
      />
      <div
        id="future-land-based"
        className="p-6 md:p-12 max-w-[1500px] mx-auto"
      >
        <div className="lg:w-2/4">
          <h3 className="h3 text-red1">
            Le futur des fermes aquacoles terrestres
          </h3>
          <p className="text-xl font-bold py-4">
            Une ferme terrestre produisant 10 000 tonnes de saumon par an - si
            elle était construite - nécessiterait autant d'électricité qu'une
            ville de 39 215 habitant·e·s. Il existe actuellement plusieurs
            projets en Europe, dont des méga-fermes visant à produire 100 000
            tonnes ou plus par an.
          </p>
          <p className="text-xl">
            Malgré les défis technologiques et de rentabilité, l'industrie
            investit massivement dans les fermes terrestres, avec un grand
            nombre de projets annoncés au cours des 5 dernières années. De
            nombreuses fermes envisagent d'être construites ou sont déjà en
            cours de construction en Europe, en Asie, au Moyen-Orient et aux
            États-Unis pour approvisionner leurs marchés locaux.
          </p>
        </div>
        <div className="flex flex-wrap gap-y-6 md:gap-y-12 py-20">
          <div className="w-full md:w-1/2 lg:w-1/4 md:pr-10">
            <h3 className="h3 pb-4 text-red1">+91.1%</h3>
            <p className="text-xl">
              Les projets combinés de fermes terrestres (RAS) pourraient
              représenter une augmentation de plus de 91 % de la production
              mondiale de saumon.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 md:pr-10">
            <h3 className="h3 pb-4 text-red1">291 Milliards</h3>
            <p className="text-xl">
              Plus de 290 milliards de poissons sauvages, appelés poissons
              fourrage, seront pêchés pour produire la farine nécessaire chaque
              année à nourrir ces nouveaux saumons.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 md:pr-10">
            <h3 className="h3 pb-4 text-red1">1.4 Millions</h3>
            <p className="text-xl">
              Ces mêmes farines contiennent du soja. 975 000 hectares seront
              nécessaires à la production de ce soja, l'équivalent d'environ 1,4
              millions de terrains de football.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 md:pr-10">
            <h3 className="h3 pb-4 text-red1">15.8 Millions</h3>
            <p className="text-xl">
              La consommation électrique nécessaire pour filtrer, refroidir et
              faire circuler l'eau des fermes RAS représente l'équivalent de la
              consommation annuelle de 15,8 millions d'européens.
            </p>
          </div>
        </div>
        <iframe
          title="Carte des fermes terrestres"
          id="ras-map"
          srcDoc={mapData}
          width={1000}
          height={900}
          className="w-full"
        />
      </div>
    </>
  );
};
const SalmonConsumptionBisSection = () => {
  return (
    <CustomDashboardSection
      title="Consommation"
      id="companies-consumption"
      mainContent="Les États-Unis sont de loin les plus gros consommateurs de saumon, suivis par le Japon et la Russie. Les pays européens sont également d’importants consommateurs de ce poisson. La consommation de saumon par habitant pour ces grands pays est d'environ 2 kg/personne/an et peut atteindre des valeurs supérieures à 5 kg/personne/an."
      content="La consommation apparente de saumon (toutes espèces confondues) est calculée comme la production, y compris l'aquaculture et la capture, plus les importations moins les exportations. Toutes les données sont fournies par la FAO. Les facteurs de conversion entre le poids du produit et le poids vif sont approximés à l'aide de la documentation de la FAO : https://www.fao.org/3/bt963e/bt963e.pdf
    Ces approximations peuvent conduire à des indicateurs erronés, surtout dans les pays peu peuplés et/ou à forte production. C’est pour cette raison que la consommation par habitant n’est pas incluse dans le graphique."
    />
  );
};

const DeforestationSection = () => {
  return (
    <CustomDashboardSection
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
    />
  );
};

const MicroplasticSection = () => {
  return (
    <CustomDashboardSection
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
    <CustomDashboardSection
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
    />
  );
};

const CarbonSection = () => {
  return (
    <DashboardSection
      title="Carbon"
      id="carbon-bomb"
      content="
      L'industrie du saumon a émis environ 16 millions de tonnes de CO2 en 2021, tout comme un pays comme la Slovénie ou l'objectif d'émissions de 8 millions d'êtres humains en 2050.
Environ 90 % des émissions totales proviennent de la chaîne de valeur, principalement de l'alimentation du poisson et du transport.
Cette valeur est extrapolée à partir des émissions de 9 des plus grands producteurs de saumon."
    />
  );
};

const SocialCarbonSection = () => {
  return (
    <CustomDashboardSection
      title="Carbon"
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

const NutritionMatrixSection = () => {
  return (
    <DashboardSection
      title="Matrices de nutrition"
      id="alternatives"
      mainContent="Malgré certains avantages nutritionnels néanmoins remplaçables, les impacts environnementaux et sociaux négatifs du saumon devraient nous inciter à envisager des alternatives dans notre alimentation."
      content="Comme vous pouvez le constater, il existe de nombreuses raisons pour lesquelles la consommation de saumon est problématique. Alors pourquoi en mangeons-nous autant ? Tout d’abord, le storytelling autour du saumon véhicule une image très positive (pour les grandes occasions, désirable…), mais on entend aussi beaucoup de bonnes choses sur ses bienfaits nutritionnels.
      Il nous semble intéressant de relativiser ces bénéfices nutritionnels, en tenant compte des différents impacts sur la santé, l’environnement et la société. Cela nous donnera une vision globale des conséquences de la consommation de saumon, mais nous aidera également à découvrir des alternatives à ce produit, qui pourraient être aussi bonnes pour nous que pour l'environnement et le reste de l'humanité."
    />
  );
};
