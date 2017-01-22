import React, { Component } from 'react';
import './style/App.css';

import StepperContainer from './components/StepperContainer'

export default class App extends Component {
  renderStepper() {
    return (
      <StepperContainer />
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
