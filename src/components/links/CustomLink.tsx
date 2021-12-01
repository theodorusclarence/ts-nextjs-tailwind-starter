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
        'animated-underline custom-link inline-flex items-center font-bold',
        'ring-primary-400/70 focus:outline-none focus-visible:ring',
        'border-dark border-b border-dotted hover:border-black/0',
        className
      )}
    >
      {children}
    </UnstyledLink>
  );
}
