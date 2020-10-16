import React, { useState } from "react";
import {Link} from "react-router-dom";
import "../css/SongsUpload.css";

const SongsUpload = () => {

  const [songName, setSongName] = useState("");
  const [songArtist, setSongArtist] = useState("");
  const [date,setDate] = useState("");

  const [songNameErr, setSongNameErr] = useState({});
  const [songArtistErr, setSongArtistErr] = useState({});
  const [dateErr, setDateErr] = useState({});


  const onSubmit = (e) => {

      e.preventDefault();
      const isValid = formValidation();

  }

  const formValidation = () => {

    const songNameErr = {};
    const songArtistErr = {};
    const dateErr = {};
    let isValid = true;

    if(songName.trim().length < 2) {
      songNameErr.songNameShort = "song name is too short";
      isValid = false;
    }
    if(songArtist.trim().length < 2) {
      songArtistErr.songArtistNameShort = "song artist name is short";
      isValid = false;
    }
    if(!date.includes("123")) {
      dateErr.dateStrings = "date cant contain numbers";
      isValid = false;
    }

    setSongNameErr(songNameErr);
    setSongArtistErr(songArtistErr);
    setDateErr(dateErr);

    return isValid;

  }



  return (
    <div className="songsupload">
      <div className="registration">
        <form onSubmit={onSubmit} className="ui form">
          <div className="field">
            <label>Song Name</label>
            <input value={songName} onChange={(e)=>setSongName(e.target.value)} type="text" name="first-name" placeholder="Song Name" />
          </div>
          {Object.keys(songNameErr).map((key)=>{
                     return <div style={{color:"red"}}>{songNameErr[key]}</div>
                 })}
          <div className="field">
            <label>Song Artist</label>
            <input value={songArtist} onChange={(e)=>setSongArtist(e.target.value)} type="text" name="last-name" placeholder="Song Artist" />
          </div>
          {Object.keys(songArtistErr).map((key)=>{
                     return <div style={{color:"red"}}>{songArtistErr[key]}</div>
                 })}
          <div className="field">
            <label>Date</label>
            <input value={date} onChange={(e)=>setDate(e.target.value)} type="text" name="Email" placeholder="Date" />
          </div>
          {Object.keys(dateErr).map((key)=>{
                     return <div style={{color:"red"}}>{dateErr[key]}</div>
                 })}

          <button className="ui button" type="submit">Register</button>

        </form>
      </div>

      <div className="login">
        <form className="ui form">
          <div className="uploadicon">
            <i class="arrow alternate circle up icon"></i>
          </div>
          <div className="uploadbutton">
            <button class="positive ui button">Upload</button>
          </div>
          <div className="stream-button">
            <Link to="/Songs"><button class="right positive ui button">Stream</button></Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SongsUpload;
