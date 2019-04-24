
import React, { Component } from 'react';
// import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import Login from './Components/Login';
import Header from './Components/Header';
import MapWithASearchBox from './Components/MapWithASearchBox';
import Review from './Components/Review';
import Footer from './Components/Footer';
import Settings from './Components/Settings'
import Button from 'react-bootstrap/Button';




class App extends Component {
  render() {
    return (
      <Router>
        <div>
          < Login />
          <Route exact path="/" component={Login} />
          <Route exact path="/MapWithASearchBox" component={MapWithASearchBox} />
          <Route exact path="/Settings" component={Settings} />
        </div>
      </Router>
    )
  }
}

export default App;