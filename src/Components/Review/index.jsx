import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';


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
      <div className="container">

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

                    < br />

                    <textarea className="w-100" rows="4">
                      At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.
                    </textarea>

                    <br />

                    <p className="">Cleanliness:</p>
                    <StarRatingComponent
                      name="clean"
                      starCount={5}
                      value={this.state.clean}
                      // renderStarIcon={() => <span></span>}
                      onStarClick={this.onStarClickClean.bind(this)}
                    />
                    <p className="">Capacity:</p>
                    <StarRatingComponent
                      name="capacity"
                      starCount={5}
                      value={this.state.capacity}
                      // renderStarIcon={() => <span></span>}
                      onStarClick={this.onStarClickCapacity.bind(this)}
                    />
                    <p className="">Style:</p>
                    <StarRatingComponent
                      name="style"
                      starCount={5}
                      value={this.state.style}
                      // renderStarIcon={() => <span></span>}
                      onStarClick={this.onStarClickStyle.bind(this)}
                    />
                    <p className="">Quality of materials:</p>
                    <StarRatingComponent
                      name="quality"
                      starCount={5}
                      value={this.state.quality}
                      // renderStarIcon={() => <span></span>}
                      onStarClick={this.onStarClickQuality.bind(this)}
                    />
                    {/* ratings: cleanliness, capacity, style, "quality" (tp, stall, materials, etc) */}
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
