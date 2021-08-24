//hacer funcionar el servidor con express
const express = require("express");
const app = express();
require(dotenv).configure()

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("hola mundoooo");
  console.log("hola mundo");
});

app.listen(3000, () => {
  console.log("servidor andando");
});
