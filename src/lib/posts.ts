import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

export interface Post {
  title: string
  slug: string
  date: string
  description: string
  tags: string[]
  draft: boolean
}

export function getAllPosts() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )

  return posts.filter((post) => !post.draft)
}

export function getPostBySlug(slug: string) {
  return allPosts.find((post) => post.slug === slug)
}

export function getPostsByTag(tag: string) {
  return getAllPosts().filter((post) => post.tags.includes(tag))
} 