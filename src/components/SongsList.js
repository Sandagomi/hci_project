import React from "react";
import {Link} from "react-router-dom";
import "../css/SongsList.css";

const SongsList = (props) => {
  return (
    <div>
      <div className="songmainconatiner">
        <div class="SongListcontainer">
          <div class="item">
            <i class="music icon"></i>
            <div class="content">
              <div class="header">{props.artist}</div>
              <Link to="/SongsStream"> <a>{props.name}</a> </Link> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SongsList;
