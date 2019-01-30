import React from 'react';
// Style
import './style.scss';
// Component
import Header from '../header';
import NumberBlock from '../blocks/NumberBlock';
// import OperatorBlock from '../blocks/Operators';

const App = () => {
  return (
    <div className="app__container">
      <Header />
      <div className="calculator__body">
        <NumberBlock />
      </div>
    </div>
  );
};

export default App;
