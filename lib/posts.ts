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
  readingTime?: number
}

// 按年份分组的帖子类型
export interface PostsByYear {
  year: string
  posts: PostData[]
}

export function getSortedPostsData(): PostData[] {
  // 递归获取所有年份目录下的文章
  const years = fs.readdirSync(postsDirectory).filter(f => 
    fs.statSync(path.join(postsDirectory, f)).isDirectory()
  )
  
  const allPostsData = years.flatMap(year => {
    const yearDir = path.join(postsDirectory, year)
    return fs.readdirSync(yearDir)
      .filter(file => file.endsWith('.md'))
      .map(fileName => {
        const id = fileName.replace(/\.md$/, '')
        const fullPath = path.join(yearDir, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)

        return {
          id,
          ...(matterResult.data as { title: string; date: string; description: string; tags: string[] }),
        }
      })
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

function getReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export async function getPostData(id: string): Promise<PostData> {
  // 遍历年份目录查找文章
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
  const matterResult = matter(fileContents)

  // 修改 markdown 内容，替换链接
  const contentWithFixedLinks = matterResult.content.replace(
    /\[([^\]]+)\]\(\/blog\/([^)]+)\)/g,
    '[$1](/$2)'
  )

  // 转换 markdown 为 HTML
  const processedContent = await remark()
    .use(html)
    .process(contentWithFixedLinks)
  const contentHtml = processedContent.toString()

  // 避免重复的属性
  const { title, date, description, tags, ...otherData } = matterResult.data

  return {
    id,
    contentHtml,
    title,
    date,
    description,
    tags,
    ...otherData
  }
} 