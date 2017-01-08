import React, { Component } from 'react';
import './style/App.css';

import {steps} from './steps'
import StepperContainer from './components/StepperContainer'

class App extends Component {
  renderStepper() {
    return (
      <StepperContainer {...{steps}} />
    )
  }

  render() {
    return (
      <div>
        <div className="background"></div>
        <div className="App">
          {this.renderStepper()}
        </div>
      </div>
    );
  }
}

export default App;
