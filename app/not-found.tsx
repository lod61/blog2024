import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-mono">404</h1>
      <h2 className="text-xl">页面未找到</h2>
      <p className="text-gray-500">
        抱歉，您访问的页面不存在。
      </p>
      <Link 
        href="/"
        className="mt-4 text-green-500 hover:text-green-600 transition-colors"
      >
        返回首页
      </Link>
    </div>
  )
} 