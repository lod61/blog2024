# Blog2024

基于 Next.js 14 构建的个人博客，支持 Markdown 内容管理、评论系统和响应式设计。

## 技术栈

- Next.js 14
- TypeScript
- Tailwind CSS
- Markdown
- Giscus

## 功能特点

- 文章按年份归档
- 标签系统
- 评论功能
- 响应式设计
- 深色模式

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

## 部署

### Vercel 部署

1. 访问 [Vercel](https://vercel.com)
2. 导入 GitHub 仓库
3. 选择 Next.js 框架预设
4. 点击 Deploy

### GitHub Pages 部署

1. 创建部署配置文件：

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@4.1.5
        with:
          branch: gh-pages
          folder: out
```

2. 在 package.json 中添加导出命令：

```json
{
  "scripts": {
    "deploy": "next build && next export"
  }
}
```

## 许可证

MIT