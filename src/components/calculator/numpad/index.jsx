import React from 'react';
// Constants
import numbers from 'constants/numbers';
// Components
import Button from '../buttons';
// Style
import './style.scss';

const NumPad = () => {
  return (
    <div className="numpad numpad__container">
      {numbers.reverse().map(number => (
        <div key={number.id}>
          <Button displayValue={number.value} />
        </div>
      ))}
    </div>
  );
};

export default NumPad;
