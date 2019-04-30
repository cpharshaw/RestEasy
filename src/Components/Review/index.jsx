import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import './review.css';
import './stars.css';



// class Star extends Component {



//   render(props) {

//     return  (
//       <input 
//         className="star-rating__input" 
//         id={props.name + "clean-rating-" + props.id_num}
//         type="radio" 
//         name="rating" 
//         value="5" 
//         onStarClick={this.onStarClick_Clean.bind(this)}
//       />
//     );

//   }
// }



export class Review extends Component {
  state = {
    location: {
      locationName: null,
      address: null,
      locationDesc: null
    },
    about: {
      free: null,
      handicap: null,
      baby: null,
      female: null
    },
    description: null,
    ratings: {
      clean: null,
      capacity: null,
      style: null,
      quality: null
    },
    selectedFile: null
  };

  onStarClick_Clean(data) {
    this.setState({
      clean: data.target.value
    });
    console.log("clicked clean: " + data.target.value);
  }

  onStarClick_Capacity(data) {
    this.setState({
      capacity: data.target.value
    });
    console.log("clicked capacity: " + data.target.value);
  }

  onStarClick_Quality(data) {
    this.setState({
      quality: data.target.value
    });
    console.log("clicked quality: " + data.target.value);
  }

  onStarClick_Style(data) {
    this.setState({
      style: data.target.value
    });
    console.log("clicked style: " + data.target.value);
  }

  fileChangedHandler = event => {
    this.setState({ selectedFile: event.target.files[0] })
  }

  uploadHandler = () => {
    console.log(this.state.selectedFile)
  }

