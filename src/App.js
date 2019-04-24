
import React, { Component } from 'react';
// import './App.css';

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
      <div>
        {/* <Header /> */}
        {/* <MapWithASearchBox /> */}
        {/* <Review/> */}
        {/* < Settings />  */}
        {/* <Login/> */}
        <Footer />
      </div>
    )
    {/*  <div>
        
         <Header/> *
              <Login/>

         < MainApp /> *
         <Review/> *
         <Footer/> 
      </div>*/}

  }
}

export default App;