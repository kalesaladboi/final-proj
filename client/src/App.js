import React, { Component } from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import Dashboard from "./components/Dashboard"
import Home from "./components/Home"
import MovieNight from "./components/MovieNight"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import './App.css'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    }

    this.handleLogin= this.handleLogin.bind(this)
  }

  

  checkLoginStatus() {
    axios.get("http://localhost:3001/logged_in", { withCredentials: true})
    .then(response => {
      console.log("logged in?", response)
    }).catch(error =>{
      console.log("login error:", error)
    })
  }

  componentDidMount() {
    this.checkLoginStatus()
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    })
  }
  
  
  render(){
    const items = [
      { name: 'home', label: 'Home' },
      {
        name: 'billing',
        label: 'Billing',
        items: [
          { name: 'statements', label: 'Statements' },
          { name: 'reports', label: 'Reports' },
        ],
      },
      {
        name: 'settings',
        label: 'Settings',
        items: [
          { name: 'profile', label: 'Profile' },
          {
            name: 'notifications',
            label: 'Notifications',
            items: [
              { name: 'email', label: 'Email' },
              { name: 'sms', label: 'SMS' },
            ],
          },
        ],
      },
    ]
    
    return (
      <div className='app'>
        <Header />
        <div>
          <Sidebar items={items} />
        </div>
          <BrowserRouter>
            <Switch>
              <Route 
              exact 
              path={"/"} 
              render={props => (
                <Home {... props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} />
            )}
            />
            <Route 
            exact 
            path={"/dashboard"} 
            render={props => (
              <Dashboard {... props} loggedInStatus={this.state.loggedInStatus} />
            )}
            />
            <Route 
            exact 
            path={"/movie"} 
            render={props => (
              <MovieNight {... props} loggedInStatus={this.state.loggedInStatus} />
            )}
            />
            <Route />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

