'use client'

import { useEffect, useState } from 'react'

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const article = document.querySelector('article')
      if (!article) return

      const totalHeight = article.clientHeight
      const windowHeight = window.innerHeight
      const position = window.scrollY
      const denominator = totalHeight - windowHeight
      const percentage = (position / denominator) * 100

      setProgress(Math.min(100, Math.max(0, percentage)))
    }

    window.addEventListener('scroll', updateProgress)
    updateProgress()

    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-800 z-50">
      <div 
        className="h-full bg-green-600 transition-all duration-200"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
} 