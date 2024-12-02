import { getAllPosts } from '@/lib/posts'
import Link from 'next/link'

export default function PostsPage() {
  const posts = getAllPosts()

  return (
    <div className="container mx-auto px-4">
      <h1 className="mb-8 text-3xl font-bold">Blog Posts</h1>
      <div className="grid gap-8">
        {posts.map((post) => (
          <article key={post.slug} className="group relative">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">
                <Link
                  href={`/posts/${post.slug}`}
                  className="hover:text-primary"
                >
                  {post.title}
                </Link>
              </h2>
              <div className="text-muted-foreground">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
              <p className="text-muted-foreground">{post.description}</p>
              {post.tags?.length ? (
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/tags/${tag}`}
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
} 