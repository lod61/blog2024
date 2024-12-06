export const blogConfig = {
  title: "DevLiu's Blog",
  description: '前端开发技术博客',
  author: 'DevLiu',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  
  // 文章系列配置
  series: {
    '自动生成文章': {
      description: '自动生成文章相关内容',
      order: []
    },
    '自动生成文章测试系列': {
      description: '自动生成文章测试系列相关内容',
      order: []
    },
    '1': {
      description: '1相关内容',
      order: []
    },
    'React 进阶系列': {
      description: 'React 相关的进阶内容',
      order: ['hooks', 'performance', 'patterns']
    },
    '前端工程化系列': {
      description: '现代前端工程化实践',
      order: ['introduction', 'webpack', 'testing']
    },
    '微前端系列': {
      description: '微前端架构实践',
      order: ['introduction', 'architecture', 'optimization']
    }
  },
  
  // 标签配置
  tags: {
    // 技术领域
    categories: [
      'frontend',
      'backend',
      'devops',
      'testing'
    ],
    
    // 具体技术
    technologies: [
      '测试文章标签',
      '测试自动生成标签'
    ],
    
    // 概念/模式
    concepts: [
      'architecture',
      'patterns',
      'performance',
      'security',
      'best-practices',
      'engineering'
    ]
  }
} 