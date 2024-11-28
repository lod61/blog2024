export default function Footer() {
  return (
    <footer className="border-t dark:border-gray-800">
      <div className="container mx-auto px-4 py-6 text-center text-gray-600 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Tech Blog. All rights reserved.</p>
      </div>
    </footer>
  )
} 