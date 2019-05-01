import React, { Component } from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import MapWithASearchBox from '../MapWithASearchBox';
import Settings from '../Settings';
import Footer from '../Footer';
import './footer.css';


export class MainApp extends Component {


  render(props) {

    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;



    const SettingsComp = (props) => {
      return (
        <Settings 
          {...props} 
          signInWithGoogle={this.props.signInWithGoogle} 
          signOut={this.props.signOut} 
          user={this.props.user}
        />
      );
    }

    const MapComp = (props) => {
      return (
        <MapWithASearchBox 
          {...props} 
          signInWithGoogle={this.props.signInWithGoogle} 
          signOut={this.props.signOut} 
          user={this.props.user}
          data={this.props}
        />
      );
    }

    return (
      <Router>


        <Route exact path="/" component={MapComp} />
        <Route path="/Settings" component={SettingsComp} />
        <Route path="/MapWithASearchBox" component={MapComp} />
    

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

export default MainApp;
