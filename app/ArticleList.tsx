import { nanoid } from "nanoid";
import Link from "next/link";
import React, { Fragment } from "react";

type Article = {
  name: string;
};

function ArticleList() {
  const articleList: Article[] = [
    {
      name: "article1",
    },
    {
      name: "article2",
    },
    {
      name: "article3",
    },
  ];

  return (
    <>
      {articleList.map((article: Article) => (
        <Link href={`/article/${article.name}`} key={nanoid()}>
          {article.name}
        </Link>
      ))}
    </>
  );
}

export default ArticleList;
