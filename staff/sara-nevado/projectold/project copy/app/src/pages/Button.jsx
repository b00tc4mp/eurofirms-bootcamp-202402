import React from 'react'

function Button({ onClick, className, text }) {
  return (
    <button 
      onClick={onClick} 
      className={`${className} text-white font-bold py-1 px-2 rounded shadow text-xs`}
    >
      {text}
    </button>
  )
}

export default Button


