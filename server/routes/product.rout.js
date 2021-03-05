const router = require("express").Router();
var Controller = require("../controller/product.controller");
// Bio routes
router
  .route("/")
  .put(Controller.update)
  .post(Controller.add)
  .delete(Controller.delete1);
router.route("/prod/:id").get(Controller.view);
router.route("/list").get(Controller.all);

// router.route("/login").post(Controller.login).get(Controller.getAll);
//Export API routes

module.exports = router;
