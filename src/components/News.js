import React, { useContext } from "react";
import { NewsContext } from "../API/NewsContext";
import NewsArtical from "./NewsArtical";
import "../css/News.css";

const News = (props) => {
  const { data } = useContext(NewsContext);
  //importing the api data to this component and mappping it out to an array
  return (
    <div className="all_news">
      {data
        ? data.articles.map((news) => (
            <NewsArtical data={news} key={news.url} />
          ))
        : "Loading..."}
    </div>
  );
};
export default News;
