/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Uncoment to add domain whitelist
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'res.cloudinary.com',
  //     },
  //   ]
  // },

  turbopack: {
    rules: {
      // Convert *.svg imports to React components, except *.svg?url
      '*.svg': {
        condition: { not: { query: /[?&]url(?=&|$)/ } },
        loaders: [
          {
            loader: '@svgr/webpack',
            options: {
              dimensions: false,
              titleProp: true,
            },
          },
        ],
        as: '*.js',
      },
    },
  },
};

module.exports = nextConfig;
