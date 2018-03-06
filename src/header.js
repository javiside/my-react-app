import React, { Component } from 'react';
import './static/css/header.css'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <header>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </header>
      </div>
    );
  }
}

export default Header;
