const express = require("express");
const { instructor } = require("../Controllers/InstructorController");

const routes = express.Router();

routes.post("/instructor",instructor);
// routes.post("/courses");

module.exports = {routes}