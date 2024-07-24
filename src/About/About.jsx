import React from 'react'
import Header from '../Header/Header'
import img10 from '../assets/images/dcc6d4ea22c553ae169e6637c085e389.jpg'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/mashup-logo.svg'

function About() {
  return (
    <div>
      <Header />
      <main className="" id="main-collapse">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div
              className="hidden-lg hidden-sm hidden-md hidden-xlg"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gridGap: '10px',
              }}
            >
              <a className="site-brand" title="" href="/">
                <img className="img-responsive site-logo" alt="" src={logo} />
                FLAVOR-SAGE
              </a>
              <div style={{ display: 'contents' }}>
                <nav className="navEle">
                  <NavLink className="link" to="/" title="">
                    Home
                  </NavLink>
                  <NavLink className="link" to="/about" title="">
                    About
                  </NavLink>
                  <NavLink className="link" to="/services" title="">
                    Services
                  </NavLink>
                  <NavLink className="link" to="/contact" title="">
                    Contact
                  </NavLink>
                </nav>
              </div>
            </div>
            <img className="img-responsive" alt="" src={img10} />
          </div>
          <div className="col-xs-12 col-md-6">
            <h3>About Our Flavor Sage</h3>

            <p>
              Welcome to our Recipe Recommender, your go-to source for finding
              delicious recipes tailored to your preferences. Our mission is to
              simplify cooking and inspire you to explore new flavors and
              ingredients.
            </p>

            <h3>How It Works</h3>

            <p>
              Our recipe recommender uses a combination of user input and
              machine learning algorithms to suggest recipes that match your
              tastes and preferences. When you first use our service, you'll be
              asked a series of questions about your favorite cuisines, dietary
              restrictions, cooking time, and more. Based on your answers, we'll
              curate a list of recipes tailored just for you.
            </p>

            <h3>Features</h3>
            <ul>
              <li>
                Personalized Recommendations: Our algorithm learns from your
                feedback and adapts to your tastes over time, ensuring that you
                always receive relevant recipe suggestions.
              </li>
              <li>
                Interactive Questionnaire: Our questionnaire is designed to be
                engaging and informative, helping us understand your food
                preferences in detail.
              </li>
              <li>
                Explore New Cuisines: Whether you're looking to try something
                new or stick to familiar flavors, our platform offers a wide
                range of recipes from various cuisines around the world.
              </li>
              <li>
                Save and Organize: Save your favorite recipes, create shopping
                lists, and organize your cooking adventures with ease.
              </li>
            </ul>
            <h3>Join Us on Our Culinary Journey</h3>
            <p>
              We invite you to join us on this culinary journey. Whether you're
              a seasoned chef or just starting in the kitchen, our Recipe
              Recommender is here to guide you every step of the way. Start
              exploring our collection of recipes today and discover a world of
              flavors at your fingertips.
            </p>

            <a href="services" className="btn btn-primary" title="">
              {' '}
              Explore new more Recipes
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default About
