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
      <AboutSection content={t.raw("why.content")} />
      <TitleBlock
        spaceY="mt-12 lg:mt-24 mb-4 lg:mb-8"
        id="who-section-title"
        title={t("who.title")}
      />
      <AboutSection content={t.raw("who.content")} />

      <TitleBlock
        spaceY="mt-12 lg:mt-24 mb-4 lg:mb-8"
        id="methods-section-title"
        title={t("methods.title")}
      />
      <AboutSection content={t.raw("methods.content")} />
    </>
  );
};

const MacroSection = () => {
  const t = useTranslations("about");

  return (
    <>
      <AboutSection
        title={t("macro.title")}
        content={t.raw("macro.content")}
        id="macro-section"
      />
      <AboutSection
        subtitle={t("macro.calculator.title")}
        content={t.raw("macro.calculator.content")}
        id="macro-calculator-section"
      />
      <AboutSection
        subtitle={t("macro.salmon-collapse.title")}
        content={t.raw("macro.salmon-collapse.content")}
        id="macro-salmon-collapse-section"
      />
      <AboutSection
        subtitle={t("macro.hyper-growth.title")}
        content={t.raw("macro.hyper-growth.content")}
        id="macro-hyper-growth-section"
      />

      <AboutSection
        subtitle={t("macro.consumption.title")}
        content={t.raw("macro.consumption.content")}
        id="macro-consumption-section"
      />
    </>
  );
};

const AlternativesSection = () => {
  const t = useTranslations("about");

  return (
    <AboutSection
      id="alternatives-section"
      title={t("alternatives.title")}
      content={t.raw("alternatives.content")}
    />
  );
};

const CompaniesSection = () => {
  const t = useTranslations("about");

  return (
    <>
      <AboutSection id="companies-section" title={t("companies.title")} />
      <AboutSection
        id="companies-top-comp-section"
        subtitle={t("companies.top-comp.title")}
        content={t.raw("companies.top-comp.content")}
      />
      <AboutSection
        id="companies-top-land-section"
        subtitle={t("companies.top-land.title")}
        content={t.raw("companies.top-land.content")}
      />
      <AboutSection
        id="companies-future-land-based-section"
        subtitle={t("companies.future-land-based.title")}
        content={t.raw("companies.future-land-based.content")}
      />
      <AboutSection
        id="companies-future-land-keys-section"
        subtitle={t("companies.future-land-keys.title")}
        content={t.raw("companies.future-land-keys.content")}
      />
    </>
  );
};

const BiodiversitySection = () => {
  const t = useTranslations("about");

  return (
    <>
      <AboutSection id="biodiversity-section" title={t("biodiversity.title")} />
      <AboutSection
        id="biodiversity-deforestation-section"
        subtitle={t("biodiversity.deforestation.title")}
        content={t.raw("biodiversity.deforestation.content")}
      />
      <AboutSection
        id="biodiversity-escapes-section"
        subtitle={t("biodiversity.escapes.title")}
        content={t.raw("biodiversity.escapes.content")}
      />
    </>
  );
};

const HumanSection = () => {
  const t = useTranslations("about");

  return (
    <>
      <AboutSection id="human-health-section" title={t("human-health.title")} />
      <AboutSection
        id="human-health-antibiotic-section"
        subtitle={t("human-health.antibiotic.title")}
        content={t.raw("human-health.antibiotic.content")}
      />
      <AboutSection
        id="human-health-microplastics-section"
        subtitle={t("human-health.microplastics.title")}
        content={t.raw("human-health.microplastics.content")}
      />
    </>
  );
};

const AnimalSection = () => {
  const t = useTranslations("about");

  return (
    <>
      <AboutSection
        id="animal-welfare-section"
        title={t("animal-welfare.title")}
      />

      <AboutSection
        id="animal-welfare-density-section"
        subtitle={t("animal-welfare.density.title")}
        content={t.raw("animal-welfare.density.content")}
      />
      <AboutSection
        id="animal-welfare-mortality-section"
        subtitle={t("animal-welfare.mortality.title")}
        content={t.raw("animal-welfare.mortality.content")}
      />
    </>
  );
};

const ClimateSection = () => {
  const t = useTranslations("about");

  return (
    <>
      <AboutSection id="climat-section" title={t("climate.title")} />
      <AboutSection
        id="climat-emissions-section"
        subtitle={t("climate.emissions.title")}
        content={t.raw("climate.emissions.content")}
      />
    </>
  );
};

const SocialSection = () => {
  const t = useTranslations("about");

  return (
    <>
      <AboutSection id="social-section" title={t("social.title")} />
      <AboutSection
        id="social-resources-section"
        subtitle={t("social.resources.title")}
        content={t.raw("social.resources.content")}
      />
    </>
  );
};
