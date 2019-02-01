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
      value: []
    };
  }

  onNumberHit = data => () => {
    //eslint-disable-next-line
    console.log('number hit ==== ', data);
    this.setState(prevState => ({
      value: [...prevState.value, data.toString()]
    }));
  };

  onOperatorHit = data => () => {
    //eslint-disable-next-line
    console.log('operator hit', data);
    this.setState(prevState => ({
      value: [...prevState.value, data.toString()]
    }));
  };

  onModifierHit = data => () => {
    //eslint-disable-next-line
    console.log('modifier hit', data);
    this.setState(prevState => ({
      value: [...prevState.value, data.toString()]
    }));
  };

  onEvaluate = () => {
    const { value } = this.state;
    const result = eval(value);
    console.log('=== it all equals === ', result);
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
            <OperatorBlock onChange={this.onOperatorHit} />
          </div>
          <div className="row">
            <ModifiersBlock
              onChange={this.onModifierHit}
              onEvaluate={this.onEvaluate}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
