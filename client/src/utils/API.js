import axios from "axios";

export default {
  // Gets all Reviews
  getReviews: function() {
    return axios.get("/api/reviews");
  },
  // Gets the review with the given id
  getReview: function(id) {
    return axios.get("/api/reviews/" + id);
  },
  // Deletes the review with the given id
  deleteReview: function(id) {
    return axios.delete("/api/reviews/" + id);
  },
  // Saves a review to the database
  saveReview: function(reviewData) {
    console.log("saveReview api called");
    console.log(reviewData);
    return axios.post("/api/reviews", reviewData);
  }
};
