const db = require("../models");
const express = require("express");
const router = require("express").Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// Defining methods for the reviewsController
module.exports = {
  findAll: function(req, res) {
    console.log(req.query);
      
    // db.Review.find({})
      // .sort({ date: -1 })
      db.Review.aggregate([
        {
          $group: {
            _id: {
              place_id: "$place_id",
              position: "$position",
              avgOverall: "$avgOverall"
            },
            // position: "position",
            avgClean: {$avg: "$review_cleanliness"},
            avgCap: {$avg: "$review_capacity"},
            avgStyle: {$avg: "$review_style"},
            avgOverall: {$avg: { $avg: ["$review_cleanliness", "$review_capacity", "$review_style"]}}
          },
       }
      ])
      .then(dbModel => console.log(dbModel))
      // .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllAggregate: function(req, res) {
    console.log(req.query);
    // db.Review
    //   .find(req.query)
    //   .sort({ date: -1 })
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
  },  
  findById: function(req, res) {
    db.Review
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("request received");
    console.log(req.body.data);
    db.Review
      .create(req.body.data)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Review
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Review
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
