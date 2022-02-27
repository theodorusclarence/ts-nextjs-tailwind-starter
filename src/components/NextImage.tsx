import Image, { ImageLoaderProps, ImageProps } from 'next/image';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

type NextImageProps = (
  | { width: string | number; height: string | number }
  | { layout: 'fill'; width?: string | number; height?: string | number }
) &
  ImageProps;

export default function NextImage({
  className,
  src,
  width,
  height,
  layout,
  alt,
  ...rest
}: NextImageProps) {
  return (
    <div className={clsxm(className)}>
      <Image
        className='transition-all duration-200'
        src={src}
        width={width}
        height={height}
        layout={layout}
        alt={alt}
        loader={customLoader}
        placeholder='blur'
        blurDataURL={`data:image/svg+xml;base64,${toBase64(
          shimmer(width ? +width : 700, height ? +height : 475)
        )}`}
        {...rest}
      />
    </div>
  );
}

const customLoader = ({ src, width, quality }: ImageLoaderProps): string => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color='#f6f7f8' offset='0%' />
      <stop stop-color='#edeef1' offset='20%' />
      <stop stop-color='#f6f7f8' offset='40%' />
      <stop stop-color='#f6f7f8' offset='70%' />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#f6f7f8" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);
