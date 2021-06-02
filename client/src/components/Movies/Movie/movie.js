import React from 'react'
import { Player } from 'video-react';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import axios from 'axios'
import Upload from './Upload';

class MovieNight extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            video: ``,
            option: [`acf6827da53f2a2b9dbd8309dfaf81c6.mp4`,`f6ec9d5383ed867d8fc4d79bc6b34195.mp4`,`417994545aaf1921c22e0f2b82728a0c.mp4`]
        }

        this.handleChange.bind(this);
        this.myVideoRef = React.createRef();
    }

    componentDidMount() {
        axios
        .get(`http://localhost:4000/files`)
        .then(res =>{ 
            //console.log(res.data)
            this.setState({
                video: `http://localhost:4000/files/${res.data[0].filename}`
        })
            this.myVideoRef.current.video.load()
            this.forceUpdate()
            console.log(this.state.option)
        })
        .catch(error =>{
            console.log(error)
        })
    }

    handleChange = (e) => {
        console.log(e.value)
        this.setState({video: `http://localhost:4000/files/${e.value}`})
        this.myVideoRef.current.video.load()
        this.forceUpdate()
    }

    render() {
        return (
            <div className="video-player">
                <Player ref={this.myVideoRef}>
                    <source src={this.state.video} />
                </Player>
                <Dropdown options={this.state.option} onChange={this.handleChange} placeholder="Select a Video" />
                <Upload/>
            </div>
        )
    }
}

export default MovieNight
