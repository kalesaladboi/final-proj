import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './reducers';
import App from './App';
<<<<<<< HEAD
import './index.css';

const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));
=======
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
>>>>>>> 1ee8a78abe5311fa73a6993ac587b96c10748fc8

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
