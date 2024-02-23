import React from 'react';

import logo from '../assets/images/mashup-logo.svg'
function NotFound() {
  return (
    <div>
      <div className="hidden-lg hidden-md hidden-xlg" style={{display:'flex',gridGap:"10px"}}>
          <a className="site-brand" title="">
            <img className="img-responsive site-logo" alt="" src={logo}/>
            FLAVOR-SAGE
          </a>
            <ul className="nav" style={{display:'contents'}}>
            <li><a href="./home" title="">Home</a></li>
            <li><a href="./about" title="">About</a></li>
            <li><a href="./services" title="">Services</a></li>
            <li><a href="./contact" title="">Contact</a></li>
          </ul>
        </div>
        <p>djdj</p>
    </div>
  );
}

export default NotFound;