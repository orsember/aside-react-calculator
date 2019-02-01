import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// Constants
import operators from 'constants/operators';
// Style
import './style.scss';
// Conponents
import Button from '../../Button';

const OperatorBlock = ({ onChange }) => {
  return (
    <div className="operator-block">
      {operators.map(op => {
        return (
          <Fragment key={op.id}>
            <Button displayValue={op.value} onChange={onChange} />
          </Fragment>
        );
      })}
    </div>
  );
};

OperatorBlock.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default OperatorBlock;
