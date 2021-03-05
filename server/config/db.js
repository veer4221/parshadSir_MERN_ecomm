const mongoose = require("mongoose");
const options = { useNewUrlParser: true, useUnifiedTopology: true };
const connectDB = async () => {
  mongoose.connect(process.env.MONGO_URL, options);
  mongoose.connection.once("open", () => console.log("Db connected"));
};

module.exports = connectDB;
