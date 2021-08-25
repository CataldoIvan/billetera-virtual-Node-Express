//hacer funcionar el servidor con express
const express = require("express");
const app = express();
const exphbs=require('express-handlebars')
require('dotenv').config()


require('./databases')

const PORT = process.env.PORT || 8000;
app.set('port',PORT)
app.engine('.hbs',exphbs({
 
})
)

app.get("/", (req, res) => {
  res.send("hola mundoooo");
  console.log("hola mundo");
});

app.listen(3000, () => {
  console.log("servidor andando");
});
console.clear()
