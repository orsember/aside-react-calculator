import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// Constants
import modifiers from 'constants/modifiers';
// Style
import './style.scss';
// Component
import Button from '../../Button';

const ModifierBlock = ({ onChange, onEvaluate }) => {
  // return (
  //   <div className="modifiers-block">
  //     {modifiers.map(mod => {
  //       const double = mod.value === '=' ? true : false;
  //       return (
  //         <Fragment key={mod.id}>
  //           <Button
  //             displayValue={mod.value}
  //             double={double}
  //             onChange={onChange}
  //           />
  //         </Fragment>
  //       );
  //     })}
  //   </div>
  // );

  return (
    <div className="modifiers-block">
      {modifiers.reduce((acc, item) => {
        const isEqual = item.value === '=' ? true : false;
      }, {})}
    </div>
  );
};

ModifierBlock.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default ModifierBlock;
