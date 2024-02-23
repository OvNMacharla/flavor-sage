import React from 'react';
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';
import logo from '../assets/images/mashup-logo.svg'
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
  <nav className="sidebar">
    <div className="navbar-collapse">
      <div className="site-header ">
          <a className="site-brand" title="">
            <img className="img-responsive site-logo" alt="" src={logo}/>
            FLAVOR-SAGE
          </a>
        <p>Discover personalized recipes tailored to your tastes with our recipe recommendation platform.</p>
      </div>
      <nav className="navEle">
        <NavLink className='link' to="/home" title="">Home</NavLink>
        <NavLink className='link' to="/about" title="">About</NavLink>
        <NavLink className='link' to="/services" title="">Services</NavLink>
        <NavLink className='link' to="/contact" title="">Contact</NavLink>
      </nav>

      <nav className="nav-footer">
        <p className="nav-footer-social-buttons">
          <a className="fa-icon" href="https://www.instagram.com/" title="">
            <i className="fa fa-instagram"></i>
          </a>
          <a className="fa-icon" href="https://dribbble.com/" title="">
            <i className="fa fa-dribbble"></i>
          </a>
          <a className="fa-icon" href="https://twitter.com/" title="">
            <i className="fa fa-twitter"></i>
          </a>
        </p>
        <p>©2024 | OvN</p>
      </nav>  
    </div> 
  </nav>
</header>
  );
}

export default Header;