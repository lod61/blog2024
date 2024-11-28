/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://your-domain.com', // 替换为你的域名
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/server-sitemap.xml'],
} 