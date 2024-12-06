/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.VERCEL
    ? {
        // Vercel 环境配置
        images: {
          unoptimized: true,
        }
      }
    : {
        // GitHub Pages 配置
        output: 'export',
        images: {
          unoptimized: true,
        },
        basePath: '/blog2024',
        assetPrefix: '/blog2024/',
      })
}

module.exports = nextConfig 