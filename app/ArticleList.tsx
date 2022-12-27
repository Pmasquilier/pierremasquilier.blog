import { nanoid } from "nanoid";
import Link from "next/link";
import React, { Fragment } from "react";

export type Article = {
  id: string;
  name: string;
  categorie: string;
  title: string;
  subtitle: string;
  date: string;
};

const fetchArticleList = async () => {
  return await prisma.article.findMany();
};

async function ArticleList() {
  const articleList = (await fetchArticleList()) as Article[];

  return (
    <>
      {articleList.map((article: Article) => (
        <Link href={`/article/${article.id}`} key={nanoid()}>
          {article.name}
        </Link>
      ))}
    </>
  );
}

export default ArticleList;
