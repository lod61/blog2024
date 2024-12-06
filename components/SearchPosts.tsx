'use client'

import { useState } from 'react'
import { PostData } from '@/lib/posts'
import Link from 'next/link'

interface SearchPostsProps {
  posts: PostData[]
}

export default function SearchPosts({ posts }: SearchPostsProps) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="搜索文章..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      
      {searchTerm && (
        <div className="space-y-4">
          <p className="text-sm text-gray-500">
            找到 {filteredPosts.length} 篇相关文章
          </p>
          {filteredPosts.map(post => (
            <Link 
              key={post.id}
              href={`/blog/${post.id}`}
              className="block group"
            >
              <article className="space-y-2">
                <h3 className="text-lg font-semibold group-hover:text-green-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {post.description}
                </p>
                <div className="flex gap-2">
                  {post.tags.map(tag => (
                    <span 
                      key={tag}
                      className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
} 