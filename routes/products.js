//  Maryam Afshar, Student ID: 301034443, Due Date: October 15, 2023

const express = require("express");
const router = express.Router();

//get all product
router.get("/", require("../controller/getProducts"));
//get one product by id
router.get("/:id", require("../controller/getProduct"));
//add new product
router.post("/", require("../controller/addProduct"));
//update product by id
router.put("/:id", require("../controller/updateProduct"));
//delete one product by id
router.delete("/:id", require("../controller/deleteProduct"));
//delete all product
router.delete("/", require("../controller/deleteAllProduct"));

module.exports = router;
