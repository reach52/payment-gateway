const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: true,
    lowercase: true,
  },
});

module.exports = Test = mongoose.model("test", testSchema);
