const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const config = require("config");
const cors = require("cors");

const app = express();

/** Database */
require("./database/connect")();

/** express default bodyparser */
app.use(express.json({ extended: false }));

/** prevent cors issue*/
app.use(cors());

/** create write stream (append mode)*/
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  { flags: "a" }
);

/** request logger*/
app.use(morgan("dev"));

/** log all request to access.log */
app.use(morgan("combined", { stream: accessLogStream }));

const PORT = process.env.PORT || config.get("port");

const listen = app.listen(PORT, () => {
  console.log("url:", `    http://localhost:${PORT}`);
  console.log("server:", ` ${config.get("server")}`);
});

module.exports = app;
module.exports.port = listen.address().port;
