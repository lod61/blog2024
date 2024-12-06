'use client'

import { useEffect, useRef } from 'react'

export default function Comments() {
  const commentsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = "https://giscus.app/client.js"
    script.setAttribute("data-repo", "lod61/blog2024")
    script.setAttribute("data-repo-id", "R_kgDONV7xfg")
    script.setAttribute("data-category", "Announcements")
    script.setAttribute("data-category-id", "DIC_kwDONV7xfs4CkrUF")
    script.setAttribute("data-mapping", "pathname")
    script.setAttribute("data-strict", "0")
    script.setAttribute("data-reactions-enabled", "1")
    script.setAttribute("data-emit-metadata", "0")
    script.setAttribute("data-input-position", "bottom")
    script.setAttribute("data-theme", "dark_dimmed")
    script.setAttribute("data-lang", "zh-CN")
    script.crossOrigin = "anonymous"
    script.async = true

    if (commentsRef.current) {
      commentsRef.current.appendChild(script)
    }

    return () => {
      if (commentsRef.current) {
        const giscusFrame = commentsRef.current.querySelector('iframe')
        if (giscusFrame) {
          giscusFrame.remove()
        }
        script.remove()
      }
    }
  }, [])

  return (
    <div className="mt-16 border-t border-gray-800 pt-8">
      <h2 className="text-xl font-mono mb-8">Comments</h2>
      <div ref={commentsRef} />
    </div>
  )
} 