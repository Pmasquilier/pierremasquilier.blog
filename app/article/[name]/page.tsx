import Image from "next/image";
import React from "react";
import { Article } from "../../ArticleList";
import prisma from "../../../lib/prisma";

type PageProps = {
  params: {
    name: string;
  };
};

const fetchArticle = async (articleId: string) => {
  return await prisma.article.findUnique({
    where: {
      id: articleId,
    },
  });
};

async function ArticlePost({ params: { name } }: PageProps) {
  const article = (await fetchArticle(name)) as Article;
  return (
    <>
      <div>
        <Image src="/vercel.svg" width="50" height="50" alt="test"></Image>
        <h2>{article?.categorie}</h2>
        <h2>{article?.title}</h2>
        <h2>{article?.subtitle}</h2>
        <h2>{article?.date}</h2>
      </div>
    </>
  );
}

export default ArticlePost;
