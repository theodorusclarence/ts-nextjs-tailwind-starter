import UnstyledLink from './UnstyledLink';

export default function CustomLink(props) {
  return (
    <UnstyledLink
      {...props}
      className={`${props.className}  inline-flex items-center font-bold hover:text-primary-400`}
    >
      {props.children}
    </UnstyledLink>
  );
}
