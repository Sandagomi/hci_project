import React from "react";

const Header = () => {
  return (
    <div>
      <div className="ui secondary  menu">
        <a className="item">Home</a>
        <a className="item">Songs</a>
        <a className="item">Members</a>
        <a className="item">Gallery</a>
        <div className="right menu">
          <div className="item">
            <div className="ui icon input">
              <input type="text" placeholder="Search..." />
              <i className="search link icon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
