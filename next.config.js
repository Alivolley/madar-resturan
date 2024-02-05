/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['mui-one-time-password-input']);

const nextConfig = {
   reactStrictMode: true,

   images: {
      remotePatterns: [
         {
            hostname: 'madar.liara.run',
         },
      ],
   },
};

module.exports = withTM(nextConfig);
