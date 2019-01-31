import React, { Fragment } from 'react';
// Constants
import numbers from 'constants/numbers';
// Components
import Button from '../Button';
// Style
import './style.scss';

const NumberBlock = () => {
  return (
    <div className="number-block">
      {numbers.map(number => (
        <Fragment key={number.id}>
          <Button displayValue={number.value} />
        </Fragment>
      ))}
      <Button displayValue="0" double />
      <Button displayValue="." />
    </div>
  );
};

export default NumberBlock;
