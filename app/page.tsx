import { getSortedPostsData } from '@/lib/posts'
import Link from 'next/link'

export default function Home() {
  const posts = getSortedPostsData()

  return (
    <div className="space-y-16">
      <section className="space-y-8">
        <h1 className="text-4xl font-mono">Hello.</h1>
        <p className="text-lg leading-relaxed">
          Welcome to my blog. I write about technology, programming, and other things that interest me.
        </p>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-mono">Recent Writing</h2>
        <div className="space-y-4">
          {posts.slice(0, 5).map((post) => (
            <article key={post.id} className="flex justify-between items-baseline group">
              <Link 
                href={`/${post.date.substring(0, 4)}/${post.id}`}
                className="hover:text-green-500 transition-colors border-b border-dotted border-gray-600 hover:border-green-500"
              >
                {post.title}
              </Link>
              <time className="text-sm text-gray-500">
                {post.date}
              </time>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
} 