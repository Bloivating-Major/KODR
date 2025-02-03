const express = require("express");
const app = express();
const indexRoute = require("./routes/index.routes");
const userRoute = require("./routes/user.routes");
const path = require("path");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use("/", indexRoute);
app.use("/user", userRoute);

module.exports = app;
