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
        <div className="m-auto p-6 w-80 h-max rounded shadow-lg">
          <Image
            src="/design3.png"
            width="400"
            height="200"
            alt="Article Image Preview"
          ></Image>
          <div className="mt-3">
            <h2 className="text-purple-700 font-semibold text-xs">
              {article?.categorie}
            </h2>
            <h2 className="mt-2 text-gray-900 font-semibold text-base">
              {article?.title}
            </h2>
            <h2 className="text-gray-500 font-normal text-base">
              {article?.subtitle}
            </h2>
            <h2 className="mt-4 text-gray-500 font-normal text-xs">
              {article?.date}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Article;
