import React from "react";
import icon from "../Images/car.png";
import {Link} from "react-router-dom";
import "../css/SongsUpload.css";

const SongsUpload = () => {
  return (
    <div className="songsupload">
      <div className="registration">
        <form className="ui form">
          <div className="field">
            <label>Song Name</label>
            <input type="text" name="first-name" placeholder="Song Name" />
          </div>
          <div className="field">
            <label>Song Artist</label>
            <input type="text" name="last-name" placeholder="Song Artist" />
          </div>
          <div className="field">
            <label>Date</label>
            <input type="text" name="Email" placeholder="Date" />
          </div>

          <input type="file" id="myFile" name="filename" />
        </form>
      </div>

      <div className="login">
        <form className="ui form">
          <div className="uploadicon">
            <i class="arrow alternate circle up icon"></i>
          </div>
          <div className="uploadbutton">
            <button class="positive ui button">Uploan</button>
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
