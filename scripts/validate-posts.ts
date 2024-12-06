import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { blogConfig, Config as BlogConfig } from '../config'

interface PostFrontmatter {
  title: string
  date: string
  description: string
  tags: string[]
  series?: string
  seriesIndex?: number
}

interface PostFile {
  path: string
  frontmatter: PostFrontmatter
}

function getAllPosts(): PostFile[] {
  const postsDirectory = path.join(process.cwd(), '_posts')
  const years = fs.readdirSync(postsDirectory).filter(f => 
    fs.statSync(path.join(postsDirectory, f)).isDirectory()
  )
  
  return years.flatMap(year => {
    const yearDir = path.join(postsDirectory, year)
    return fs.readdirSync(yearDir)
      .filter(file => file.endsWith('.md'))
      .map(fileName => {
        const filePath = path.join(yearDir, fileName)
        const fileContents = fs.readFileSync(filePath, 'utf8')
        const { data } = matter(fileContents)
        
        return {
          path: filePath,
          frontmatter: data as PostFrontmatter
        }
      })
  })
}

function validatePost(post: PostFile): string[] {
  const errors: string[] = []
  const { frontmatter } = post

  // 验证必填字段
  if (!frontmatter.title) errors.push('Missing title')
  if (!frontmatter.date) errors.push('Missing date')
  if (!frontmatter.description) errors.push('Missing description')
  if (!frontmatter.tags || !Array.isArray(frontmatter.tags)) {
    errors.push('Missing or invalid tags')
  }

  // 验证标签
  if (frontmatter.tags) {
    const allTags = [
      ...blogConfig.tags.categories,
      ...blogConfig.tags.technologies,
      ...blogConfig.tags.concepts
    ]
    const invalidTags = frontmatter.tags.filter((tag: string) =>
      !allTags.includes(tag)
    )
    if (invalidTags.length > 0) {
      errors.push(`Invalid tags: ${invalidTags.join(', ')}`)
    }
  }

  // 验证系列
  if (frontmatter.series) {
    const validSeries = Object.keys(blogConfig.series)
    if (!validSeries.includes(frontmatter.series)) {
      errors.push(`Invalid series: ${frontmatter.series}`)
    }
    if (frontmatter.seriesIndex && typeof frontmatter.seriesIndex !== 'number') {
      errors.push('Series index must be a number')
    }
  }

  return errors
}

function validateAllPosts() {
  const posts = getAllPosts()
  let hasErrors = false

  posts.forEach(post => {
    const errors = validatePost(post)
    if (errors.length > 0) {
      console.error(`\nErrors in ${post.path}:`)
      errors.forEach(error => console.error(`- ${error}`))
      hasErrors = true
    }
  })

  if (hasErrors) {
    process.exit(1)
  } else {
    console.log('All posts validated successfully!')
  }
}

validateAllPosts() 