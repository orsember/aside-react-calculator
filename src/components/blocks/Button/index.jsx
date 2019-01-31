import React from 'react';
// Style
import './style.scss';

const Button = ({ displayValue, double, onNumberHit }) => {
  return (
    <button
      type="button"
      onChange={onNumberHit()}
      className={`button button--square ${
        double ? 'button--double' : ''
      }`}
      // eslint-disable-next-line
      dangerouslySetInnerHTML={{ __html: displayValue }}
    />
  );
};

export default Button;
