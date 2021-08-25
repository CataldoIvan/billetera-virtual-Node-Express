//hacer funcionar el servidor con express
const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
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

app.listen(3000, () => {
  console.log("servidor andando");
});
console.clear();
