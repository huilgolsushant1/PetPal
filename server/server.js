//imports
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

//app
const app = express();

//middleware
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));

//port
const port = process.env.PORT;

//listener
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
