import { z, defineCollection } from "astro:content";

export const newsCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    url: z.string().optional(),
    date: z.date(),
  }),
});

export const collections = {
  news: newsCollection,
};
