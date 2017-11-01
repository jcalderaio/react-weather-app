import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// Unwraps promises into data for us
import ReduxPromise from 'redux-promise';

// Middlewares we used was redux-promise. This was to handle a promise we received while using axios. It was helpful because automatically detected that we had a payload of a promise, it stopped that action, then waited for the promise to resolve. Once the promise resolved, it took the data coming back from the request, stuck it on the payload property, and sent the action to all the reducers in our application. It made it so we didn't have to think about the asynchronous nature of our code.

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
