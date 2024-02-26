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
import Popup from 'reactjs-popup';

function Home() {
  const [answers, setAnswers] = useState({});
  const [projects, setProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onFinish=(answers)=>{
    localStorage.setItem('answers', JSON.stringify(answers));
    setAnswers("")
    console.log(answers);
  }

  const handleNext = () => {
    if (!answers[currentIndex]) {
      alert("Please select an option before proceeding.");
      return;
    }
    if (currentIndex === questions.length - 1) {
      onFinish(answers);
    } else {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };

  const handleAnswerChange = (e) => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = e.target.value;
    setAnswers(newAnswers);
  };

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

  const questions = [
    {
      question: 'Do you have any specific food preferences ?',
      options: ['Vegetarian', 'Non-Vegetarian', 'Vegan']
    },
    {
      question: 'How spicy do you like your food?',
      options: ['Not spicy', 'Mild', 'Moderate', 'Spicy', 'Very spicy']
    },
    {
      question: 'How much time do you prefer to spend on cooking?',
      options: ['Less than 30 minutes', '30-60 minutes', 'More than 60 minutes']
    },
    {
      question: 'Are there any specific ingredients you want to include or avoid?',
      options: ['Yes', 'No']
    }
  ];

  return (
    <div className="carousel-container">
      <Header />
      <main className="" id="main-collapse">
        <div className="hero-full-wrapper">
        <div className="hidden-lg hidden-sm hidden-md hidden-xlg" style={{ display: 'flex',justifyContent:'space-between', gridGap: "10px" }}>
              <a className="site-brand" title="" href='/'>
                <img className="img-responsive site-logo" alt="" src={logo} />
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
          <div className="grid">
          <Popup 
              trigger={
                <button className='selectOption' style={{ fontSize: '17px', fontWeight: '500' }} >
                  {answers[0]}<span style={{paddingLeft:'15px'}}>↓</span>
                </button>
              }
              modal
              nested
              position="center"
              closeOnDocumentClick
              onOpen={() => setCurrentIndex(0)}
              contentStyle={{
                width:'auto',
                border: 'none',
                borderRadius: '10px',
                padding: '0px',
                height:'auto',
                boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                animation: 'fade-in 0.3s'
              }}
              overlayStyle={{
                background: 'rgba(0,0,0,0)',
                zIndex: 1000,
                animation: 'fade-in 0.3s'
              }}
            >
              {close => (
                <div className='divElementQuestion'>
                  <div className="questionnaire-container-ele">
                    <h1 className="question">{questions[currentIndex].question}</h1>
                    <select className="answer" value={answers[currentIndex] || ""} onChange={handleAnswerChange}>
                      <option value="" disabled hidden>Select an option</option>
                      {questions[currentIndex].options.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <a className="btn btn-primary" onClick={currentIndex === questions.length - 1 ? close : handleNext}  disabled={!answers[currentIndex]} title="">{currentIndex === questions.length - 1 ? 'Close' : 'Next'}</a>
                  </div>
                </div>
              )}
            </Popup>
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