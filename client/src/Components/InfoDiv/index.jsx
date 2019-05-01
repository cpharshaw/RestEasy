



import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import './infodiv.css';



export class InfoDiv extends Component {
  render(props) {

    let ratings = this.props.formData.ratings;

    let overallCSS = !ratings ? "bigger" :
      ratings.avgOverall >= 4.5 ? "bigger score-excellent" :
        ratings.avgOverall >= 3.75 ? "bigger score-good" :
          ratings.avgOverall >= 2.75 ? "bigger score-ok" :
            ratings.avgOverall >= 2.25 ? "bigger score-bad" :
              "score-terrible";  
              

    let cleanCSS = !ratings ? "" :
      ratings.avgClean >= 4.5 ? "score-excellent" :
        ratings.avgClean >= 3.75 ? "score-good" :
          ratings.avgClean >= 2.75 ? "score-ok" :
            ratings.avgClean >= 2.25 ? "score-bad" :
              "score-terrible";

    let capCSS = !ratings ? "" :
      ratings.avgCap >= 4.5 ? "score-excellent" :
        ratings.avgCap >= 3.75 ? "score-good" :
          ratings.avgCap >= 2.75 ? "score-ok" :
            ratings.avgCap >= 2.25 ? "score-bad" :
              "score-terrible";

    let styleCSS = !ratings ? "" :
      ratings.avgStyle >= 4.5 ? "score-excellent" :
        ratings.avgStyle >= 3.75 ? "score-good" :
          ratings.avgStyle >= 2.75 ? "score-ok" :
            ratings.avgStyle >= 2.25 ? "score-bad" :
              "score-terrible";

    return (




      <div>
        <div className="scoresDiv row">
          <div className="col">

            <div className="row">
              <div className="col text-center">
                <h5 className="overall-avg text-center d-inline">
                  Overall: <span className={overallCSS}>{ratings ? ratings.avgOverall.toFixed(1) : "-"}</span>
                </h5> <span></span>
                <h6 className="text-center d-inline">
                  ( {ratings ? ratings.count : "-"} reviews) 
                </h6>
              </div>
            </div>
            <div className="row">
              <div className="col scoreCategory text-center">
                <h6 className="clean-avg">Cleanliness: <span className={cleanCSS}>{ratings ? ratings.avgClean.toFixed(1) : "-"}</span></h6>
              </div>
              <div className="col scoreCategory text-center">
                <h6 className="capacity-avg">Capacity: <span className={capCSS}>{ratings ? ratings.avgCap.toFixed(1) : "-"}</span></h6>
              </div>
              <div className="col scoreCategory text-center">
                <h6 className="style-avg">Style: <span className={styleCSS}>{ratings ? ratings.avgStyle.toFixed(1) : "-"}</span></h6>
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