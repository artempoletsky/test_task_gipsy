
import z from "zod";


export const getArticle = z.object({
  slug: z.string().min(1),
  subdomain: z.string(),
});

export type AGetArticle = z.infer<typeof getArticle>;