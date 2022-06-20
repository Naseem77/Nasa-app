const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const nasaSchema = new Schema({
  title: String,
  explanation: String,
  media_type: String,
  url: String,
});

const Nasa = mongoose.model("Nasa4", nasaSchema);
module.exports = Nasa;
