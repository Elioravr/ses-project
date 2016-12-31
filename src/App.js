import React, { Component } from 'react';
import './style/App.css';

import Welcome from './components/Welcome';

class App extends Component {
  render() {
    return (
      <div>
        <div className="background"></div>
        <div className="App">
          <Welcome />
        </div>
      </div>
    );
  }
}

export default App;
