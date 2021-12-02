import clsx from 'clsx';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';

export default function CustomLink({
  children,
  className,
  ...rest
}: UnstyledLinkProps) {
  return (
    <UnstyledLink
      {...rest}
      className={clsx(
        'animated-underline custom-link inline-flex items-center font-semibold',
        'focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-primary-500',
        'border-dark border-b border-dotted hover:border-black/0',
        className
      )}
    >
      {children}
    </UnstyledLink>
  );
}
