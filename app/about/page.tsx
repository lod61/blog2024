export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto prose dark:prose-invert">
      <h1>关于我</h1>
      <p>
        你好！我是一名前端开发者，热衷于探索和分享 Web 开发相关的技术和经验。
        这个博客是我用来记录学习心得和技术见解的地方。
      </p>

      <h2>技术栈</h2>
      <ul>
        <li>前端: React, Vue, TypeScript</li>
        <li>构建工具: Next.js, Vite</li>
        <li>样式: Tailwind CSS, SCSS</li>
        <li>其他: Node.js, Git</li>
      </ul>

      <h2>联系方式</h2>
      <ul>
        <li>GitHub: <a href="https://github.com/lod61" target="_blank" rel="noopener noreferrer">@lod61</a></li>
        <li>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></li>
      </ul>

      <h2>关于本站</h2>
      <p>
        本站使用 Next.js 14 构建，采用了以下技术：
      </p>
      <ul>
        <li>Next.js 14 (App Router)</li>
        <li>TypeScript</li>
        <li>Tailwind CSS</li>
        <li>MDX</li>
        <li>Giscus 评论系统</li>
      </ul>
      
      <p>
        博客源码开源在 <a href="https://github.com/lod61/blog2024" target="_blank" rel="noopener noreferrer">GitHub</a>，
        欢迎参考和贡献。
      </p>
    </div>
  )
} 