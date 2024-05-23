//imports
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const dbConnections = require("./config/database.js");

//app
const app = express();

//db
dbConnections.connectMongoDB();

//middleware
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));

//port
const port = process.env.PORT;

//listener
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
