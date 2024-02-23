import React from 'react';
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
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
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
