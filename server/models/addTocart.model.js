var mongoose = require("mongoose");

var addToCart_Schema = mongoose.Schema({
  Prod_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "prod_sch",
    required: true,
  },
  quantity: Number,
  Update_Date: {
    type: Date,
  },
  Create_Date: {
    type: Date,
  },
  status: {
    type: Number,
    default: 1,
  },
});

var addToCart_sch = (module.exports = mongoose.model(
  "addToCart_sch",
  addToCart_Schema
));
module.exports.get = function (callback, limit) {
  addToCart_Schema.find(callback).limit(limit);
};
