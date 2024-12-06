'use client'

import { useEffect, useState } from 'react'

interface TOCItem {
  id: string
  text: string
  level: number
}

export default function TableOfContents() {
  const [toc, setToc] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const headings = document.querySelectorAll('h2, h3')
    const tocItems = Array.from(headings).map(heading => ({
      id: heading.id,
      text: heading.textContent || '',
      level: Number(heading.tagName.charAt(1))
    }))
    setToc(tocItems)

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0% -35% 0%' }
    )

    headings.forEach(heading => observer.observe(heading))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="hidden lg:block sticky top-20 ml-8 w-64">
      <h2 className="text-lg font-semibold mb-4">目录</h2>
      <ul className="space-y-2">
        {toc.map(item => (
          <li
            key={item.id}
            style={{ paddingLeft: `${(item.level - 2) * 1}rem` }}
          >
            <a
              href={`#${item.id}`}
              className={`block text-sm hover:text-green-600 transition-colors
                ${activeId === item.id ? 'text-green-600' : 'text-gray-600 dark:text-gray-400'}`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
} 