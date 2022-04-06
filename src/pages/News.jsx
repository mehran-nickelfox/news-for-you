import React, { useState, useEffect } from "react";
import Card from "../components/shared/Card";
const News = () => {
  const [news, setNews] = useState([]);
  const key = process.env.REACT_APP_NEWS_API;

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${key}`)
      .then((res) => res.json())
      .then((result) => {
        setNews(result.articles);
      });
  }, []);
  return (
    <div className="flex flex-col place-content-center">
      {news.map((item, index) => {
        return (
          <Card
            key={index}
            className="m-10 w-3/5 border-2 grid justify-center "
          >
            <h1>{`${item.title.substring(0, 50)}...`}</h1>
            <div
              className="flex m-10 border-2 border-solid md:flex-nowrap lg:flex-nowrap sm:flex-wrap"
              key={index}
            >
              <img className="h-40 w-60" src={item.urlToImage} alt="news" />
              <p>{item.description}</p>
            </div>
            <button
              className="rounded mb-4 mr-4 p-0.5 bg-blue-500 w-24 md:bg-green-500 justify-self-end"
              type="submit"
            >
              <a href={item.url}>Read-More</a>
            </button>
          </Card>
        );
      })}
    </div>
  );
};

export default News;
