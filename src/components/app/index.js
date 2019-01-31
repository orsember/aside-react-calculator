import React from 'react';
// Style
import './style.scss';
// Component
// import Header from '../header';
import NumberBlock from '../blocks/NumberBlock';
import OperatorBlock from '../blocks/OperatorsBlock/Operators';
import ModifiersBlock from '../blocks/OperatorsBlock/Modifiers';
import Display from '../blocks/Display';

const App = () => {
  return (
    <div className="app__container">
      {/* <div className="row"><Header /></div> */}
      <div className="calculator__body">
        <div className="row">
          <Display />
        </div>
        <div className="row">
          <NumberBlock />
          <OperatorBlock />
        </div>
        <div className="row">
          <ModifiersBlock />
        </div>
      </div>
    </div>
  );
};

export default App;
