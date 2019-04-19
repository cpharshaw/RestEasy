import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import './review.css';

export class Review extends Component {
  constructor() {
    super();

    this.state = {
      clean: 3,
      capacity: 3,
      style: 3,
      quality: 3
    };

  }

  onStarClickClean(nextValue, prevValue, name) {
    this.setState({
      clean: nextValue
    });
  }
  onStarClickCapacity(nextValue, prevValue, name) {
    this.setState({
      capacity: nextValue
    });
  }
  onStarClickStyle(nextValue, prevValue, name) {
    this.setState({
      style: nextValue
    });
  }
  onStarClickQuality(nextValue, prevValue, name) {
    this.setState({
      quality: nextValue
    });
  }


  render() {
    const { rating } = this.state;

    return (

      <div className="container reviewPage">
        <div className="row">
          <div className="col-sm-12">

            <div className="row">
              <div className="col-sm-12">
                <form className="">
                  <div className="form-group">
                    <label for="">Bathroom Name</label>
                    <input type="text" className="form-control" placeholder="Enter Bathroom Name" />
                  </div>
                  <div className="form-group">
                    <label for="">Address</label>
                    <input type="text" className="form-control" placeholder="1500 Market Street, Philadelphia, PA 19102" />
                  </div>
                </form>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">

                <div className="row">

                  <div className="col-sm-12">
                    <p className="h6">About Bathroom</p>
                  </div>

                  <div className="col-sm-12">

                    <div className="custom-control custom-switch">
                      <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                      <label className="custom-control-label" for="customSwitch1">Customers only (not free)</label>
                    </div>
                    <div className="custom-control custom-switch">
                      <input type="checkbox" className="custom-control-input" id="customSwitch2" />
                      <label className="custom-control-label" for="customSwitch2">Handicap Accessible</label>
                    </div>
                    <div className="custom-control custom-switch">
                      <input type="checkbox" className="custom-control-input" id="customSwitch3" />
                      <label className="custom-control-label" for="customSwitch3">Baby Changing Table</label>
                    </div>
                    <div className="custom-control custom-switch">
                      <input type="checkbox" className="custom-control-input" id="customSwitch3" />
                      <label className="custom-control-label" for="customSwitch3">Female Friendly</label>
                    </div>

                    < br />

                    <textarea className="w-100" rows="4">
                      At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.
                    </textarea>

                    <br />
                    <br />

                    <div className="row">
                      <div className="col-sm-12">

                        <div className="bg-success">
                          <p className="d-inline align-middle">Cleanliness:</p>
                          <StarRatingComponent
                            className=""
                            name="clean"
                            starCount={5}
                            value={this.state.clean}
                            // renderStarIcon={() => <span></span>}
                            onStarClick={this.onStarClickClean.bind(this)}
                          />
                        </div>

                        <div className="bg-warning">
                          <p className="d-inline">Capacity:</p>
                          <StarRatingComponent
                            className="d-inline align-middle float-right"
                            name="capacity"
                            starCount={5}
                            value={this.state.capacity}
                            // renderStarIcon={() => <span></span>}
                            onStarClick={this.onStarClickCapacity.bind(this)}
                          />
                        </div>

                        <div className="">
                          <p className="d-inline">Style:</p>
                          <StarRatingComponent
                            className="d-inline align-middle"
                            name="style"
                            starCount={5}
                            value={this.state.style}
                            // renderStarIcon={() => <span></span>}
                            onStarClick={this.onStarClickStyle.bind(this)}
                          />
                        </div>

                        <div className="">
                          <p className="d-inline">Quality of materials:</p>
                          <StarRatingComponent
                            className="d-inline align-middle"
                            name="quality"
                            starCount={5}
                            value={this.state.quality}
                            // renderStarIcon={() => <span></span>}
                            onStarClick={this.onStarClickQuality.bind(this)}
                          />
                        </div>
                        {/* ratings: cleanliness, capacity, style, "quality" (tp, stall, materials, etc) */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="row">
              <div className="col-sm-12">
              </div>
            </div>

          </div>
        </div >

      </div >
    )
  }
}

export default Review
