
import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login';
import Review from './Components/Review';
import Map from './Components/Map';
import CraigHeader from './Components/CraigHeader';
import CraigFooter from './Components/CraigFooter';


class App extends Component {
  render() {

    return (
      <div>
        < CraigHeader />
        < Map />
        < CraigFooter />
        {/* < br /> */}
        {/* < Map /> */}
      </div>
    )
  }
}

export default App;