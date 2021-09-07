//hacer funcionar el servidor con express
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const favicon = require("serve-favicon");
const {getTimes} = require("./middwares/times");
const {validarTokenFn} = require("./middwares/validacionToken");

const app = express();
const exphbs = require("express-handlebars");
require("dotenv").config();

require("./databases");

const PORT = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());
app.use(getTimes)
//app.use(validarTokenFn)
app.set("port", PORT);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    partialsDir: path.join(app.get("views"), "partials"),
    layoutsDir: path.join(app.get("views"), "layouts"),
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");
app.use(morgan("dev"));
app.use(favicon(path.join(__dirname, "views", "./favicon.ico")));
app.use(express.urlencoded({ extended: false }));

app.use(require("./routes/indexRoutes"));

/* const mongoAtlasUri =
  "mongodb+srv://cmiarg:12345@cluster0.qf72b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
 */
/* try {
  // Connect to the MongoDB cluster
  mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected"),
  );
} catch (e) {
  console.log("could not connect");
} */
/* 
const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));
 */
var puerto=process.env.PORT;
app.listen(process.env.PORT, () => {
  console.log(`servidor andando en ${puerto}`);
 
});

console.clear();
