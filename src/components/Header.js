import React, { useState } from "react";
import {Link} from "react-router-dom"
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
          <Link to="/Home"><a className="item">Home</a></Link>
          <Link to="/Songs"><a className="item">Songs</a></Link>
          <Link to="/MemberRegistraion"><a className="item">Members</a></Link>
          <Link><a className="item">Gallery</a></Link> 
         
        </div>
      </nav>
    </div>
    
    
  );
};
export default Header;
