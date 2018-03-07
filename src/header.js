import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './static/css/header.css'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <header>
          <ul>
            <li>
              <NavLink
                to={{
                  pathname: '/',
                  // hash: '#home',
                  // search: '?some=true'
                }} exact>Home</NavLink>
            </li>
            <li><NavLink to="/about" exact>About</NavLink></li>
            <li><NavLink to="/boxes">Boxes</NavLink></li>
          </ul>
        </header>
      </div>
    );
  }
}

export default Header;