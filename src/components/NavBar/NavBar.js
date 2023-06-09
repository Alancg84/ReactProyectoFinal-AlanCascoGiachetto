import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <h3>La Pelota No Se Mancha</h3>
      </Link>
      <button
        className={`navbar-toggler ${isNavOpen ? 'collapsed' : ''}`}
        type="button"
        onClick={toggleNav}
        aria-controls="navbarNav"
        aria-expanded={isNavOpen ? 'true' : 'false'}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}
        id="navbarNav"
      >
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/category/Mundiales"
              onClick={toggleNav}
            >
              Mundiales
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/category/Copa Libertadores"
              onClick={toggleNav}
            >
              Copa Libertadores
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/category/Champions League"
              onClick={toggleNav}
            >
              Champions League
            </NavLink>
          </li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;