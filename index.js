//hacer funcionar el servidor con express
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const exphbs = require("express-handlebars");
require("dotenv").config();

require("./databases");

const PORT = process.env.PORT || 8000;
app.set("port", PORT);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "index",
    layoutsDir: path.join(app.get("views")),
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");
app.use(favicon(__dirname+"/favicon.ico"));
app.use(express.urlencoded({ extended: false }));
app.use(require("./routes/indexRoutes"));

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://cmiarg:12345@actividades.qf72b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(
  uri, 
  { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  }
);
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log(" los errores es",err);
  // perform actions on the collection object
  client.close();
});

app.listen(3000, () => {
  console.log("servidor andando");
});
console.clear();
