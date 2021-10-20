import clsx from 'clsx';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';

export default function CustomLink({
  children,
  className = '',
  ...rest
}: UnstyledLinkProps) {
  return (
    <UnstyledLink
      {...rest}
      className={clsx(
        'custom-link inline-flex items-center font-bold animated-underline',
        'focus:outline-none focus-visible:ring ring-primary-400/70',
        'border-b border-dotted border-dark hover:border-black/0',
        className
      )}
    >
      {children}
    </UnstyledLink>
  );
}
