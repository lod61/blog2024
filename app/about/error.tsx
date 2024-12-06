'use client'

import React from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}): React.JSX.Element {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">出错了</h2>
      <p className="text-gray-600 dark:text-gray-400">
        加载页面时发生错误。
      </p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
      >
        重试
      </button>
    </div>
  )
} 