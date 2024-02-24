import React, { useState } from 'react';
import './Questionnaire.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';

const questions = [
  {
    question: 'Do you have any specific food preferences or things you can\'t eat?',
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

const Questionnaire = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  const onFinish=(answers)=>{
    localStorage.setItem('answers', JSON.stringify(answers));
    console.log(answers);
    navigate('/');
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

  return (
    <div className='divEleQuestion'>
      <div className="questionnaire-container">
      <h1 className="question">{questions[currentIndex].question}</h1>
      <select className="answer" value={answers[currentIndex] || ""} onChange={handleAnswerChange}>
        <option value="" disabled hidden>Select an option</option>
        {questions[currentIndex].options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <a className="btn btn-primary" onClick={handleNext}  disabled={!answers[currentIndex]} title="">{currentIndex === questions.length - 1 ? 'Finish' : 'Next'}</a>
    </div>
    </div>
  );
};

export default Questionnaire;
