import * as React from 'react';

import { cn } from '@/lib/utils';

import UnderlineLink from '@/components/links/UnderlineLink';
import { UnstyledLinkProps } from '@/components/links/UnstyledLink';

type ArrowLinkProps<C extends React.ElementType> = {
  as?: C;
  direction?: 'left' | 'right';
} & UnstyledLinkProps &
  React.ComponentProps<C>;

export default function ArrowLink<C extends React.ElementType>({
  children,
  className,
  direction = 'right',
  as,
  ...rest
}: ArrowLinkProps<C>) {
  const Component = as || UnderlineLink;

  return (
    <Component
      {...rest}
      className={cn(
        'group gap-[0.25em]',
        direction === 'left' && 'flex-row-reverse',
        className
      )}
    >
      <span>{children}</span>
      <svg
        viewBox='0 0 16 16'
        height='1em'
        width='1em'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={cn(
          'relative',
          'transition-transform duration-200',
          direction === 'right' ? 'motion-safe:-translate-x-1' : 'rotate-180',
          'group-hover:translate-x-0'
        )}
      >
        <path
          fill='currentColor'
          d='M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z'
        />
        <path
          stroke='currentColor'
          d='M1.75 8H11'
          strokeWidth='1.5'
          strokeLinecap='round'
          className={cn(
            'origin-left transition-all duration-200',
            'opacity-0 motion-safe:-translate-x-1',
            'group-hover:translate-x-0 group-hover:opacity-100'
          )}
        />
      </svg>
    </Component>
  );
}
