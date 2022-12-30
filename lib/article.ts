import prisma from "./prisma";

export const fetchArticleList = async () => {
  return prisma.article.findMany();
};

export const fetchArticleById = async (articleId: string) => {
  return await prisma.article.findUnique({
    where: {
      id: articleId,
    },
  });
};
