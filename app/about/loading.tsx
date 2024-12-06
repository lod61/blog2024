import React from 'react'

export default function Loading(): React.JSX.Element {
  return (
    <div className="animate-pulse space-y-8">
      <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-1/4"></div>
      <div className="space-y-4">
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-2/3"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/2"></div>
      </div>
    </div>
  )
} 