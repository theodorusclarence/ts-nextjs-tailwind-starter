'use client';

import Link from 'next/link';
import * as React from 'react';
import Image from 'next/image';
import '@/lib/env';
import clsx from 'clsx';

import IconCard from '@/components/IconCard';
import Edito from '@/components/Edito';

import '../styles/page.css';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

const HomePage = () => {
  return (
    <>
        <IntroSection />
        <BombSection />
        <ExplodeSection />
        <BioSection />
        <HealthSection />
        <ClimateSection />
        <SocialSection />
        <BeTheChangeSection />
        <ActionSection />
    </>
  );
}

export default HomePage;

const IntroSection = () => {
  return (
    <section className='grid grid-rows-[1fr, auto, 1fr] px-6 lg:px-12 py-3 lg:py-7 h-screen min-h-96 text-orange2 bg-rose2'>
      <Image
        src='/svg/fish.svg'
        alt=''
        width={490}
        height={203}
        className='row-start-2 self-center justify-self-center w-24 sm:w-60 md:w-72 lg:w-[490px]'
      />
      <h1 className={clsx('h1', 'row-start-3 self-end items-left')}>
        The salmon you eat, sell, produce...
        <span className='sr-only'>kills wild salmon, starves people, contaminates food.</span>
      </h1>
    </section>
  )
};

const BombSection = () => {
  return (
    <section className='grid grid-rows-[1fr, auto, 1fr] px-6 lg:px-12 py-3 lg:py-7 h-screen min-h-96 text-orange1 bg-darkblue1'>
      <Image
        src='/svg/bomb.svg'
        alt=''
        width={207}
        height={467}
        className='row-start-2 self-center justify-self-center w-24 md:w-36 lg:w-[207px] max-h-full object-contain'
      />
      <p className='row-start-3 self-end text-2xl md:text-4xl lg:text-7xl/tight lg:max-w-[45rem] items-left font-bold uppercase' aria-hidden='true'>
      kills wild salmon, starves people, contaminates food.
      </p>
    </section>
  );
}

const ExplodeSection = () => {
  return (
    <section className='flex items-center justify-center p-6 lg:p-12 text-orange1 bg-darkblue1 min-h-screen'>
    <ul className='
        relative grid grid-cols-1 xs:grid-cols-2 gap-8 list-none bg-no-repeat bg-center
        xs:bg-[url(/svg/explose-small.svg)] xs:bg-[length:438px_320px]
        lg:bg-[url(/svg/explose.svg)]
        lg:w-[969px] lg:h-[829px] lg:bg-[length:727px_662px]
        2xl:w-[1515px] 2xl:h-[1190px] 2xl:bg-[length:969px_829px]
      '>
        <li className='lg:absolute lg:-left-[9px] lg:top-[280px] 2xl:left-[112px] 2xl:top-[430px]'>
            <IconCard
            icon={{src: '/svg/people.svg', width: 130, height:114}}
            title='Social'
            content='Diverts food from West African communities'
          />
        </li>
        <li className='lg:absolute lg:left-[92px] lg:-bottom-[40px] 2xl:left-[242px] 2xl:bottom-0'>
            <IconCard
            icon={{src: '/svg/climat.svg', width: 94, height:153}}
            title='Climate'
            content='Generates a carbon footprint equivalent to that of 10,000 inhabitants'
          />
        </li>
        <li className='lg:absolute lg:-right-[95px] lg:top-[116px] 2xl:-right-5 2xl:top-[236px]'>
            <IconCard
            icon={{src: '/svg/hearth.svg', width: 108, height:99}}
            title='Health'
            content='Raises concerns about human health due to diseases requiring medication and microplastics'
          />
        </li>
        <li className='lg:absolute lg:right-[20px] lg:bottom-[90px] 2xl:right-[90px] 2xl:bottom-[220px]'>
            <IconCard
            icon={{src: '/svg/butterfly.svg', width: 164, height:116}}
            title='Biodiversity'
            content='Degrades marine biodiversity, including escapees, pollution, parasites, and overexploitation of wild stocks'
          />
        </li>
      </ul>
    </section>
  );
};

