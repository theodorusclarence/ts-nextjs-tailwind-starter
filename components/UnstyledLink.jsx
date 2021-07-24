import Link from 'next/link';

import { classNames } from '@/lib/helper';

export default function UnstyledLink({
  children,
  href,
  openNewTab = undefined,
  className,
  ...rest
}) {
  const isNewTab =
    openNewTab !== undefined
      ? openNewTab
      : href && !href.startsWith('/') && !href.startsWith('#');

  if (!isNewTab) {
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
