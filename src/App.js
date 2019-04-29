import React, { Component } from 'react';
// import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import Login from './Components/Login';
import MainApp from './Components/MainApp';
import MapWithASearchBox from './Components/MapWithASearchBox';
import Review from './Components/Review';
import Footer from './Components/Footer';
import Settings from './Components/Settings'
import Button from 'react-bootstrap/Button';

import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

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

    return (

      <div className="App">
        <header className="App-header">
          {
            user
              ? < MainApp 
                  signInWithGoogle={this.props.signInWithGoogle}
                  signOut={this.props.signOut}
                  user={this.props.user}
                />
              : < Login 
                  signInWithGoogle={this.props.signInWithGoogle}
                  signOut={this.props.signOut}
                  user={this.props.user}
                />
          }
        </header>
      </div>

    )
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(App);


