import fs from 'fs'
import path from 'path'
import prompts from 'prompts'
import { config } from '../config'
import { generateSlug } from '../lib/utils'

interface PostMetadata {
  title: string;
  date: string;
  description: string;
  tags: string[];
  series?: string;
  seriesIndex?: number;
}

// 获取所有已存在的标签
function getAllTags(): string[] {
  return [
    ...config.tags.categories,
    ...config.tags.technologies,
    ...config.tags.concepts
  ];
}

// 添加新标签到配置文件
function addNewTags(newTags: string[]) {
  const configPath = path.join(process.cwd(), 'config/blog.config.ts');
  const configContent = fs.readFileSync(configPath, 'utf-8');
  
  // 默认添加到 technologies 分类
  const updatedContent = configContent.replace(
    /technologies:\s*\[([\s\S]*?)\]/,
    (match, technologies) => {
      const currentTags = technologies
        .split('\n')
        .map((line: string) => line.trim())
        .filter((line: string) => line && !line.endsWith(','))
        .map((line: string) => line.replace(/['"`]/g, ''));

      const uniqueNewTags = newTags.filter((tag: string) => !currentTags.includes(tag));
      
      if (uniqueNewTags.length === 0) return match;

      const updatedTags = [
        ...currentTags,
        ...uniqueNewTags
      ].map((tag: string) => `'${tag}'`);

      return `technologies: [\n      ${updatedTags.join(',\n      ')}\n    ]`;
    }
  );

  fs.writeFileSync(configPath, updatedContent);
  console.log('Added new tags:', newTags.join(', '));
}

// 获取所有已存在的系列
function getAllSeries(): string[] {
  return Object.keys(config.series);
}

// 添加新系列到配置文件
function addNewSeries(seriesName: string) {
  const configPath = path.join(process.cwd(), 'config/blog.config.ts');
  const configContent = fs.readFileSync(configPath, 'utf-8');
  
  const newSeriesContent = `
    '${seriesName}': {
      description: '${seriesName}相关内容',
      order: []
    },`;

  const updatedContent = configContent.replace(
    /series:\s*{/,
    `series: {${newSeriesContent}`
  );

  fs.writeFileSync(configPath, updatedContent);
  console.log('Added new series:', seriesName);
}

async function createPost() {
  try {
    const response = await prompts([
      {
        type: 'text',
        name: 'title',
        message: '文章标题'
      },
      {
        type: 'text',
        name: 'description',
        message: '文章描述'
      },
      {
        type: 'text',
        name: 'tags',
        message: '文章标签 (用逗号分隔)'
      },
      {
        type: 'text',
        name: 'series',
        message: '所属系列 (可选)'
      },
      {
        type: 'number',
        name: 'seriesIndex',
        message: '系列序号 (可选)',
        initial: undefined
      }
    ]);

    // 检查必填字段
    if (!response.title || !response.description || !response.tags) {
      console.error('标题、描述和标签为必填项');
      return;
    }

    const date = new Date().toISOString().split('T')[0];
    const year = date.split('-')[0];
    
    const inputTags = response.tags.split(',').map((t: string) => t.trim());
    const existingTags = getAllTags();
    const newTags = inputTags.filter((tag: string) => !existingTags.includes(tag));

    // 如果有新标签，询问是否添加
    if (newTags.length > 0) {
      const { confirm } = await prompts({
        type: 'confirm',
        name: 'confirm',
        message: `发现新标签: ${newTags.join(', ')}。是否添加到系统中？`,
        initial: true
      });

      if (confirm) {
        addNewTags(newTags);
      } else {
        console.log('已取消添加新标签');
        return;
      }
    }

    // 验证系列
    if (response.series) {
      const existingSeries = getAllSeries();
      if (!existingSeries.includes(response.series)) {
        const { confirm } = await prompts({
          type: 'confirm',
          name: 'confirm',
          message: `发现新系列: ${response.series}。是否创建？`,
          initial: true
        });

        if (confirm) {
          addNewSeries(response.series);
        } else {
          console.log('已取消创建新系列');
          return;
        }
      }
    }

    const metadata: PostMetadata = {
      title: response.title,
      date,
      description: response.description,
      tags: inputTags,
      ...(response.series && { series: response.series }),
      ...(response.seriesIndex && { seriesIndex: response.seriesIndex })
    };

    const content = generatePostContent(metadata);
    
    const fileName = `${generateSlug(response.title)}.md`;
    const filePath = path.join(process.cwd(), '_posts', year, fileName);

    // 确保目录存在
    const dirPath = path.dirname(filePath);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    fs.writeFileSync(filePath, content);
    console.log(`Created post: ${filePath}`);
  } catch (error) {
    console.error('创建文章失败:', error);
    process.exit(1);
  }
}

// 生成文章内容
function generatePostContent(metadata: PostMetadata): string {
  const frontmatter = [
    '---',
    ...Object.entries(metadata).map(([key, value]) => {
      if (Array.isArray(value)) {
        return `${key}: [${value.map(v => `'${v}'`).join(', ')}]`
      }
      return `${key}: '${value}'`
    }),
    '---\n'
  ].join('\n');

  // 从模板生成内容
  const template = fs.readFileSync(path.join(process.cwd(), '_posts/_template.md'), 'utf-8');
  return frontmatter + template;
}

createPost(); 