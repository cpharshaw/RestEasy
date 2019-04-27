
import React, { Component } from 'react';
// import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import Login from './Components/Login';
import MapWithASearchBox from './Components/MapWithASearchBox';
import Review from './Components/Review';
import Footer from './Components/Footer';
import Settings from './Components/Settings'
import Button from 'react-bootstrap/Button';

import {
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";


class App extends Component {
  render() {
    return (
      <Router>
          {/* < MapWithASearchBox isMarkerShown/> */}
          {/* < Login /> */}
          <Route exact path="/" component={Login} />
          <Route exact path="/MapWithASearchBox" component={MapWithASearchBox} />
          <Route exact path="/Settings" component={Settings} />
          {/* < Footer /> */}
      </Router>
    )
  }
}

export default App;