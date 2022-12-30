import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Article } from "../common/models/article.model";
import { fetchArticleList } from "../lib/article";

async function ArticleList() {
  const articleList: Article[] = await fetchArticleList();

  return (
    <>
      {articleList.map((article: Article) => (
        <div key={nanoid()}>
          <div>
            <Link href={`/article/${article.id}`}>
              <Image
                src="/vercel.svg"
                width="50"
                height="50"
                alt="test"
              ></Image>
              <h2>{article?.categorie}</h2>
              <h2>{article?.title}</h2>
              <h2>{article?.subtitle}</h2>
              <h2>{article?.date}</h2>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default ArticleList;
