"use client";

import { useTranslations } from "next-intl";
import * as React from "react";
import "@/lib/env";

import AboutSection from "@/components/AboutSection";
import IntroBlock from "@/components/IntroBlock";
import TitleBlock from "@/components/TitleBlock";

const About = () => {
  const t = useTranslations("about");

  return (
    <>
      <IntroBlock title={t("title")} />
      <ExplainSection />

      <TitleBlock title={t("sources")} />
      <MacroSection />
      <AlternativesSection />
      <CompaniesSection />
      <BiodiversitySection />
      <HumanSection />
      <AnimalSection />
      <ClimateSection />
      <SocialSection />
    </>
  );
};

export default About;

const ExplainSection = () => {
  const t = useTranslations("about");

  return (
    <>
      <TitleBlock
        spaceY="mb-4 lg:mb-8"
        id="why-section-title"
        title={t("why.title")}
      />
      <AboutSection content={t("why.content")} />

      <TitleBlock
        spaceY="mt-12 lg:mt-24 mb-4 lg:mb-8"
        id="who-section-title"
        title={t("who.title")}
      />
      <AboutSection content={t("who.content")} />

      <TitleBlock
        spaceY="mt-12 lg:mt-24 mb-4 lg:mb-8"
        id="methods-section-title"
        title={t("methods.title")}
      />
      <AboutSection content={t("methods.content")} />
    </>
  );
};

const MacroSection = () => {
  const t = useTranslations("about");

  return (
    <>
      <AboutSection
        title={t("macro.title")}
        content={t("macro.content")}
        id="macro-section"
      />
      <AboutSection
        subtitle={t("macro.calculator.title")}
        content={t("macro.calculator.content")}
        id="macro-calculator-section"
      />
      <AboutSection
        subtitle={t("macro.salmon-collapse.title")}
        content={t("macro.salmon-collapse.content")}
        id="macro-salmon-collapse-section"
      />
      <AboutSection
        subtitle={t("macro.hyper-growth.title")}
        content={t("macro.hyper-growth.content")}
        id="macro-hyper-growth-section"
      />
    </>
  );
};

const AlternativesSection = () => {
  const t = useTranslations("about");

  return (
    <>
      <AboutSection
        content={t("alternatives.content")}
        title={t("alternatives.title")}
        id="alternatives-section"
      />
    </>
  );
};

const CompaniesSection = () => {
  const t = useTranslations("about");

  return (
    <>
      <AboutSection
        content={t("companies.content")}
        title={t("companies.title")}
        id="companies-section-title"
      />
    </>
  );
};

const BiodiversitySection = () => {
  const t = useTranslations("about");

  return (
    <>
      <AboutSection
        content={t("biodiversity.content")}
        title={t("biodiversity.title")}
        id="biodiversity-section-title"
      />
    </>
  );
};

const HumanSection = () => {
  const t = useTranslations("about");

  return (
    <>
      <AboutSection
        content={t("human_health.content")}
        title={t("human_health.title")}
        id="human-health-section-title"
      />
    </>
  );
};

const AnimalSection = () => {
  const t = useTranslations("about");

  return (
    <>
      <AboutSection
        content={t("animal_welfare.content")}
        title={t("animal_welfare.title")}
        id="animal-welfare-section-title"
      />
    </>
  );
};

const ClimateSection = () => {
  const t = useTranslations("about");

  return (
    <>
      <AboutSection
        content={t("climate.content")}
        title={t("climate.title")}
        id="climate-section-title"
      />
    </>
  );
};

const SocialSection = () => {
  const t = useTranslations("about");
  return (
    <>
      <AboutSection
        content={t("social.content")}
        title={t("social.title")}
        id="social-section-title"
      />
    </>
  );
};
