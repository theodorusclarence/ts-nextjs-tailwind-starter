'use client';

import * as React from 'react';
import '@/lib/env';
import clsx from 'clsx';

const DashboardPage = () => {
  return (
    <>
      <IntroSection />
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
