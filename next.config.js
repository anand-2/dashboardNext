/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    redirects: async () => {
      return [
        {
          source: '/',
          destination: '/home',
          permanent: true,
        },
      ];
    },
  };
