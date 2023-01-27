/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'ddragon.leagueoflegends.com',
        port: '',
        pathname: '/cdn/12.23.1/img/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `${process.env.NEXT_PUBLIC_RIOT_URL_PLATFORM}:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
