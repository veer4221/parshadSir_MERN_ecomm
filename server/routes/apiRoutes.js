const router = require("express").Router();
const addToCart = require("./addTocart.rout");
const ProdRoutes = require("./product.rout");

router.get("/", (req, res) => {
  res.send("api");
});
router.use("/product", ProdRoutes);
router.use("/addtocart", addToCart);
module.exports.router = router;
