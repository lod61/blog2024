import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'

export default function TagCloud() {
  const posts = getSortedPostsData()
  const tags = posts.reduce((acc, post) => {
    post.tags.forEach(tag => {
      acc[tag] = (acc[tag] || 0) + 1
    })
    return acc
  }, {} as Record<string, number>)

  return (
    <div className="prose dark:prose-invert">
      <h2>标签云</h2>
      <div className="flex flex-wrap gap-2">
        {Object.entries(tags).map(([tag, count]) => (
          <Link
            key={tag}
            href={`/tags/${tag}`}
            className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-green-100 dark:hover:bg-green-900 transition-colors"
          >
            {tag} ({count})
          </Link>
        ))}
      </div>
    </div>
  )
} 