import clsx from 'clsx';
import * as React from 'react';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import CustomLink from '@/components/links/CustomLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

type Color = typeof colorList[number];

export default function ComponentsPage() {
  const [mode, setMode] = React.useState<'dark' | 'light'>('dark');
  const [color, setColor] = React.useState<Color>();
  function toggleMode() {
    return mode === 'dark' ? setMode('light') : setMode('dark');
  }

  const textColor = mode === 'dark' ? 'text-gray-300' : 'text-gray-600';
  return (
    <Layout>
      <Seo
        templateTitle='Components'
        description='Pre-built components with awesome default'
      />

      <main>
        <section
          className={clsx(mode === 'dark' ? 'bg-dark' : 'bg-gray-50', color)}
        >
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
              {/* <Button onClick={randomize}>Randomize CSS Variable</Button> */}
            </div>

            <ol className='mt-8 space-y-6'>
              <li className='space-y-2'>
                <h2 className='text-lg md:text-xl'>Customize Colors</h2>
                <p className={clsx('text-sm !mt-1', textColor)}>
                  You can change primary color to any Tailwind CSS colors. See
                  globals.css to change your color.
                </p>
                <div className='flex flex-wrap gap-2'>
                  <select
                    name='color'
                    id='color'
                    value={color}
                    className={clsx(
                      'block max-w-xs rounded',
                      mode === 'dark'
                        ? 'bg-dark border border-gray-600'
                        : 'bg-white border-gray-300',
                      'focus:outline-none focus:ring focus:ring-primary-400 focus:border-primary-400'
                    )}
                    onChange={(e) => setColor(e.target.value as Color)}
                  >
                    {colorList.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  <ButtonLink href='https://github.com/theodorusclarence/ts-nextjs-tailwind-starter/blob/main/src/styles/colors.css'>
                    Check list of colors
                  </ButtonLink>
                </div>
                <div className='flex flex-wrap gap-2 text-xs font-medium'>
                  <div className='flex items-center justify-center w-10 h-10 text-black rounded bg-primary-50'>
                    50
                  </div>
                  <div className='flex items-center justify-center w-10 h-10 text-black rounded bg-primary-100'>
                    100
                  </div>
                  <div className='flex items-center justify-center w-10 h-10 text-black rounded bg-primary-200'>
                    200
                  </div>
                  <div className='flex items-center justify-center w-10 h-10 text-black rounded bg-primary-300'>
                    300
                  </div>
                  <div className='flex items-center justify-center w-10 h-10 text-black rounded bg-primary-400'>
                    400
                  </div>
                  <div className='flex items-center justify-center w-10 h-10 text-black rounded bg-primary-500'>
                    500
                  </div>
                  <div className='flex items-center justify-center w-10 h-10 text-white rounded bg-primary-600'>
                    600
                  </div>
                  <div className='flex items-center justify-center w-10 h-10 text-white rounded bg-primary-700'>
                    700
                  </div>
                  <div className='flex items-center justify-center w-10 h-10 text-white rounded bg-primary-800'>
                    800
                  </div>
                  <div className='flex items-center justify-center w-10 h-10 text-white rounded bg-primary-900'>
                    900
                  </div>
                </div>
              </li>
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
              <li className='space-y-2'>
                <h2 className='text-lg md:text-xl'>Next Image</h2>
                <p className={clsx('text-sm !mt-1', textColor)}>
                  Next Image with default props and skeleton animation
                </p>
                <NextImage
                  useSkeleton
                  className='w-32 md:w-40'
                  src='/favicon/apple-icon-180x180.png'
                  width='180'
                  height='180'
                  alt='Icon'
                />
              </li>
            </ol>
          </div>
        </section>
      </main>
    </Layout>
  );
}

const colorList = [
  'rose',
  'pink',
  'fuchsia',
  'purple',
  'violet',
  'indigo',
  'blue',
  'sky',
  'cyan',
  'teal',
  'emerald',
  'green',
  'lime',
  'yellow',
  'amber',
  'orange',
  'red',
  'warmGray',
  'trueGray',
  'gray',
  'coolGray',
  'blueGray',
] as const;
