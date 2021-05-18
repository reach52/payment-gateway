module.exports = (app) => {
  app.use("/", require("./module/module.route"));
};
