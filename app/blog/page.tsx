import { getPostsByYear } from '@/lib/posts'
import Link from 'next/link'

export default function BlogPage() {
  const postsByYear = getPostsByYear()
  
  return (
    <div className="space-y-12">
      <h1 className="text-2xl sm:text-3xl font-bold">Blog Posts</h1>
      
      {postsByYear.map(({ year, posts }) => (
        <section key={year} className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-500">{year}</h2>
          <div className="space-y-4">
            {posts.map((post) => (
              <article key={post.id} className="group">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2">
                  <Link 
                    href={`/blog/${post.id}`}
                    className="text-lg hover:text-green-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                  <time className="text-sm text-gray-500 group-hover:text-green-600 transition-colors">
                    {post.date}
                  </time>
                </div>
                <p className="mt-1 text-gray-600 dark:text-gray-400 text-sm line-clamp-2 group-hover:text-green-600 transition-colors">
                  {post.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded group-hover:bg-green-100 dark:group-hover:bg-green-900 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
} 