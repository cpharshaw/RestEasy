const path = require("path");
const express = require("express");

const router = require("express").Router();
const apiRoutes = require("./api");
router.use(express.urlencoded({ extended: true }));
router.use(express.json());
// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
