import prisma from "./prisma";

export const fetchArticleList = async () => {
  return prisma.article.findMany();
};

export const fetchArticleByName = async (articleName: string) => {
  return await prisma.article.findUnique({
    where: {
      name: articleName,
    },
  });
};
