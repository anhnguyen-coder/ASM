var mongoose = require('mongoose');

var ToySchema = mongoose.Schema(
   {
      name : String,
      type : String,
      quantity : Number,
      price : Number,
      image : String,
      video: String,
      brand: String
   }
);

var ToyModel = mongoose.model("toy", ToySchema, "toy");

module.exports = ToyModel;