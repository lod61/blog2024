/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  ...(process.env.VERCEL
    ? {} // Vercel 环境下不需要 basePath
    : {
        basePath: '/blog2024',
        assetPrefix: '/blog2024/',
      }),
}

module.exports = nextConfig 