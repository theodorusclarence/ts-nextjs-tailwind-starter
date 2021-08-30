import clsx from 'clsx';
import UnstyledLink, { UnstyledLinkProps } from './UnstyledLink';

type ButtonLinkProps = {
  variants?: 'primary' | 'secondary';
} & UnstyledLinkProps;

export default function ButtonLink({
  children,
  className = '',
  variants = 'primary',
  ...rest
}: ButtonLinkProps) {
  return (
    <UnstyledLink
      {...rest}
      className={clsx(
        'py-2 px-4 inline-block rounded font-bold hover:text-primary-400 animated-underline',
        'border border-gray-600',
        'focus:outline-none focus-visible:text-primary-400',
        {
          'bg-dark text-white': variants === 'primary',
          'bg-white text-dark hover:bg-gray-200 hover:text-dark focus-visible:text-dark':
            variants === 'secondary',
        },
        className
      )}
    >
      {children}
    </UnstyledLink>
  );
}
