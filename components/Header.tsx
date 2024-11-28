import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'

export default function Header() {
  return (
    <header className="border-b dark:border-gray-700">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Tech Blog
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-300">
              首页
            </Link>
            <Link href="/posts" className="hover:text-gray-600 dark:hover:text-gray-300">
              文章
            </Link>
            <Link href="/about" className="hover:text-gray-600 dark:hover:text-gray-300">
              关于
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  )
} 