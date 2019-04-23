
import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login';
import Review from './Components/Review';
import Map from './Components/Map';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Settings from './Components/Settings'
import Button from 'react-bootstrap/Button';
// import Search from './Components/Search';




class App extends Component {
  render() {

    return (
      <div>
        {/* < Settings /> */}
        < Header />
        < Map />
        < Footer />
        {/* < Search /> */}

        
      </div>
    )
  }
}

export default App;