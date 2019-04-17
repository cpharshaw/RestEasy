import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Map from "./components/Map";

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class App extends Component {
  render() {

    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;

    // const map = new google.maps.Map(document.getElementById('map'),
    //   {
    //     center: { lat: -34.397, lng: 150.644 },
    //     zoom: 8
    //   }
    // );

    return (
      <div id="App" className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {
            user
              ? <p>Hello, {user.displayName}</p>
              : <p>Please sign in.</p>
          }
          {
            user
              ? <button onClick={signOut}>Sign out</button>
              : <button onClick={signInWithGoogle}>Sign in with Google</button>
          }
        </header>
        <Map/>
      </div>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);