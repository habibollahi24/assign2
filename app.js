//  Maryam Afshar, Student ID: 301034443, Due Date: October 15, 2023

const express = require("express");
require("dotenv").config();
const cors = require("cors"); //cors access

//run application
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());
app.use(require("./routes"));

module.exports = app;
