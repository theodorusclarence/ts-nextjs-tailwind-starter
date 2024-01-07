# Next.js + Tailwind CSS + TypeScript Starter and Boilerplate

<div align="center">
  <h2>🔋 ts-nextjs-tailwind-starter</h2>
  <p>Next.js + Tailwind CSS + TypeScript starter packed with useful development features.</p>
  <p>Made by <a href="https://theodorusclarence.com">Theodorus Clarence</a></p>

[![GitHub Repo stars](https://img.shields.io/github/stars/theodorusclarence/ts-nextjs-tailwind-starter)](https://github.com/theodorusclarence/ts-nextjs-tailwind-starter/stargazers)
[![Depfu](https://badges.depfu.com/badges/fc6e730632ab9dacaf7df478a08684a7/overview.svg)](https://depfu.com/github/theodorusclarence/ts-nextjs-tailwind-starter?project_id=30160)
[![Last Update](https://img.shields.io/badge/deps%20update-every%20sunday-blue.svg)](https://shields.io/)

</div>

## Features

This repository is 🔋 battery packed with:

- ⚡️ Next.js 14 with App Router
- ⚛️ React 18
- ✨ TypeScript
- 💨 Tailwind CSS 3 — Configured with CSS Variables to extend the **primary** color
- 💎 Pre-built Components — Components that will **automatically adapt** with your brand color, [check here for the demo](https://tsnext-tw.thcl.dev/components)
- 🃏 Jest — Configured for unit testing
- 📈 Absolute Import and Path Alias — Import components using `@/` prefix
- 📏 ESLint — Find and fix problems in your code, also will **auto sort** your imports
- 💖 Prettier — Format your code consistently
- 🐶 Husky & Lint Staged — Run scripts on your staged files before they are committed
- 🤖 Conventional Commit Lint — Make sure you & your teammates follow conventional commit
- ⏰ Release Please — Generate your changelog by activating the `release-please` workflow
- 👷 Github Actions — Lint your code on PR
- 🚘 Automatic Branch and Issue Autolink — Branch will be automatically created on issue **assign**, and auto linked on PR
- 🔥 Snippets — A collection of useful snippets
- 👀 Open Graph Helper Function — Awesome open graph generated using [og](https://github.com/theodorusclarence/og), fork it and deploy!
- 🗺 Site Map — Automatically generate sitemap.xml
- 📦 Expansion Pack — Easily install common libraries, additional components, and configs.

See the 👉 [feature details and changelog](https://github.com/theodorusclarence/ts-nextjs-tailwind-starter/blob/main/CHANGELOG.md) 👈 for more.

You can also check all of the **details and demos** on my blog post:

- [One-stop Starter to Maximize Efficiency on Next.js & Tailwind CSS Projects](https://theodorusclarence.com/blog/one-stop-starter)

## Sponsors ❤️

<a href="https://www.questlabs.ai/?utm_source=ts-nextjs-tailwind-starter" target="_blank"><img src="https://uploads-ssl.webflow.com/64f77a831b9d50c279dc926c/657c990e7259207969cf70bb_AI%20powered%20user%20engagement%20components.png" width="400" /></a>

## Getting Started

### 1. Clone this template using one of the three ways

1. Use this repository as template

   **Disclosure:** by using this repository as a template, there will be an attribution on your repository.

   I'll appreciate if you do, so this template can be known by others too 😄

   ![Use as template](https://user-images.githubusercontent.com/55318172/129183039-1a61e68d-dd90-4548-9489-7b3ccbb35810.png)

2. Using `create-next-app`

   ```bash
   npx create-next-app -e https://github.com/theodorusclarence/ts-nextjs-tailwind-starter project-name
   ```

   If you still want to use **pages directory** (_is not actively maintained_) you can use this command

   ```bash
   npx create-next-app -e https://github.com/theodorusclarence/ts-nextjs-tailwind-starter/tree/pages-directory project-name
   ```

3. Using `degit`

   ```bash
   npx degit theodorusclarence/ts-nextjs-tailwind-starter YOUR_APP_NAME
   ```

4. Deploy to Vercel

   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Ftheodorusclarence%2Fts-nextjs-tailwind-starter)

### 2. Install dependencies

It is encouraged to use **pnpm** so the husky hooks can work properly.

```bash
pnpm install
```

### 3. Run the development server

You can start the server using this command:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `src/pages/index.tsx`.

### 4. Change defaults

There are some things you need to change including title, urls, favicons, etc.

Find all comments with !STARTERCONF, then follow the guide.

Don't forget to change the package name in package.json

### 5. Commit Message Convention

This starter is using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), it is mandatory to use it to commit changes.

## Projects using ts-nextjs-tailwind-starter

<!--
TEMPLATE
- [sitename](https://sitelink.com) ([Source](https://github.com/githublink))
- [sitename](https://sitelink.com)
-->

- [theodorusclarence.com](https://theodorusclarence.com) ([Source](https://github.com/theodorusclarence/theodorusclarence.com))
- [Notiolink](https://notiolink.thcl.dev/) ([Source](https://github.com/theodorusclarence/notiolink))
- [NextJs + Materia UI + Typescript](https://github.com/AlexStack/nextjs-materia-mui-typescript-hook-form-scaffold-boilerplate-starter)

Are you using this starter? Please add your page (and repo) to the end of the list via a [Pull Request](https://github.com/theodorusclarence/ts-nextjs-tailwind-starter/edit/main/README.md). 😃

## Expansion Pack 📦

This starter is now equipped with an [expansion pack](https://github.com/theodorusclarence/expansion-pack).

You can easily add expansion such as React Hook Form + Components, Storybook, and more just using a single command line.

<https://user-images.githubusercontent.com/55318172/146631994-e1cac137-1664-4cfe-950b-a96decc1eaa6.mp4>

Check out the [expansion pack repository](https://github.com/theodorusclarence/expansion-pack) for the commands

### App Router Update

Due to App Router update, the expansion pack is currently **outdated**. It will be updated in the future. You can still use them by copy and pasting the files.
