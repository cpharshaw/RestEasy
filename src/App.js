
import React, { Component } from 'react';
// import './App.css';

import Login from './Components/Login';
import Review from './Components/Review';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MapWithASearchBox from './Components/MapWithASearchBox';
import Settings from './Components/Settings'
import Button from 'react-bootstrap/Button';




class App extends Component {
  render() {

    return (
      <div>
        {/* < Settings /> */}
        < Header />
        < Map />
        < Footer />
        
      </div>
    )
  }
}

export default App;