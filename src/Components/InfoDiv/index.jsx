



import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import './infodiv.css';



export class InfoDiv extends Component {
  render(props) {
    return (


      
  
          <div>
            <div className="scoresDiv row">
              <div className="col">

                <div className="row">
                  <div className="col">
                    <h5 className="overall-avg text-center">
                      Overall: <span className="bigger score-good">4.2</span>
                    </h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col scoreCategory text-center">
                    <h6 className="clean-avg">Cleanliness: <span className="score-ok">3.6</span></h6>
                  </div>
                  <div className="col scoreCategory text-center">
                    <h6 className="capacity-avg">Capacity: <span className="score-excellent">4.8</span></h6>
                  </div>
                  <div className="col scoreCategory text-center">
                    <h6 className="style-avg">Style: <span className="score-good">4.1</span></h6>
                  </div>
                </div>

              </div>
            </div>

            <hr />

            <div className="photosDiv row">
              <div className="col">

                <div className="row">
                  <div className="col">
                    <h5 className="overall-avg text-center">
                      Photos
                    </h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col text-center photoCol">
                    <img className="photo" src="https://b3h2.scene7.com/is/image/BedBathandBeyond/2646163811314c?$imagePLP$&wid=256&hei=256" />
                  </div>
                  <div className="col text-center photoCol">
                    <img className="photo" src="https://b3h2.scene7.com/is/image/BedBathandBeyond/1024565231905c?$imagePLP$&wid=256&hei=256" />
                  </div>
                  <div className="col text-center photoCol">
                    <img className="photo" src="https://b3h2.scene7.com/is/image/BedBathandBeyond/197262665311905p?$imagePLP$&wid=256&hei=256" />
                  </div>
                  <div className="col text-center photoCol">
                    <img className="photo" src="https://www.armstronginteriorsllc.com/bathroom-remodeling/files/thumbDrop_7813.jpg" />
                  </div>
                  <div className="col text-center photoCol">
                    <img className="photo" src="https://www.bluefrogplumbing.com/images/toilet%5B1%5D.jpg" />
                  </div>
                </div>
              </div>
            </div>

            <hr />

            <div className="featuresDiv row">
              <div className="col">

                <div className="row">
                  <div className="col">
                    <h5 className="overall-avg text-center">
                      Features
                        </h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col text-center">
                    <i className="fas fa-dollar-sign fa-lg" style={{ color: "black", fontSize: "19px" }}></i>
                    <h6 className="">Free</h6>
                  </div>
                  <div className="col text-center">
                    <i className="fas fa-venus fa-lg" style={{ color: "black", fontSize: "19px" }}></i>
                    <h6 className="">Yes</h6>
                  </div>
                  <div className="col text-center">
                    <i className="fas fa-wheelchair fa-lg" style={{ color: "black", fontSize: "19px" }}></i>
                    <h6 className="">No</h6>
                  </div>
                  <div className="col text-center">
                    <i className="fas fa-baby fa-lg" style={{ color: "black", fontSize: "19px" }}></i>
                    <h6 className="">Yes</h6>
                  </div>
                </div>

              </div>
            </div>

            <hr />

        </div>

    )
  }
}

export default InfoDiv;



    {/*<div className="container-fluid infoDiv">

        <div className="row">
          <div className="col">


            <div className="d-flex flex-column  flex-end mb-1">
              <p className="h4 placeName">{this.props.dataName}</p>
              <p className="h6 textAddress">{this.props.dataAddress}</p>
            </div>

            <hr />*/}


                    {/*
            <div className="addReviewDiv row">
              <div className="col text-center">
                <Link to="/Review">
                  <button className="addReviewBtn">
                    <i className="fas fa-plus-circle text-center" style={{ color: "darkgoldenrod", fontSize: "37px" }}></i>
                  </button>
                </Link>
              </div>
            </div>


          </div>
        </div>
         </div>*/}