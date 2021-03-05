var mongoose = require("mongoose");

var prod_Schema = mongoose.Schema({
  Prod_name: {
    type: String,
    required: true,
  },
  Prod_praice: {
    type: Number,
    required: true,
  },

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

var prod_Sch = (module.exports = mongoose.model("prod_sch", prod_Schema));
module.exports.get = function (callback, limit) {
  prod_Schema.find(callback).limit(limit);
};