  render(props) {
    const { rating } = this.state

    return (


          <div className="mt-3">

            <div className="row">
              <div className="col">

                <form className="">
                  {/* <div className="d-flex flex-column mb-1">
                    <h4>{this.props.dataName}</h4>
                    <h6 className="text textAddress">{this.props.dataAddress}</h6>
                  </div> */}
                  <div className="d-flex flex-column mb-1">
                    <label className="" >Location Description:</label>
                    <input id="locDesc" type="text" className="form-control p-1 rounded" placeholder="Near checkout counter" />
                  </div>
                </form>
                
              </div>
            </div>


            <div className="row mt-2">
              <div className="col">

                <div className="row">

                  {/* <div className="col ml-1">
                    <p className="">About Bathroom:</p>
                  </div> */}

                  <div className="col">

                    <div className="row">
                      <div className="col">
                        <form>
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                            <label className="custom-control-label" htmlFor="customSwitch1">Customers only</label>
                          </div>
                          {/* <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customSwitch2" />
                            <label className="custom-control-label" htmlFor="customSwitch2">Handicap Accessible</label>
                          </div> */}
                          {/* <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customSwitch3" />
                            <label className="custom-control-label" htmlFor="customSwitch3">Baby Changing Table</label>
                          </div> */}
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customSwitch4" />
                            <label className="custom-control-label" htmlFor="customSwitch4">Female Friendly</label>
                          </div>
                        </form>
                      </div>
                    </div>


                    {/* <textarea className="w-100 mt-3 rounded border-1" rows="3" placeholder="Describe your experience and/or observations." /> */}

                    <div className="row mt-2">
                      <div className="col">

                        <div className="row flex-nowrap d-flex align-items-center">
                          <div className="col-sm-4 categoryLabel">Cleanliness:</div>
                          <div className="col-sm-8 star-rating">
                            <div className="star-rating__wrap ">
                              <input className="star-rating__input" id="clean-rating-5" type="radio" name="rating" value="5" onClick={e => this.onStarClick_Clean(e)} />
                              <label className="star-rating__ico fa fa-star-o fa-md" htmlFor="clean-rating-5" title="5 out of 5 stars"></label>
                              <input className="star-rating__input" id="clean-rating-4" type="radio" name="rating" value="4" onClick={e => this.onStarClick_Clean(e)} />
                              <label className="star-rating__ico fa fa-star-o fa-md" htmlFor="clean-rating-4" title="4 out of 5 stars"></label>
                              <input className="star-rating__input" id="clean-rating-3" type="radio" name="rating" value="3" onClick={e => this.onStarClick_Clean(e)} />
                              <label className="star-rating__ico fa fa-star-o fa-md" htmlFor="clean-rating-3" title="3 out of 5 stars"></label>
                              <input className="star-rating__input" id="clean-rating-2" type="radio" name="rating" value="2" onClick={e => this.onStarClick_Clean(e)} />
                              <label className="star-rating__ico fa fa-star-o fa-md" htmlFor="clean-rating-2" title="2 out of 5 stars"></label>
                              <input className="star-rating__input" id="clean-rating-1" type="radio" name="rating" value="1" onClick={e => this.onStarClick_Clean(e)} />
                              <label className="star-rating__ico fa fa-star-o fa-md" htmlFor="clean-rating-1" title="1 out of 5 stars"></label>
                            </div>
                          </div>
                        </div>

                        <div className="row flex-nowrap d-flex align-items-center">
                          <div className="col-sm-4 categoryLabel">Capacity:</div>
                          <div className="col-sm-8 star-rating">
                            <div className="star-rating__wrap">
                              <input className="star-rating__input" id="capacity-rating-5" type="radio" name="capacity" value="5" onClick={e => this.onStarClick_Capacity(e)} />
                              <label className="star-rating__ico fa fa-star-o fa-md" htmlFor="capacity-rating-5" title="5 out of 5 stars"></label>
                              <input className="star-rating__input" id="capacity-rating-4" type="radio" name="capacity" value="4" onClick={e => this.onStarClick_Capacity(e)} />
                              <label className="star-rating__ico fa fa-star-o fa-md" htmlFor="capacity-rating-4" title="4 out of 5 stars"></label>
                              <input className="star-rating__input" id="capacity-rating-3" type="radio" name="capacity" value="3" onClick={e => this.onStarClick_Capacity(e)} />
                              <label className="star-rating__ico fa fa-star-o fa-md" htmlFor="capacity-rating-3" title="3 out of 5 stars"></label>
                              <input className="star-rating__input" id="capacity-rating-2" type="radio" name="capacity" value="2" onClick={e => this.onStarClick_Capacity(e)} />
                              <label className="star-rating__ico fa fa-star-o fa-md" htmlFor="capacity-rating-2" title="2 out of 5 stars"></label>
                              <input className="star-rating__input" id="capacity-rating-1" type="radio" name="capacity" value="1" onClick={e => this.onStarClick_Capacity(e)} />
                              <label className="star-rating__ico fa fa-star-o fa-md" htmlFor="capacity-rating-1" title="1 out of 5 stars"></label>
                            </div>
                          </div>
                        </div>

                        {/* <div className="row flex-nowrap d-flex align-items-center">
                          <div className="col-sm-4 categoryLabel">Quality:</div>
                          <div className="col-sm-8 star-rating">
                            <div className="star-rating__wrap">
                              <input className="star-rating__input" id="quality-rating-5" type="radio" name="quality" value="5" onClick={e => this.onStarClick_Quality(e)} />
                              <label className="star-rating__ico fa fa-star-o fa-md" htmlFor="quality-rating-5" title="5 out of 5 stars"></label>
                              <input className="star-rating__input" id="quality-rating-4" type="radio" name="quality" value="4" onClick={e => this.onStarClick_Quality(e)} />
                              <label className="star-rating__ico fa fa-star-o fa-md" htmlFor="quality-rating-4" title="4 out of 5 stars"></label>
                              <input className="star-rating__input" id="quality-rating-3" type="radio" name="quality" value="3" onClick={e => this.onStarClick_Quality(e)} />
                              <label className="star-rating__ico fa fa-star-o fa-md" htmlFor="quality-rating-3" title="3 out of 5 stars"></label>
                              <input className="star-rating__input" id="quality-rating-2" type="radio" name="quality" value="2" onClick={e => this.onStarClick_Quality(e)} />
                              <label className="star-rating__ico fa fa-star-o fa-md" htmlFor="quality-rating-1" title="2 out of 5 stars"></label>
                              <input className="star-rating__input" id="quality-rating-1" type="radio" name="quality" value="1" onClick={e => this.onStarClick_Quality(e)} />
                              <label className="star-rating__ico fa fa-star-o fa-md" htmlFor="quality-rating-1" title="1 out of 5 stars"></label>
                            </div>
                          </div>
                        </div> */}

                        <div className="row flex-nowrap d-flex align-items-center">
                          <div className="col-sm-4 categoryLabel">Style:</div>
                          <div className="col-sm-8 star-rating">
                            <div className="star-rating__wrap">
                              <input className="star-rating__input" id="style-rating-5" type="radio" name="style" value="5" onClick={e => this.onStarClick_Style(e)} />
                              <label className="star-rating__ico fa fa-star-o fa-md" htmlFor="style-rating-5" title="5 out of 5 stars"></label>
                              <input className="star-rating__input" id="style-rating-4" type="radio" name="style" value="4" onClick={e => this.onStarClick_Style(e)} />
                              <label className="star-rating__ico fa fa-star-o fa-md" htmlFor="style-rating-4" title="4 out of 5 stars"></label>
                              <input className="star-rating__input" id="style-rating-3" type="radio" name="style" value="3" onClick={e => this.onStarClick_Style(e)} />
                              <label className="star-rating__ico fa fa-star-o fa-md" htmlFor="style-rating-3" title="3 out of 5 stars"></label>
                              <input className="star-rating__input" id="style-rating-2" type="radio" name="style" value="2" onClick={e => this.onStarClick_Style(e)} />
                              <label className="star-rating__ico fa fa-star-o fa-md" htmlFor="style-rating-2" title="2 out of 5 stars"></label>
                              <input className="star-rating__input" id="style-rating-1" type="radio" name="style" value="1" onClick={e => this.onStarClick_Style(e)} />
                              <label className="star-rating__ico fa fa-star-o fa-md" htmlFor="style-rating-1" title="1 out of 5 stars"></label>
                            </div>
                          </div>
                        </div>


                      </div>
                    </div>


                    {/* <div className="row mt-3">
                      <div className="col">

                        <form>
                          <div className="form-group">
                            <label htmlFor="exampleFormControlFile1">Example file input</label>
                            <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                          </div>
                        </form>
                      </div>
                    </div> */}
                    {/* https://academind.com/learn/react/snippets/image-upload/ */}
                    {/* https://www.youtube.com/watch?v=XeiOnkEI7XI */}



                    <input className="d-flex align-self-baseline btn submitBtn" type="submit" value="Submit" />

                  </div>
                </div>
              </div>



            </div>
  </div>
    )
  }
}

export default Review;

