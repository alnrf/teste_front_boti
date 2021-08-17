import React from 'react'
import './Button.css'

function Button({ text, action }) {
  return (
    <div className="button">
      <div className="button__container">
        <div className="button__component" onClick={() => action}>
          <span className="button__text">{text.toUpperCase()}</span>
        </div>
      </div>
    </div>
  )
}

export default Button
