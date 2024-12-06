'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="relative">
      {/* 移动端菜单按钮 */}
      <button 
        className="md:hidden absolute right-0 top-0 p-2 text-gray-600 dark:text-gray-300"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Logo */}
      <Link href="/" className="text-2xl font-bold hover:text-green-600 transition-colors">
        My Blog
      </Link>

      {/* 导航链接 */}
      <div className={`
        ${isMenuOpen ? 'flex' : 'hidden'} 
        md:flex flex-col md:flex-row 
        space-y-4 md:space-y-0 md:space-x-6 
        mt-4 md:mt-0
        absolute md:relative
        top-10 md:top-0
        left-0 md:left-auto
        w-full md:w-auto
        md:bg-transparent
        p-4 md:p-0
        rounded-lg
      `}>
        <Link 
          href="/blog" 
          className="hover:text-green-600 transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          writings
        </Link>
        <Link 
          href="/projects" 
          className="hover:text-green-600 transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          projects
        </Link>
        <Link 
          href="/about" 
          className="hover:text-green-600 transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          about
        </Link>
      </div>
    </nav>
  )
}

export default Navbar 