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
        'focus-visible:ring focus:outline-none ring-primary-400/70',
        'border-dark hover:border-black/0 border-b border-dotted',
        className
      )}
    >
      {children}
    </UnstyledLink>
  );
}
