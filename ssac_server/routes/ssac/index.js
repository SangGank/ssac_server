var express = require("express");
var router = express.Router();
const authController = require("../../controllers/ssac/auth/authController");

const boardRouter = require("./board/index");
router.use("/board", boardRouter);

router.post("/signup", authController.signup);
router.post("/signin", authController.signin);
module.exports = router;
