/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/blog2024',
  assetPrefix: '/blog2024/',
  trailingSlash: true,
}

module.exports = nextConfig 