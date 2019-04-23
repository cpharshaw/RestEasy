import React, { Component } from 'react'
import './settings.css';
import Header from '../Header';
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
        < Header />
        <div class="jumbotron jumbotron-fluid text-center p-4">
          <img src="title-rest-easy.png" alt="title" class="title-image"></img>
          <br></br>
          <br></br>
          <img src="user-settings.png" alt="Logo" class="user-image rounded-circle border border-dark"></img>
        </div>
        <Link className="home-button nav-item nav-link" to='/'><button type="button" class="btn btn-primary btn-lg btn-block">Home</button></Link>
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
          <div id="example-collapse-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </Collapse>
        < Footer />
      </div >
    )
  }
}

export default index
