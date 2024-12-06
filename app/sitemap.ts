import { getSortedPostsData } from '@/lib/posts'

export default async function sitemap() {
  const posts = getSortedPostsData()
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

  const postUrls = posts.map(post => ({
    url: `${baseUrl}/${post.date.substring(0, 4)}/${post.id}`,
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