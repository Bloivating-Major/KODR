const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static('public'));

app.get("/", (req, res) => {
  const name = "Sambhav";

  const data = [
    {
      name: "Sambhav",
      age: 20,
    },
    {
      name: "Kunal",
      age: 22,
    },
    {
      name: "Soham",
      age: 19,
    },
  ];

  res.render("index", { users: data, name: name });
});

app.get("*", (req, res) => {
  res.render("notFound");
});

app.listen(3000, () => {
  console.log("Server is Running on port 3000");
});
