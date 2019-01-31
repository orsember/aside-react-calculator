import React from 'react';
// Style
import './style.scss';

const Button = ({ displayValue, double }) => {
  return (
    <button
      type="button"
      className={`button button--square ${
        double ? 'button--double' : ''
      }`}
      // eslint-disable-next-line
      dangerouslySetInnerHTML={{ __html: displayValue }}
    />
  );
};

export default Button;
