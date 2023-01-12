import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Article } from "../common/models/article.model";

type Props = {
  article: Article;
};
function Article({ article }: Props) {
  return (
    <div>
      <Link href={`/article/${article.name}`}>
        <Image src="/vercel.svg" width="50" height="50" alt="test"></Image>
        <h2>{article?.categorie}</h2>
        <h2>{article?.title}</h2>
        <h2>{article?.subtitle}</h2>
        <h2>{article?.date}</h2>
      </Link>
    </div>
  );
}

export default Article;
