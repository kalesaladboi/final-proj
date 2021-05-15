import React from 'react'
import VideoPlayer from 'react-video-js-player'
import wasabi from "./assets/wasabi.mp4"
import '@videojs/themes/dist/fantasy/index.css'


function MovieNight() {

    const videoSrc = wasabi
    
    return (
        <div className="video-player">
            <VideoPlayer
            src={videoSrc}
            width = "720"
            height = "420"
            />
        </div>
    )
}

export default MovieNight