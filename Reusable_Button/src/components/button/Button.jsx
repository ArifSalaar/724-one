// src/components/Button.js
import React from 'react';
import './button.css';

const Button = ({ title, onClick, style }) => {
  return (
    <button className="custom-button" onClick={onClick} style={style}>
      {title}
    </button>
  );
};

export default Button;
