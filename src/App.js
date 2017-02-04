import React, { Component } from 'react';
import './style/App.css';

import StepperContainer from './components/StepperContainer'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="background"></div>
        <div className="App">
          <StepperContainer />
        </div>
      </div>
    );
  }
}
