import Link from 'next/link';
import UnstyledLink from './UnstyledLink';

const links = [
  { href: '/', label: 'Route' },
  { href: '/', label: 'Route' },
];

export default function Nav() {
  return (
    <nav className='bg-gray-700'>
      <ul className='flex items-center justify-between px-8 py-4'>
        <li>
          <Link href='/'>
            <a className='font-bold text-green-400'>Home</a>
          </Link>
        </li>
        <ul className='flex items-center justify-between space-x-4'>
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <UnstyledLink
                href={href}
                className='text-white hover:text-green-400'
              >
                {label}
              </UnstyledLink>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}
