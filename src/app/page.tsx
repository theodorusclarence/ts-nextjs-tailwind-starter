'use client';

import Link from 'next/link';
import * as React from 'react';
import Image from 'next/image';
import '@/lib/env';
import clsx from 'clsx';

import Card from '@/components/Card';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import IconCard from '@/components/IconCard';

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
        */}
        <BeTheChangeSection />
        <ActionSection />

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
    <section className='flex items-center justify-center py-12 text-orange1 bg-darkblue1 min-h-screen'>
    <ul className='
        relative grid grid-cols-1 sm:grid-cols-2 gap-8 list-none bg-no-repeat bg-center 
        sm:bg-[url(/svg/explose-small.svg)] sm:bg-[length:438px_320px]
        lg:bg-[url(/svg/explose.svg)]
        lg:w-[969px] lg:h-[829px] lg:bg-[length:727px_662px]
        2xl:w-[1515px] 2xl:h-[1190px] 2xl:bg-[length:969px_829px]
      '>
        <li className='lg:absolute lg:-left-[9px] lg:top-[280px] 2xl:left-[112px] 2xl:top-[430px]'>
            <IconCard 
            icon={{src: '/svg/people.svg', width: 130, height:114}}
            title='Social'
            content='Détourne la nourriture des communautés d’Afrique de l’Ouest'
          />
        </li>
        <li className='lg:absolute lg:left-[92px] lg:-bottom-[40px] 2xl:left-[242px] 2xl:bottom-0'>
            <IconCard 
            icon={{src: '/svg/climat.svg', width: 94, height:153}}
            title='Climat'
            content='Génère une empreinte carbone équivalente à celle de 10 000 habitants'
          />
        </li>
        <li className='lg:absolute lg:-right-[95px] lg:top-[116px] 2xl:-right-5 2xl:top-[236px]'>
            <IconCard 
            icon={{src: '/svg/hearth.svg', width: 108, height:99}}
            title='Santé'
            content='Inquiète la santé humaine à cause des maladies nécessitant des médicaments et le microplastiques'
          />
        </li>
        <li className='lg:absolute lg:right-[20px] lg:bottom-[90px] 2xl:right-[90px] 2xl:bottom-[220px]'>
            <IconCard 
            icon={{src: '/svg/butterfly.svg', width: 164, height:116}}
            title='Biodiversité'
            content='Dégrade la biodiversité marine incluant échappées, pollution, parasites et surexploitation des stocks sauvages'
          />
        </li>
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
    <div className="bg-darkblue1 text-white flex flex-col items-center">
      <div className="bg-[url('/public/svg/wave.svg)]">coucou ici la vague
        <h2 lang='en' className='uppercase font-bold'>Be the change.</h2>
      </div>

      <table className=''>
        <thead className=''>
          {/* pas sure de l'utilité de la balise thead étant donné que le tableau est à double entrée */}
          <td></td>
          <td className='top_cell'>Valeur 1</td>
          <td className='top_cell'>Valeur 2</td>
          <td className='top_cell'>Valeur 3</td>
          <td className='top_cell'>Valeur 4</td>
        </thead>
        <tbody>
          <td className='left_cell'>Alternative 1</td>
          <td className='table_cell'></td>
          <td className='table_cell'></td>
          <td className='table_cell'></td>
          <td className='table_cell'></td>
        </tbody>
        <tbody>
          <td className='left_cell'>Alternative 2</td>
          <td className='table_cell'></td>
          <td className='table_cell'></td>
          <td className='table_cell'></td>
          <td className='table_cell'></td>
        </tbody>
        <tbody>
          <td className='left_cell'>Alternative 3</td>
          <td className='table_cell'></td>
          <td className='table_cell'></td>
          <td className='table_cell'></td>
          <td className='table_cell'></td>
        </tbody>
      </table>
    </div>
  );
}

const ActionSection = () => {
  return (
    <div className='bg-orange2 px-6 md:px-12 py-6 md:py-7'>
      <div>
      <h2 className='flex justify-center md:justify-start bg-orange2 text-darkblue1'>
              <p className='text-4xl md:text-6xl uppercase font-bold mb-10'>Parlons - en !</p>
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
              className='block rounded bg-black px-4 py-2 text-center text-white transition duration-100 hover:bg-gray-700 md:col-start-1 uppercase font-bold'
              href="/"
            >
              <p>Action 1</p>
            </Link>
            <Link
              className='block rounded bg-black px-4 py-2 text-center text-white transition duration-100 hover:bg-gray-700 md:col-start-2 uppercase font-bold'
              href="/"
            >
              <p>Action 2</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}