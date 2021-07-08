const mongoose = require("mongoose");
const errorHandling = require("../lib/errorsHandling");
const mongoDBURL = require("config").get("mongoURL");

module.exports = async () => {
  if (mongoDBURL === "" || mongoDBURL === null || mongoDBURL === undefined)
    return console.log("database:", `No Connection`);

  try {
    let conn = await mongoose.connect(mongoDBURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("database:", `${conn.connection.host}`);
  } catch (error) {
    mongoose.connection.close(() => {
      console.error(
        "error",
        errorHandling({
          errors: [error],
          message: "Mongoose connection disconnected",
          status: 500,
        })
      );
    });
  }
};
