import React from "react";
import { useAtom } from "jotai";
import { fetchUrlAtom } from "../jotai/Atoms";
import Card from "../components/shared/Card";
const News = () => {
  const [json] = useAtom(fetchUrlAtom);

  return (
    <div className="flex flex-wrap flex-col items-center z-50 ">
      {json.articles.map((article, index) => (
        <div
          key={index}
          className="bg-blue-100 flex flex-col w-3/5 border-2 border-solid m-4 rounded "
        >
          <h3 className=" font-serif text-base font-bold m-4">
            {article.title.substring(0, 50)}...
          </h3>
          <Card key={index} className=" w-full flex p-1 rounded ">
            <div className="w-full">
              <img
                className="h-40 w-60"
                src={article.urlToImage}
                alt="article"
              />
              <p>
                {article.description && article.description.substring(0, 150)}
                ...
              </p>
            </div>
            <button className="rounded m-4 p-0.5 bg-red-700 w-24 h-12">
              <a href={article.url}>ReadMore</a>
            </button>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default News;
