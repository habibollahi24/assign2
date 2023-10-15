//  Maryam Afshar, Student ID: 301034443, Due Date: October 15, 2023

const Product = require("../models/Product");

const getProduct = async (req, res) => {
  const params = req.params.id;
  try {
    const product = await Product.findById(params);

    if (product) {
      //if product exist
      return res.json({ product });
    } else {
      return res.status(404).json({ message: "404-not found" });
    }
  } catch (error) {
    return res.status(404).json({ message: "404-not found" });
  }
};

module.exports = getProduct;
