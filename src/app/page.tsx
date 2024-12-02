import { getAllPosts } from '@/lib/posts'
import Link from 'next/link'

export default function Home() {
  const posts = getAllPosts().slice(0, 5) // 获取最新的5篇文章

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Welcome to my blog</h1>
        <p className="text-xl text-muted-foreground">
          A blog about web development, programming, and technology.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Latest Posts</h2>
        <div className="grid gap-4">
          {posts.map((post) => (
            <article key={post.slug}>
              <Link href={`/posts/${post.slug}`} prefetch={false}>
                <h3 className="text-xl font-semibold hover:text-primary">
                  {post.title}
                </h3>
              </Link>
              <p className="text-muted-foreground">{post.description}</p>
            </article>
          ))}
        </div>
        <Link href="/posts" className="text-primary hover:underline">
          View all posts →
        </Link>
      </section>
    </div>
  )
} 