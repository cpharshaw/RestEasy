import React, { Component } from 'react'
import './settings.css';
import Footer from '../Footer';
// import $ from 'jquery';
// import Button from 'react-bootstrap/Button';
// import Collapse from 'react-bootstrap/Collapse';
import MapWithASearchBox from '../MapWithASearchBox';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';


export class Settings extends Component {


  render(props) {

    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;

    return (
      <div className="background">

      {console.log(this.props)}

        <div className="back text-center p-4">
          <div className="head col-sm-12 mt-3">
            <p className="h4 text-wrap text-center ">
              <span id="title">
                rest☆easy
              </span>
            </p>
          </div>

          <img src="./user-settings.png" alt="Logo" className="user-image rounded-circle border border-dark"></img>

          <br />
          <br />
          <p className="text-center">{this.props.user.displayName}</p>
          <br />

          <Link className="home-button nav-item nav-link" to='/MapWithASearchBox'><button type="button" className="btn btn-secondary font-weight-bold text-body btn-lg btn-block">Back to Map</button></Link>
          <Link className="home-button nav-item nav-link" to='/'><button type="button" className="btn btn-secondary font-weight-bold text-body btn-lg btn-block" onClick={this.props.signOut}>Logout</button></Link>


        </div >
      </div>
    )
  }
}

export default Settings;

{/* constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }*/}