require("dotenv").config({ path: "./config.env" });
const express = require("express");
const app = express();
const apiRoutes = require("./routes/apiRoutes");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./config/db");
connectDB();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());
var port = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("home");
  console.log("home");
});
app.use("/api", apiRoutes.router);
app.listen(port, () => {
  console.log(`server running on ${port}`);
});
