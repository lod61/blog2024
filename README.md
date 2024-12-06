# DevLiu's Blog

基于 Next.js 14 构建的个人技术博客，专注于前端开发技术分享。使用 MDX 支持富文本内容，集成 Giscus 评论系统，支持按年份组织文章和系列管理。

## 特性

- 🚀 基于 Next.js 14 App Router 和 TypeScript
- 📝 MDX 支持，更好的文章编写体验
- 🏷️ 标签和系列文章管理，便于内容组织
- 🔍 全文搜索，快速找到相关内容
- 📊 RSS 订阅，及时获取更新
- 💬 Giscus 评论系统，支持 GitHub 讨论
- 🌓 自适应深色模式
- 🎨 响应式设计，移动端友好

## 快速开始

```bash
# 克隆项目
git clone https://github.com/devliu/blog.git
cd blog

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

## 内容管理

### 创建文章

```bash
npm run new-post
```

按提示填写：
- 标题：文章标题
- 描述：简短描述（100字以内）
- 标签：从预定义标签中选择
- 系列：可选，用于组织相关文章
- 序号：可选，系列中的顺序

### 文章格式

```markdown
---
title: '文章标题'
date: '2024-01-01'
description: '文章描述'
tags: ['frontend', 'react', 'performance']
series: 'React 进阶系列'
seriesIndex: 1
---

文章内容...
```

### 验证内容

```bash
# 验证所有文章的元数据
npm run validate

# 生成 RSS feed
npm run build:rss
```

## 项目结构

```
.
├── app/                # Next.js App Router
│   ├── [year]/        # 年份动态路由
│   │   └── [id]/      # 文章详情页
│   ├── blog/          # 博客列表页
│   ├── projects/      # 项目展示页
│   └── about/         # 关于页面
├── components/        # React 组件
├── config/           # 配置文件
│   ├── blog.config.ts # 博客配置
│   └── index.ts      # 类型定义
├── lib/              # 工具函数
├── _posts/           # 文章目录
│   ├── _template.md  # 文章模板
│   ├── 2023/         # 按年份组织
│   └── 2024/
├── public/           # 静态资源
├── scripts/         # 工具脚本
└── styles/          # 样式文件
```

## 配置说明

主要配置文件 `config/blog.config.ts`：

```typescript
export const blogConfig = {
  title: "DevLiu's Blog",
  description: '前端开发技术博客',
  author: 'DevLiu',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  
  // 文章系列配置
  series: {
    'React 进阶系列': {
      description: 'React 相关的进阶内容',
      order: ['hooks', 'performance', 'patterns']
    }
  },
  
  // 标签体系
  tags: {
    // 技术领域
    categories: ['frontend', 'backend', 'devops'],
    // 具体技术
    technologies: ['react', 'typescript', 'node'],
    // 概念/模式
    concepts: ['architecture', 'patterns', 'performance']
  }
}
```

## 部署

1. 环境变量配置：
```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

2. 构建和启动：
```bash
npm run build  # 构建项目
npm start     # 启动生产服务器
```

## 技术栈

- **框架**: Next.js 14, React 18
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **内容**: MDX
- **评论**: Giscus
- **部署**: Vercel

## License

MIT © [DevLiu](https://github.com/devliu)