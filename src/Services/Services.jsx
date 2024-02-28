import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css'
import Header from '../Header/Header';
import img12 from '../assets/images/dcc6d4ea22c553ae169e6637c085e389.jpg';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/mashup-logo.svg'
function Services() {
  return (
    <div>
        <Header/>
        <main className="" id="main-collapse">
        <div className="hidden-lg hidden-sm hidden-md hidden-xlg" style={{display:'flex',justifyContent:'space-between',gridGap:"10px"}}>
          <a className="site-brand" title="" href='/'>
            <img className="img-responsive site-logo" alt="" src={logo}/>
            FLAVOR-SAGE
          </a>
          <div style={{display: 'contents'}}>
                <nav className="navEle">
                <NavLink className='link' to="/" title="">Home</NavLink>
                <NavLink className='link' to="/about" title="">About</NavLink>
                <NavLink className='link' to="/services" title="">Services</NavLink>
                <NavLink className='link' to="/contact" title="">Contact</NavLink>
              </nav>
              </div>
        </div>
        <div className="about-container">
        <div className="col-xs-12 col-md-6">
          <img src={img12} alt="About" className="about-image" />
        </div>
        <div className="col-xs-12 col-md-6">
           <h3>Welcome to our Recipe Recommender</h3>
           <p>Your go-to source for finding delicious recipes tailored to your preferences.</p>
            <p>Our mission is to simplify cooking and inspire you to explore new flavors and ingredients.</p>
            <p>At Recipe Recommender, we're passionate about simplifying the cooking experience and inspiring culinary exploration. Whether you're a seasoned chef or a novice in the kitchen, our goal is to empower you to create delicious meals with ease. Our extensive collection of recipes spans various cuisines, dietary restrictions, and cooking techniques. From quick and easy weeknight dinners to gourmet weekend indulgences, we've got you covered.</p>
            <h3>Customized Recipe Search</h3>
            <p>With our user-friendly interface, you can easily filter recipes based on ingredients, cooking time, dietary preferences, and more. Whether you're looking for gluten-free, vegan, or keto-friendly options, we've curated a diverse selection to suit every palate.</p>
            <p>But we're more than just a recipe website – we're your personal culinary companion. Our team of food enthusiasts and nutrition experts is dedicated to providing helpful tips, cooking hacks, and ingredient substitutions to elevate your cooking experience.</p>
            <h3>Embark on a Culinary Adventure</h3>
            <p>So, are you ready to embark on a culinary adventure? Let Recipe Recommender be your guide as you explore the wonderful world of cooking. Get ready to tantalize your taste buds and impress your family and friends with our delectable recipes.</p>
            <p>Would you like to discover more recipes and embark on a culinary journey with us? Let's dive in and unleash your inner chef!</p>
            <Link to="/recipe" className="btn btn-primary">See More Recipes</Link>
        </div>
       
        </div>
        </main>
    </div>
  )
}

export default Services;