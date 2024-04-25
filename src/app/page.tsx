"use client";

import clsx from "clsx";
import dynamic from "next/dynamic";
import Image from "next/image";
import * as React from "react";
import "@/lib/env";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

import { useEffect, useState } from "react";

import "../styles/page.css";

import Edito from "@/components/Edito";
import IconCard from "@/components/IconCard";
import IntroBlock from "@/components/IntroBlock";
import JoinBlock from "@/components/JoinBlock";

import { fetchData } from "@/pages/api/chart";

const HomePage = () => {
  return (
    <>
      <IntroBlock
        title="Le saumon que vous 
        mangez, vendez, produisez..."
        image="/images/salmon.svg"
      />

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
  return (
    <section className="flex p-6 lg:p-12 min-h-[300px] h-screen text-red1 bg-darkblue1">
      <div className="grid grid-rows-[1fr, auto, 1fr] w-full">
        <Image
          src="/images/bombs.svg"
          alt=""
          width={766}
          height={616}
          className="row-start-2 self-center justify-self-center w-24 md:w-36 lg:w-[450px] 2xl:w-[766px] max-h-full object-contain"
        />
        <div className="row-start-3 self-end items-left flex gap-2 items-end">
          <p className={clsx("h1", "w-full")}>Tue, affame et contamine.</p>
          <Image src="/images/bottom.svg" alt="" width="50" height="37" />
        </div>
      </div>
    </section>
  );
};

const ExplodeSection = () => {
  return (
    <section className="flex items-center justify-center p-6 lg:p-12 lg:pt-24 lg:pb-48 2xl:py-24 text-red1 bg-darkblue1 min-h-screen">
      <div className="relative">
        <p className="mb-6 md:mb-12 mx-auto text-xl lg:absolute 2xl:left-[600px] 2xl:bottom-[260px] lg:max-w-96 text-center text-white">
          L’industrie du saumon est une bombe écologique et sociale
        </p>
        <ul
          className="
        grid grid-cols-1 xs:grid-cols-2 gap-8 list-none bg-no-repeat bg-center
        xs:bg-[url(/images/explose-small.svg)] xs:bg-[length:438px_320px]
        lg:bg-[url(/images/explose.svg)]
        lg:w-[969px] lg:h-[829px] lg:bg-[length:727px_662px]
        2xl:w-[1515px] 2xl:h-[1190px] 2xl:bg-[length:969px_829px]
      "
        >
          <li className="lg:absolute lg:-left-[20px] lg:top-[180px] 2xl:left-[112px] 2xl:top-[330px]">
            <IconCard
              icon={{ src: "/images/people.svg", width: 130, height: 114 }}
              title="Social"
              content="Détourne la nourriture des communautés d'Afrique de l'Ouest"
            />
          </li>
          <li className="lg:absolute lg:left-[80px] lg:bottom-[20px] 2xl:left-[242px] 2xl:bottom-[180px]">
            <IconCard
              icon={{ src: "/images/climat.svg", width: 94, height: 153 }}
              title="Climat"
              content="Génère une empreinte carbone collossale"
            />
          </li>
          <li className="lg:absolute lg:-right-[100px] lg:top-[45px] 2xl:-right-[100px] 2xl:top-[160px]">
            <IconCard
              icon={{ src: "/images/hearth.svg", width: 95, height: 99 }}
              title="Santé"
              content="Impacte la santé humaine à cause des polluants éternels et des microplastiques."
            />
          </li>
          <li className="lg:absolute lg:-right-[140px] lg:bottom-[120px] 2xl:-right-[80px] 2xl:bottom-[360px]">
            <IconCard
              icon={{ src: "/images/butterfly.svg", width: 120, height: 116 }}
              title="Biodiversité"
              content="Dégrade la biodiversité marine (échappées de saumons d’élevage, pollutions, parasites et déclin des espèces sauvages) et terrestre (déforestation)"
            />
          </li>
          <li className="lg:absolute lg:right-[240px] lg:-bottom-[140px] 2xl:right-[340px] 2xl:bottom-[40px]">
            <IconCard
              title="Condition animale"
              content="Provoque stress, maladies et mortalités de masse dans les élevages intensifs."
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

const EditoSection = () => {
  const editosContent = [
    {
      title: "Biodiversité",
      content:
        "L'élevage intensif de saumons a des répercussions significatives sur la biodiversité marine et les ressources planétaires : pollutions diverses, parasites affectant les espèces locales, pression accrue sur les populations de poissons sauvages, exploitation du krill d’Antarctique, déforestation, etc.",
      link: "/dashboard#",
      image: {
        small: "/images/storytelling/biodiversity-400.jpg",
        medium: "/images/storytelling/biodiversity-600.jpg",
        large: "/images/storytelling/biodiversity-1200.jpg",
      },
    },
    {
      title: "Santé",
      content:
        "La présence dans la chair des saumons de polluants organiques persistants (POP) et de microplastiques soulève des préoccupations pour la santé humaine.La concentration élevée de poissons dans les fermes aquacoles favorise la propagation de maladies, nécessitant l'utilisation d'agents pathogènes ou de médicaments.",
      link: "/dashboard#human-health",
      image: {
        small: "/images/storytelling/health-400.jpg",
        medium: "/images/storytelling/health-600.jpg",
        large: "/images/storytelling/health-1200.jpg",
        caption: "Photo credit: Ramji / Bob Brown Foundation",
      },
    },
    {
      title: "Climat",
      content:
        "L'élevage intensif de saumons génère des émissions de gaz à effet de serre, principalement du dioxyde de carbone (CO2) provenant de l'énergie utilisée dans les installations, de la production d'aliments et du transport, ainsi que du méthane résultant de la décomposition des déchets organiques.",
      link: "/dashboard#",
      image: {
        small: "/images/storytelling/climat-400.jpg",
        medium: "/images/storytelling/climat-600.jpg",
        large: "/images/storytelling/climat-1200.jpg",
      },
    },
    {
      title: "justice Sociale",
      content:
        "Chaque année 500 000+ tonnes de poissons sauvages sont prélevés aux larges des côtes de l’Afrique de l’Ouest pour nourrir des poissons d'élevage mettant en péril la sécurité alimentaire des communautés locales.",
      link: "/dashboard#",
      image: {
        small: "/images/storytelling/social-400.jpg",
        medium: "/images/storytelling/social-600.jpg",
        large: "/images/storytelling/social-1200.jpg",
      },
    },
    {
      title: "Condition animale",
      content:
        "La très forte densité des saumons en cages entraine maladies et stress. Les poux de mer rongent la chair des poissons défigurés. Les taux de mortalité au sein des cages sont très anormalement élevés.",
      link: "/dashboard#",
      image: {
        small: "/images/storytelling/animals-400.jpg",
        medium: "/images/storytelling/animals-600.jpg",
        large: "/images/storytelling/animals-1200.jpg",
      },
    },
  ];

  return (
    <>
      {editosContent.map((edito, key) => (
        <Edito
          key={`edito-${key}`}
          {...edito}
          imagePosition={key % 2 ? "left" : "right"}
        />
      ))}
    </>
  );
};

const BusinessSection = () => {
  const [plot, setPlot] = useState({
    data: [],
    layout: {},
  });
  const fetchGraphData = async () => {
    const response = await fetchData("graphs", "hyper-growth-grouped");
    setPlot(response);
  };
  useEffect(() => {
    fetchGraphData();
  }, []);

  if (!plot) {
    return <></>;
  }

  return (
    <section className="p-6 lg:px-12 lg:pt-36 lg:pb-64 text-red1 bg-darkblue1">
      <div className="max-w-[1500px] mx-auto">
        <h3 className={clsx("h3", "mb-4 lg:mb-6 max-w-5xl m-auto text-center")}>
          Et tout ça dans l’impunité d’une industrie en croissance
          exponentielle.
        </h3>
        <p className="mb-6 lg:mb-14 max-w-xl text-xl text-white m-auto text-center">
          La production de saumons, dominée par une poignée de multinationales,
          connaît depuis quelques décennies une hyper-croissance à l’échelle
          globale.
        </p>
        <div className="flex justify-center">
          <Plot data={plot.data} layout={plot.layout} />
        </div>
      </div>
    </section>
  );
};
