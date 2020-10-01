import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios'


export const NewsContext = createContext();

export const NewsContextProvider = (props) => {

    const [data, setData] = useState()
    const apikey = '4cca64d4b9c9408992a65029ac3fc5b9'


    
    useEffect(()=>{

        axios.get(`http://newsapi.org/v2/everything?q=bitcoin&from=2020-09-01&sortBy=publishedAt&apiKey=${apikey}`)
        .then((response)=>setData(response.data))
        .catch((error)=>console.log(error));


    },[data])
   
    return(
        <NewsContext.Provider value={{data}}>
        {props.children}
        </NewsContext.Provider>
    );
};