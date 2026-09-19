import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const cities = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cities' }),
  schema: z.object({
    title: z.string(),
    country: z.string(),
    lat: z.number().optional(),
    lng: z.number().optional(),
    status: z.enum(['live', 'soon']),
    summary: z.string(),
  }),
});

const restaurants = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/restaurants' }),
  schema: z.object({
    name: z.string(),
    city: z.string(),
    rank: z.number(),
    movement: z.enum(['new', 'up', 'down', 'same']).default('new'),
    cuisine: z.array(z.string()),
    price: z.number().min(1).max(3),
    veganStatus: z.enum(['all-vegan', 'vegan-friendly']),
    neighborhood: z.string(),
    address: z.string(),
    lat: z.number(),
    lng: z.number(),
    summary: z.string(),
    whatToOrder: z.array(z.string()),
    sources: z.array(z.string()),
    lastVerified: z.coerce.date(),
  }),
});

export const collections = { cities, restaurants };
