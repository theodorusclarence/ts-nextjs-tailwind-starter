import clsx from 'clsx';
import React from 'react'
import Image from 'next/image';

const social:Record<string, {name: string, icon: string}> = {
  twitter: {
    name: 'Twitter',
    icon: 'x-logo',
  },
  linkedin: {
    name: 'Linkedin',
    icon: 'linkedin-logo',
  },
  website: {
    name: 'Website',
    icon: 'globe',
  },
}

type ShareLinkProps = {
  className?: string;
  type?: keyof typeof social;
  href: string;
  name: string;
};

const ShareLink = ({
  className,
  type='website',
  href,
  name,
  ...rest
}:ShareLinkProps) => {
  if (!href || !name) {
    return <></>;
  }

  return (
    <a
      className={clsx('flex mt-2 gap-2 items-center hover:underline', className)}
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      title={`${social[type].name} ${name} (new tab)`}
      {...rest}
    >
      <img src={`/svg/${social[type].icon}.svg`} alt='' className='w-4' />
      {social[type].name}
      <span className='sr-only'>{name}</span>
      <img src='/svg/new-tab.svg' alt='' className='w-4' />
    </a>
  );
};

export default ShareLink;