const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/contact", function (req, res) {
  res.send("Hello Contact");
});

app.get("/about", function (req, res) {
  res.send("Hello About");
});

app.get("*", function (req, res){
    res.send("Pricing Page");
})

app.listen(3000);
