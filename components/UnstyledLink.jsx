import Link from 'next/link';

export default function UnstyledLink({ children, href, ...rest }) {
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...rest}>{children}</a>
      </Link>
    );
  }

  return (
    <a target='_blank' rel='noopener noreferrer' href={href} {...rest}>
      {children}
    </a>
  );
}
