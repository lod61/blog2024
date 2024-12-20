import { Feed } from 'feed'
import { getAllPosts } from './posts'
import { blogConfig } from '../config'

export async function generateFeed() {
  const posts = await getAllPosts()
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

  return feed
} 