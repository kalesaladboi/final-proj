import React, {Component} from 'react';
import {render} from 'react-dom';
import logo from '../components/assets/Logo.png';

export default class Header extends Component {
  render() {
    return (
      <nav className="blue-grey darken-3">
        <div className="App-header">
          <div className="App-logo">
          <img src={logo} alt="Logo" height="50" width="50"/>;
          </div>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="client\public\login.html">Login</a></li>
            <li><a href="nav2.html">Nav Option 2</a></li>
            <li><a href="nav3.html">Nav Option 3</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}