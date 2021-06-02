import axios from 'axios'
import React from 'react'

class Upload extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            selectedFile:null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
                selectedFile : event.target.files[0]
            })
            console.log(event.target.files[0])
        }
        
    handleSubmit(event) {
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        console.log('boobies')
        axios.post('https://media-api-final-proj.herokuapp.com//mediapost', data)
        .then(response => {
            console.log(response)
        }).catch(error => {
            console.log("Upload:", error)
        })
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                        <input 
                        type="file" 
                        name="file" 
                        id="file" 
                        onChange={this.handleChange}
                        required/>
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}

export default Upload