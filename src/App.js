
import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login';
import Review from './Components/Review';
import Map from './Components/Map';
import Header from './Components/Header';
import Footer from './Components/Footer';

class App extends Component {
  render() {

    return (
      <div>
        < Header />
        < Map />
        < Footer />
        {/* < br /> */}
        {/* < Map /> */}
      </div>
    )
  }
}

export default App;