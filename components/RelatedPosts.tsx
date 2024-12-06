import Link from 'next/link'
import { getSortedPostsData, PostData } from '@/lib/posts'

interface RelatedPostsProps {
  currentPost: PostData
  maxPosts?: number
}

export default function RelatedPosts({ currentPost, maxPosts = 3 }: RelatedPostsProps) {
  const allPosts = getSortedPostsData()
  
  const relatedPosts = allPosts
    .filter(post => post.id !== currentPost.id)
    .filter(post => 
      post.tags.some(tag => currentPost.tags.includes(tag))
    )
    .slice(0, maxPosts)

  if (relatedPosts.length === 0) return null

  return (
    <div className="mt-8 border-t pt-8">
      <h2 className="text-2xl font-bold mb-4">相关文章</h2>
      <div className="space-y-4">
        {relatedPosts.map(post => (
          <Link 
            key={post.id}
            href={`/blog/${post.id}`}
            className="block group"
          >
            <article className="space-y-2">
              <h3 className="text-lg font-semibold group-hover:text-green-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {post.description}
              </p>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
} 