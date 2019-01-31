import React, { Component } from 'react';
// Style
import './style.scss';
// Component
// import Header from '../header';
import NumberBlock from '../blocks/NumberBlock';
import OperatorBlock from '../blocks/OperatorsBlock/Operators';
import ModifiersBlock from '../blocks/OperatorsBlock/Modifiers';
import Display from '../blocks/Display';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: '0'
    };
  }

  onNumberHit = () => {
    //eslint-disable-next-line
    console.log('numberhit');
  };

  render() {
    const { value } = this.state;
    return (
      <div className="app__container">
        {/* <div className="row"><Header /></div> */}
        <div className="calculator__body">
          <div className="row">
            <Display value={value} />
          </div>
          <div className="row">
            <NumberBlock onChange={this.onNumberHit} />
            <OperatorBlock />
          </div>
          <div className="row">
            <ModifiersBlock />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
