import "../styles/globals.css";
import ArticleList from "./ArticleList";
import React from "react";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-semibold text-gray-900 text-center">
        Pierre MASQUILIER
      </h1>
      <h2 className="text-xl font-medium text-gray-700 text-center">
        Blog d&apos;un développeur front-end freelance
      </h2>
      {/* @ts-ignore */}
      <ArticleList></ArticleList>
    </>
  );
}
