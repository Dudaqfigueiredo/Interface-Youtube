import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@material-ui/core'; //Colocando o css sem nada
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

