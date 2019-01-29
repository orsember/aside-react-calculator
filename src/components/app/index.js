import React from 'react';
// Style
import './style.scss';
// Component
import Header from '../header';
import NumPad from '../calculator/numpad';

const App = () => {
  return (
    <div className="app__container">
      <Header />
      <div className="calculator__body">
        <NumPad />
      </div>
    </div>
  );
};

export default App;
