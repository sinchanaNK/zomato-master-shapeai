import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import "./index.css";
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>0
  </React.StrictMode>,
  document.getElementById('root')
);

