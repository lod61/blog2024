import fs from 'fs'
import path from 'path'
import { Feed } from 'feed'
import { getAllPosts } from '../lib/posts'
import { blogConfig } from '../config'

async function generateRssFeed() {
  const posts = getAllPosts()
  const siteURL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const date = new Date()

  const feed = new Feed({
    title: blogConfig.title,
    description: blogConfig.description,
    id: siteURL,
    link: siteURL,
    language: "zh-CN",
    favicon: `${siteURL}/favicon.ico`,
    copyright: `All rights reserved ${date.getFullYear()}`,
    updated: date,
    generator: "Next.js Blog",
    feedLinks: {
      rss2: `${siteURL}/rss/feed.xml`,
      json: `${siteURL}/rss/feed.json`,
      atom: `${siteURL}/rss/atom.xml`,
    },
    author: {
      name: blogConfig.author,
      link: siteURL,
    },
  })

  posts.forEach((post) => {
    const url = `${siteURL}/${post.date.substring(0, 4)}/${post.id}`
    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.description,
      content: post.contentHtml || '',
      date: new Date(post.date),
    })
  })

  // 确保目录存在
  const rssDir = path.join(process.cwd(), 'public', 'rss')
  if (!fs.existsSync(rssDir)) {
    fs.mkdirSync(rssDir, { recursive: true })
  }

  // 生成不同格式的 feed
  fs.writeFileSync(path.join(rssDir, 'feed.xml'), feed.rss2())
  fs.writeFileSync(path.join(rssDir, 'feed.json'), feed.json1())
  fs.writeFileSync(path.join(rssDir, 'atom.xml'), feed.atom1())

  console.log('RSS feeds generated successfully!')
}

generateRssFeed().catch(console.error) 