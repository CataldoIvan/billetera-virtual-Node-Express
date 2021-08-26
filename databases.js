const mongoose = require("mongoose");
const MONGODB_URI = "mongodb://localhost/actividades";

mongoose.connect("mongodb+srv://cmiarg:12345@Cluster0.qf72b.mongodb.net/billetera_virtual?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((db) => console.log("database conectada"))
  .catch((err) => console.log("error", err));

/*   try {
    // Connect to the MongoDB cluster
    mongoose.connect(
      process.env.MONGO_URI,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Mongoose is connected"),
    );
  } catch (e) {
    console.log("could not connect");
  }
  const dbConnection = mongoose.connection;
dbConnection.on("error g", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!")); */
/* 
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://cmiarg:12345@cluster0.qf72b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
}); */