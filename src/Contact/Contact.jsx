import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/mashup-logo.svg'
import './Contact.css'
import thankyou from '../assets/images/thankyou.webp';
function Contact() {
  const [result, setResult] = React.useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "04c635cb-059f-4084-a842-243082d078b7");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      setIsSubmitted(true);
      // document.getElementById("form").reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <div>
        <Header/>
      <main className="" id="main-collapse">
      {!isSubmitted?(
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
             <h3>Contact Us</h3>
             <p>Thank you for your interest in reaching out to us. Your feedback, inquiries, and suggestions are invaluable to us as we strive to improve and provide the best possible experience for our visitors and customers. Please feel free to connect with us using any of the contact methods below.</p>
           </div>
           <div className="section-container-spacer">
             
               <form action="" className="reveal-content" onSubmit={onSubmit}>
               <div className="row">
                 <div className="col-md-6">
                     <div className="form-group">
                     <input type="email" className="form-control" name='email' id="email" placeholder="Email"/>
                   </div>
                   <div className="form-group">
                     <input type="text" className="form-control" name='name' id="subject" placeholder="Name"/>
                   </div>
                   <div className="form-group">
                     <textarea name='message' className="form-control" rows="3" placeholder="Enter your message"></textarea>
                   </div>
                   <button type="submit" className="btn btn-primary btn-lg">Send</button>
                                   
                     <span>{result}</span>
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
                   <a target='_blank' href="https://www.linkedin.com/in/ome-venkata-nagarjuna?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" title="" className="fa-icon">
                     <i className="fa fa-linkedin"></i>
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
      ):(<section className="login-main-wrapper">
            <div className="main-container">
                <div className="login-process">
                    <div className="login-main-container">
                        <div className="thankyou-wrapper">
                            <img className='imgElement' src={thankyou} alt="thanks" />
                              <p>Thank you for taking the time to provide us with your valuable feedback. Your input helps us improve our services and ensure that we continue to meet your needs and preferences.. </p>
                                <a href="home" className="btn btn-primary" title="">Go Back</a>
                              <div className="clr"></div>
                          </div>
                          <div className="clr"></div>
                      </div>
                  </div>
                  <div className="clr"></div>
              </div>
          </section>)}
      </main>
    </div>
  )
}

export default Contact;