//  Maryam Afshar, Student ID: 301034443, Due Date: October 15, 2023

const Product = require("../models/Product");

const deleteProduct = async (req, res) => {
  try {
    const param = req.params.id;
    await Product.deleteOne({ _id: param }); //delete by id

    return res.json({ message: "delete success" });
  } catch (error) {
    //if id not valid
    return res.status(404).json({ message: "404-not found" });
  }
};
module.exports = deleteProduct;
