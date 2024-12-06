import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import yaml from 'js-yaml'
import { visit } from 'unist-util-visit'

import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'

const postsDirectory = path.join(process.cwd(), '_posts')

// 配置 gray-matter 使用 js-yaml 4.x
const options = {
  engines: {
    yaml: {
      parse: (str: string) => yaml.load(str) as Record<string, unknown>,
      stringify: (obj: unknown) => yaml.dump(obj)
    }
  }
}

export interface PostData {
  id: string
  title: string
  date: string
  description: string
  tags: string[]
  contentHtml?: string
  series?: string
  seriesIndex?: number
}

// 获取排序后的文章列表
export function getSortedPostsData(): PostData[] {
  return getAllPosts().sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

// 获取所有文章数据
export function getAllPosts(): PostData[] {
  const years = fs.readdirSync(postsDirectory).filter(f => 
    fs.statSync(path.join(postsDirectory, f)).isDirectory()
  )
  
  return years.flatMap(year => {
    const yearDir = path.join(postsDirectory, year)
    return fs.readdirSync(yearDir)
      .filter(file => file.endsWith('.md'))
      .map(fileName => {
        const id = fileName.replace(/\.md$/, '')
        const fullPath = path.join(yearDir, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents, options)

        return {
          id,
          ...(matterResult.data as Omit<PostData, 'id' | 'contentHtml'>),
        }
      })
  })
}

// 获取文章内容
export async function getPostData(id: string): Promise<PostData> {
  const years = fs.readdirSync(postsDirectory).filter(f => 
    fs.statSync(path.join(postsDirectory, f)).isDirectory()
  )
  
  let fullPath = ''
  for (const year of years) {
    const filePath = path.join(postsDirectory, year, `${id}.md`)
    if (fs.existsSync(filePath)) {
      fullPath = filePath
      break
    }
  }
  
  if (!fullPath) {
    throw new Error(`Post not found: ${id}`)
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents, options)

  const contentWithFixedLinks = matterResult.content
    .replace(/\[([^\]]+)\]\(\/blog\/(\d{4}\/[^)]+)\)/g, '[$1]/$2')
    .replace(/\[([^\]]+)\]\(\/(\d{4}\/[^)]+)\)/g, '[$1]/$2')
    .replace(/\[([^\]]+)\]\((\d{4}\/[^)]+)\)/g, '[$1]/$2')
    .replace(/【([^】]+)】/g, '[$1]')
    .replace(/\[([^\]]+)\]\/([^/][^)\s]+)/g, '[$1](/$2)')

  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype as any)
    .use(rehypeStringify)

  const processedContent = await processor.process(contentWithFixedLinks)
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...(matterResult.data as Omit<PostData, 'id' | 'contentHtml'>),
  }
}

// 按年份分组获取文章
export interface PostsByYear {
  year: string
  posts: PostData[]
}

export function getPostsByYear(): PostsByYear[] {
  const posts = getAllPosts()
  const postsByYear: { [key: string]: PostData[] } = {}

  posts.forEach(post => {
    const year = post.date.substring(0, 4)
    if (!postsByYear[year]) {
      postsByYear[year] = []
    }
    postsByYear[year].push(post)
  })

  return Object.entries(postsByYear)
    .map(([year, posts]) => ({
      year,
      posts
    }))
    .sort((a, b) => b.year.localeCompare(a.year))
} 