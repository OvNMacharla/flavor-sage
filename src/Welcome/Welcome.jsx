import React from 'react';
import './Welcome.css';
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();

  const navigateToNextPage = () => {
    navigate('/questionnaire');
  };
  return (
      <div className='divEle'>
              <h1 className='headEle'><span className='welEle'>WELCOME</span><br/> to FLAVOR-SAGE</h1>
              <p className='paraEle'>
                Discover a world of culinary delights tailored just for you. Whether you're a cooking enthusiast or simply looking for new flavours to 
                savour, our smat recipe recommender is here to guide you on a personalized culinary journey.
              </p>  

            
          <a onClick={navigateToNextPage} className="btn btn-primary" title="">GET STARTED</a>
          
          </div>
   
  );
}

export default Welcome;