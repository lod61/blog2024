import { getPostData, getSortedPostsData } from '@/lib/posts'
import { notFound } from 'next/navigation'
import ScrollToTop from '@/components/ScrollToTop'
import Comments from '@/components/Comments'

export async function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map((post) => ({
    id: post.id,
  }))
}

export default async function Post({ params }: { params: { id: string } }) {
  const post = await getPostData(params.id)

  if (!post) {
    notFound()
  }

  return (
    <>
      <article>
        <header className="mb-8">
          <h1 className="text-2xl font-mono mb-2 hover:text-green-500 transition-colors">
            {post.title}
          </h1>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <time>{post.date}</time>
            <div className="flex gap-2">
              {post.tags.map((tag) => (
                <span key={tag}>#{tag}</span>
              ))}
            </div>
          </div>
        </header>
        
        <div 
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }} 
        />
      </article>

      <Comments />
      <ScrollToTop />
    </>
  )
} 