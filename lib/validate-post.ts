import { blogConfig } from '../config'

export interface PostFrontmatter {
  title: string
  date: string
  description: string
  tags: string[]
  series?: string
  seriesIndex?: number
}

export interface PostValidationResult {
  isValid: boolean
  errors: string[]
}

export function validatePost(frontmatter: PostFrontmatter): PostValidationResult {
  const errors: string[] = []

  // 验证必填字段
  if (!frontmatter.title) errors.push('Missing title')
  if (!frontmatter.date) errors.push('Missing date')
  if (!frontmatter.description) errors.push('Missing description')
  if (!frontmatter.tags) errors.push('Missing tags')

  // 验证标签
  if (frontmatter.tags) {
    const allTags = [
      ...blogConfig.tags.categories,
      ...blogConfig.tags.technologies,
      ...blogConfig.tags.concepts
    ]
    const invalidTags = frontmatter.tags.filter(tag => !allTags.includes(tag))
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
    if (frontmatter.seriesIndex && !Number.isInteger(frontmatter.seriesIndex)) {
      errors.push('Series index must be a number')
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  }
} 