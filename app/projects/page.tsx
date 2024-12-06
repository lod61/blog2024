import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'

interface Project {
  name: string
  description: string
  url: string
  tags: string[]
  language?: string
}

const projects: Project[] = [
  {
    name: "reminder-app",
    description: "A TypeScript-based reminder application",
    url: "https://github.com/lod61/reminder-app",
    tags: ["TypeScript", "React", "Reminder"],
    language: "TypeScript"
  },
  {
    name: "blog2024",
    description: "Personal blog built with Next.js and TypeScript, featuring a clean and minimalist design",
    url: "https://github.com/lod61/blog2024",
    tags: ["Next.js", "TypeScript", "Blog"],
    language: "TypeScript"
  },
  {
    name: "chatgpt-clone",
    description: "A ChatGPT clone implementation using TypeScript",
    url: "https://github.com/lod61/chatgpt-clone",
    tags: ["TypeScript", "ChatGPT", "AI"],
    language: "TypeScript"
  },
  {
    name: "electron-react-boilerplate",
    description: "A boilerplate for building cross platform apps with Electron and React",
    url: "https://github.com/lod61/electron-react-boilerplate",
    tags: ["Electron", "React", "TypeScript"],
    language: "TypeScript"
  }
]

export const metadata: Metadata = {
  title: 'Projects',
  description: '我的开源项目和个人作品展示'
}

export default function ProjectsPage(): React.JSX.Element {
  return (
    <div className="font-mono">
      <h1 className="text-2xl mb-8">Projects</h1>
      <div className="space-y-12">
        {projects.map((project) => (
          <article key={project.name} className="group">
            <h2 className="text-lg mb-2">
              <Link 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition-colors border-b border-dotted border-gray-400 hover:border-green-500"
              >
                {project.name}
              </Link>
              {project.language && (
                <span className="ml-3 text-sm text-gray-500">
                  {project.language}
                </span>
              )}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">
              {project.description}
            </p>
            <div className="flex gap-3 text-sm text-gray-500">
              {project.tags.map((tag) => (
                <span key={tag}>
                  #{tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
      
      <div className="mt-16 text-sm text-gray-600 dark:text-gray-400">
        <p>
          Find more on my{' '}
          <a 
            href="https://github.com/lod61"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:underline"
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  )
} 