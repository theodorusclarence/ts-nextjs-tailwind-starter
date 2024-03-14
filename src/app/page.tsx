'use client';

import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';
import '@/lib/env';

import Card from '@/components/Card';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';

import Logo from '~/svg/Logo.svg';
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
    <div>
      <Navbar />
      <IntroSection />
      <BombSection />
      <ExplodeSection />
      <BioSection />
      <BeTheChangeSection />
      <Footer />
    </div>
  );
}

export default HomePage;

const IntroSection = () => {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section className='bg-rose1'>
        <div className='relative flex w-full items-end ps-10 pb-20 bg-cover bg-center bg-no-repeat lg:min-h-screen'
        style={{
          backgroundImage: "url('/svg/page_1.svg')",
        }}
        >
          <div className="text-7xl items-left font-bold text-orange2 w-3/4 md:w-full lg:w-3/4">
            LE SAUMON QUE VOUS MANGEZ, VENDEZ, PRODUISEZ ...
          </div>
        </div>
      </section>
    </main>
  );
}

const BombSection = () => {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section className='bg-fuschia1'>
        <div className='relative flex w-full items-end ps-10 pb-20 bg-cover bg-center bg-no-repeat lg:min-h-screen'
        style={{
          backgroundImage: "url('/svg/page_2.svg')",
        }}
        >
          <div className="text-7xl items-left font-bold text-orange2 w-1/2 md:w-full lg:w-1/2">
            TUE AFFAME ET CONTAMINE.
          </div>
        </div>
      </section>
    </main>
  );
}

const ExplodeSection = () => {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section className='bg-fuschia1'>
        <div className='relative flex w-full items-end bg-contain bg-fuschia1 bg-center bg-no-repeat lg:min-h-screen'
        style={{
          backgroundImage: "url('/svg/page_3.svg')",
        }}
        >
        </div>
      </section>
    </main>
  );
}
const BioSection = () => {
  return (
    <div className='grid grid-cols-1 lg:min-h-screen lg:grid-cols-2 bg-fuschia1 text-orange2'>
      <section className='hero-section relative container mx-auto px-8 py-16 pt-16 lg:self-center '>
        <div className='mt-16 lg:mt-8'>
          <div className='grid gap-6 lg:grid-cols-[2fr_3fr_3fr]'>
            <Card>
              <div className='flex min-h-[300px] flex-col'>
                <img className='h-3/4 w-3/4' src='/images/biodiversity/biologistsfe1.png' alt='' />
                <div className="bg-orange2 text-white text-xs">
                  <p>Biologists fear repeat of 2002 salmon kill in Klamath River.</p>  
                </div>
              </div>
            </Card>

            <Card>
              <div className='flex min-h-[300px] flex-col'>
                <img className='h-3/4 w-3/4' src='/images/biodiversity/biodiv_poux.png' alt='' />
                <div className="bg-orange2 text-white text-xs">
                  <p>L'élevage intensif de saumon a des répercussions significatives sur la biodiversité marine, 
                    avec des échappées, une pollution de l'eau par les rejets, des parasites affectant les populations
                     sauvages, et une pression accrue sur les stocks de poissons sauvages due à la demande de farine 
                     de poisson, contribuant ainsi à la surexploitation et à la diminution de la biodiversité..</p>  
                </div>
              </div>
            </Card>

            <Card>
              <div className='flex min-h-[300px] flex-col'>
                <img className='w-3/4' src='/images/biodiversity/biodiv_fonde.png' alt='' />
                <div className="bg-orange2 text-white text-xs">
                  <p>Sea floor beneath a salmon farm, Scotland.</p>  
                </div>
              </div>
            </Card>
          </div> 
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
            className='block border-2 bg-fuschia1 px-4 py-2 text-center text-xl text-orange2 border-orange2 transition duration-50 hover:text-orange1 lg:inline-block'
            href="/"
            >
            <b>EN SAVOIR PLUS</b>
          </Link>
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
      <section className='bg-fuschia1'>
        <div className='relative flex w-full items-end bg-contain bg-fuschia1 bg-center bg-no-repeat lg:min-h-screen'
        style={{
          backgroundImage: "url('/svg/page_8.svg')",
        }}
        >
        </div>
      </section>
    </main>
  );
}
