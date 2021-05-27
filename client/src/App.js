<<<<<<< HEAD
import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
=======
import React, { Component } from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import Dashboard from "./components/Dashboard"
import Home from "./components/Home"
import MovieNight from "./components/MovieNight"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import './App.css'
>>>>>>> 1ee8a78abe5311fa73a6993ac587b96c10748fc8

import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/posts" />} />
          <Route path="/posts" exact component={Home} />
          <Route path="/posts/search" exact component={Home} />
          <Route path="/posts/:id" exact component={PostDetails} />
          <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

<<<<<<< HEAD
export default App;
=======
  

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

>>>>>>> 1ee8a78abe5311fa73a6993ac587b96c10748fc8
