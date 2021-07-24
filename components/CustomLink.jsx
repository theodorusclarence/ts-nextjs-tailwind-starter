import { classNames } from '@/lib/helper';
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
      className={classNames(
        'inline-flex items-center font-bold hover:text-primary-400 animated-underline',
        className
      )}
    >
      {children}
    </UnstyledLink>
  );
}
