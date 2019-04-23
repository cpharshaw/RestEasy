import React, { Component } from 'react';
import './login.css';
import './video.css';
import video from './people.mp4';


class Login extends Component {

  state = {};

  render() {

    return (




      <div className="container login-body d-flex justify-content-center align-content-center">

        <video autoPlay muted loop id="myVideo">
          <source src={video} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>


        <div className="row headline-box">
          <div className="col-sm-12 d-flex justify-content-center">

            <div className="row headline-wrapper">
              <div className="col-sm-12 mt-3">
                <p className="h4 text-wrap text-center">Welcome to <span id="brand">RESTeasy</span></p>
                <p className="text-wrap text-center">Your guide to all things fit to sit on.</p>
              </div>
            </div>

          </div>
        </div>


        <div className="row logo-box">
          <div className="col-sm-12">

            <div className="row ">
              <div className="col-sm-12 d-flex justify-content-center">
                <img src="https://via.placeholder.com/300x300x?text=RESTeasy+logo" className="login-logo img-fluid " alt="logo" />
              </div>
            </div>

          </div>
        </div>


        <div className="row mt-3 login-box">
          <div className="col-sm-12">

            <div className="row">
              <div className="col-sm-12 d-flex justify-content-center tos">
                <p className="h6 text-center">By tapping Log In, you agree with our Terms of Service and Privacy Policy.</p>
              </div>
            </div>


            <div className="row mt-2">
              <div className="col-sm-12 d-flex justify-content-center">
                <button className="btn btn-primary  login-button"><span className="button">Log in with Google</span></button>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-sm-12 d-flex justify-content-center">
                <button className="btn btn-info login-button"><span className="button">Log in with Facebook</span></button>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-sm-12 d-flex justify-content-center">
                <a href="#" target="_blank">Trouble logging in?</a>
              </div>
            </div>

          </div>
        </div>


      </div>
    )
  }
}

export default Login;
