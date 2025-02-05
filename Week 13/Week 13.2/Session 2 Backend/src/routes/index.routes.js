const { Router } = require("express");

const Route = Router();

const indexController = require("../controller/index.controller");

const authMiddleware = require("../middleware/authMiddleware");

Route.get("/", indexController.indexController);

Route.get("/feed", indexController.feedController);

module.exports = Route;
