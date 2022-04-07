import React, { useEffect } from "react";
import { useAtom } from "jotai";
import { motion } from "framer-motion";
import { newsAtom, fetchUrlAtom } from "../jotai/Atoms";
import Card from "../components/shared/Card";
import Marker from "../components/Marker/Marker";
const News = () => {
  const [news, setNews] = useAtom(newsAtom);
  const [json] = useAtom(fetchUrlAtom);

  useEffect(() => {
    setNews(json.articles);
  }, [json.articles, news, setNews]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-wrap flex-col items-center z-50  "
    >
      <div className="animate-bounce absolute bottom-1/4 text-center">
        <h1 className="text-white font-bold text-6xl">SCROLL FOR NEWS</h1>
        <br />
        <h1 className="text-white font-bold text-6xl">▼</h1>
      </div>

      {news.map((article, index) => (
        <div
          key={index}
          className="bg-slate-700 text-white flex flex-col w-3/5 p-2 m-4 rounded-xl "
        >
          <h3 className=" font-serif text-base font-bold m-4">
            {article.title.substring(0, 50)}...
          </h3>
          <Card key={index} className=" w-full flex p-1 rounded ">
            <div className="w-full flex md:flex-nowrap sm:flex-wrap">
              <img
                className="h-40 w-60 m-4 rounded"
                src={article.urlToImage}
                alt="article"
              />
              <p className="m-4">
                {article.description && article.description.substring(0, 150)}
                ...
              </p>
            </div>
            <div className="h-100 flex flex-col items-center justify-around">
              <button className="rounded m-4 p-0.25 bg-red-700 w-32 h-12">
                <a href={article.url}>Know More</a>
              </button>
              <Marker link={article} />
            </div>
          </Card>
        </div>
      ))}
    </motion.div>
  );
};

export default News;
