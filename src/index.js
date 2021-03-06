import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {IntlProvider} from 'react-intl';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import stepReducer from 'store/reducers/stepReducer'
import App from './App';
import './index.scss';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const store = createStore(stepReducer)

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <IntlProvider locale="en">
        <App />
      </IntlProvider>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
