/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `${process.env.RIOT_URL_PLATFORM}:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
