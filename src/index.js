import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './containers/main/main.js/index.js';
import * as serviceWorker from './serviceWorker';
// import Header from './containers/header/header.js';
import Main from './containers/main/main.js';
import Footer from './containers/loadingScreen/loadingScreen.js';

// ReactDOM.render(<App />, document.getElementById('body'));
// ReactDOM.render(<Header />, document.getElementById('main'));
ReactDOM.render(<Main />, document.getElementById('main'));
ReactDOM.render(<Footer />, document.getElementById('loadingScreen'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
