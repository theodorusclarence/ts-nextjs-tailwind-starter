import * as React from 'react';

import Button from '@/components/buttons/Button';
import ButtonLink from '@/components/links/ButtonLink';
import CustomLink from '@/components/links/CustomLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

export default function ComponentsPage() {
  return (
    <>
      <Seo templateTitle='Components' />

      <main>
        <section className='bg-dark'>
          <div className='min-h-screen py-20 text-white layout'>
            <h1>Built-in Components</h1>
            <CustomLink className='mt-2' href='/'>
              ← Back to Home
            </CustomLink>
            <ol className='mt-8 space-y-6'>
              <li className='space-y-2'>
                <h2 className='text-lg md:text-xl'>UnstyledLink</h2>
                <p className='text-sm text-gray-300 !mt-1'>
                  No style applied, differentiate internal and outside links,
                  give custom cursor for outside links.
                </p>
                <div className='space-x-2'>
                  <UnstyledLink href='/'>Internal Links</UnstyledLink>
                  <UnstyledLink href='https://theodorusclarence.com'>
                    Outside Links
                  </UnstyledLink>
                </div>
              </li>
              <li className='space-y-2'>
                <h2 className='text-lg md:text-xl'>CustomLink</h2>
                <p className='text-sm text-gray-300 !mt-1'>
                  Add styling on top of UnstyledLink, giving an animated
                  underline and hover color.
                </p>
                <div className='space-x-2'>
                  <CustomLink href='/'>Internal Links</CustomLink>
                  <CustomLink href='https://theodorusclarence.com'>
                    Outside Links
                  </CustomLink>
                </div>
              </li>
              <li className='space-y-2'>
                <h2 className='text-lg md:text-xl'>ButtonLink</h2>
                <p className='text-sm text-gray-300 !mt-1'>
                  Button styled link with 2 variants.
                </p>
                <div className='flex flex-wrap gap-2'>
                  <ButtonLink href='/'>Internal Links</ButtonLink>
                  <ButtonLink href='https://theodorusclarence.com'>
                    Outside Links
                  </ButtonLink>
                  <ButtonLink
                    variants='secondary'
                    href='https://theodorusclarence.com'
                  >
                    Secondary Variant
                  </ButtonLink>
                </div>
              </li>
              <li className='space-y-2'>
                <h2 className='text-lg md:text-xl'>Button</h2>
                <p className='text-sm text-gray-300 !mt-1'>
                  Ordinary button with style.
                </p>
                <div className='flex flex-wrap gap-2'>
                  <Button onClick={() => alert('button clicked')}>
                    Primary Variant
                  </Button>
                  <Button
                    onClick={() => alert('button clicked')}
                    variants='secondary'
                  >
                    Secondary Variant
                  </Button>
                </div>
              </li>
              <li className='space-y-2'>
                <h2 className='text-lg md:text-xl'>Custom 404 Page</h2>
                <p className='text-sm text-gray-300 !mt-1'>
                  Styled 404 page with some animation.
                </p>
                <div className='flex flex-wrap gap-2'>
                  <ButtonLink href='/404'>Visit the 404 page</ButtonLink>
                </div>
              </li>
            </ol>
          </div>
        </section>
      </main>
    </>
  );
}
