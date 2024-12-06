import { blogConfig } from './blog.config'

// 定义系列配置类型
interface SeriesConfig {
  description: string
  order: string[]
}

// 定义标签配置类型
interface TagsConfig {
  categories: string[]
  technologies: string[]
  concepts: string[]
}

// 定义博客配置类型
interface BlogConfig {
  title: string
  description: string
  author: string
  siteUrl: string | undefined
  series: Record<string, SeriesConfig>
  tags: TagsConfig
}

// 导出配置
export { blogConfig }

// 导出类型
export type { BlogConfig as Config }  // 重命名导出类型以避免冲突