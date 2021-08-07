import clsx from 'clsx';
import UnstyledLink from './UnstyledLink';

export default function CustomLink({
  children,
  openNewTab = undefined,
  className = '',
  ...rest
}) {
  return (
    <UnstyledLink
      {...rest}
      openNewTab={openNewTab}
      className={clsx(
        'inline-flex items-center font-bold hover:text-primary-400 animated-underline',
        className
      )}
    >
      {children}
    </UnstyledLink>
  );
}
