import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import Welcome from './Welcome/Welcome';
import About from './About/About';
import Contact from './Contact/Contact';
import Services from './Services/Services';
import Questionnaire from './Questionnaire/Questionnaire';
import Recipe from './Recipe/Recipe';

function AppRouter() {
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    const storedAnswers = localStorage.getItem('answers');
    if (storedAnswers) {
      setAnswers(JSON.parse(storedAnswers));
    }
  }, []);
  
  return (
    <Router>
      <Routes>
        {answers ? (<Route path="/" element={<Home />} /> ): (<Route path="/" element={<Welcome />} />)}
        {/* <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} /> */}
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/questionnaire" element={<Questionnaire/>} />
        <Route path="/recipe" element={<Recipe/>} />
        <Route path="*" element={<NotFound />} /> {/* Not Found route */}
      </Routes>
    </Router>
  );
}

export default AppRouter;
