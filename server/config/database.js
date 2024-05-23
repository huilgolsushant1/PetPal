// db.js
const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI;

const connectMongoDB = async () => {
  try {
    await mongoose.connect(URI, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log("You successfully connected to MongoDB.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = { connectMongoDB };
