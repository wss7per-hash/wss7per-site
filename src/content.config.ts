import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().default(''),
    draft: z.boolean().default(false),
  }),
});

const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/works' }),
  schema: z.object({
    title: z.string(),
    summary: z.string().default(''),
    tagline: z.string().default(''),
    category: z.string().default('其他'),
    cover: z.string().default(''),
    icon: z.string().default(''),
    screens: z.array(z.string()).default([]),
    accent: z.string().default(''),
    badge: z.string().default(''),
    video: z.string().default(''),
    gallery: z.array(z.string()).default([]),
    version: z.string().default(''),
    platforms: z.array(z.string()).default([]),
    date: z.coerce.date(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    download: z
      .object({
        label: z.string().default('下载'),
        url: z.string(),
        note: z.string().default(''),
      })
      .optional(),
    links: z
      .array(z.object({ label: z.string(), url: z.string() }))
      .default([]),
    features: z.array(z.string()).default([]),
    highlights: z.array(z.string()).default([]),
  }),
});

const bookmarks = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/bookmarks' }),
  schema: z.object({
    title: z.string(),
    url: z.string(),
    description: z.string().default(''),
    category: z.string().default('资源'),
    date: z.coerce.date(),
  }),
});

export const collections = { posts, works, bookmarks };
