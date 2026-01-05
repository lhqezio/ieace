import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        tag: z.enum(['general', 'case-study', 'research']),
        lang: z.enum(['en', 'vn']).default('en'),
        slug: z.string(),
    }),
});

export const collections = { posts };
