import Link from 'next/link';

import { classNames } from '@/lib/helper';

export default function UnstyledLink({ children, href, className, ...rest }) {
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...rest} className={className}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      href={href}
      {...rest}
      className={classNames(className, 'cursor-[ne-resize]')}
    >
      {children}
    </a>
  );
}
