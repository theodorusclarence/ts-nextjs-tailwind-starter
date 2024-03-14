import clsx from 'clsx';
import Link from 'next/link';

const Footer = () => (
  <footer className='bg-orange2'>
    <div className='p-5'>
      
      <h1 className='space-y-5 text-left text-7xl lg:px-20 bg-orange2 text-fuschia1'>
            <b>PARLONS - EN !</b>
      </h1>
    </div>
    <div className='p-5'>
      <img className='h-auto max-w-lg mx-auto' src='/svg/fish_eye.svg' alt='' />
    </div>
    <div className='container mx-auto grid gap-10 px-8 lg:px-20 pb-20 pt-16 sm:grid-cols-1 md:grid-cols-[1fr_1fr_1fr_1fr] lg:gap-10'>
      <div className='general-section flex flex-col gap-5'>
        
        <p className='text-center lg:text-left'>
          Description de Seastemik et Data4Good
        </p>
        <div className={clsx('footer__cta-wrapper', 'flex flex-col gap-4')}>
          <Link
            className='block rounded bg-black px-4 py-2 text-center text-white transition duration-100 hover:bg-gray-700 lg:inline-block'
            href="/"
          >
            <b>ACTION 1</b>
          </Link>
          <Link
            className='block rounded bg-black px-4 py-2 text-center text-white transition duration-100 hover:bg-gray-700 lg:inline-block'
            href="/"
          >
            <b>ACTION 2</b>
          </Link>
        </div>
      </div>
      <div className='seastemik-section flex flex-col items-center'>
        <div>
          <img className='mb-4' src='/images/d4g-logo.png' alt='' />
        </div>
        <p className='mb-4 text-2xl'>
          <b>Seastemik</b>
        </p>
        <div className='flex flex-col gap-2'>
          <a
            className='flex w-[110px] justify-between'
            href='https://seastemik.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span>Website</span>
            <img src='/svg/globe.svg' alt='' />
          </a>
          <a
            className='flex w-[110px] justify-between'
            href='https://twitter.com/seastemik'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span>Twitter</span>
            <img src='/svg/x-logo.svg' alt='' />
          </a>
          <a
            className='flex w-[110px] justify-between'
            href='https://www.linkedin.com/company/seastemik-org'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span>LinkedIn</span>
            <img src='/svg/linkedin-logo.svg' alt='' />
          </a>
        </div>
      </div>
      <div className='d4g-section flex flex-col items-center'>
        <div>
          <img className='mb-4' src='/images/d4g-logo.png' alt='' />
        </div>
        <p className='mb-4 text-2xl'>
          <b>Data for Good</b>
        </p>
        <div className='flex flex-col gap-2'>
          <a
            className='flex w-[110px] justify-between'
            href='https://dataforgood.fr/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span>Website</span>
            <img src='/svg/globe.svg' alt='' />
          </a>
          <a
            className='flex w-[110px] justify-between'
            href='https://twitter.com/dataforgood_fr'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span>Twitter</span>
            <img src='/svg/x-logo.svg' alt='' />
          </a>
          <a
            className='flex w-[110px] justify-between'
            href='https://www.linkedin.com/company/dataforgood'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span>LinkedIn</span>
            <img src='/svg/linkedin-logo.svg' alt='' />
          </a>
        </div>
      </div>
      <div className='general-section flex flex-col gap-5 justify-center'>
        
        <p className='text-center lg:text-left'>
          All rights reserved © 2024 Seastemik and Data for Good
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
