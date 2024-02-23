import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css'
import Header from '../Header/Header';
import img12 from '../assets/images/food-4k-3gsi5u6kjma5zkj0.jpg';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/mashup-logo.svg'
function Services() {
  return (
    <div>
        <Header/>
        <main className="" id="main-collapse">
        <div className="hidden-lg hidden-sm hidden-md hidden-xlg" style={{display:'flex',justifyContent:'space-between',gridGap:"10px"}}>
          <a className="site-brand" title="">
            <img className="img-responsive site-logo" alt="" src={logo}/>
            FLAVOR-SAGE
          </a>
          <div style={{display: 'contents'}}>
                <nav className="navEle">
                <NavLink className='link' to="/home" title="">Home</NavLink>
                <NavLink className='link' to="/about" title="">About</NavLink>
                <NavLink className='link' to="/services" title="">Services</NavLink>
                <NavLink className='link' to="/contact" title="">Contact</NavLink>
              </nav>
              </div>
        </div>
        <div className="about-container">
          
              <img src={img12} alt="About" className="about-image" />
              <p>Welcome to our Recipe Recommender, your go-to source for finding delicious recipes tailored to your preferences.</p>
              <p>Our mission is to simplify cooking and inspire you to explore new flavors and ingredients.</p>
              <p>Would you like to see more recipes?</p>
              <Link to="/recipe" className="btn btn-primary">See More Recipes</Link>
        </div>
        </main>
    </div>
  )
}

export default Services;