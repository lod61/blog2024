import pinyin from 'pinyin';

// 生成 URL 友好的 slug
export function generateSlug(title: string): string {
  if (!title) {
    throw new Error('标题不能为空');
  }

  // 将中文转换为拼音
  const pinyinTitle = pinyin(title, {
    style: pinyin.STYLE_NORMAL,    // 普通风格，不带声调
    heteronym: false,              // 禁用多音字
    segment: true                  // 开启分词
  }).map(p => p[0]).join(' ');    // 将拼音数组转换为字符串

  const timestamp = Date.now();
  const sanitizedTitle = pinyinTitle
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')  // 移除特殊字符
    .replace(/\s+/g, '-')      // 空格替换为连字符
    .replace(/-+/g, '-')       // 多个连字符替换为单个
    .replace(/^-+|-+$/g, '');  // 移除首尾的连字符

  return `${timestamp}-${sanitizedTitle || 'untitled'}`;
}

// 格式化日期
export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0]
} 