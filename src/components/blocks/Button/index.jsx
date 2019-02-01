import React from 'react';
import PropTypes from 'prop-types';
// Style
import './style.scss';

const Button = ({ displayValue, double, onChange }) => {
  return (
    <button
      type="button"
      onClick={onChange(displayValue)}
      className={`button button--square ${
        double ? 'button--double' : ''
      }`}
      // eslint-disable-next-line
      dangerouslySetInnerHTML={{ __html: displayValue }}
    />
  );
};

Button.propTypes = {
  displayValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  double: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};
Button.defaultProps = {
  double: false
};

export default Button;
