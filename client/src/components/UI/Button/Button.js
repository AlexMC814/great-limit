import React from 'react';
import './Button.scss';

const Button = ({ classes, text, action }) => {
  return (
    <button className={`btn ${classes}`} clicked={action}>
      {text}
    </button>
  );
};

export default Button;
