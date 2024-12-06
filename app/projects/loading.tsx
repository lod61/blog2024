import React from 'react'

export default function Loading(): React.JSX.Element {
  return (
    <div className="space-y-8">
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-1/4"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-2/3"></div>
      </div>

      <div className="grid gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div 
            key={i}
            className="animate-pulse p-6 border border-gray-200 dark:border-gray-800 rounded-lg"
          >
            <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-1/3 mb-4"></div>
            <div className="space-y-2 mb-4">
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-5/6"></div>
            </div>
            <div className="flex gap-2">
              <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-16"></div>
              <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-16"></div>
              <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-16"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 