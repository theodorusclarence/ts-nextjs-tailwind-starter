"use client";

import clsx from "clsx";
import Image from "next/image";
import * as React from "react";
import "@/lib/env";

import "../styles/page.css";

import Edito from "@/components/Edito";
import IconCard from "@/components/IconCard";
import IntroBlock from "@/components/IntroBlock";
import JoinBlock from "@/components/JoinBlock";

const HomePage = () => {
  return (
    <>
      <IntroBlock
        title="The salmon you eat, sell, produce"
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
    <section className="flex p-6 lg:p-12 min-h-[300px] h-screen max-h-[900px] text-red1 bg-darkblue1">
      <div className="grid grid-rows-[1fr, auto, 1fr] w-full max-w-[1500px] mx-auto">
        <Image
          src="/images/bombs.svg"
          alt=""
          width={766}
          height={616}
          className="row-start-2 self-center justify-self-center w-24 md:w-36 lg:w-[450px] 2xl:w-[766px] max-h-full object-contain"
        />
        <div className="row-start-3 self-end items-left flex gap-2 items-end">
          <p className={clsx("h1", "w-full")}>kills, starves, contaminates.</p>
          <Image src="/images/bottom.svg" alt="" width="50" height="37" />
        </div>
      </div>
    </section>
  );
};

const ExplodeSection = () => {
  return (
    <section className="flex items-center justify-center p-6 lg:p-12 lg:py-24 text-red1 bg-darkblue1 min-h-screen">
      <ul
        className="
        relative grid grid-cols-1 xs:grid-cols-2 gap-8 list-none bg-no-repeat bg-center
        xs:bg-[url(/images/explose-small.svg)] xs:bg-[length:438px_320px]
        lg:bg-[url(/images/explose.svg)]
        lg:w-[969px] lg:h-[829px] lg:bg-[length:727px_662px]
        2xl:w-[1515px] 2xl:h-[1190px] 2xl:bg-[length:969px_829px]
      "
      >
        <li className="lg:absolute lg:-left-[40px] lg:top-[180px] 2xl:left-[112px] 2xl:top-[430px]">
          <IconCard
            icon={{ src: "/images/people.svg", width: 130, height: 114 }}
            title="Social"
            content="Diverts food from West African communities"
          />
        </li>
        <li className="lg:absolute lg:left-[80px] lg:-bottom-[20px] 2xl:left-[242px] 2xl:bottom-0">
          <IconCard
            icon={{ src: "/images/climat.svg", width: 94, height: 153 }}
            title="Climate"
            content="Generates a carbon footprint equivalent to that of 10,000 inhabitants"
          />
        </li>
        <li className="lg:absolute lg:-right-[185px] lg:top-[45px] 2xl:right-[70px] 2xl:top-[250px]">
          <IconCard
            icon={{ src: "/images/hearth.svg", width: 95, height: 99 }}
            title="Health"
            content="Raises concerns about human health due to diseases requiring medication and microplastics"
          />
        </li>
        <li className="lg:absolute lg:-right-[110px] lg:bottom-[90px] 2xl:right-[140px] 2xl:bottom-[120px]">
          <IconCard
            icon={{ src: "/images/butterfly.svg", width: 120, height: 116 }}
            title="Biodiversity"
            content="Degrades marine biodiversity, including escapees, pollution, parasites, and overexploitation of wild stocks"
          />
        </li>
        <li className="lg:absolute lg:right-[240px] lg:-bottom-[160px] 2xl:right-[140px] 2xl:bottom-[120px]">
          <IconCard
            title="animal condition"
            content="Stress, diseases, excess mortality as consequences of intensive breeding."
          />
        </li>
      </ul>
    </section>
  );
};

const EditoSection = () => {
  const editosContent = [
    {
      title: "Biodiversity",
      content:
        "Intensive salmon farming has significant impacts on marine biodiversity, including escapees, water pollution from waste discharge, parasites affecting wild populations, and increased pressure on wild fish stocks due to the demand for fishmeal, thereby contributing to overexploitation and declining biodiversity.",
      link: "/",
      image: {
        small: "/images/storytelling/biodiversity-400.jpg",
        medium: "/images/storytelling/biodiversity-600.jpg",
        large: "/images/storytelling/biodiversity-1200.jpg",
      },
    },
    {
      title: "Health",
      content:
        "The high concentration of fish in aquaculture farms promotes the spread of diseases, necessitating the use of pathogens or medications, which can have consequences for human health. Additionally, the increasing presence of microplastics in salmon raises concerns for human health.",
      link: "/",
      image: {
        small: "/images/storytelling/health-400.jpg",
        medium: "/images/storytelling/health-600.jpg",
        large: "/images/storytelling/health-1200.jpg",
      },
    },
    {
      title: "Climate",
      content:
        "Intensive salmon farming generates greenhouse gas emissions, primarily carbon dioxide (CO2) from energy used in facilities, feed production, and transportation, as well as methane resulting from the decomposition of organic waste.",
      link: "/",
      image: {
        small: "/images/storytelling/climat-400.jpg",
        medium: "/images/storytelling/climat-600.jpg",
        large: "/images/storytelling/climat-1200.jpg",
      },
    },
    {
      title: "Social",
      content:
        "Each year, over 500,000 tonnes of wild fish are harvested off the coast of West Africa to feed farmed fish, jeopardizing the food security of local communities.",
      link: "/",
      image: {
        small: "/images/storytelling/social-400.jpg",
        medium: "/images/storytelling/social-600.jpg",
        large: "/images/storytelling/social-1200.jpg",
      },
    },
    {
      title: "Animal condition",
      content:
        "The very high density of salmon in cages leads to illness and stress. Sea lice eat the flesh of disfigured fish. Mortality rates within cages are very abnormally high.",
      link: "/",
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
  return (
    <section className="p-6 lg:px-12 lg:pt-36 lg:pb-64 text-red1 bg-darkblue1">
      <div className="max-w-[1500px] mx-auto">
        <h3 className={clsx("h3", "mb-4 lg:mb-6 max-w-5xl m-auto text-center")}>
          And all this with the impunity of an exponentially growing industry.
        </h3>
        <p className="mb-6 lg:mb-14 max-w-xl text-xl text-white m-auto text-center">
          Salmon production, dominated by a handful of multinationals, has
          experienced hyper-growth on a global scale for several decades.
        </p>

        <Image
          src="/images/storytelling/business-full.jpg"
          alt=""
          className="w-full h-96 xl:h-[690px] object-contain"
          width={1000}
          height={600}
          loading="lazy"
        />
      </div>
    </section>
  );
};
