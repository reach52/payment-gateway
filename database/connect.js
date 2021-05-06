const mongoose = require("mongoose");
const errorHandling = require("../lib/errorsHandling");
const mongoDBURL = require("config").get("mongoURL");
module.exports = async () => {
  if (mongoDBURL === "" || mongoDBURL === null || mongoDBURL === undefined)
    return console.log("host:", `   No Connection`);

  try {
    let conn = await mongoose.connect(mongoDBURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("host:", `   ${conn.connection.host}`);
  } catch (error) {
    console.error(
      "error",
      errorHandling({
        errors: [error],
        message: "Error Database",
        status: 500,
      })
    );
    process.exit(1);
  }
};
