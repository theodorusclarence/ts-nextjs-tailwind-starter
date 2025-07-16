'use client';

import {
  ArrowRight,
  CreditCard,
  Laptop,
  Phone,
  Plus,
  Shield,
} from 'lucide-react';
import React from 'react';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';
import TextButton from '@/components/buttons/TextButton';
import NextImage from '@/components/NextImage';
import Skeleton from '@/components/Skeleton';
import { cn } from '@/lib/utils';

type Color = (typeof colorList)[number];

export default function ComponentPage() {
  const [mode, setMode] = React.useState<'dark' | 'light'>('light');
  const [color, setColor] = React.useState<Color>('sky');
  const toggleMode = () => {
    return mode === 'dark' ? setMode('light') : setMode('dark');
  };

  const textColor = mode === 'dark' ? 'text-gray-300' : 'text-gray-600';

  return (
    <main>
      <section className={cn(mode === 'dark' ? 'bg-dark' : 'bg-white', color)}>
        <div
          className={cn(
            'layout min-h-screen py-20',
            mode === 'dark' ? 'text-white' : 'text-black',
          )}
        >
          <h1>Built-in Components</h1>
          <a className='mt-2' href='/'>
            Back to Home
          </a>

          <div className='mt-8 flex flex-wrap gap-2'>
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
              <p className={cn('mt-1! text-sm', textColor)}>
                You can change primary color to any Tailwind CSS colors. See
                globals.css to change your color.
              </p>
              <div className='flex flex-wrap gap-2'>
                <select
                  name='color'
                  id='color'
                  value={color}
                  className={cn(
                    'block max-w-xs rounded-sm',
                    mode === 'dark'
                      ? 'bg-dark border border-gray-600'
                      : 'border-gray-300 bg-white',
                    'focus:border-primary-400 focus:ring-primary-400 focus:outline-hidden focus:ring-3',
                  )}
                  onChange={(e) => setColor(e.target.value as Color)}
                >
                  {colorList.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div className='flex flex-wrap gap-2 text-xs font-medium'>
                <div className='bg-primary-50 flex h-10 w-10 items-center justify-center rounded-sm text-black'>
                  50
                </div>
                <div className='bg-primary-100 flex h-10 w-10 items-center justify-center rounded-sm text-black'>
                  100
                </div>
                <div className='bg-primary-200 flex h-10 w-10 items-center justify-center rounded-sm text-black'>
                  200
                </div>
                <div className='bg-primary-300 flex h-10 w-10 items-center justify-center rounded-sm text-black'>
                  300
                </div>
                <div className='bg-primary-400 flex h-10 w-10 items-center justify-center rounded-sm text-black'>
                  400
                </div>
                <div className='bg-primary-500 flex h-10 w-10 items-center justify-center rounded-sm text-black'>
                  500
                </div>
                <div className='bg-primary-600 flex h-10 w-10 items-center justify-center rounded-sm text-white'>
                  600
                </div>
                <div className='bg-primary-700 flex h-10 w-10 items-center justify-center rounded-sm text-white'>
                  700
                </div>
                <div className='bg-primary-800 flex h-10 w-10 items-center justify-center rounded-sm text-white'>
                  800
                </div>
                <div className='bg-primary-900 flex h-10 w-10 items-center justify-center rounded-sm text-white'>
                  900
                </div>
                <div className='bg-primary-950 flex h-10 w-10 items-center justify-center rounded-sm text-white'>
                  950
                </div>
              </div>
            </li>
            <li className='space-y-2'>
              <h2 className='text-lg md:text-xl'>UnstyledLink</h2>
              <p className={cn('mt-1! text-sm', textColor)}>
                No style applied, differentiate internal and outside links, give
                custom cursor for outside links.
              </p>
            </li>
            <li className='space-y-2'>
              <h2 className='text-lg md:text-xl'>PrimaryLink</h2>
              <p className={cn('mt-1! text-sm', textColor)}>
                Add styling on top of UnstyledLink, giving a primary color to
                the link.
              </p>
            </li>
            <li className='space-y-2'>
              <h2 className='text-lg md:text-xl'>UnderlineLink</h2>
              <p className={cn('mt-1! text-sm', textColor)}>
                Add styling on top of UnstyledLink, giving a dotted and animated
                underline.
              </p>
            </li>
            <li className='space-y-2'>
              <h2 className='text-lg md:text-xl'>ArrowLink</h2>
              <p className={cn('mt-1! text-sm', textColor)}>
                Useful for indicating navigation, I use this quite a lot, so why
                not build a component with some whimsy touch?
              </p>
            </li>
            <li className='space-y-2'>
              <h2 className='text-lg md:text-xl'>ButtonLink</h2>
              <p className={cn('mt-1! text-sm', textColor)}>
                Button styled link with 3 variants.
              </p>
            </li>
            <li className='space-y-2'>
              <h2 className='text-lg md:text-xl'>Button</h2>
              <p className={cn('mt-1! text-sm', textColor)}>
                Ordinary button with style.
              </p>
              <div className='flex flex-wrap gap-2'>
                <Button variant='primary'>Primary Variant</Button>
                <Button variant='outline' isDarkBg={mode === 'dark'}>
                  Outline Variant
                </Button>
                <Button variant='ghost' isDarkBg={mode === 'dark'}>
                  Ghost Variant
                </Button>
                <Button variant='dark'>Dark Variant</Button>
                <Button variant='light'>Light Variant</Button>
              </div>
              <div className='flex flex-wrap gap-2'>
                <Button
                  variant='primary'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                >
                  Icon
                </Button>
                <Button
                  variant='outline'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                  isDarkBg={mode === 'dark'}
                >
                  Icon
                </Button>
                <Button
                  variant='ghost'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                  isDarkBg={mode === 'dark'}
                >
                  Icon
                </Button>
                <Button variant='dark' leftIcon={Plus} rightIcon={ArrowRight}>
                  Icon
                </Button>
                <Button variant='light' leftIcon={Plus} rightIcon={ArrowRight}>
                  Icon
                </Button>
              </div>
              <div className='mt-4! flex flex-wrap gap-2'>
                <Button size='sm' variant='primary'>
                  Small Size
                </Button>
                <Button size='sm' variant='outline' isDarkBg={mode === 'dark'}>
                  Small Size
                </Button>
                <Button size='sm' variant='ghost' isDarkBg={mode === 'dark'}>
                  Small Size
                </Button>
                <Button size='sm' variant='dark'>
                  Small Size
                </Button>
                <Button size='sm' variant='light'>
                  Small Size
                </Button>
              </div>
              <div className='flex flex-wrap gap-2'>
                <Button
                  size='sm'
                  variant='primary'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                >
                  Icon
                </Button>
                <Button
                  size='sm'
                  variant='outline'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                  isDarkBg={mode === 'dark'}
                >
                  Icon
                </Button>
                <Button
                  size='sm'
                  variant='ghost'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                  isDarkBg={mode === 'dark'}
                >
                  Icon
                </Button>

                <Button
                  size='sm'
                  variant='dark'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                >
                  Icon
                </Button>
                <Button
                  size='sm'
                  variant='light'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                >
                  Icon
                </Button>
              </div>

              <div className='mt-4! flex flex-wrap gap-2'>
                <Button disabled variant='primary'>
                  Disabled
                </Button>
                <Button disabled variant='outline' isDarkBg={mode === 'dark'}>
                  Disabled
                </Button>
                <Button disabled variant='ghost' isDarkBg={mode === 'dark'}>
                  Disabled
                </Button>
                <Button disabled variant='dark'>
                  Disabled
                </Button>
                <Button disabled variant='light'>
                  Disabled
                </Button>
              </div>
              <div className='flex flex-wrap gap-2'>
                <Button isLoading variant='primary'>
                  Disabled
                </Button>
                <Button isLoading variant='outline' isDarkBg={mode === 'dark'}>
                  Disabled
                </Button>
                <Button isLoading variant='ghost' isDarkBg={mode === 'dark'}>
                  Disabled
                </Button>
                <Button isLoading variant='dark'>
                  Disabled
                </Button>
                <Button isLoading variant='light'>
                  Disabled
                </Button>
              </div>
            </li>
            <li className='space-y-2'>
              <h2 className='text-lg md:text-xl'>TextButton</h2>
              <p className={cn('mt-1! text-sm', textColor)}>
                Button with a text style
              </p>
              <div className='space-x-2'>
                <TextButton>Primary Variant</TextButton>
                <TextButton variant='basic'>Basic Variant</TextButton>
              </div>
            </li>
            <li className='space-y-2'>
              <h2 className='text-lg md:text-xl'>IconButton</h2>
              <p className={cn('mt-1! text-sm', textColor)}>
                Button with only icon inside
              </p>
              <div className='space-x-2'>
                <IconButton icon={Plus} />
                <IconButton variant='outline' icon={Laptop} />
                <IconButton variant='ghost' icon={Phone} />
                <IconButton variant='dark' icon={Shield} />
                <IconButton variant='light' icon={CreditCard} />
              </div>
            </li>
            <li className='space-y-2'>
              <h2 className='text-lg md:text-xl'>Custom 404 Page</h2>
              <p className={cn('mt-1! text-sm', textColor)}>
                Styled 404 page with some animation.
              </p>
            </li>
            <li className='space-y-2'>
              <h2 className='text-lg md:text-xl'>Next Image</h2>
              <p className={cn('mt-1! text-sm', textColor)}>
                Next Image with default props and skeleton animation
              </p>
              <NextImage
                useSkeleton
                className='w-32 md:w-40'
                src='/favicon/android-chrome-192x192.png'
                width='180'
                height='180'
                alt='Icon'
              />
            </li>
            <li className='space-y-2'>
              <h2 className='text-lg md:text-xl'>Skeleton</h2>
              <p className={cn('mt-1! text-sm', textColor)}>
                Skeleton with shimmer effect
              </p>
              <Skeleton className='h-72 w-72' />
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}

const colorList = [
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
] as const;
