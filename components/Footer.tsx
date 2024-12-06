const Footer = () => {
  return (
    <footer className="mt-20 py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="text-sm text-gray-600 dark:text-gray-400">
        <p>© 2024 My Blog</p>
        <p className="mt-2">
          Built with <a href="https://nextjs.org" className="hover:text-green-600 transition-colors">Next.js</a> and 
          inspired by <a href="https://github.com/probberechts/hexo-theme-cactus" className="hover:text-green-600 transition-colors">Cactus Theme</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer; 