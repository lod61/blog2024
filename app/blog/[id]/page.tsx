import { getPostData, getSortedPostsData } from '@/lib/posts'
import { notFound } from 'next/navigation'
import ScrollToTop from '@/components/ScrollToTop'
import Comments from '@/components/Comments'

// 添加这个函数来生成静态路径
export async function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map((post) => ({
    id: post.id,
  }))
}

// 添加动态元数据
export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = await getPostData(params.id)
  return {
    title: post.title,
    description: post.description
  }
}

export default async function Post({ params }: { params: { id: string } }) {
  try {
    const post = await getPostData(params.id)
    
    return (
      <>
        <article className="prose dark:prose-invert max-w-none">
          <h1>{post.title}</h1>
          <div className="flex items-center gap-4 -mt-4 text-gray-500">
            <time>{post.date}</time>
            <div className="flex gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }} />
        </article>
        
        <div className="mt-16 border-t pt-8">
          <h2 className="text-2xl font-bold mb-8">Comments</h2>
          <Comments />
        </div>
        
        <ScrollToTop />
      </>
    )
  } catch (e) {
    notFound()
  }
} 