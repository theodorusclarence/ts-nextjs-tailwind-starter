'use client';

import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  DocumentChartBarIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import { Fragment } from 'react';

import clsxm from '@/lib/clsxm';

const solutions = [
  {
    name: 'Analytics',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Security',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: Squares2X2Icon,
  },
  {
    name: 'Automations',
    description:
      'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: ArrowPathIcon,
  },
  {
    name: 'Reports',
    description:
      'Get detailed reports that will help you make more informed decisions ',
    href: '#',
    icon: DocumentChartBarIcon,
  },
];
const resources = [
  {
    name: 'Help Center',
    description:
      'Get all of your questions answered in our forums or contact support.',
    href: '#',
  },
  {
    name: 'Guides',
    description:
      'Learn how to maximize our platform to get the most out of it.',
    href: '#',
  },
  {
    name: 'Events',
    description:
      'See what meet-ups and other events we might be planning near you.',
    href: '#',
  },
  {
    name: 'Security',
    description: 'Understand how we take your privacy seriously.',
    href: '#',
  },
];

export default function Header() {
  return (
    <header>
      <Popover className='relative bg-white'>
        <div className='flex items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <a href='#'>
              <span className='sr-only'>Your Company</span>
              <Image
                priority
                className='h-8 w-auto sm:h-10'
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                alt='tailwind'
                width={47}
                height={40}
              />
            </a>
          </div>
          <div className='-my-2 -mr-2 md:hidden'>
            <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
              <span className='sr-only'>Open menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </Popover.Button>
          </div>
          <Popover.Group as='nav' className='hidden space-x-10 md:flex'>
            <Popover className='relative'>
              {({ open }) => (
                <>
                  <Popover.Button
                    className={clsxm(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                    )}
                  >
                    <span>Solutions</span>
                    <ChevronDownIcon
                      className={clsxm(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden='true'
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-200'
                    enterFrom='opacity-0 translate-y-1'
                    enterTo='opacity-100 translate-y-0'
                    leave='transition ease-in duration-150'
                    leaveFrom='opacity-100 translate-y-0'
                    leaveTo='opacity-0 translate-y-1'
                  >
                    <Popover.Panel className='absolute z-10 -ml-4 mt-3 w-screen max-w-md transform lg:left-1/2 lg:ml-0 lg:max-w-2xl lg:-translate-x-1/2'>
                      <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                        <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2'>
                          {solutions.map((solution) => (
                            <a
                              key={solution.name}
                              href={solution.href}
                              className='-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50'
                            >
                              <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12'>
                                <solution.icon
                                  className='h-6 w-6'
                                  aria-hidden='true'
                                />
                              </div>
                              <div className='ml-4'>
                                <p className='text-base font-medium text-gray-900'>
                                  {solution.name}
                                </p>
                                <p className='mt-1 text-sm text-gray-500'>
                                  {solution.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className='bg-gray-50 p-5 sm:p-8'>
                          <a
                            href='#'
                            className='-m-3 flow-root rounded-md p-3 hover:bg-gray-100'
                          >
                            <div className='flex items-center'>
                              <div className='text-base font-medium text-gray-900'>
                                Enterprise
                              </div>
                              <span className='ml-3 inline-flex items-center rounded-full bg-indigo-100 px-3 py-0.5 text-xs font-medium leading-5 text-indigo-800'>
                                New
                              </span>
                            </div>
                            <p className='mt-1 text-sm text-gray-500'>
                              Empower your entire team with even more advanced
                              tools.
                            </p>
                          </a>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <a
              href='#'
              className='text-base font-medium text-gray-500 hover:text-gray-900'
            >
              Pricing
            </a>
            <a
              href='#'
              className='text-base font-medium text-gray-500 hover:text-gray-900'
            >
              Docs
            </a>

            <Popover className='relative'>
              {({ open }) => (
                <>
                  <Popover.Button
                    className={clsxm(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                    )}
                  >
                    <span>More</span>
                    <ChevronDownIcon
                      className={clsxm(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden='true'
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-200'
                    enterFrom='opacity-0 translate-y-1'
                    enterTo='opacity-100 translate-y-0'
                    leave='transition ease-in duration-150'
                    leaveFrom='opacity-100 translate-y-0'
                    leaveTo='opacity-0 translate-y-1'
                  >
                    <Popover.Panel className='absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0'>
                      <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                        <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                          {resources.map((resource) => (
                            <a
                              key={resource.name}
                              href={resource.href}
                              className='-m-3 block rounded-md p-3 hover:bg-gray-50'
                            >
                              <p className='text-base font-medium text-gray-900'>
                                {resource.name}
                              </p>
                              <p className='mt-1 text-sm text-gray-500'>
                                {resource.description}
                              </p>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className='hidden items-center justify-end md:flex md:flex-1 lg:w-0'>
            <a
              href='#'
              className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'
            >
              Sign in
            </a>
            <a
              href='#'
              className='ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
            >
              Sign up
            </a>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter='duration-200 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-100 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <Popover.Panel
            focus
            className='absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden'
          >
            <div className='divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
              <div className='px-5 pt-5 pb-6'>
                <div className='flex items-center justify-between'>
                  <div>
                    <Image
                      className='h-8 w-auto'
                      src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                      alt='tailwind'
                      width={47}
                      height={40}
                    />
                  </div>
                  <div className='-mr-2'>
                    <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                      <span className='sr-only'>Close menu</span>
                      <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                    </Popover.Button>
                  </div>
                </div>
                <div className='mt-6'>
                  <nav className='grid grid-cols-1 gap-7'>
                    {solutions.map((solution) => (
                      <a
                        key={solution.name}
                        href={solution.href}
                        className='-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50'
                      >
                        <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white'>
                          <solution.icon
                            className='h-6 w-6'
                            aria-hidden='true'
                          />
                        </div>
                        <div className='ml-4 text-base font-medium text-gray-900'>
                          {solution.name}
                        </div>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className='py-6 px-5'>
                <div className='grid grid-cols-2 gap-4'>
                  <a
                    href='#'
                    className='text-base font-medium text-gray-900 hover:text-gray-700'
                  >
                    Pricing
                  </a>

                  <a
                    href='#'
                    className='text-base font-medium text-gray-900 hover:text-gray-700'
                  >
                    Docs
                  </a>

                  <a
                    href='#'
                    className='text-base font-medium text-gray-900 hover:text-gray-700'
                  >
                    Enterprise
                  </a>
                  {resources.map((resource) => (
                    <a
                      key={resource.name}
                      href={resource.href}
                      className='text-base font-medium text-gray-900 hover:text-gray-700'
                    >
                      {resource.name}
                    </a>
                  ))}
                </div>
                <div className='mt-6'>
                  <a
                    href='#'
                    className='flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
                  >
                    Sign up
                  </a>
                  <p className='mt-6 text-center text-base font-medium text-gray-500'>
                    Existing customer?{' '}
                    <a
                      href='#'
                      className='text-indigo-600 hover:text-indigo-500'
                    >
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  );
}
