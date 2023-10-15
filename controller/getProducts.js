//  Maryam Afshar, Student ID: 301034443, Due Date: October 15, 2023

const Product = require("../models/Product");

const getProducts = async (req, res) => {
  const query = req.query;

  //validation query string
  if (Object.keys(query).length !== 0) {
    const name = query.name;
    const product = await Product.findOne({ name });
    if (product) {
      return res.json({ product });
    } else {
      return res.status(404).json({ message: "404-not found" });
    }
  } else {
    //if not query string in url
    const products = await Product.find({});
    return res.json({ products });
  }
};

module.exports = getProducts;
