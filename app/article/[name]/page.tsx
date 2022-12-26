import React from "react";

type PageProps = {
  params: {
    name: string;
  };
};

function Article({ params: { name } }: PageProps) {
  return <div>{name}</div>;
}

export default Article;
