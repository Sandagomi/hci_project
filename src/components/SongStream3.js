import React from 'react';
import {Howl} from "howler";
import "../css/SongStream.css";
import a from "../Images/mp3.ico";
import {Link} from "react-router-dom";



const audioClips = [
   // {sound:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", label:"Play"},
    //{sound:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", label:"Play"},
    {sound:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", label:"Play"},
    //{sound:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", label:"Play"}
]


const SongsStream3 = () => {


    const soundPlay = (src) => {

        const sound = new Howl ({
            src,
            html5: true
        })
        sound.play();
    }

    const renderButtonSound = () => {

        return audioClips.map((soundObj,index) => {
            return(
            <button className="streambutton" key={index} onClick={()=>soundPlay(soundObj.sound)}>
                {soundObj.label}
                </button>
            )
        })

    }

   

    return (
        <div className="stream-container">
             <h1 className="stream-heading">Music Stream</h1>
            <div className="steammain">
               
                <div className="steamimage">
                    <img class="ui centered medium rounded image" src={a}></img>
                    
                </div>
                <div className="steambutton">
                    <h2 className="head">Song Name</h2>
                    <br></br>
                    <div className="stream-links">{renderButtonSound()}</div>

                    <Link to="/SongsStream3"><button onClick="location.reload()" type="submit" className="stopbutton">Stop</button></Link>
                    
                    
                </div>
               
            </div>
        </div>
    )

}
export default SongsStream3;