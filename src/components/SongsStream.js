import React from 'react';
import {Howl} from "howler";
import "../css/SongStream.css";



const audioClips = [
    {sound:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", label:"EDM1"},
    {sound:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", label:"EDM2"},
    {sound:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", label:"EDM3"},
    {sound:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", label:"EDM4"}
]


const SongsStream = () => {


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
            <div className="stream-links">{renderButtonSound()}</div>
            
        </div>
    )

}
export default SongsStream;