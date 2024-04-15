'use client';

import clsx from 'clsx';
import * as React from 'react';
import '@/lib/env';

import DashboardSection from '@/components/DashboardSection';

const DashboardPage = () => {
  return (
    <>
      <IntroSection />
      <GlobalTrendSection />
      <SalmonCollapseSection />
      <SalmonFarmingSection />
      <TopCountriesSection />
    </>
  );
}

export default DashboardPage;

const IntroSection = () => {
  return (
    <section className='grid grid-rows-[1fr, auto, 1fr] px-6 lg:px-12 py-3 lg:py-7 h-screen min-h-96 text-orange2 bg-rose2'>
      <h1 className={clsx('h1', 'row-start-3 self-end items-left')}>
        The numbers behind the story
      </h1>
    </section>
  )
};

const GlobalTrendSection = () => {
  return (
    <section className='grid grid-rows-[1fr, auto, 1fr] px-6 lg:px-12 py-3 lg:py-7 h-screen min-h-96'>
      <DashboardSection title='' className='' content='' chart='' />
    </section>
  )
};

const SalmonCollapseSection = () => {
  return (
    <section className='grid grid-rows-[1fr, auto, 1fr] px-6 lg:px-12 py-3 lg:py-7 h-screen min-h-96'>
      <DashboardSection 
        title='Wild Altantic salmon collapse' 
        className='' 
        content='Atlantic salmon entered the IUCN Red List of Threatened Species in December 2023 . This is largely due to overfishing, habitat degradation, especially from dams blocking migratory routes, but also from climate change that alters their environments, impacting their growth and survival rates.' 
        chart='' 
      />
    </section>
  )
}

const SalmonFarmingSection = () => {
  return (
    <section className='grid grid-rows-[1fr, auto, 1fr] px-6 lg:px-12 py-3 lg:py-7 h-screen min-h-96'>
      <DashboardSection 
        title='Hyper-growth in salmon farming' 
        className='' 
        content='Salmon production has experienced unparalleled growth. Almost nonexistent 30 years ago, it surged to three million tons of salmon in 2021, equating to the farming and slaughtering of one billion salmon.' 
        chart='' 
      />
    </section>
  )
}

const TopCountriesSection = () => {
  return (
    <section className='grid grid-rows-[1fr, auto, 1fr] px-6 lg:px-12 py-3 lg:py-7 h-screen min-h-96'>
      <DashboardSection 
        title='Main countries producing farmed salmon' 
        className='' 
        content="Salmon require cold waters to grow, and thus production is concentrated in a few countries located far to the North or far to the South. Today, four countries alone account for 90% of the world's salmon production." 
        chart='' 
      />
    </section>
  )
}
