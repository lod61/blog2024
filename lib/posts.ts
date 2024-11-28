import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content?: string;
  readingTime?: {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };
}

const postsDirectory = path.join(process.cwd(), 'content/posts')

export async function getAllPosts(): Promise<Post[]> {
  const fileNames = await fs.readdir(postsDirectory)
  const posts = await Promise.all(fileNames.map(async (fileName: string) => {
    const slug = fileName.replace(/\.mdx$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = await fs.readFile(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const stats = readingTime(content)

    return {
      slug,
      ...data,
      readingTime: {
        text: stats.text.replace('min read', '分钟阅读'),
        minutes: Math.ceil(stats.minutes),
        time: stats.time,
        words: stats.words
      }
    } as Post
  }))

  return posts.sort((a: Post, b: Post) => (a.date < b.date ? 1 : -1))
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  const fileContents = await fs.readFile(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const stats = readingTime(content)

  return {
    slug,
    content,
    ...data,
    readingTime: {
      text: stats.text.replace('min read', '分钟阅读'),
      minutes: Math.ceil(stats.minutes),
      time: stats.time,
      words: stats.words
    }
  } as Post
} 