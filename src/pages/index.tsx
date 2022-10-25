import NextImage from 'next/future/image';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import PhoneMockup from '~/images/phone-mockup.png';

export default function HomePage() {
  return (
    <Layout>
      <Seo />

      <main>
        <section className='bg-white dark:bg-gray-900'>
          <div className='mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0'>
            <div className='mr-auto place-self-center lg:col-span-7'>
              <h1 className='mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl'>
                Payments tool for software companies
              </h1>
              <p className='mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl'>
                From checkout to global sales tax compliance, companies around
                the world use Flowbite to simplify their payment stack.
              </p>
              <a
                href='#'
                className='mr-3 inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900'
              >
                Get started
                <svg
                  className='ml-2 -mr-1 h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </a>
              <a
                href='#'
                className='inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800'
              >
                Speak to Sales
              </a>
            </div>
            <div className='flex lg:col-span-5 lg:mt-0'>
              <NextImage priority src={PhoneMockup} alt='mockup' />
            </div>
          </div>
        </section>
        <section className='bg-white dark:bg-gray-900'>
          <div className='mx-auto max-w-screen-xl py-8 px-4 lg:py-16 lg:px-6'>
            <div className='max-w-screen-lg text-gray-500 dark:text-gray-400 sm:text-lg'>
              <h2 className='mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white'>
                Powering innovation at{' '}
                <span className='font-extrabold'>200,000+</span> companies
                worldwide
              </h2>
              <p className='mb-4 font-light'>
                Track work across the enterprise through an open, collaborative
                platform. Link issues across Jira and ingest data from other
                software development tools, so your IT support and operations
                teams have richer contextual information to rapidly respond to
                requests, incidents, and changes.
              </p>
              <p className='mb-4 font-medium'>
                Deliver great service experiences fast - without the complexity
                of traditional ITSM solutions.Accelerate critical development
                work, eliminate toil, and deploy changes with ease.
              </p>
              <a
                href='#'
                className='inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700'
              >
                Learn more
                <svg
                  className='ml-1 h-6 w-6'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
