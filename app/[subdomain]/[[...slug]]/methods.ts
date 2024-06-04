import { AGetArticle } from "./schemas";

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export async function getArticle({ slug, subdomain }: AGetArticle) {
  return await prisma.article.findFirst({
    where: {
      slug,
      subdomain,
    }
  });
}