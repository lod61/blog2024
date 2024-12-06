import React from 'react'
import EmailLink from '@/components/EmailLink'

export default function AboutPage(): React.JSX.Element {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">About Me</h1>
        <div className="prose dark:prose-invert">
          <p>
            Frontend developer looking for remote opportunities. I love exploring new technologies and building things with code.
          </p>
          
          <h2>Skills</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Frontend Development</h3>
              <ul>
                <li>React.js / Next.js</li>
                <li>TypeScript / JavaScript</li>
                <li>Tailwind CSS / SCSS</li>
                <li>Electron (Desktop Apps)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Tools & Technologies</h3>
              <ul>
                <li>Git / GitHub</li>
                <li>Webpack / Vite</li>
                <li>ESLint / Prettier</li>
                <li>ChatGPT API Integration</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Recent Focus</h3>
              <ul>
                <li>Modern React Patterns</li>
                <li>TypeScript Best Practices</li>
                <li>Cross-platform Desktop Apps</li>
                <li>AI Integration in Web Apps</li>
              </ul>
            </div>
          </div>

          <h2>Projects Highlight</h2>
          <ul>
            <li>
              <strong>Reminder App</strong> - TypeScript-based task management application
            </li>
            <li>
              <strong>ChatGPT Clone</strong> - Implementation of ChatGPT-like interface
            </li>
            <li>
              <strong>Electron React Boilerplate</strong> - Template for cross-platform desktop apps
            </li>
          </ul>

          <h2>Contact</h2>
          <ul>
            <li>
              GitHub: <a 
                href="https://github.com/lod61" 
                className="text-green-600 hover:text-green-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                @lod61
              </a>
            </li>
            <li>
              <EmailLink />
            </li>
          </ul>

          <h2>About This Blog</h2>
          <p>
            Built with Next.js and TypeScript, featuring a minimalist design inspired by the Cactus theme.
            I write about frontend development, TypeScript, and my experiences with various web technologies.
          </p>
        </div>
      </section>
    </div>
  )
} 