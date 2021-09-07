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
/* var corsOptions = {
  "origin": ['*'],
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true, //Credentials are cookies, authorization headers or TLS client certificates.
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'device-remember-token', 'Access-Control-Allow-Origin', 'Origin', 'Accept']
};

app.use(cors(corsOptions)); */

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

  const token=req.headers.authorization
   var decoded = jwt.decode(token);
    if (Date.now() >= decoded.exp*1000) {
        console.log("token expirado")
        return res.status(401).send({message:'Token expirado'});      
      }else{
        console.log("token ok!") 
        
        next();
      }
  
});
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

var puerto=process.env.PORT;
app.listen(process.env.PORT, () => {
  console.log(`servidor andando en ${puerto}`);
 
});

console.clear();
