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
    <header className='absolute left-0 top-0 z-[9999] w-full'>
      <nav className='flex flex-wrap items-center justify-between px-6 lg:px-9 py-3 lg:py-6' aria-label='Navigation principale'>
        <Link href="/">
          <Image
            src='/svg/pinkbombs-logo.svg'
            alt='PinkBombs'
            width={190}
            height={38}
            className='w-24 md:w-36 lg:w-48'
          />
        </Link>
        <div className='flex gap-4 lg:gap-16'>
          <Link className="uppercase font-bold hover:underline focus:underline lg:text-[1.4rem]" href="/">L'histoire</Link>
          <Link className="uppercase font-bold hover:underline focus:underline lg:text-[1.4rem]" href="/">Les chiffres</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
