import React, { useEffect } from "react";
import { useAtom } from "jotai";
import { motion } from "framer-motion";
import { newsAtom, fetchUrlAtom, storageAtom } from "../jotai/Atoms";
import Card from "../components/shared/Card";
import Marker from "../components/Marker/Marker";
const News = () => {
  const [json] = useAtom(fetchUrlAtom);
  const [storage,setStorage] = useAtom(storageAtom);
  useEffect(() => {
    setStorage(json.articles)
  }, [json.articles]);

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 10 } }}
      className="flex flex-wrap flex-col items-center z-50  "
    >
      <div className="animate-bounce absolute bottom-1/4 text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2 } }}
          exit={{ opacity: 0 }}
          className="text-white font-bold text-6xl"
        >
          SCROLL FOR NEWS
        </motion.h1>
        <br />
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2 } }}
          exit={{ opacity: 0 }}
          className="text-white font-bold text-6xl"
        >
          ▼
        </motion.h1>
      </div>
      {storage &&
        storage.map((article, index) => (
          <div
            key={index}
            className="bg-white text-white flex flex-col w-3/5 p-2 m-4 rounded-xl "
          >
            <h3 className="font-serif font-bold text-xl m-4 text-red-700">
              {article.title.substring(0, 50)}...
            </h3>
            <Card key={index} className=" w-full flex p-1 rounded ">
              <div className="w-full flex md:flex-nowrap sm:flex-wrap text-black">
                <img
                  className="h-40 w-60 m-4 rounded"
                  src={article.urlToImage}
                  alt={article.source.name}
                />
                <p className="m-4 font-serif text-black">
                  {article.description === null ? (
                    <span className="font-serif font-bold text-xl">
                      Click Know More For Article
                    </span>
                  ) : (
                    article.description.substring(0, 150)
                  )}
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
