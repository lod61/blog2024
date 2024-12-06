import { validatePost } from '../lib/validate-post'
import { config } from '../config'
import { getAllPosts } from '../lib/posts'

async function validatePosts() {
  const posts = await getAllPosts()
  let hasError = false

  for (const post of posts) {
    // 验证元数据
    if (!validatePost(post.frontmatter)) {
      console.error(`Invalid frontmatter in ${post.slug}`)
      hasError = true
      continue
    }

    // 验证系列信息
    if (post.frontmatter.series) {
      const series = config.series[post.frontmatter.series]
      if (!series) {
        console.error(`Invalid series "${post.frontmatter.series}" in ${post.slug}`)
        hasError = true
      }
    }

    // 验证标签
    const invalidTags = post.frontmatter.tags.filter(tag => 
      ![...config.tags.categories, ...config.tags.technologies, ...config.tags.concepts].includes(tag)
    )
    if (invalidTags.length > 0) {
      console.error(`Invalid tags in ${post.slug}: ${invalidTags.join(', ')}`)
      hasError = true
    }
  }

  if (hasError) {
    process.exit(1)
  }
}

validatePosts() 