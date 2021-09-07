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
app.use(express.json());
app.use(getTimes)
app.use(validarTokenFn)
app.set("port", PORT);
app.use(cors({
  
"origin": "*",
"methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
"allowedHeaders": "Authorization",
"preflightContinue": false,
"optionsSuccessStatus": 204
}
));
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

var puerto=process.env.PORT;
app.listen(process.env.PORT, () => {
  console.log(`servidor andando en ${puerto}`);
 
});

console.clear();
