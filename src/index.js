import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './component/login';
import Hotels from './component/hotels';


import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bnb-gallery/dist/style.css'
import { BrowserRouter } from "react-router-dom";
import { Route, Router } from "react-router-dom";
import Confirmation from './component/confirmation';


ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
        <Route exact path="/" component={App} />
        <Route exact path="/Hotels" component={Hotels} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/confirmation/:id" component={Confirmation} />
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
