import React, { Component } from 'react'
import './settings.css';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

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
        <div class="jumbotron jumbotron-fluid text-center p-4">
          <img src="title-rest-easy.png" alt="title" class="title-image"></img>
          <br></br>
          <br></br>
          <img src="user-settings.png" alt="Logo" class="user-image rounded-circle border border-dark"></img>
        </div>
        <Link className="home-button nav-item nav-link" to='/MapWithASearchBox'><button type="button" class="btn btn-secondary btn-lg btn-block">Home</button></Link>
        <Button
          onClick={() => this.setState({ open: !open })}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          variant="secondary"
          size="lg" block
          id="about-button"
        >
          About Us
        </Button>
        <Collapse in={this.state.open}>
          <div id="example-collapse-text text-center">
          Find the nearest restroom! Give a rating! <br></br>
          We are your guide to all things fit to sit on!
          </div>
        </Collapse>
        < Footer />
      </div >
    )
  }
}

export default index
