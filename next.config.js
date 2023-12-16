/** @type {import('next').NextConfig} */
const nextConfig = {}
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'fastly.picsum.photos',
          port: '',
          pathname: '/account123/**',
        //   (https://picsum.photos/1200/630?random=6)
        },
      ],
    },
  }
module.exports = nextConfig
