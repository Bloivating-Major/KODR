const express = require("express");
const controller = require("../controllers/index.controller");
const userController = require("../controllers/user.controller");
const app = express();
const indexRoutes = require('../routes/index.routes');
const userRoutes = require('../routes/users.routes');

app.use('/', indexRoutes);
app.use('/users', userRoutes);
app.get("/about", controller.aboutController);
app.get("/", controller.indexController);
app.get("/user/profile", userController.profileController);

module.exports = app;
