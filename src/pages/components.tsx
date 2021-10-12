import clsx from 'clsx';
import * as React from 'react';

import Button from '@/components/buttons/Button';
import ButtonLink from '@/components/links/ButtonLink';
import CustomLink from '@/components/links/CustomLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

export default function ComponentsPage() {
  const [mode, setMode] = React.useState('dark');
  function toggleMode() {
    return mode === 'dark' ? setMode('light') : setMode('dark');
  }

  //#region  //*=========== THEME ===========
  function randomize() {
    const r = Math.random() * 170 + 80;
    const g = Math.random() * 170 + 80;
    const b = Math.random() * 170 + 80;
    document.documentElement.style.setProperty(
      '--tw-clr-primary-400',
      `${r},${g},${b}`
    );
    document.documentElement.style.setProperty(
      '--tw-clr-primary-500',
      `${r - 20},${g - 20},${b - 20}`
    );
  }
  //#endregion  //*======== THEME ===========

  const textColor = mode === 'dark' ? 'text-gray-300' : 'text-gray-600';
  return (
    <>
      <Seo templateTitle='Components' />

      <main>
        <section className={clsx(mode === 'dark' ? 'bg-dark' : 'bg-gray-50')}>
          <div
            className={clsx(
              'min-h-screen py-20 layout',
              mode === 'dark' ? 'text-white' : 'text-black'
            )}
          >
            <h1>Built-in Components</h1>
            <CustomLink className='mt-2' href='/'>
              ← Back to Home
            </CustomLink>

            <div className='flex flex-wrap gap-2 mt-8'>
              <Button
                onClick={toggleMode}
                variant={mode === 'dark' ? 'light' : 'dark'}
              >
                Set to {mode === 'dark' ? 'light' : 'dark'}
              </Button>
              <Button onClick={randomize}>Randomize CSS Variable</Button>
            </div>

            <ol className='mt-8 space-y-6'>
              <li className='space-y-2'>
                <h2 className='text-lg md:text-xl'>UnstyledLink</h2>
                <p className={clsx('text-sm !mt-1', textColor)}>
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
                <p className={clsx('text-sm !mt-1', textColor)}>
                  Add styling on top of UnstyledLink, giving a dotted and
                  animated underline.
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
                <p className={clsx('text-sm !mt-1', textColor)}>
                  Button styled link with 3 variants.
                </p>
                <div className='flex flex-wrap gap-2'>
                  <ButtonLink
                    variant='primary'
                    href='https://theodorusclarence.com'
                  >
                    Primary Variant
                  </ButtonLink>
                  <ButtonLink
                    variant='dark'
                    href='https://theodorusclarence.com'
                  >
                    Dark Variant
                  </ButtonLink>
                  <ButtonLink
                    variant='light'
                    href='https://theodorusclarence.com'
                  >
                    Light Variant
                  </ButtonLink>
                </div>
              </li>
              <li className='space-y-2'>
                <h2 className='text-lg md:text-xl'>Button</h2>
                <p className={clsx('text-sm !mt-1', textColor)}>
                  Ordinary button with style.
                </p>
                <div className='flex flex-wrap gap-2'>
                  <Button
                    onClick={() => alert('button clicked')}
                    variant='primary'
                  >
                    Primary Variant
                  </Button>
                  <Button
                    variant='dark'
                    onClick={() => alert('button clicked')}
                  >
                    Dark Variant
                  </Button>
                  <Button
                    onClick={() => alert('button clicked')}
                    variant='light'
                  >
                    Light Variant
                  </Button>
                </div>
                <div className='flex flex-wrap gap-2'>
                  <Button
                    disabled
                    onClick={() => alert('button clicked')}
                    variant='primary'
                  >
                    Disabled
                  </Button>
                  <Button
                    disabled
                    variant='dark'
                    onClick={() => alert('button clicked')}
                  >
                    Disabled
                  </Button>
                  <Button
                    disabled
                    onClick={() => alert('button clicked')}
                    variant='light'
                  >
                    Disabled
                  </Button>
                </div>
                <div className='flex flex-wrap gap-2'>
                  <Button
                    isLoading
                    onClick={() => alert('button clicked')}
                    variant='primary'
                  >
                    Disabled
                  </Button>
                  <Button
                    isLoading
                    variant='dark'
                    onClick={() => alert('button clicked')}
                  >
                    Disabled
                  </Button>
                  <Button
                    isLoading
                    onClick={() => alert('button clicked')}
                    variant='light'
                  >
                    Disabled
                  </Button>
                </div>
              </li>
              <li className='space-y-2'>
                <h2 className='text-lg md:text-xl'>Custom 404 Page</h2>
                <p className={clsx('text-sm !mt-1', textColor)}>
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
