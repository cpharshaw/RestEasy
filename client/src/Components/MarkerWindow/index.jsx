import React, { Component } from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import MapWithASearchBox from '../MapWithASearchBox';
import Review from '../Review';
import InfoDiv from '../InfoDiv';
import Settings from '../Settings';
import Footer from '../Footer';
import './markerwindow.css';


export class MarkerWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    }
  }

  render(props) {

    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;



    const InfoDivComp = (props) => {
      return (
        <InfoDiv
          {...props}
          signInWithGoogle={this.props.firebase.signInWithGoogle}
          signOut={this.props.firebase.signOut}
          user={this.props.firebase.user}
          formData={this.props}
        />
      );
    };

    const ReviewComp = (props) => {
      return (
        <Review
          signInWithGoogle={this.props.firebase.signInWithGoogle}
          signOut={this.props.firebase.signOut}
          user={this.props.firebase.user}
          formData={this.props}
        />
      );
    };


    let content = this.state.toggle ? <ReviewComp {...props} /> : <InfoDivComp />;

    let button = this.state.toggle
      ?
      <button className="addReviewBtn">
        <i className="fas fa-arrow-left text-center" style={{ color: "darkgoldenrod", fontSize: "37px" }} onClick={() => this.setState({ toggle: !this.state.toggle })}></i>
      </button>
      :
      <button className="addReviewBtn">
        <i className="fas fa-plus-circle text-center" style={{ color: "darkgoldenrod", fontSize: "37px" }} onClick={() => this.setState({ toggle: !this.state.toggle })}></i>
      </button>;

    return (

      < div className="container-fluid markerWindowDiv" >

        <div className="row">
          <div className="col">

            <div className="d-flex flex-column  flex-end mb-1">
              <p className="h4 placeName">{this.props.name}</p>
              <p className="h6 textAddress">{this.props.formatted_address}</p>
            </div>

            <hr /> {console.log(this.props)}

            {content}

            <div className="addReviewDiv row">
              <div className="col text-center">

                {button}

              </div>
            </div>

          </div>
        </div>
      </div >


    )
  }
}

export default MarkerWindow;



{/* <button className="addReviewBtn">
<i className={this.state.toggle ? "fas fa-plus-circle text-center" : "fas fa-arrow-left text-center"} style={{ color: "darkgoldenrod", fontSize: "37px" }} onClick={this.setState({ toggle: !this.state.toggle })}></i>
</button> */}
