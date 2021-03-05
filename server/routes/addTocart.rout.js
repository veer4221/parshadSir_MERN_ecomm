const router = require("express").Router();
var Controller = require("../controller/addTocart.controller");
// Bio routes

router.route("/cart/:id").post(Controller.add);
router.route("/cartall").get(Controller.view);

// router.route("/login").post(Controller.login).get(Controller.getAll);
//Export API routes

module.exports = router;
