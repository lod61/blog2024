/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages 需要静态导出
  ...(process.env.GITHUB_ACTIONS
    ? {
        output: 'export',
        images: {
          unoptimized: true,
        },
        basePath: '/blog2024',
        assetPrefix: '/blog2024/',
      }
    : {
        // Vercel 环境使用默认配置
        images: {
          unoptimized: true,
        },
      }),
}

module.exports = nextConfig 