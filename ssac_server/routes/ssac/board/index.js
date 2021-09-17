var express = require("express");
var router = express.Router();
const boardController = require("../../../controllers/ssac/board/boardController");

router.get("/", boardController.readBoard);
router.get("/:idx", boardController.choiceBoard);
router.post("/", boardController.uploadBoard);
router.delete("/:idx", boardController.deleteBoard);

module.exports = router;
