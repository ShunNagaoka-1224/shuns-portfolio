import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notesCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    category: z.string().default('Thought'),
    tags: z.array(z.string()).default([]),
    summary: z.string().optional(),
  }),
});

export const collections = {
  notes: notesCollection,
};