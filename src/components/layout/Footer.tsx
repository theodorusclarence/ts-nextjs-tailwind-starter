import clsx from 'clsx';
import Link from 'next/link';

const Footer = () => (
  <footer className='bg-orange2 '>
    <div className='px-6 md:px-12 py-6 md:py-7'>
      
      <h1 className='flex justify-center md:justify-start bg-orange2 text-darkblue1'>
            <b className='text-4xl md:text-6xl'>PARLONS - EN !</b>
      </h1>
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
            className='block rounded bg-black px-4 py-2 text-center text-white transition duration-100 hover:bg-gray-700 md:col-start-1 '
            href="/"
          >
            <b>ACTION 1</b>
          </Link>
          <Link
            className='block rounded bg-black px-4 py-2 text-center text-white transition duration-100 hover:bg-gray-700 md:col-start-2'
            href="/"
          >
            <b>ACTION 2</b>
          </Link>
        </div>
      </div>
      <div className='md:pt-10 md:grid md:grid-cols-2'>
        <div className='flex flex-col items-center py-5' >
          <div>
            <img className='mb-4 h-16' src='/images/seastemik-logo.png' alt='' />
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
        <div className='flex flex-col items-center py-5 pb-20 '>
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
      </div>
      <div className='flex justify-center md:justify-end m-0 p-0'>
        <p className='text-center self-end md:text-right m-0 p-0'>
          All rights reserved <br/> © 2024 Seastemik and Data for Good
        </p>
      </div>
    </div>
  </footer>
);
 
export default Footer;
