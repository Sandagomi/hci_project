import React, { useState } from "react";
import {Link} from "react-router-dom";
import "../css/Header.css";


const Header = () => {

  const [navbar,setNavbar] = useState(false);

  const changeBackground = () => {

    if (window.scrollY >= 80) {
      setNavbar(true)
      console.log(window.scrollY)
    }else{
      setNavbar(false)
    }

  }

  
    window.addEventListener('scroll',changeBackground)
  

  return (
    <div>
      <nav className=  {navbar ? 'navbar active' : 'navbar'}>
        <div className="nav-container">
          <Link to="/"><a className="item">Home</a></Link>
          <Link to="/SongsUpload"><a className="item">Songs</a></Link>
          <Link to="/MemberRegistraion"><a className="item">Members</a></Link>
          <Link to="/ImageRender"><a className="item">Gallery</a></Link> 
          <div className="webnametag">
            <p>Sinhala Lanka <i class="headphones icon"></i></p>
          </div>
         
        </div>
      </nav>
    </div>
    
    
  );
};
export default Header;
