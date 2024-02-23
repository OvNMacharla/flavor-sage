import React, { useEffect, useState } from 'react';
import './Home.css';
import 'reactjs-popup/dist/index.css';
import Header from '../Header/Header';
import logo from '../assets/images/mashup-logo.svg'
import veg1 from '../assets/images/VeggiePastaPrimavera_vegetarain1.jpg';
import veg2 from '../assets/images/QuinoaandBlackBeanTacos_vegrtrain2.jpg';
import veg3 from '../assets/images/MushroomRisotto_vegetarain3.webp';
import vegan1 from '../assets/images/VeganPadThai_vegan1.jpg';
import vegan2 from '../assets/images/QuinoaStuffedBellPeppers_vegan2.jpg';
import vegan3 from '../assets/images/LentilSoup_vegan3.jpg';
import non1 from '../assets/images/ChickenCurry_non1.jpg';
import non2 from '../assets/images/Prawn_Curry_non2.webp';
import non3 from '../assets/images/FishCurry_non3.jpg';
import { NavLink } from 'react-router-dom';
import PopupEle from '../PopupEle/PopupEle';

function Home() {
  const [answers, setAnswers] = useState({});
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const storedAnswers = localStorage.getItem('answers');
    if (storedAnswers) {
      setAnswers(JSON.parse(storedAnswers));
    }
  }, []);

  useEffect(() => {
    if (answers[0] === "Vegetarian") {
      setProjects([
        { img: veg1, title: 'Veggie Pasta Primavera' },
        { img: veg2, title: 'Quinoa and Black Bean Tacos' },
        { img: veg3, title: 'Mushroom Risotto' },
      ]);
    } else if (answers[0] === 'Vegan') {
      setProjects([
        { img: vegan1, title: 'Vegan Pad Thai' },
        { img: vegan2, title: 'Quinoa Stuffed Bell Peppers' },
        { img: vegan3, title: 'Lentil Soup' },
      ]);
    } else if (answers[0] === 'Non-Vegetarian') {
      setProjects([
        { img: non1, title: 'Chicken Curry' },
        { img: non2, title: 'Prawn Curry' },
        { img: non3, title: 'Fish Curry' },
      ]);
    }
  }, [answers]);

  return (
    <div className="carousel-container">
      <Header />
      <main className="" id="main-collapse">
        <div className="hero-full-wrapper">
        <div className="hidden-lg hidden-sm hidden-md hidden-xlg" style={{ display: 'flex',justifyContent:'space-between', gridGap: "10px" }}>
              <a className="site-brand" title="">
                <img className="img-responsive site-logo" alt="" src={logo} />
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
          <div className="grid">
            
            <h1 style={{ fontSize: '17px', fontWeight: '500' }}>
              Explore a curated selection of delicious recipes handpicked just for you. Whether you're looking for a quick weeknight meal or a special dish for a celebration, we've got you covered. Discover new flavors and cooking inspiration with our personalized recipe recommendations
            </h1>
            <div className='imageDivEle'>
              { projects.map((project, index) => (
              <PopupEle key={index} project={project} />
            ))}
            </div>
            
            <h4 style={{ fontSize: '17px', fontWeight: '500' }}>
              Ready for more culinary inspiration? Simply ask to see more delicious recipes and unlock a world of flavors waiting to be explored. Your next great meal is just a click away
            </h4>
          </div>
          <a href="services" className="btn btn-primary" title=""> Explore new Recipes</a>
        </div>
      </main>
    </div>
  );
}

export default Home;