import React, { Component } from 'react';

class Login extends Component {

  state = {};

  render() {

    return (
      <div className="container login-body">

        <div className="row d-flex justify-content-center">
          <div className="col-sm-12 d-flex justify-content-center mt-4">
            <p className="h4 text-wrap text-center">Welcome to RESTeasy</p>
          </div>
          <div className="col-sm-12 d-flex justify-content-center">
            <p className="text-wrap text-center">Your guide to all things fit to sit (on).</p>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-sm-12 d-flex justify-content-center">
            <img src="https://via.placeholder.com/310x310x?text=RESTeasy+logo" className="login-logo img-fluid " alt="logo" />
          </div>
        </div>


        <div className="row mt-5">
          <div className="col-sm-12">

            <div className="row">
              <div className="col-sm-12 d-flex justify-content-center">
                <p className="h6 text-center">By tapping Log In, you agree with our Terms of Service and Privacy Policy.</p>
              </div>
            </div>


            <div className="row mt-2">
              <div className="col-sm-12 d-flex justify-content-center">
                <button className="btn btn-primary  login-button">Log in with Google</button>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-sm-12 d-flex justify-content-center">
                <button className="btn btn-info  login-button">Log in with Facebook</button>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-sm-12 d-flex justify-content-center">
                <a href="#" target="_blank">Trouble logging in?</a>
              </div>
            </div>

          </div>
        </div>

      </div >
    );
  }
}

export default Login;
