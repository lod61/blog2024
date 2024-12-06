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
    },
    'Vue 3 进阶系列': {
      description: 'Vue 3 相关的进阶内容',
      order: ['composition-api', 'performance', 'patterns']
    },
    'TypeScript 进阶系列': {
      description: 'TypeScript 高级特性和最佳实践',
      order: ['types', 'patterns', 'practices']
    },
    '前端工程化系列': {
      description: '现代前端工程化实践',
      order: ['introduction', 'webpack', 'testing']
    },
    '前端职业发展系列': {
      description: '前端职业规划和成长',
      order: ['roadmap', 'skills', 'career']
    },
    '前端集成实践': {
      description: '前端与各类服务的集成实践',
      order: ['api', 'authentication', 'deployment']
    },
    '现代前端框架实践系列': {
      description: '现代前端框架的实践���南',
      order: ['nextjs', 'react', 'vue']
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
      'testing',
      'security',
      'career'
    ],
    
    // 具体技术
    technologies: [
      'react',
      'vue',
      'typescript',
      'javascript',
      'node',
      'webpack',
      'vite',
      'nextjs',
      'graphql',
      'electron',
      'jest',
      'tailwindcss',
      'css',
      'micro-frontend',
      'ssr',
      'hooks',
      'api',
      'bundler',
      'tooling',
      'authentication',
      'test',
      'automation'
    ],
    
    // 概念/模式
    concepts: [
      'architecture',
      'patterns',
      'performance',
      'security',
      'best-practices',
      'engineering',
      'design-system',
      'integration',
      'composition-api',
      'desktop-apps',
      'roadmap',
      'learning',
      'introduction',
      'advanced',
      'optimization'
    ]
  }
} 