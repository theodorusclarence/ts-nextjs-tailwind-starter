import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import { ReactNode, useState } from 'react';

import Accordion from '@/components/Accordion';
import Popover from '@/components/Popover';

type Link =
  | {
      label: string;
      type: 'button' | 'download-link' | 'link';
      href: string;
    }
  | {
      label: string;
      type: 'category';
      links: Link[];
    };

const LINKS: Link[] = [
  {
    label: 'Download Data',
    type: 'button',
    href: 'https://github.com/dataforgoodfr/CarbonBombs/raw/main/data_cleaned/carbon_bombs_all_datasets.xlsx',
  },
];

const getLinkComponent = (
  link: Link,
  { isMobile, isInCategory }: { isMobile: boolean; isInCategory?: boolean },
  props: {
    onClick?: () => void;
  } = {}
): ReactNode => {
  if (link.type === 'category' && !isMobile) {
    const items = link.links.map((item) =>
      getLinkComponent(item, { isMobile, isInCategory: true }, props)
    );

    return (
      <Popover
        key={`${link.type}-${link.label}`}
        trigger={
          <span className='flex max-w-fit justify-center gap-2'>
            {link.label} <Image src='/svg/Vercel.svg' alt='' />
          </span>
        }
        reveal={<>{items}</>}
      />
    );
  } else if (link.type === 'category' && isMobile) {
    const items = link.links.map((item) =>
      getLinkComponent(item, { isMobile, isInCategory: true }, props)
    );

    return (
      <Accordion
        key={`${link.type}-${link.label}`}
        header={link.label}
        content={<div className='flex flex-col gap-2 pl-4 pt-2'>{items}</div>}
      />
    );
  } else if ('href' in link && isInCategory && !isMobile) {
    return (
      <Link
        key={`${link.type}-${link.label}`}
        href={link.href}
        className='w-full p-2 hover:bg-blue-100 lg:inline-block'
        {...props}
      >
        {link.label}
      </Link>
    );
  } else if (link.type === 'button') {
    return (
      <Link
        className='block w-fit rounded bg-black px-4 py-2 text-center text-white transition duration-100 hover:bg-gray-700 lg:inline-block'
        key={`${link.type}-${link.label}`}
        href={link.href}
        {...props}
      >
        {link.label}
      </Link>
    );
  } else if (link.type === 'link') {
    return (
      <Link
        key={`${link.type}-${link.label}`}
        href={link.href}
        className={`block ${
          isMobile ? '' : 'hover:text-gray-500 lg:inline-block'
        }`}
        {...props}
      >
        {link.label}
      </Link>
    );
  } else if (link.type === 'download-link') {
    return (
      <a
        key={`${link.type}-${link.label}`}
        className={clsx(
          'block',
          !isMobile &&
            'rounded bg-black px-4 py-1 text-white transition duration-100 hover:bg-gray-700',
          isMobile && 'lg:inline-block'
        )}
        target='_blank'
        rel='noopener noreferrer'
        href={link.href}
        download
        {...props}
      >
        {link.label}
      </a>
    );
  }
};

const Navbar = () => {

  return (
    <nav className='absolute left-0 top-0 z-[9999] flex w-full flex-wrap items-center justify-between bg-transparent p-3 px-6'>
      <div className='mr-6 flex flex-shrink-0 items-center justify-center text-black'>

        <Link
          href="/" // TODO make dynamic through function
          className='flex items-center text-xl font-semibold tracking-tight'
        >
        
          <Image
          src='/svg/pinkbombs-logo.svg'
          alt='PinkBombs Logo'
          width={250}
          height={100}
        />
        </Link>
      </div>
      <div className='pr-12 lg:flex lg:items-center lg:gap-4'>
        <a className="block hover:text-gray-500 lg:inline-block" href="/"><b>L'HISTOIRE</b></a>
        <a className="block hover:text-gray-500 lg:inline-block" href="/"><b>LES CHIFFRES</b></a>
      </div>
    </nav>
  );
};

export default Navbar;
