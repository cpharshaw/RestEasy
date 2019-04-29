import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import './footer.css';
import MapWithASearchBox from '../MapWithASearchBox';
import Settings from '../Settings';




export class index extends Component {
  render() {

    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;


    return (

      <Router>
        <footer className="footer container-fluid linkBar d-flex">

          <div className="row d-flex flex-nowrap allLinks">

            <div className="col-sm-2 offset-1 linkBox text-center">
              <Link className="" to='/MapWithASearchBox'>
                <div className="w-1000 h-1000">
                  <i className="fas fa-map fa-lg"></i>
                </div>
              </Link>
            </div>


            <div className="col-sm-2 text-center">
              <span id="footer-logo">
                r☆e
              </span>
            </div>


            <div className="col-sm-2  linkBox text-center">
              <Link className="" to='/Settings'>
                <div className="w-100 h-100">
                  <i className="fas fa-bars  fa-lg"></i>
                </div>
              </Link>
            </div>


          </div>
        </footer>
      </Router>
    )
  }
}

export default index;