import { getPostsByTag } from '@/lib/posts'
import Link from 'next/link'

interface TagPageProps {
  params: {
    tag: string
  }
}

export default function TagPage({ params }: TagPageProps) {
  const posts = getPostsByTag(params.tag)

  return (
    <div className="container mx-auto px-4">
      <h1 className="mb-8 text-3xl font-bold">Posts tagged with #{params.tag}</h1>
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
            </div>
          </article>
        ))}
      </div>
    </div>
  )
} 