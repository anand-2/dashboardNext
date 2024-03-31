/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    redirects: async () => {
      return [
        {
          source: '/',
          destination: '/dashboard',
          permanent: true,
        },
      ];
    },
  };
