'use client';

import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';
import Image from 'next/image';
import '@/lib/env';

import Card from '@/components/Card';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';

import TextButton from '@/components/buttons/TextButton';

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
      <Navbar />
      <main>
        <IntroSection />
        <BombSection />
        <ExplodeSection />

        {/*
        <BioSection />
        <HealthSection />
        <ClimateSection />
        <SocialSection />
        <BeTheChangeSection />
        */}
      </main>
      
      <Footer />
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
      <h1 className='row-start-3 self-end text-2xl md:text-4xl lg:text-7xl/tight items-left font-bold uppercase'>
        Le saumon que vous mangez, vendez, produisez...
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
      <p className='row-start-3 self-end text-2xl md:text-4xl lg:text-7xl/tight lg:max-w-[45rem] items-left font-bold uppercase'>
        Tue, affame et contamine.
      </p>
    </section>
  );
}

const ExplodeSection = () => {
  return (
    <section className='text-orange1 bg-darkblue1 min-h-screen'>
      <ul className='list-none'>
        <li>Toto</li>
      </ul>
    </section>
  );
};

const BioSection = () => {
  return (
    <div className='grid grid-cols-1 lg:min-h-screen lg:grid-cols-2 bg-darkblue1 text-orange2'>
      <section className='hero-section relative container mx-auto px-8 py-16 pt-16 lg:self-center '>
        <div className='mt-16 lg:mt-8'>
          <Card>
            <img className='h-3/4 w-3/4' src='/svg/mosaics/biodiversity_mosaic.svg' alt='' />
          </Card>
        </div>
      </section>
      <section className='hero-section lg:px-30 container mx-auto px-8 py-16 pt-24 lg:self-center lg:px-20 lg:pt-16'>
        <h2 className='mb-12 text-4xl font-bold lg:text-6xl'>
          BIODIVERSITE
        </h2>

        <div className='flex flex-col gap-8 lg:gap-2 w-3/5'>
          <p>
            L'élevage intensif de saumon a des répercussions significatives sur la biodiversité marine, 
            avec des échappées, une pollution de l'eau par les rejets, des parasites affectant les populations sauvages,
            et une pression accrue sur les stocks de poissons sauvages due à la demande de farine de poisson, 
            contribuant ainsi à la surexploitation et à la diminution de la biodiversité.
          </p>
          <Link
            className='block border-2 bg-darkblue1 px-4 py-2 text-center text-xl text-orange2 border-orange2 transition duration-50 hover:text-orange1 lg:inline-block'
            href="/"
            >
            <b>EN SAVOIR PLUS</b>
          </Link>
        </div>
      </section>
      
    </div>
  );
};

const HealthSection = () => {
  return (
    <div className='grid grid-cols-1 lg:min-h-screen lg:grid-cols-2 bg-darkblue1 text-orange2'>
      <section className='hero-section lg:px-30 container mx-auto px-8 py-16 pt-24 lg:self-center lg:px-20 lg:pt-16'>
        <h2 className='mb-12 text-4xl font-bold lg:text-6xl'>
          SANTE
        </h2>

        <div className='flex flex-col gap-8 lg:gap-2 w-3/5'>
          <p>
          La concentration élevée de poissons dans les fermes aquacoles favorise la propagation de maladies, 
          nécessitant l'utilisation d'agents pathogènes ou de médicaments, ce qui peut avoir des conséquences 
          sur la santé humaine. 
          De plus, la présence croissante de microplastiques dans le saumon soulève des préoccupations 
          pour la santé humaine.
          </p>
          <Link
            className='block border-2 bg-darkblue1 px-4 py-2 text-center text-xl text-orange2 border-orange2 transition duration-50 hover:text-orange1 lg:inline-block'
            href="/"
            >
            <b>EN SAVOIR PLUS</b>
          </Link>
        </div>
      </section>
      <section className='hero-section relative container mx-auto px-8 py-16 pt-16 lg:self-center '>
        <div className='mt-16 lg:mt-8'>
          <Card>
            <img className='h-3/4 w-3/4' src='/svg/mosaics/health_mosaic.svg' alt='' />
          </Card>
        </div>
      </section>
      
    </div>
  );
};

const ClimateSection = () => {
  return (
    <div className='grid grid-cols-1 lg:min-h-screen lg:grid-cols-2 bg-darkblue1 text-orange2'>
      <section className='hero-section relative container mx-auto px-8 py-16 pt-16 lg:self-center '>
        <div className='mt-16 lg:mt-8'>
          <Card>
            <img className='h-3/4 w-3/4' src='/svg/mosaics/climate_mosaic.svg' alt='' />
          </Card>
        </div>
      </section>
      <section className='hero-section lg:px-30 container mx-auto px-8 py-16 pt-24 lg:self-center lg:px-20 lg:pt-16'>
        <h2 className='mb-12 text-4xl font-bold lg:text-6xl'>
          CLIMAT
        </h2>

        <div className='flex flex-col gap-8 lg:gap-2 w-3/5'>
          <p>
          L'élevage intensif de saumon génère des émissions de gaz à effet de serre, principalement du dioxyde de carbone (CO2)
           provenant de l'énergie utilisée dans les installations, de la production d'aliments et du transport, ainsi que du 
           méthane résultant de la décomposition des déchets organiques.
          </p>
          <Link
            className='block border-2 bg-darkblue1 px-4 py-2 text-center text-xl text-orange2 border-orange2 transition duration-50 hover:text-orange1 lg:inline-block'
            href="/"
            >
            <b>EN SAVOIR PLUS</b>
          </Link>
        </div>
      </section>   
    </div>
  );
};

const SocialSection = () => {
  return (
    <div className='grid grid-cols-1 lg:min-h-screen lg:grid-cols-2 bg-darkblue1 text-orange2'>
      <section className='hero-section lg:px-30 container mx-auto px-8 py-16 pt-24 lg:self-center lg:px-20 lg:pt-16'>
        <h2 className='mb-12 text-4xl font-bold lg:text-6xl'>
          SOCIAL
        </h2>

        <div className='flex flex-col gap-8 lg:gap-2 w-3/5'>
          <p>
          Chaque année 500 000+ tonnes de poissons sauvages sont prélevés aux larges des côtes de l'Afrique de l'Ouest 
          pour nourrir des poissons d'élevage mettant en péril la sécurité alimentaire des communautés locales.
          </p>
          <Link
            className='block border-2 bg-darkblue1 px-4 py-2 text-center text-xl text-orange2 border-orange2 transition duration-50 hover:text-orange1 lg:inline-block'
            href="/"
            >
            <b>EN SAVOIR PLUS</b>
          </Link>
        </div>
      </section>
      <section className='hero-section relative container mx-auto px-8 py-16 pt-16 lg:self-center '>
        <div className='mt-16 lg:mt-8'>
          <Card>
            <img className='h-3/4 w-3/4' src='/svg/mosaics/social_mosaic.svg' alt='' />
          </Card>
        </div>
      </section>
      
    </div>
  );
};

const BeTheChangeSection = () => {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section className='bg-darkblue1'>
        <div className='relative flex w-full items-end bg-contain bg-darkblue1 bg-center bg-no-repeat lg:min-h-screen'
        style={{
          backgroundImage: "url('/svg/page_8.svg')",
        }}
        >
        </div>
      </section>
    </main>
  );
}
