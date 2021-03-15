import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App/App';
import Auth from './pages/Auth/Auth';

import { firebaseApp, providers } from './config/firebase.js';
const firebaseAppAuth = firebaseApp.auth();

// Without auth

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// With auth
firebaseAppAuth.onAuthStateChanged(function(user) {
  if (user) {
    user.getIdToken().then(function(accessToken) {
      ReactDOM.render(
        <React.StrictMode>
          <App user={user} token={accessToken} />
        </React.StrictMode>,
        document.getElementById('root')
      );
    });
  } else {
    ReactDOM.render(
      <React.StrictMode>
        <Auth />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
}, function(error) {
  console.log(error);
});
