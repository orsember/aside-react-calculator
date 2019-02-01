import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// Constants
import numbers from 'constants/numbers';
// Components
import Button from '../Button';
// Style
import './style.scss';

const NumberBlock = ({ onChange }) => {
  return (
    <div className="number-block">
      {numbers.map(number => (
        <Fragment key={number.id}>
          <Button displayValue={number.value} onChange={onChange} />
        </Fragment>
      ))}
      <Button displayValue="0" double onChange={onChange} />
      <Button displayValue="." onChange={onChange} />
    </div>
  );
};

NumberBlock.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default NumberBlock;
