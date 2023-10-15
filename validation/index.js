//  Maryam Afshar, Student ID: 301034443, Due Date: October 15, 2023

const yup = require("yup");

//validation by YUP
const productSchema = yup
  .object({
    description: yup.string().required().optional().trim(),
    price: yup
      .number()
      .typeError("price must be a number")
      .integer()
      .required(),
    quantity: yup
      .number()
      .typeError("quantity must be a number")
      .integer()
      .required(),
    name: yup.string().required().trim(),
    category: yup.string().oneOf(["women", "men", "teens"]),
  })
  .required();

module.exports = productSchema;
