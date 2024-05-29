"use client";

import { useTranslations } from "next-intl";
import * as React from "react";
import "@/lib/env";

import Edito from "@/components/Edito";
import IntroBlock from "@/components/IntroBlock";

const Act = () => {
  const t = useTranslations("act");

  return (
    <>
      <IntroBlock title={t("title")} className="bg-yellow1" />

      <Edito
        title={t("company.title")}
        titleLevel="h2"
        content={t("company.content")}
        linkLabel={t("company.link")}
        link={t("company.target")}
        className="bg-pink1"
        contentPosition="right"
        mode="light"
        image={{
          large: "/images/storytelling/biodiversity-hd.webp",
        }}
      />

      <Edito
        title={t("territory.title")}
        titleLevel="h2"
        content={t("territory.content")}
        linkLabel={t("territory.link")}
        link={t("territory.target")}
        className="bg-pink1"
        contentPosition="right"
        mode="light"
        image={{
          large: "/images/storytelling/biodiversity-hd.webp",
        }}
      />

      <Edito
        title={t("seastemik.title")}
        titleLevel="h2"
        content={t("seastemik.content")}
        linkLabel={t("seastemik.link")}
        link={t("seastemik.target")}
        className="bg-pink1"
        contentPosition="right"
        mode="light"
        image={{
          large: "/images/storytelling/biodiversity-hd.webp",
        }}
      />

      <Edito
        title={t("eat.title")}
        titleLevel="h2"
        content={t("eat.content")}
        className="bg-pink1"
        contentPosition="right"
        mode="light"
        image={{
          large: "/images/storytelling/biodiversity-hd.webp",
        }}
      />
    </>
  );
};

export default Act;
