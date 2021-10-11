const { newMess, getMess } = require("../controllers/messages");

const router = require("express").Router();

router.route("/messages").post(newMess);
router.route("/messages/:conversationId?").get(getMess);

module.exports = router;
