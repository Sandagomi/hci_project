import React from 'react';
import '../css/NewsArtical.css'


const NewsArtical = ({data}) => {


    return(
        <div className="news">
            <h1 className="news_title">{data.title}</h1>
            <p className="news_body">{data.description}</p>
            <span className="news_author">{data.author}</span>
        </div>
    )

}
export default NewsArtical;