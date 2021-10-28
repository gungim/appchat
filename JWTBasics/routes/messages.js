const { newMess, getMess } = require("../controllers/messages");

const router = require("express").Router();

router.route("/messages/:channelId").post(newMess);
router.route("/messages/:channelId?").get(getMess);

module.exports = router;
