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

  if (relatedPosts.length === 0) {
    return null
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">相关文章</h2>
      <div className="space-y-4">
        {relatedPosts.map(post => (
          <Link 
            key={post.id}
            href={`/${post.date.substring(0, 4)}/${post.id}`}
            className="block hover:text-green-500 transition-colors"
          >
            {post.title}
          </Link>
        ))}
      </div>
    </div>
  )
} 