import React from 'react';
import Header from '../Header/Header';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/mashup-logo.svg'

function Contact() {
  return (
    <div>
        <Header/>
        
<main className="" id="main-collapse">


<div className="row">
  <div className="col-xs-12">
    <div className="section-container-spacer">
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
      <h1>Contact Us</h1>
      <p>Thank you for your interest in reaching out to us. Your feedback, inquiries, and suggestions are invaluable to us as we strive to improve and provide the best possible experience for our visitors and customers. Please feel free to connect with us using any of the contact methods below.</p>
    </div>
    <div className="section-container-spacer">
       <form action="" className="reveal-content">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input type="email" className="form-control" id="email" placeholder="Email"/>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" id="subject" placeholder="Subject"/>
              </div>
              <div className="form-group">
                <textarea className="form-control" rows="3" placeholder="Enter your message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-lg">Send</button>
            </div>
            <div className="col-md-6">
              <ul className="list-unstyled address-container">
                <li>
                  <span className="fa-icon">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                  </span>
                  +91 9121627633
                </li>
                <li>
                  <span className="fa-icon">
                    <i className="fa fa-at" aria-hidden="true"></i>
                  </span>
                  omenagarjuna@gmail.com
                </li>
                <li>
                  <span className="fa-icon">
                    <i className="fa fa fa-map-marker" aria-hidden="true"></i>
                  </span>
                  India
                </li>
              </ul>
              <h3>Follow me on social networks</h3>
              <a href="https://www.linkedin.com/" title="" className="fa-icon">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/" title="" className="fa-icon">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="https://dribbble.com/" title="" className="fa-icon">
                <i className="fa fa-dribbble"></i>
              </a>
            </div>
          </div>
        </form>
    </div>
  </div>
</div>


</main>

    </div>
  )
}

export default Contact;