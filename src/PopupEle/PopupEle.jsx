import React, { useEffect, useState } from 'react';
import load from '../assets/images/download.webp';
import Popup from 'reactjs-popup';
import Markdown from 'markdown-to-jsx';
import { GoogleGenerativeAI } from "@google/generative-ai";
function PopupEle(props){
  let project = props.project;
  const [Text, setText] = useState('');
  const [answers, setAnswers] = useState({});
  const genAI = new GoogleGenerativeAI('AIzaSyBrh9QFesjZ7CCDcskiQGmNOEV-A4llSA0');

  useEffect(() => {
    const storedAnswers = localStorage.getItem('answers');
    if (storedAnswers) {
      setAnswers(JSON.parse(storedAnswers));
    }
    console.log(storedAnswers)
  }, []);

  async function run() {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro"});
      let promt = '';
      if (answers[3]==='Yes'){
        promt = 'Generate a receipe of '+project.title+". Please make in " + answers[2]+" With spiciness of "+answers[1]+" And extra ingredients "+" Frame that answer in a table with starting ingredients then instruction";
      }
      else{
        promt = 'Generate a receipe of '+project.title+". Please make in " + answers[2]+" With spiciness of "+answers[1]+" Frame that answer in a table with starting ingredients then instruction";
      }
      console.log(promt)
      const result = await model.generateContent(promt);
      console.log(result)
      const response = await result.response;
      const text = response.text();
      setText(text)
    } catch (error) {
      console.error("Error occurred:", error);
    }
  }

  function onHandle(){
    console.log("clicked")
    setText('')
    run()
  }

    return(
        <div className="grid-item">
                <img
                  className="img-responsive"
                  alt=""
                  src={project.img} />
                <Popup 
                  trigger={<a className="project-description">
                    <div className="project-text-holder" onClick={onHandle}>
                      <div>
                        <h3>{project.title}</h3>
                        <button className="btn btn-primary">Discover more</button>
                      </div>
                    </div>
                  </a>}
                  modal
                  nested
                  position="center"
                  closeOnDocumentClick
                  contentStyle={{
                    width: '80%',
                    border: 'none',
                    borderRadius: '10px',
                    padding: '20px',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                    animation: 'fade-in 0.3s'
                  }}
                  overlayStyle={{
                    background: 'rgba(0,0,0,0.5)',
                    zIndex: 1000,
                    animation: 'fade-in 0.3s'
                  }}
                >
                  {close => (
                    <div>
                      <h3>{project.title}</h3>
                      {Text.length === 0 ? (
                          <div id='loader' style={{ display:'flex',justifyContent: 'center' }}>
                            <img className='imgEle' style={{ height: '5rem' }} src={load} />
                          </div>
                        ) : null}
                      <Markdown>{Text}</Markdown>
                      <button className="btn btn-primary" onClick={close}>Close</button>
                    </div>
                  )}
                </Popup>
              </div>
    )
}

export default PopupEle;