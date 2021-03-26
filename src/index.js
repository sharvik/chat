import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './store';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7oOBkaHN0Ytq9Ys0_bDmYw5KUZ_KCtHk",
    authDomain: "messanger-9fe8b.firebaseapp.com",
    databaseURL: "https://messanger-9fe8b-default-rtdb.firebaseio.com",
    projectId: "messanger-9fe8b",
    storageBucket: "messanger-9fe8b.appspot.com",
    messagingSenderId: "1039147598603",
    appId: "1:1039147598603:web:0e947c60ca6c1a0635d80e",
    measurementId: "G-2F84K2YX95"
};


firebase.initializeApp(firebaseConfig);

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
