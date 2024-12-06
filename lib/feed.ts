import { Feed } from 'feed'
import { getAllPosts } from './posts'
import { blogConfig, Config as BlogConfig } from '../config'

export async function generateFeed() {
  const posts = await getAllPosts()
  const siteURL = process.env.NEXT_PUBLIC_SITE_URL
  const date = new Date()

  const feed = new Feed({
    title: blogConfig.title,
    description: blogConfig.description,
    id: blogConfig.siteUrl,
    link: blogConfig.siteUrl,
    author: {
      name: blogConfig.author
    },
    language: "zh-CN",
    image: `${siteURL}/logo.png`,
    favicon: `${siteURL}/favicon.ico`,
    copyright: `All rights reserved ${date.getFullYear()}`,
    updated: date,
    generator: "Next.js Blog",
    feedLinks: {
      rss2: `${siteURL}/rss/feed.xml`,
      json: `${siteURL}/rss/feed.json`,
      atom: `${siteURL}/rss/atom.xml`,
    },
  })

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: post.slug,
      link: `${siteURL}/blog/${post.slug}`,
      description: post.description,
      content: post.content,
      date: new Date(post.date),
    })
  })

  return feed
} 