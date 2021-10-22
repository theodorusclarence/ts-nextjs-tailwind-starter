# Next.js + Tailwind CSS + TypeScript Starter

[![CodeFactor](https://www.codefactor.io/repository/github/theodorusclarence/ts-nextjs-tailwind-starter/badge/main)](https://www.codefactor.io/repository/github/theodorusclarence/ts-nextjs-tailwind-starter/overview/main)
[![Depfu](https://badges.depfu.com/badges/fc6e730632ab9dacaf7df478a08684a7/overview.svg)](https://depfu.com/github/theodorusclarence/ts-nextjs-tailwind-starter?project_id=30160)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=theodorusclarence_ts-nextjs-tailwind-starter&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=theodorusclarence_ts-nextjs-tailwind-starter)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=theodorusclarence_ts-nextjs-tailwind-starter&metric=bugs)](https://sonarcloud.io/dashboard?id=theodorusclarence_ts-nextjs-tailwind-starter)

This is a Next.js, Tailwind CSS, and Typescript project bootstrapped using [ts-nextjs-tailwind-starter](https://github.com/theodorusclarence/ts-nextjs-tailwind-starter) created by [Theodorus Clarence](https://github.com/theodorusclarence/ts-nextjs-tailwind-starter). All dependencies are updated to the latest version every **Monday**.

![ts-nextjs-tailwind-starter](https://socialify.git.ci/theodorusclarence/ts-nextjs-tailwind-starter/image?description=1&descriptionEditable=A%20starter%20for%20Next.js%2C%20Tailwind%20CSS%2C%20and%20Typescript%20with%20Absolute%20Import%2C%20Seo%2C%20Link%20component%2C%20pre-configured%20with%20Husky.&language=1&owner=1&pattern=Charlie%20Brown&stargazers=1&theme=Dark)

## Getting Started

### 1. To use this template you can use one of the three ways:

1. Using `create-next-app`

```bash
npx create-next-app -e https://github.com/theodorusclarence/ts-nextjs-tailwind-starter project-name
```

2. Use this repository as template

![image](https://user-images.githubusercontent.com/55318172/129183039-1a61e68d-dd90-4548-9489-7b3ccbb35810.png)

3. Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Ftheodorusclarence%2Fts-nextjs-tailwind-starter)

### 2. Run the development server

It is encouraged to use yarn so the husky hooks can work properly.

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `src/pages/index.tsx`. The page auto-updates as you edit the file.

### 3. Refer to the [usage guide](https://github.com/theodorusclarence/ts-nextjs-tailwind-starter#usage-guide)

## What's Inside

### 1. Installed Package

1. [clsx](https://bundlephobia.com/package/clsx@latest), utility for constructing `className` strings conditionally.
2. [react-icons](https://bundlephobia.com/package/react-icons@latest), svg react icons of popular icon packs.

### 2. UnstyledLink Component

Used as a component for Next.js Link. Will render out Next/Link if the href started with `/` or `#`, else will render an `a` tag with `target='_blank'`. Also add a cursor style for outside links

### 3. CustomLink Component

![customlink](https://user-images.githubusercontent.com/55318172/129183546-4e8c2059-0493-4459-a1e9-755fbd32fe39.gif)

**All Components Demo:**

Check it out yourself on [the deployment](https://ts-nextjs-tailwind-starter.theodorusclarence.com/components).

https://user-images.githubusercontent.com/55318172/136921766-470eba67-6f5e-4066-9f37-a6ea825d6cd4.mov

### 4. Absolute Import

You can import without using relative path

```tsx
import Nav from '../../../components/Nav';

simplified to

import Nav from '@/components/Nav';
```

### 5. Seo Component

Configure the default in `src/components/Seo.tsx`. If you want to use the default, just add `<Seo />` on top of your page.

You can also customize it per page by overriding the title, description as props

```tsx
<Seo title='Next.js Tailwind Starter' description='your description' />
```

or if you want to still keep the title like `%s | Next.js Tailwind Starter`, you can use `templateTitle` props.

### 6. Custom 404 Page

![404](https://user-images.githubusercontent.com/55318172/129184274-d90631f2-6688-4ed2-bef2-a4d018a4863c.gif)

### 7. Workspace Snippets

Snippets such as React import, useState, useEffect, React Component. [View more](/.vscode/typescriptreact.code-snippets)

### 8. Husky, Prettier, Lint, and Commitlint Configured

3 Husky hooks including:

1. pre-commit, running `next lint` and format the code using prettier
2. commit-msg, running commitlint to ensure the use of [Conventional Commit](https://theodorusclarence.com/library/conventional-commit-readme) for commit messages
3. post-merge, running `yarn` every `git pull` or after merge to ensure all new packages are installed and ready to go

### 9. Default Favicon Declaration

Use [Favicon Generator](https://www.favicon-generator.org/) and then overwrite the files in `/public/favicon`

### 10. Default Tailwind CSS Base Styles

There are default styles for responsive heading sizes, and `.layout` to support a max-width for larger screen size. Find more about it on [my blog post](https://theodorusclarence.com/blog/tailwindcss-best-practice#1-using-layout-class-or-container)

### 11. Open Graph Generator

| ![image](https://user-images.githubusercontent.com/55318172/137617070-806a0509-84bd-4cae-a900-2ab17e418d8d.png) | ![image](https://user-images.githubusercontent.com/55318172/137617090-c24f684a-bfe5-41b6-8ba9-fa99bae5cadf.png) |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |

Open Graph is generated using [og.thcl.dev](https://og.thcl.dev), but please fork and self-host if your website is going to have a lot of traffic.

Check out the [repository](https://github.com/theodorusclarence/og) to see the API parameters.

### 12. Preloaded & Self Hosted Inter Fonts

Inter fonts is a variable fonts that is self hosted and preloaded.

## Usage Guide

### 1. Change defaults

There are some things you need to change including title, urls, favicons, etc. Here are the list

#### `components/Seo.tsx`

Change title, sitename, url, and opengraph image

```tsx
const defaultMeta = {
  title: 'Next.js + Tailwind CSS + TypeScript Starter',
  site_name: 'Next.js + Tailwind CSS + TypeScript Starter',
  description:
    ' A starter for Next.js, Tailwind CSS, and TypeScript with Absolute Import, Seo, Link component, pre-configured with Husky',
  url: 'https://theodorusclarence.com',
  image: 'https://theodorusclarence.com/favicon/large-og.jpg',
  type: 'website',
  robots: 'follow, index',
};
```

#### `next-sitemap.js`

Change the siteUrl to generate sitemap correctly

```js
module.exports = {
  siteUrl: 'https://ts-nextjs-tailwind-starter.theodorusclarence.com/',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
```

#### `package.json`

Change the package name to your project name.

#### `public/favicon`

Favicon are generated from [favicon-generator site](https://favicon-generator.org), generate a new favicon and replace all of favicons inside.

### 2. Commit Message Convention

This starter is using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), it is mandatory to use it to commit changes.

## Snippets

This starter is equipped with workspace-snippets, it is encouraged to use it, especially the `np` and `rc`

### Next.js Page

File inside `src/pages` will be the webpage route, there are 2 things that need to be added in Next.js page:

1. Seo component
2. Layout class to give constraint to viewport width. [Read more about layout class](https://theodorusclarence.com/blog/tailwindcss-best-practice#1-using-layout-class-or-container).

Snippets: `np`

```tsx
import * as React from 'react';
import Seo from '@/components/Seo';
export default function TestPage() {
  return (
    <>
      <Seo templateTitle='Test' />
      <main>
        <section className=''>
          <div className='layout'></div>
        </section>
      </main>
    </>
  );
}
```

### React Components

To make a new component, It is encouraged to use `export default function`. Because when we need to rename it, we only need to do it once.

Snippets: `rc`

```tsx
import * as React from 'react';
export default function Component() {
  return <div></div>;
}
```

### Import React

Snippets: `ir`

```tsx
import * as React from 'react';
```

### Import Next Image

Snippets: `imimg`

```tsx
import Image from 'next/image';
```

### Import Next Link

Snippets: `iml`

```tsx
import Link from 'next/link';
```

### useState Hook

Snippets: `us`

```tsx
const [state, setState] = React.useState(initialState);
```

### useEffect Hook

Snippets: `uf`

```tsx
React.useEffect(() => {}, []);
```

### useReducer Hook

Snippets: `ur`

```tsx
const [state, dispatch] = React.useReducer(someReducer, {});
```

### useRef Hook

Snippets: `urf`

```tsx
const someRef = React.useRef();
```

### Region Comment

It is really useful when we need to group code. It is also collapsible in VSCode

Snippets: `reg`

```tsx
//#region  //*============== FORM SUBMIT
//#endregion  //*============== FORM SUBMIT
```

You should also use [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) extension.
