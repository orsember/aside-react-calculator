import React from 'react';
// Style
import './style.scss';

const Button = ({ displayValue }) => {
  return <div className="button button--square">{displayValue}</div>;
};

export default Button;
