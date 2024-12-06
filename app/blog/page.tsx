import { getPostsByYear } from '@/lib/posts'
import Link from 'next/link'

export default function BlogPage() {
  const postsByYear = getPostsByYear()
  
  return (
    <div>
      <h1 className="text-2xl font-mono mb-12">Blog Posts</h1>
      
      {postsByYear.map(({ year, posts }) => (
        <section key={year} className="mb-12">
          <h2 className="text-xl font-mono text-gray-500 mb-6">{year}</h2>
          <div className="space-y-4">
            {posts.map((post) => (
              <article key={post.id} className="group">
                <div className="flex justify-between items-baseline">
                  <Link 
                    href={`/${post.date.substring(0, 4)}/${post.id}`}
                    className="hover:text-green-500 transition-colors border-b border-dotted border-gray-600 hover:border-green-500"
                  >
                    {post.title}
                  </Link>
                  <time className="text-sm text-gray-500">
                    {post.date}
                  </time>
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  {post.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs text-gray-500"
                    >
                      #{tag}
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