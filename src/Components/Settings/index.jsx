import React, { Component } from 'react'
import './settings.css';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import MapWithASearchBox from '../MapWithASearchBox';

export class index extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <div className="back text-center p-4">
          {/* <img src="title-rest-easy.png" alt="title" class="title-image"></img> */}
              <div className="head col-sm-12 mt-3">
                <p className="h4 text-wrap text-center ">
                  <span id="title">
                    rest☆easy
                  </span>
                </p>
              </div>
          <br></br>
          <br></br>
          <img src="user-settings.png" alt="Logo" class="user-image rounded-circle border border-dark"></img>
          <br></br>
          <br></br>
        <Link className="home-button nav-item nav-link" to='/MapWithASearchBox'><button type="button" class="btn btn-secondary font-weight-bold text-body btn-lg btn-block">Home</button></Link>
        <Link className="home-button nav-item nav-link" to='#'><button type="button" class="btn btn-secondary font-weight-bold text-body btn-lg btn-block">About Us</button></Link>
        <Link className="home-button nav-item nav-link" to='/'><button type="button" class="btn btn-secondary font-weight-bold text-body btn-lg btn-block">Logout</button></Link>
        </div>
        {/* <Collapse in={this.state.open}>
          <div id="text-inline text-center example-collapse-text">
          Find the nearest restroom! Give a rating! <br></br>
          We are your guide to all things fit to sit on!
          </div>
        </Collapse> */}
        < Footer />
      </div >
    )
  }
}

export default index