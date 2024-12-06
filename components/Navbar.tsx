'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav>
      <div className="flex flex-col space-y-8">
        <Link 
          href="/" 
          className="text-2xl font-mono hover:text-green-500 transition-colors"
        >
          DevLiu's Blog
        </Link>
        <div className="flex justify-end space-x-8 font-mono text-sm">
          <Link 
            href="/blog"
            className={`hover:text-green-500 transition-colors ${
              pathname === '/blog' ? 'text-green-500' : ''
            }`}
          >
            writing
          </Link>
          <Link 
            href="/projects"
            className={`hover:text-green-500 transition-colors ${
              pathname === '/projects' ? 'text-green-500' : ''
            }`}
          >
            projects
          </Link>
          <Link 
            href="/about"
            className={`hover:text-green-500 transition-colors ${
              pathname === '/about' ? 'text-green-500' : ''
            }`}
          >
            about
          </Link>
        </div>
      </div>
    </nav>
  )
} 