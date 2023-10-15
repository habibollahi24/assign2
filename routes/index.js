//  Maryam Afshar, Student ID: 301034443, Due Date: October 15, 2023

const express = require("express");
const router = express.Router();

//index route
router.get("/", (req, res) => {
  res.json({ message: "welcome to DressStore Application" });
});

//product route
router.use("/api/products", require("./products"));

//404 route
router.get("*", (req, res) => {
  res.status(404).json({ message: "404-not found" });
});

module.exports = router;
