//  Maryam Afshar, Student ID: 301034443, Due Date: October 15, 2023

const Product = require("../models/Product");

const deleteAllProduct = async (req, res) => {
  try {
    await Product.deleteMany(); //delete all product
    return res.json({ message: "delete all products" });
  } catch (error) {
    //if id not valid
    return res.status(404).json({ message: "404-not found" });
  }
};

module.exports = deleteAllProduct;
