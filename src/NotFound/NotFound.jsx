import React from 'react'
import './NotFound.css'

function NotFound() {
  return (
    <div>
      <div className="flex-container">
        <div className="text-center">
          <h1>
            <span className="fade-in" id="digit1">
              4
            </span>
            <span className="fade-in" id="digit2">
              0
            </span>
            <span className="fade-in" id="digit3">
              4
            </span>
          </h1>
          <h3 className="fadeIn">PAGE NOT FOUND</h3>
          <a href="/" className="btn btn-primary" title="">
            Return To Home
          </a>
        </div>
      </div>
    </div>
  )
}

export default NotFound
