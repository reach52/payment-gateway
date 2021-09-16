module.exports = (app) => {
  app.use("/", require("./module/module.route"));
  app.use("/xendit/invoice", require("./invoice/invoice.route"));
};
