import React from 'react';
import ReactDOM from 'react-dom';
import './static/fonts/Roboto/Roboto-Regular.ttf';
import './sass/global.scss';
import './index.scss';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);