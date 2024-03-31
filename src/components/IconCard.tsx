import clsx from 'clsx';
import React, { ReactNode } from 'react'
import Image from 'next/image';

const IconCard = ({
  className,
  title,
  icon,
  content,
}: {
  className?: string;
  title: string;
  icon: {
    src: string;
    width: number;
    height: number;
  };
  content: string;
}) => {
  return (
    <div className={clsx('space-y-6 max-w-96', className)}>
      <Image src={icon.src} width={icon.width} height={icon.height} alt='' />
      <p className='text-4xl lg:text-5xl uppercase font-bold'>{title}</p>
      <p className='lg:text-xl font-secondary'>{content}</p>
    </div>
  );
};
export default IconCard