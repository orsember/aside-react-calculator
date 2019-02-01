import React from 'react';
import PropTypes from 'prop-types';
// Style
import './style.scss';

const Display = ({ value }) => {
  return <div className="display">{value}</div>;
};

Display.propTypes = {
  value: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired
};

export default Display;
