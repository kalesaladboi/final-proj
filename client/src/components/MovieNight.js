import React, {useState, useEffect} from 'react'
import VideoPlayer from 'react-video-js-player'
import wasabi from "./assets/wasabi.mp4"
import vossiBop from "./assets/vossibop.mp4"
import sayless from "./assets/sayless.mp4"
import '@videojs/themes/dist/fantasy/index.css'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'


function MovieNight() {

    const option = [wasabi, vossiBop, sayless]
    const [video, setVideo] = useState([])
    const defaultVideo = video[0]
    const videoSrc = sayless;


    useEffect(() => {
       setVideo(wasabi)
    }, [])
    
    const handleChange = e => {
        setVideo(e.target.value)
        .then(console.log(video))
    }

    return (
        <div className="video-player">
            <VideoPlayer
            src={videoSrc}
            width = "720"
            height = "420"
            />
            <Dropdown options={option} onChange={handleChange} value={defaultVideo} placeholder="Select a Video" />
        </div>
    )
}

export default MovieNight