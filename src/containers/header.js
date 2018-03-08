import React from "react";
import { NavLink } from "react-router-dom";
import "../static/css/header.css";

const Header = () => (
  <div className="header">
    <header>
      <ul>
        <li>
          <NavLink to="/" exact>Home</NavLink>
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
