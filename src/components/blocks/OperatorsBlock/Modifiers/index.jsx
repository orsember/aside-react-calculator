import React, { Fragment } from 'react';
// Constants
import modifiers from 'constants/modifiers';
// Style
import './style.scss';
// Component
import Button from '../../Button';

const ModifierBlock = () => {
  return (
    <div className="modifiers-block">
      {modifiers.map(mod => {
        const double = mod.value === '=' ? true : false;
        return (
          <Fragment key={mod.id}>
            <Button displayValue={mod.value} double={double} />
          </Fragment>
        );
      })}
    </div>
  );
};

export default ModifierBlock;
