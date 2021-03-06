const express = require("express");
const router = express.Router();
const {
  getTest,
  postTest,
  getSpecificTest,
} = require("./controllers/module.controller");

router.route("/").get(getTest).post(postTest);

router.route("/:id").get(getSpecificTest).post(postTest);

module.exports = router;
