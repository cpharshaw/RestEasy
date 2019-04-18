
import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login'
import Review from './Components/Review'
import Map from './Components/Map'

class App extends Component {
  render() {

    return (
      <div>
        < Login />
        < br />
        < Map />
      </div>
    )
  }
}

export default App;