var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var reviewSchema = new Schema({
  // user submitting the review
  userId: {
    type: String
  },
  // google maps marker data
  id: {
    type: String
  },
  place_id: {
    type: String
  },
  formatted_address: {
    type: String
  },
  position: {
    type: String,
    get: function (data) {
      try {
        return JSON.parse(data);
      } catch (err) {
        return data;
      }
    },
    set: function (data) {
      return JSON.stringify(data);
    }
  },
  types: {
    type: Array
  },
  name: {
    type: String
  },
  latlng: {
    type: String
  },
  // actual review
  review_description: {
    type: String
  },
  features_price: {
    type: Boolean
  },
  features_female_friendly: {
    type: Boolean
  },
  review_cleanliness: {
    type: Number
  },
  review_capacity: {
    type: Number
  },
  review_style: {
    type: Number
  },
  review_overall: {
    type: Number
  }

});


// This creates our model from the above schema, using mongoose's model method
var Review = mongoose.model("Review", reviewSchema);

// Export the Article model
module.exports = Review;
