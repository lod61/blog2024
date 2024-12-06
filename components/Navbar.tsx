'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="flex flex-col space-y-4">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-green-600 transition-colors">
          My Blog
        </Link>
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <div className={`
        flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-sm
        ${isMenuOpen ? 'block' : 'hidden md:flex'}
      `}>
        <Link href="/blog" className="hover:text-green-600 transition-colors">
          writings
        </Link>
        <Link href="/projects" className="hover:text-green-600 transition-colors">
          projects
        </Link>
        <Link href="/about" className="hover:text-green-600 transition-colors">
          about
        </Link>
      </div>
    </nav>
  )
}

export default Navbar 