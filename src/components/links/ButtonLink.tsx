import clsx from 'clsx';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';

enum ButtonVariant {
  'dark',
  'light',
  'primary',
}

type ButtonLinkProps = {
  variant?: keyof typeof ButtonVariant;
} & UnstyledLinkProps;

export default function ButtonLink({
  children,
  className = '',
  variant = 'dark',
  ...rest
}: ButtonLinkProps) {
  return (
    <UnstyledLink
      {...rest}
      className={clsx(
        'py-2 px-4 inline-block rounded font-bold hover:text-primary-400 animated-underline',
        'border border-gray-600 shadow-sm',
        'focus:outline-none focus-visible:text-primary-400',
        {
          'bg-dark text-white': variant === 'dark',
          'bg-white text-dark hover:bg-gray-200 hover:text-dark focus-visible:text-dark border-gray-400':
            variant === 'light',
          'bg-primary-400 text-black hover:bg-primary-400/90 hover:text-black border-primary-500 focus-visible:text-dark':
            variant === 'primary',
        },
        className
      )}
      style={
        variant === 'primary'
          ? ({
              '--clr-primary-400': 'white',
              '--clr-primary-500': 'white',
            } as React.CSSProperties)
          : undefined
      }
    >
      {children}
    </UnstyledLink>
  );
}
