import * as React from 'react';

import clsxm from '@/lib/clsxm';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';

export default function UnderlineLink({
  children,
  className,
  ...rest
}: UnstyledLinkProps) {
  return (
    <UnstyledLink
      {...rest}
      className={clsxm(
        'animated-underline custom-link inline-flex items-center font-semibold',
        'focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-offset-2',
        'border-dark border-b border-dotted hover:border-black/0',
        className
      )}
    >
      {children}
    </UnstyledLink>
  );
}
