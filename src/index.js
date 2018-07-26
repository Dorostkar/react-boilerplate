import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App'
import Routes from './routes';


import "./styles/styles.css"; //webpack can import css files too!.
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";



render(
    <BrowserRouter><Routes/></BrowserRouter>,
    document.getElementById('app')
);