import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'core-js';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import Reducer from './_reducers';
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import HandleError from './_errors/error';

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  ReduxThunk
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(Reducer)}>
    <BrowserRouter>
      <App />
      <HandleError />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
