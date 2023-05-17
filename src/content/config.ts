import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val: string) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str: string) => (str ? new Date(str) : undefined)),
    heroImage: z.string().optional(),
  }),
});

export const collections = { blog };
