import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), '_posts')

export interface PostData {
  id: string
  title: string
  date: string
  description: string
  tags: string[]
  contentHtml?: string
}

// 按年份分组的帖子类型
export interface PostsByYear {
  year: string
  posts: PostData[]
}

export function getSortedPostsData(): PostData[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      id,
      ...(matterResult.data as { title: string; date: string; description: string; tags: string[] }),
    }
  })

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

// 获取按年份分组的文章
export function getPostsByYear(): PostsByYear[] {
  const posts = getSortedPostsData()
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

export async function getPostData(id: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // 使用 gray-matter 解析 markdown 文件的元数据
  const matterResult = matter(fileContents)

  // 使用 remark 将 markdown 转换为 HTML
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...(matterResult.data as { title: string; date: string; description: string; tags: string[] }),
  }
} 