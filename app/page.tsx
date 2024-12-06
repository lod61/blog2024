import { getSortedPostsData } from '@/lib/posts'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

export default function Home() {
  const posts = getSortedPostsData().slice(0, 5) // 只显示最新的5篇文章
  
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Hello.</h1>
        <p className="text-lg">
          Welcome to my blog. I write about technology, programming, and other things that interest me.
        </p>
      </section>
      
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Recent Writing</h2>
        <div className="space-y-4">
          {posts.map((post) => (
            <article key={post.id} className="flex justify-between items-baseline">
              <Link 
                href={`/blog/${post.id}`}
                className="hover:text-green-600 transition-colors"
              >
                {post.title}
              </Link>
              <time className="text-sm text-gray-500">{post.date}</time>
            </article>
          ))}
        </div>
        
        <Link 
          href="/blog" 
          className="group flex items-center space-x-1 text-green-600 hover:text-green-700 transition-colors mt-8"
        >
          <span>View all posts</span>
          <FiArrowRight className="inline-block group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
    </div>
  )
} 