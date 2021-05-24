import UnstyledLink from './UnstyledLink';

export default function CustomLink({ className = '', ...rest }) {
  return (
    <UnstyledLink
      {...rest}
      className={`inline-flex items-center font-bold hover:text-primary-400 ${className}`}
    />
  );
}
