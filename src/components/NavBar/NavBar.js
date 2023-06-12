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
    
    <nav className='navbar navbar-expand-lg navbar-light'>
      <Link className="navbar-brand" to="/">
      <h3>La Pelota no<br></br>se Mancha (logo)</h3>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}
        id="navbarNav"
      >
        <ul className="navbar-nav ml-auto navbarmiddle">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/category/Mundiales"
              onClick={toggleNav}
            >
              <h4>Mundiales</h4>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/category/Copa Libertadores"
              onClick={toggleNav}
            >
              <h4>Copa Libertadores</h4>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/category/Champions League"
              onClick={toggleNav}
            >
              <h4>Champions League</h4>
            </NavLink>
          </li>
        </ul>
      </div>
      <CartWidget className='cartWidget'/>
    </nav>
  );
};

export default NavBar;