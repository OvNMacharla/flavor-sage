import React, { useEffect, useState } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'
import Header from '../Header/Header'
import img12 from '../assets/images/chef-cook-vegetables-wallpaper-preview.jpg'
import Markdown from 'markdown-to-jsx'
import load from '../assets/images/download.webp'
import logo from '../assets/images/mashup-logo.svg'
import { NavLink } from 'react-router-dom'
function Recipe() {
  const [Text, setText] = useState('')
  const [answers, setAnswers] = useState({})
  const genAI = new GoogleGenerativeAI(
    'AIzaSyBrh9QFesjZ7CCDcskiQGmNOEV-A4llSA0',
  )

  useEffect(() => {
    const storedAnswers = localStorage.getItem('answers')
    if (storedAnswers) {
      setAnswers(JSON.parse(storedAnswers))
    }
    if (!Text.length > 0) {
      run()
    }
  }, [])

  async function run() {
    try {
      document.getElementById('loader').style.display = 'flex'
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' })
      let promt = ' '
      if (answers[3] === 'Yes') {
        promt =
          'I am a ' +
          answers[0] +
          '. Generate a recipe with spieciness of ' +
          answers[1] +
          ' And extra ingredients' +
          +' Within ' +
          answers[2] +
          ' Frame that answer in a table with starting ingredients then instruction'
      } else {
        promt =
          'I am a ' +
          answers[0] +
          '. Generate a recipe with spieciness of ' +
          answers[1] +
          ' Within ' +
          answers[2] +
          ' Frame that answer in a table with starting ingredients then instruction'
      }
      const result = await model.generateContent(promt)
      const response = await result.response
      const text = response.text()
      setText(text)
      document.getElementById('loader').style.display = 'none'
    } catch (error) {
      console.error('Error occurred:', error)
    }
  }

  function generateNew() {
    run()
    setText('')
  }

  return (
    <div>
      <Header />
      <main className="" id="main-collapse">
        <div className="row">
          <div className="col-xs-12 col-md-8">
            <div className="section-container-spacer">
              <div
                className="hidden-lg hidden-sm hidden-md hidden-xlg"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gridGap: '10px',
                }}
              >
                <a className="site-brand" title="">
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
              <h3>Recipe Procedure</h3>
              <p>
                These fluffy and delicious waffles are perfect for a weekend
                breakfast or brunch. Made with simple ingredients and cooked
                until golden brown, they are sure to be a hit with the whole
                family.
              </p>
            </div>
            <div className="section-container-spacer">
              <p>
                <img className="img-responsive" alt="" src={img12} />
              </p>
            </div>
            <div
              id="loader"
              style={{ justifyContent: 'center', height: '5rem' }}
            >
              <img className="imgEle" src={load} />
            </div>
            <Markdown>{Text}</Markdown>
          </div>
        </div>
        <a
          onClick={generateNew}
          style={{ marginTop: '10px' }}
          className="btn btn-primary"
          title=""
        >
          Generate new recipe
        </a>
      </main>
    </div>
  )
}

export default Recipe
