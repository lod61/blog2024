import { z } from 'zod';

const PostSchema = z.object({
  title: z.string(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  description: z.string().max(200),
  tags: z.array(z.string()),
  series: z.string().optional(),
  seriesIndex: z.number().optional(),
  relatedPosts: z.array(z.string()).optional()
});

export function validatePost(frontmatter: any) {
  try {
    PostSchema.parse(frontmatter);
    return true;
  } catch (error) {
    console.error('Invalid post metadata:', error);
    return false;
  }
} 