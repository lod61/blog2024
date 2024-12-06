import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4">404 - 页面未找到</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        抱歉，您访问的页面不存在。
      </p>
      <Link 
        href="/"
        className="text-blue-600 dark:text-blue-400 hover:underline"
      >
        返回首页
      </Link>
    </div>
  )
} 