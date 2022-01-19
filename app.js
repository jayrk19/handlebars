const express = require("express");
var exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;
const path = require('path')

app.use(express.static(path.join(__dirname, "views")));

// express-handlebars
app.engine(
  "handlebars",
  exphbs.engine({
    defaulLayout: "main",
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,

      allowProtoMethodsByDefault: true,
    },
    layoutsDir: "views/layouts",
    partialsDir: "views/partials"
  })
);
app.set("view engine", "handlebars");

// Bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => {
  res.render("home", { title: "Home" });
});
app.get("/about", (req, res) => {
  res.render("about", { title: "About",isDisplay:true,name:["ram","shyam"] });
});

app.listen(port, () => {
  console.log(`Server runnin' on http://localhost:${port}`);
});
