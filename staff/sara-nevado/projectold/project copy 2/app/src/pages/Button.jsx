import React from 'react';

const Button = ({ onClick, className, text }) => (
  <button onClick={onClick} className={`p-1 rounded text-white ${className}`}>
    {text}
  </button>
);

export default Button;


