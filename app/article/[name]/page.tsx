import Image from "next/image";
import React from "react";
import { Article } from "../../../common/models/article.model";
import { fetchArticleByName, fetchArticleList } from "../../../lib/article";

type PageProps = {
  params: {
    name: string;
  };
};

async function ArticlePost({ params: { name } }: PageProps) {
  const article = (await fetchArticleByName(name)) as Article;
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

export async function generateStaticParams() {
  const articleList = (await fetchArticleList()) as Article[];

  return articleList.map((article: Article) => ({
    name: article.name.toString(),
  }));
}
