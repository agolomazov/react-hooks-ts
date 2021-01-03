import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './main.css';

import { App } from './App';
import { store } from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App title="TodoApp" />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
