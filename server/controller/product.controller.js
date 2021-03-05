let Sch = require("../models/product.model");
// const bcrypt = require("bcrypt");
// const multer = require("multer");
// const path = require("path");

// const jwt = require("jsonwebtoken");
const { query } = require("express");
const { find } = require("../models/product.model");

module.exports = {
  add,
  delete1,
  view,
  update,
  all,
};

async function add(req, res) {
  var sch = new Sch();
  try {
    console.log("add");
    console.log(req.body);
    sch.Prod_name = req.body.Prod_name;
    let ve;
    sch.Prod_praice = req.body.Prod_praice;
    console.log(JSON.stringify(req.body));
    sch.Create_Date = Date.now();

    sch.save(function (err) {
      if (err) res.json(err);
      res.json({
        message: "New Record Added!",
        data: sch,
      });
    });
  } catch (e) {
    console.log(e);
  }
}
// View Record
async function view(req, res) {
  console.log("out side view");
  console.log(req.params.id);

  Sch.findById(req.params.id, (err, sch) => {
    console.log("out side view");

    if (err) res.send(err);
    res.json({
      message: "Record Details",
      data: sch,
    });
  });
}
async function update(req, res) {
  console.log(res.body, "res.body");
  Sch.findById(req.body.id, function (err, Record) {
    if (err) res.send(err);
    Record.Prod_name = req.body.Prod_name;
    Record.Prod_praice = req.body.Prod_praice;
    Record.Update_Date = Date.now();

    Record.save(function (err) {
      if (err) res.json(err);
      res.json({
        message: "Record Updated Successfully",
        data: Record,
      });
    });
  });
}
// Delete Record
async function all(req, res) {
  console.log("alll");
  try {
    const data = await Sch.find({ status: 1 });
    console.log(data);
    res.status(200).json({ data: data });
  } catch (error) {
    res.status(400).json({ status: false });
  }
}
async function delete1(req, res) {
  try {
    Sch.findById(req.body.id, function (err, Record) {
      if (err) res.send(err);

      Record.status = 0;

      Record.save(function (err) {
        if (err) res.json(err);
        res.json({
          message: "Record Delete Successfully",
          data: Record,
        });
      });
    });
  } catch (e) {
    console.log(e);
  }
}