const BioSection = () => {
  return (
    <Edito
      title='Biodiversity'
      content='Intensive salmon farming has significant impacts on marine biodiversity, including escapees, water pollution from waste discharge, parasites affecting wild populations, and increased pressure on wild fish stocks due to the demand for fishmeal, thereby contributing to overexploitation and declining biodiversity.'
      link='/'
      image='/images/mosaic-biodiversite.jpg'
      imagePosition='right'
    />
  );
};

const HealthSection = () => {
  return (
    <Edito
      title='Health'
      content='The high concentration of fish in aquaculture farms promotes the spread of diseases, necessitating the use of pathogens or medications, which can have consequences for human health. Additionally, the increasing presence of microplastics in salmon raises concerns for human health.'
      link='/'
      image='/images/mosaic-sante.jpg'
    />
  );
};

const ClimateSection = () => {
  return (
    <Edito
      title='Climate'
      content='Intensive salmon farming generates greenhouse gas emissions, primarily carbon dioxide (CO2) from energy used in facilities, feed production, and transportation, as well as methane resulting from the decomposition of organic waste.'
      link='/'
      image='/images/mosaic-climat.jpg'
      imagePosition='right'
    />
  );
};

const SocialSection = () => {
  return (
    <Edito
      title='Social'
      content='Each year, over 500,000 tonnes of wild fish are harvested off the coast of West Africa to feed farmed fish, jeopardizing the food security of local communities.'
      link='/'
      image='/images/mosaic-social.jpg'
    />
  );
};



const BeTheChangeSection = () => {
  return (
    <div className= 'relative grid grid-cols-1 grid-rows-[repeat (3, 1fr)] list-none bg-darkblue1 text-lightblue1 px-6 pb-6 md:pb-16 lg:px-12 md:pt-32'>
      <div className='relative pb-6 md:pb-16 z-10 mix-blend-difference'><h2 className='uppercase text-2xl md:text-6xl lg:text-7xl'>Be the change .</h2></div>
      <div className='relative pb-6 md:pb-16 z-10 mix-blend-difference justify-self-end md:right-52 '><p className='max-w-60 md:max-w-96 md:text-xl lg:text-2xl font-secondary'>There are alternatives to salmon in our way of eating, selling, and producing.</p></div>
      <div className='relative justify-self-center z-10'><img src='/images/saumon.jpg' alt='' className='max-w-64 md:max-w-2xl'></img></div>
      <div className='absolute z-0'><img src='/svg/wave.svg' alt=''></img></div>
    </div>
  );
  }

const ActionSection = () => {
  return (
    <div className='relative z-10 bg-orange2 px-6 md:px-12 py-6 md:py-7'>
      <div>
        <h2 className='flex justify-center md:justify-start bg-orange2 text-darkblue1 text-4xl md:text-6xl uppercase font-bold mb-10'>
          Let's talk!
        </h2>
      </div>
      <div className='flex justify-center px-6 md:px-12 py-3 md:py-7'>
        <img src='/svg/fish_eye.svg' alt='' />
      </div>
      <div className='flex flex-col px-8 md:px-20 pb-20 pt-16'>
        <div className='flex flex-col gap-5'>
          <p className='text-center md:text-left '>
            Description de Seastemik et Data4Good
          </p>
          <div className={clsx('footer__cta-wrapper', 'flex flex-col gap-4 pb-10 md:grid md:grid-cols-2 md:gap-32' )}>
            <Link
              className='block rounded bg-white px-4 py-2 text-center text-black transition duration-100 hover:bg-gray-300 md:col-start-1 uppercase font-bold'
              href="/"
            >
              Action 1
            </Link>
            <Link
              className='block rounded bg-white px-4 py-2 text-center text-black transition duration-100 hover:bg-gray-300 md:col-start-2 uppercase font-bold'
              href="/"
            >
              Action 2
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
