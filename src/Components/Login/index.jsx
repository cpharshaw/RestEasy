import React, { Component } from 'react';
import './login.css';
import './video.css';
import video from './people.mp4';
import { Link } from 'react-router-dom';


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
                <p className="h4 text-wrap text-center ">
                  <span id="brand">
                    rest☆easy
                  </span>
                </p>
                <p className="text-wrap text-center">
                  <span id="tagline">
                    Your guide to all things fit to sit on
                  </span>
                </p>
              </div>
            </div>

          </div>
        </div>


        {/* <div className="row logo-box">
          <div className="col-sm-12">

            <div className="row ">
              <div className="col-sm-12 d-flex justify-content-center">
                <img src="https://media.istockphoto.com/photos/public-toilet-room-picture-id670218984?k=6&m=670218984&s=612x612&w=0&h=LXwBAKIfVJS2rzrRipOkB1ICV6OXgV3Mj0ghjg22j1w=" className="login-logo img-fluid " alt="logo" />
              </div>
            </div>

          </div>
        </div> */}


        <div className="row mt-3 login-box">
          <div className="col-sm-12">

            <div className="row">
              <div className="col-sm-12 d-flex justify-content-center tos">
                <p className="h6 text-center tosText">
                  By tapping Log In, you agree with our <u>Terms of Service</u> and <u>Privacy Policy</u>.
                </p>
              </div>
            </div>


            <div className="row mt-2">
              <div className="col-sm-12 d-flex justify-content-center">
                <Link to="/MapWithASearchBox" >
                  <button className="btn btn-primary login-button">
                    <span className="button">
                      LOG IN WITH GOOGLE
                    </span>
                  </button>
                </Link>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-sm-12 d-flex justify-content-center">
                <Link to="/MapWithASearchBox" >
                  <button className="btn btn-info login-button">
                    <span className="button">
                      LOG IN WITH FACEBOOK
                    </span>
                  </button>
                </Link>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-sm-12 d-flex justify-content-center">
                {/* <a href="#" target="_blank" className="trouble">Trouble logging in?</a> */}
              </div>
            </div>

          </div>
        </div>


      </div>
    )
  }
}

export default Login;
