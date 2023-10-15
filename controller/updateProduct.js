//  Maryam Afshar, Student ID: 301034443, Due Date: October 15, 2023

const Product = require("../models/Product");

const updateProduct = async (req, res) => {
  try {
    const param = req.params.id;
    const product = req.body;

    const updatedProduct = await Product.updateOne(
      { _id: param },
      { $set: product }
    );
    //if find this product in db
    if (updatedProduct.matchedCount > 0) {
      return res.json({ message: "updated product successfully..." });
    } else {
      return res.status(404).json({ message: "product not found" });
    }
  } catch (error) {
    //if one product by this name existed
    if (error.code === 11000) {
      return res
        .status(422)
        .json({ message: "one product by this name exist" });
    } else {
      return res.status(404).json({ message: "product not found" });
    }
  }
};

module.exports = updateProduct;
