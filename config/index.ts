import { blogConfig } from './blog.config'

// 导出统一的配置接口
export interface BlogConfig {
  title: string;
  description: string;
  author: string;
  siteUrl: string;
  series: Record<string, {
    description: string;
    order: string[];
  }>;
  tags: {
    categories: string[];
    technologies: string[];
    concepts: string[];
  };
}

// 添加类型验证
export function validateConfig(config: any): config is BlogConfig {
  // 实现配置验证逻辑
  return true;
}

// 导出配置
export const config = blogConfig as BlogConfig; 