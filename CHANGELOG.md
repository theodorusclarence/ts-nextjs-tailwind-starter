<!-- //!STARTERCONF Remove this file, this is used as the starter changelog -->

# ts-nextjs-tailwind-starter changelog

This changelog is manually generated and not accurate with the package.json, only to show the changes since the last release.

## 0.1.0

### Features 

#### Installed Packages

1. [clsx](https://bundlephobia.com/package/clsx@latest), utility for constructing `className` strings conditionally.
2. [react-icons](https://bundlephobia.com/package/react-icons@latest), svg react icons of popular icon packs.

#### UnstyledLink Component

Used as a component for Next.js Link. Will render out Next/Link if the href started with `/` or `#`, else will render an `a` tag with `target='_blank'`. Also add a cursor style for outside links

#### CustomLink Component

![customlink](https://user-images.githubusercontent.com/55318172/129183546-4e8c2059-0493-4459-a1e9-755fbd32fe39.gif)

#### All Components Demo:

Check it out yourself on [the deployment](https://ts-nextjs-tailwind-starter.theodorusclarence.com/components).

https://user-images.githubusercontent.com/55318172/136921766-470eba67-6f5e-4066-9f37-a6ea825d6cd4.mov

#### Absolute Import

You can import without using relative path

```tsx
import Nav from '../../../components/Nav';

simplified to

import Nav from '@/components/Nav';
```

#### Seo Component

Configure the default in `src/components/Seo.tsx`. If you want to use the default, just add `<Seo />` on top of your page.

You can also customize it per page by overriding the title, description as props

```tsx
<Seo title='Next.js Tailwind Starter' description='your description' />
```

or if you want to still keep the title like `%s | Next.js Tailwind Starter`, you can use `templateTitle` props.

#### Custom 404 Page

![404](https://user-images.githubusercontent.com/55318172/129184274-d90631f2-6688-4ed2-bef2-a4d018a4863c.gif)

#### Workspace Snippets

Snippets such as React import, useState, useEffect, React Component. [View more](/.vscode/typescriptreact.code-snippets)

#### Husky, Prettier, Lint, and Commitlint Configured

3 Husky hooks including:

1. pre-commit, running `next lint` and format the code using prettier
2. commit-msg, running commitlint to ensure the use of [Conventional Commit](https://theodorusclarence.com/library/conventional-commit-readme) for commit messages
3. post-merge, running `yarn` every `git pull` or after merge to ensure all new packages are installed and ready to go

#### Default Favicon Declaration

Use [Favicon Generator](https://www.favicon-generator.org/) and then overwrite the files in `/public/favicon`

#### Default Tailwind CSS Base Styles

There are default styles for responsive heading sizes, and `.layout` to support a max-width for larger screen size. Find more about it on [my blog post](https://theodorusclarence.com/blog/tailwindcss-best-practice#1-using-layout-class-or-container)

#### Open Graph Generator

| ![image](https://user-images.githubusercontent.com/55318172/137617070-806a0509-84bd-4cae-a900-2ab17e418d8d.png) | ![image](https://user-images.githubusercontent.com/55318172/137617090-c24f684a-bfe5-41b6-8ba9-fa99bae5cadf.png) |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |

Open Graph is generated using [og.thcl.dev](https://og.thcl.dev), but please fork and self-host if your website is going to have a lot of traffic.

Check out the [repository](https://github.com/theodorusclarence/og) to see the API parameters.

#### Preloaded & Self Hosted Inter Fonts

Inter fonts is a variable fonts that is self hosted and preloaded.
