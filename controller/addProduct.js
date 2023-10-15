//  Maryam Afshar, Student ID: 301034443, Due Date: October 15, 2023

const Product = require("../models/Product");
const productSchema = require("../validation");

const addProduct = async (req, res) => {
  const { body } = req;
  try {
    //validate data
    const data = productSchema.validateSync(body, {
      abortEarly: false,
      stripUnknown: true,
    });

    //save on db
    const product = new Product(data);
    await product.save();

    return res.status(201).json({ message: "Success", data });
  } catch (error) {
    if (error.code === 11000) {
      //if name not unique
      return res.status(422).json({ errors: "name should be unique" });
    } else {
      //if data not valid
      return res.status(422).json({ errors: error.errors });
    }
  }
};

module.exports = addProduct;
