import React from 'react'
import './Button.css'

function Button({ text }) {
  return (
    <div className="button">
      <div className="button__container">
        <div className="button__component">
          <span className="button__text">{text.toUpperCase()}</span>
        </div>
      </div>
    </div>
  )
}

export default Button
