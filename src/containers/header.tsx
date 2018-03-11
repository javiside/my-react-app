import * as React from 'react';
import { NavLink } from 'react-router-dom';
import '../static/styles/header.css';

const Header = () => (
  <div className="header">
    <header>
      <ul>
        <li>
          <NavLink to="/" exact={true}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/auth">Auth</NavLink>
        </li>
        <li>
          <NavLink to="/boxes">Boxes</NavLink>
        </li>
      </ul>
    </header>
  </div>
);
export default Header;
