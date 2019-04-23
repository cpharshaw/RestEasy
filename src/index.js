import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './Components/Login';
import Review from './Components/Review';
import Settings from './Components/Settings'
import Map from './Components/Map';
import Header from './Components/Header';
import Footer from './Components/Footer';
// import Search from './Components/Search';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/map" component={Map} />
        <Route exact path="/footer" component={Footer} />
        <Route exact path="/settings" component={Settings} />
      </div>
    </Router>
  )


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


