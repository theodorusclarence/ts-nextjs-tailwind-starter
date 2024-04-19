'use client';

import * as React from 'react';
import '@/lib/env';

const AboutPage = () => {
  return (
    <>
      <IntroSection />
    </>
  );
}

export default AboutPage;

const IntroSection = () => {
  return (
    <section className='flex justify-between px-6 lg:px-12 py-7 h-screen min-h-96 bg-lightblue2 text-darkblue1 font-primary'>
      <div>
        <h1 className='text-5xl md:text-7xl lg:text-9xl'>About</h1>
        <p className='uppercase md:text-2xl'>Pinkbombs</p>
      </div>
      <img src='/images/saumon.jpg' className='size-20 lg:size-44 lg:mr-10'></img>
    </section>
  )
};
