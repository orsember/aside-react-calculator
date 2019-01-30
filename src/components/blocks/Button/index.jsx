import React from 'react';
// Style
import './style.scss';

const Button = ({ displayValue, double }) => {
  return (
    <div
      className={`button button--square ${
        double ? 'button--double' : ''
      }`}
    >
      {displayValue}
    </div>
  );
};

export default Button;
