import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { fetchArticleList } from "../lib/article";
import Article from "./Article";

async function ArticleList() {
  const articleList: Article[] = await fetchArticleList();

  return (
    <>
      {articleList?.map((article: Article) => (
        <div key={nanoid()}>
          <Article article={article}></Article>
        </div>
      ))}
    </>
  );
}

export default ArticleList;
