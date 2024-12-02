'use client'

import Giscus from '@giscus/react'
import { useTheme } from 'next-themes'

export default function Comments() {
  const { theme } = useTheme()

  return (
    <div className="mt-10">
      <Giscus
        id="comments"
        repo="[你的GitHub用户名]/[你的仓库名]"
        repoId="[你的仓库ID]"
        category="Announcements"
        categoryId="[分类ID]"
        mapping="pathname"
        term="Welcome to @giscus/react component!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={theme === 'dark' ? 'dark' : 'light'}
        lang="en"
        loading="lazy"
      />
    </div>
  )
} 