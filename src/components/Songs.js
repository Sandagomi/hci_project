import React, { useState } from "react";
import SongsList from "./SongsList";
import "../css/Songs.css";
import { name } from "faker";
import {Link} from "react-router-dom";

const Songs = () => {
  return (
    <div>
      <div className="songshead">
        <i class="play icon"></i> Songs Stream
      </div>
      <div className="songsContainer">
      <Link to="/SongsStream"><a><SongsList name="Believer" artist="Ryan" /></a></Link>
      <Link to="/SongsStream2"><a><SongsList name="Tension" artist="Gomi" /></a></Link>
      <Link to="/SongsStream3"><a><SongsList name="Treat you Better" artist="Shawn mendes" /></a></Link>
      <Link to="/SongsStream4"><a><SongsList name="At my Worst" artist="Shawn mendes" /></a></Link>
      <Link to="/SongsStream"><a><SongsList name="Pain" artist="Shawn mendes" /></a></Link>
      <Link to="/SongsStream"><a><SongsList name="I Love You" artist="Shawn mendes" /></a></Link>
      <Link to="/SongsStream"><a><SongsList name="At my Worst" artist="Shawn mendes" /></a></Link>
      <Link to="/SongsStream"><a><SongsList name="Pain" artist="Shawn mendes" /></a></Link>
      <Link to="/SongsStream"><a><SongsList name="I Love You" artist="Shawn mendes" /></a></Link>
      <Link to="/SongsStream"><a><SongsList name="At my Worst" artist="Shawn mendes" /></a></Link>
      <Link to="/SongsStream"><a><SongsList name="Pain" artist="Shawn mendes" /></a></Link>
      <Link to="/SongsStream"><a><SongsList name="I Love You" artist="Shawn mendes" /></a></Link>
      </div>
    </div>
  );
};
export default Songs;
