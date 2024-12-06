'use client'

import { FiTwitter, FiLinkedin, FiCopy } from 'react-icons/fi'

interface ShareButtonsProps {
  title: string
  url: string
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      '_blank'
    )
  }

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      '_blank'
    )
  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      alert('链接已复制到剪贴板')
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="flex space-x-4">
      <button
        onClick={shareOnTwitter}
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
        aria-label="Share on Twitter"
      >
        <FiTwitter className="w-5 h-5" />
      </button>
      <button
        onClick={shareOnLinkedIn}
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
        aria-label="Share on LinkedIn"
      >
        <FiLinkedin className="w-5 h-5" />
      </button>
      <button
        onClick={copyLink}
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
        aria-label="Copy link"
      >
        <FiCopy className="w-5 h-5" />
      </button>
    </div>
  )
} 