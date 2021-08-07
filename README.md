This is a Next.js, Tailwind, and Typescript project bootstrapped using ts-nextjs-tailwind-starter created by [Theodorus Clarence](https://github.com/theodorusclarence/ts-nextjs-tailwind-starter).

See the deployment on [https://clarence.link/ts-next](https://clarence.link/ts-next)

![Screenshot](https://user-images.githubusercontent.com/55318172/128602240-5e1faa71-450b-4f93-b08a-68bfa95c37f4.png)

## Getting Started

To use this starter, you can use create-next-app to do it by:
```bash
npx create-next-app -e https://github.com/theodorusclarence/ts-nextjs-tailwind-starter project-name
```

or

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Ftheodorusclarence%2Fts-nextjs-tailwind-starter)

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## What's Inside

### Inter Fonts

Inter fonts is self hosted. The default weights are `400, 600, 700`. To add more, use fontsquirrel.

### UnstyledLink Component
Used as a component for Next.js Link. Will render out Next/Link if the href started with `/` or `#`, else will render an `a` tag with `target='_blank'`.
### CustomLink Component
An extension of UnstyledLink Component, you can add your default styling for a button/link.
```tsx
<UnstyledLink
      className={`${props.className} inline-flex items-center font-bold hover:text-primary-400`}
      {...props}
    >
  {props.children}
</UnstyledLink>
```

### Default Favicon Declaration
Use [Favicon Generator](https://www.favicon-generator.org/) and then overwrite the files in `/public/favicon`

### Just-In-Time Tailwindcss
Defaulted to true, you can uncomment the `mode='jit'` in `/tailwind.config.js`

### Default Styles
There are default styles for responsive heading sizes, and `.layout` to support a max-width for larger screen size.

### Seo Component
Configure the default in `/components/Seo.tsx`. If you want to use the default, just add `<Seo />` on top of your page. 

You can also customize it per page by overriding the title, description as props

```jsx
<Seo
  title='Next.js Tailwind Starter'
  description='your description'
/>
```
