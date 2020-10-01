import React, {useState} from 'react';
import { NewsContextProvider } from '../API/NewsContext';
import News from './News';
import '../css/Home.css'
 


const Home = () => {

    const [term, setTerm] = useState(' ')


    
    return(
        <div className="main_news_container">
            <div className="news_heading">
                <h1>News Feed <i class="paper plane outline icon"></i></h1>
            </div>


            {/* <div className="ui search">
            <div className="ui icon input">
                <form>
                  <input className="prompt" type="text" 
                  onChange={(e)=> setTerm(e.target.value)}
                  />
                     
                </form>
             </div>
             </div>  
             need to use for news filtering */ }
            
             <div className="news_container">
             <NewsContextProvider>
                     <News/>
             </NewsContextProvider>
             
             </div>
            
       
        </div>
        
    )

}
export default Home;