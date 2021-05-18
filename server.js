const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const config = require("config");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const compression = require("compression");
const helmet = require("helmet");

const app = express();

/** database */
require("./database/connect")();

/** express default bodyparser */
app.use(express.json({ extended: false }));

/** prevent cors issue*/
app.use(cors());

/** secure http */
app.use(helmet());

/** reduce/zip data size served to users */
app.use(compression());

/** create write stream (append mode)*/
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  { flags: "a" }
);

/** request logger*/
app.use(morgan("dev"));

/** log all request to access.log */
app.use(morgan("combined", { stream: accessLogStream }));

/** swagger documentation */
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/** routes */
require("./routes/v1/index.route")(app);

const PORT = process.env.PORT || config.get("port");

const listen = app.listen(PORT, () => {
  console.log("url:", `    http://localhost:${PORT}`);
  console.log("doc:", `    http://localhost:${PORT}/api-docs`);
  console.log("server:", ` ${config.get("server")}`);
});

module.exports = app;
module.exports.port = listen.address().port;
