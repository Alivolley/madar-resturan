/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['mui-one-time-password-input']);

const nextConfig = {
   output: 'standalone',
   reactStrictMode: true,

   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: '**',
         },
      ],
   },
};

module.exports = withTM(nextConfig);
