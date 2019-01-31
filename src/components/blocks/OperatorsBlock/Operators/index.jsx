import React, { Fragment } from 'react';
// Constants
import operators from 'constants/operators';
// Style
import './style.scss';
// Conponents
import Button from '../../Button';

const OperatorBlock = () => {
  return (
    <div className="operator-block">
      {operators.map(op => {
        return (
          <Fragment key={op.id}>
            <Button displayValue={op.value} />
          </Fragment>
        );
      })}
    </div>
  );
};

export default OperatorBlock;
