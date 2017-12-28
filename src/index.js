import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBe5WN1ki8OqmUDOi0zpZx6MNEiicPYjL4",
    authDomain: "react-tuitorial.firebaseapp.com",
    databaseURL: "https://react-tuitorial.firebaseio.com",
    projectId: "react-tuitorial",
    storageBucket: "",
    messagingSenderId: "567028021384"
  };
  firebase.initializeApp(config);


ReactDOM.render(
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
, document.getElementById('root'));
registerServiceWorker();
