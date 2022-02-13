import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { AppStore } from './App';
import { Provider } from 'react-redux';
import store from './Store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppStore />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
