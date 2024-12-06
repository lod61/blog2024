/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.GITHUB_PAGES
    ? {
        output: 'export',
        images: {
          unoptimized: true,
        },
        basePath: '/blog2024',
        assetPrefix: '/blog2024/',
        trailingSlash: true,
      }
    : {
        images: {
          unoptimized: true,
        }
      })
}

module.exports = nextConfig 