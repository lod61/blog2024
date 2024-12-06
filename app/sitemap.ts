import { getSortedPostsData } from '@/lib/posts'

export default async function sitemap() {
  const posts = getSortedPostsData()
  const baseUrl = 'https://your-domain.com'

  const postUrls = posts.map(post => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(post.date)
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    ...postUrls,
  ]
} 