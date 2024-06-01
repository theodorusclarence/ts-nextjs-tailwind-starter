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

      <WhySection />
      <WhoSection />
      <MethodsSection />

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

const WhySection = () => {
  const t = useTranslations("about");

  return (
    <>
      <TitleBlock id="why-section-title" title={t("why.title")} />
      <AboutSection content={t("why.content")} />
    </>
  );
};

const WhoSection = () => {
  const t = useTranslations("about");

  return (
    <>
      <TitleBlock id="who-section-title" title={t("who.title")} />
      <AboutSection content={t("who.content")} />
    </>
  );
};

const MethodsSection = () => {
  const t = useTranslations("about");

  return (
    <>
      <TitleBlock id="methods-section-title" title={t("methods.title")} />
      <AboutSection content={t("methods.content")} />
    </>
  );
};

const MacroSection = () => {
  const t = useTranslations("about");

  return (
    <>
      <AboutSection
        content={t("macro.content")}
        title={t("macro.title")}
        id="macro-section-title"
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
        id="alternatives-section-title"
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
