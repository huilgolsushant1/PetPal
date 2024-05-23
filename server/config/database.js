//db
const URI = process.env.MONGODB_URI;
const { MongoClient, ServerApiVersion } = require("mongodb");

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const mongoClient = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const connectMongoDB = async (req, res) => {
  try {
    // Connect the client to the server
    await mongoClient.connect();
    // Send a ping to confirm a successful connection
    await mongoClient.db("admin").command({ ping: 1 });
    console.log("You successfully connected to MongoDB!");
  } catch (e) {
    console.log(e);
  }
};

module.exports = { connectMongoDB };
