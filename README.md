# DevLiu's Blog

基于 Next.js 14 构建的个人技术博客，专注于前端开发技术分享。

## 特性

- 🚀 基于 Next.js 14 App Router
- 📝 Markdown 文章支持
- 🏷️ 标签和系列文章管理
- 🔍 全文搜索
- 📊 RSS 订阅
- 🌓 深色模式
- 🎨 响应式设计

## 技术栈

- Next.js 14
- TypeScript
- Tailwind CSS
- MDX (Markdown)
- RSS Feed

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 创建新文章
npm run new-post

# 构建
npm run build

# 验证文章
npm run validate
```

## 文章创建

1. 使用命令创建新文章：

```bash
npm run new-post
```

2. 按提示填写文章信息：
- 标题
- 描述
- 标签（从预定义标签中选择）
- 系列（可选）
- 系列序号（可选）

3. 文章会自动创建在 `_posts/YYYY/` 目录下

## 文章格式

```markdown
---
title: '文章标题'
date: '2023-12-20'
description: '文章描述'
tags: ['tag1', 'tag2']
series: '系列名称'
seriesIndex: 1
relatedPosts: ['2023/related-post-1', '2023/related-post-2']
---

文章内容...
```

## 目录结构

```
.
├── app/                # Next.js App Router
├── components/         # React 组件
├── config/            # 配置文件
├── lib/               # 工具函数
├── _posts/            # 文章目录
│   ├── 2022/         # 按年份组织
│   └── 2023/
├── public/            # 静态资源
├── scripts/          # 工具脚本
└── styles/           # 样式文件
```

## 配置

主要配置文件位于 `config/` 目录：

```typescript
// config/blog.config.ts
export const blogConfig = {
  title: 'Blog Title',
  description: 'Blog Description',
  author: 'Author Name',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  
  // 文章系列配置
  series: {
    'React 进阶系列': {
      description: '...',
      order: ['hooks', 'performance', 'patterns']
    }
  },
  
  // 标签配置
  tags: {
    categories: ['frontend', 'backend', 'devops'],
    technologies: ['react', 'vue', 'node'],
    concepts: ['architecture', 'patterns', 'performance']
  }
}
```

## 脚本说明

- `new-post`: 创建新文章
- `validate`: 验证所有文章的元数据
- `build:rss`: 生成 RSS feed
- `build`: 构建并生成 RSS

## 部署

1. 环境变量配置：

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

2. 部署命令：

```bash
npm run build
npm start
```

## License

MIT © [DevLiu](https://github.com/devliu)