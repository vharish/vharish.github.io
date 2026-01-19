import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

const resume = defineCollection({
	loader: glob({ base: './src/content/resume', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		name: z.string(),
		label: z.string(),
		email: z.string(),
		phone: z.string().optional(),
		location: z.string(),
		summary: z.string(),
		profiles: z.array(z.object({
			network: z.string(),
			url: z.string(),
		})),
		skills: z.array(z.object({
			name: z.string(),
			keywords: z.array(z.string()),
		})),
		education: z.array(z.object({
			institution: z.string(),
			area: z.string(),
			studyType: z.string(),
			startDate: z.string(),
			endDate: z.string(),
			score: z.string().optional(),
		})),
	}),
});

export const collections = { blog, resume };