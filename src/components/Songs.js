import React, { useState } from "react";
import SongsList from "./SongsList";
import "../css/Songs.css";
import { name } from "faker";

const Songs = () => {
  return (
    <div>
      <div className="songshead">
        <i class="play icon"></i> Songs Stream
      </div>
      <div className="songsContainer">
        <SongsList name="Believer" artist="Ryan" />
        <SongsList name="Tension" artist="Gomi" />
        <SongsList name="Treat you Better" artist="Shawn mendes" />
        <SongsList name="At my Worst" artist="Shawn mendes" />
        <SongsList name="Pain" artist="Shawn mendes" />
        <SongsList name="I Love You" artist="Shawn mendes" />
        <SongsList name="At my Worst" artist="Shawn mendes" />
        <SongsList name="Pain" artist="Shawn mendes" />
        <SongsList name="I Love You" artist="Shawn mendes" />
        <SongsList name="At my Worst" artist="Shawn mendes" />
        <SongsList name="Pain" artist="Shawn mendes" />
        <SongsList name="I Love You" artist="Shawn mendes" />
      </div>
    </div>
  );
};
export default Songs;
