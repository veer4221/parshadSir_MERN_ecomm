let Sch = require("../models/addTocart.model");
let prod_Sch = require("../models/product.model");

module.exports = {
  add,
  delete1,
  view,
};
async function add(req, res) {
  console.log("add ma azay7u");
  console.log(req.params.id);
  try {
    let v = await Sch.findOne({
      //   USR_id: req.body.USR_id,
      Prod_id: req.params.id,
    });
    console.log(v);
    if (!v) {
      var sch = new Sch();

      console.log("add");
      //   sch.USR_id = req.body.USR_id;
      sch.Prod_id = req.params.id;
      sch.quantity = 1;
      // parseInt(req.body.quantity);

      // sch.password = await bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10), null);
      sch.Create_Date = Date.now();
      sch.save(function (err) {
        if (err) {
          res.send(err);
        }

        res.json({
          message: "New Record Added!",
          data: sch,
        });
      });
    } else {
      Sch.findById(v._id, function (err, Record) {
        if (err) res.send(err);
        // Record.USR_id = req.body.USR_id;
        Record.Prod_id = req.params.id;
        Record.quantity = 1;
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
  } catch (e) {
    console.log(e);
  }
}
//For creating new Record

// View Record
async function view(req, res) {
  let ordObj = await Sch.find().populate({
    path: "Prod_id",
    model: prod_Sch,
    select: "_id Prod_name Prod_praice ",
  });
  res.send(ordObj);
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
