import { getAllPosts } from '@/lib/posts'
import Link from 'next/link'

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readingTime?: {
    text: string;
  };
}

export default async function PostsPage() {
  let posts: Post[] = [];
  
  try {
    posts = await getAllPosts();
  } catch (error) {
    console.error('Error loading posts:', error);
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">所有文章</h1>
      <div className="space-y-8">
        {posts.map((post: Post) => (
          <article key={post.slug} className="border-b pb-8">
            <Link href={`/posts/${post.slug}`}>
              <h2 className="text-2xl font-semibold hover:text-gray-600 dark:hover:text-gray-300 mb-2">
                {post.title}
              </h2>
            </Link>
            <div className="text-gray-600 dark:text-gray-400 mb-4 flex items-center space-x-4">
              <time>{new Date(post.date).toLocaleDateString('zh-CN')}</time>
              {post.readingTime && (
                <>
                  <span>·</span>
                  <span>{post.readingTime.text}</span>
                </>
              )}
            </div>
            <p className="text-gray-700 dark:text-gray-300">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  )
} 