'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-mono">出错了</h1>
      <p className="text-gray-500">
        抱歉，发生了一些错误。
      </p>
      <div className="flex space-x-4">
        <button
          onClick={reset}
          className="text-green-500 hover:text-green-600 transition-colors"
        >
          重试
        </button>
        <Link 
          href="/"
          className="text-green-500 hover:text-green-600 transition-colors"
        >
          返回首页
        </Link>
      </div>
    </div>
  )
} 