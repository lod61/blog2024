'use client'

import React from 'react'

export default function EmailLink(): React.JSX.Element {
  return (
    <a 
      href="mailto:lqh9428@gmail.com"
      className="text-green-600 hover:text-green-700 transition-colors"
      onClick={(e) => {
        e.preventDefault()
        window.location.href = 'mailto:' + 'lqh9428' + '@' + 'gmail.com'
      }}
    >
      Contact me via email
    </a>
  )
} 