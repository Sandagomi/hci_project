import React from "react";
import {Link} from "react-router-dom"
import "../css/Header.css";


const Header = () => {
  return (
    
    
    <div>
      <nav className="headermain">
        <div className="ui secondary  menu">
          <Link to="/Home"><a className="item">Home</a></Link>
          <Link to="/Songs"><a className="item">Songs</a></Link>
          <Link to="/Members"><a className="item">Members</a></Link>
          <Link><a className="item">Gallery</a></Link> 
          <div className="right menu">
            <div className="item">
              <div className="ui icon input">
                <h1>Sinhala Lanka</h1>
                <i className="search link icon"></i>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    
    
  );
};
export default Header;
