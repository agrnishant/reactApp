import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import * as Sentry from '@sentry/browser';
Sentry.init({dsn: "https://5a675eb6cad741b8adbfc8f2f3de4f23@sentry.io/1785009"});

ReactDOM.render(
<BrowserRouter>
    <App /> 
</BrowserRouter>, document.getElementById('root')
);
serviceWorker.unregister();
