import React from "react";
import "../css/ImageUpload.css";

const ImageUpload = () => {
  return (
    <div className="imageupload">
      <div className="registration">
        <form className="ui form">
          <div className="field">
            <label>Image Name</label>
            <input type="text" name="first-name" placeholder="Image Name" />
          </div>
          <div className="field">
            <label>Image Information</label>
            <input type="text" name="last-name" placeholder="Image Information" />
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
            <button class="positive ui button">Upload</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ImageUpload;