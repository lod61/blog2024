import { getPostBySlug } from '@/lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Comments from '@/components/Comments'

interface PostPageProps {
  params: {
    slug: string;
  };
}

interface Post {
  title: string;
  date: string;
  content?: string;
  readingTime?: {
    text: string;
  };
}

export default async function PostPage({
  params,
}: PostPageProps) {
  const post = await getPostBySlug(params.slug)

  return (
    <div className="max-w-2xl mx-auto">
      <article className="prose lg:prose-xl dark:prose-invert">
        <h1 className="dark:text-gray-100">{post.title}</h1>
        <div className="text-gray-600 dark:text-gray-400 mb-8 flex items-center space-x-4">
          <time>{new Date(post.date).toLocaleDateString('zh-CN')}</time>
          {post.readingTime && (
            <>
              <span>·</span>
              <span>{post.readingTime.text}</span>
            </>
          )}
        </div>
        <div className="prose dark:prose-invert">
          <MDXRemote source={post.content || ''} />
        </div>
      </article>
      <Comments />
    </div>
  )
} 