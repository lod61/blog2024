'use client'

import React, { useEffect, useRef } from 'react'

export default function Comments() {
  const commentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (commentRef.current?.children?.length > 0) {
      return
    }

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
    script.setAttribute("data-theme", "preferred_color_scheme")
    script.setAttribute("data-lang", "zh-CN")
    script.setAttribute("crossorigin", "anonymous")
    script.async = true

    commentRef.current?.appendChild(script)

    return () => {
      script.remove()
    }
  }, [])

  return (
    <div className="mt-8 sm:mt-10">
      <div ref={commentRef} className="w-full overflow-x-auto" />
    </div>
  )
} 