import Link from 'next/link';

export default function UnstyledLink({ href, ...rest }) {
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...rest} />
      </Link>
    );
  }

  return <a target='_blank' rel='noopener noreferrer' href={href} {...rest} />;
}
