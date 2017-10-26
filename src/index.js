import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// Unwraps promises into data for us
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

// Middleware can manipulate action creators before they are applied to reducers
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.querySelector('.container')
);
