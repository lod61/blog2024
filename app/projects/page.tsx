import React from 'react'
import Link from 'next/link'

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

export default function ProjectsPage(): React.JSX.Element {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Frontend developer looking for remote opportunities. Here are some of my projects.
        </p>
      </section>

      <section className="space-y-6">
        <div className="grid gap-6">
          {projects.map((project) => (
            <Link 
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-green-500 transition-colors"
            >
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-semibold hover:text-green-600 transition-colors">
                  {project.name}
                </h2>
                {project.language && (
                  <span className="text-sm text-gray-500">
                    {project.language}
                  </span>
                )}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">More Projects</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Visit my {' '}
          <a 
            href="https://github.com/lod61"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-700 transition-colors"
          >
            GitHub profile
          </a>
          {' '} to see more projects. I have 34 repositories and 512 stars in total.
        </p>
      </section>
    </div>
  )
} 