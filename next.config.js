/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/blog2024',
  assetPrefix: '/blog2024/',
}

module.exports = nextConfig 