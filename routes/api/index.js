const router = require("express").Router();
const reviewRoutes = require("./reviews");
const express = require("express");
router.use(express.urlencoded({ extended: true }));
router.use(express.json());
// Review routes
router.use("/reviews", reviewRoutes);

module.exports = router;
