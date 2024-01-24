/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['mui-one-time-password-input']);

const nextConfig = {
   reactStrictMode: true,

   images: {
      remotePatterns: [
         {
            hostname: 'madarbackend.pythonanywhere.com',
         },
      ],
   },
};

module.exports = withTM(nextConfig);
