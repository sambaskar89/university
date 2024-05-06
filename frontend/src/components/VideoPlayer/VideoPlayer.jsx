import React from 'react'
import './VideoPlayer.css'
import video from '../../assets/VID_20221022_192611.mp4'
import  {useRef } from 'react';

const VideoPlayer = ({isPlaying ,setIsPlaying, toggleVideo}) => {
  
    const player = useRef(null); // it will This reference allows us to access and manipulate the DOM node directly, 
    const closePlayer = (e) =>{
        if(e.target ===player.current){
            setIsPlaying(false);
        }
    }

  return (

    <div className={`video-player ${isPlaying?'':'hide'}` }ref={player} onClick={closePlayer}>
        <video src={video} autoPlay muted controls></video>
      
    </div>
  )
}

export default VideoPlayer
