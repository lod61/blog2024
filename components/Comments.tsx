'use client'

import Giscus from '@giscus/react'
import { useTheme } from 'next-themes'

export default function Comments() {
  const { theme } = useTheme()

  return (
    <div className="mt-10">
      <Giscus
        id="comments"
        repo="lod61/blog2024"
        repoId="R_kgDOLXGxYQ"
        category="General"
        categoryId="DIC_kwDOLXGxYc4CdxYn"
        mapping="pathname"
        term="Welcome to my blog!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={theme === 'dark' ? 'dark_dimmed' : 'light'}
        lang="zh-CN"
        loading="lazy"
        data-strict="0"
      />
    </div>
  )
} 